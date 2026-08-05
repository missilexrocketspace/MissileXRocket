'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type AuthRole = 'Admin' | 'Researcher' | 'Student' | 'Guest';

type AuthUser = {
  email: string;
  name?: string | null;
  emailVerified: boolean;
};

type AuthContextValue = {
  user: AuthUser | null;
  role: AuthRole;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOutUser: () => Promise<void>;
  sendPasswordReset: (email: string) => Promise<void>;
  sendVerificationEmail: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const deriveRole = (email: string | null | undefined): AuthRole => {
  if (!email) return 'Guest';
  const address = email.toLowerCase();

  if (address.includes('admin') || address.includes('@missilex.in')) {
    return 'Admin';
  }

  if (address.includes('research') || address.includes('@lab.')) {
    return 'Researcher';
  }

  if (address.includes('student') || address.includes('@student.')) {
    return 'Student';
  }

  return 'Guest';
};

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [role, setRole] = useState<AuthRole>('Guest');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    const initializeAuth = async () => {
      console.log('[Auth] Initializing auth state listener...');
      const firebase = await import('@/lib/firebase');
      const auth = firebase.auth;

      if (!auth) {
        console.error('[Auth] firebase.auth is null — Firebase was not initialized. Check NEXT_PUBLIC_FIREBASE_* env vars.');
        setLoading(false);
        return;
      }

      const { onAuthStateChanged } = await import('firebase/auth');
      unsubscribe = onAuthStateChanged(
        auth,
        (firebaseUser) => {
          if (firebaseUser) {
            console.log('[Auth] onAuthStateChanged: signed in as', firebaseUser.email, '(uid:', firebaseUser.uid, ')');
            const authUser: AuthUser = {
              email: firebaseUser.email ?? 'unknown@missilex.space',
              name: firebaseUser.displayName,
              emailVerified: firebaseUser.emailVerified
            };

            setUser(authUser);
            setRole(deriveRole(firebaseUser.email));
          } else {
            console.log('[Auth] onAuthStateChanged: no user signed in.');
            setUser(null);
            setRole('Guest');
          }

          setLoading(false);
        },
        (error) => {
          console.error('[Auth] onAuthStateChanged listener error:', error);
          setLoading(false);
        }
      );
    };

    initializeAuth();

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    console.log('[Auth] signIn: starting email/password sign-in for', email);
    const firebase = await import('@/lib/firebase');
    const auth = firebase.auth;
    if (!auth) throw new Error('Firebase auth not initialized');
    const { signInWithEmailAndPassword } = await import('firebase/auth');
    const credential = await signInWithEmailAndPassword(auth, email, password);
    console.log('[Auth] signIn: success for uid', credential.user.uid);
  };

  const signInWithGoogle = async () => {
    console.log('[Auth] signInWithGoogle: starting...');

    const firebase = await import('@/lib/firebase');
    const auth = firebase.auth;

    if (!auth) {
      const error = new Error(
        'Firebase auth not initialized. One or more NEXT_PUBLIC_FIREBASE_* environment variables are missing or invalid.'
      );
      console.error('========== GOOGLE AUTH ERROR ==========');
      console.error('Error:', error);
      console.error('Code:', 'auth/not-initialized');
      console.error('Message:', error.message);
      console.error('Stack:', error.stack);
      console.error('======================================');
      throw error;
    }

    console.log('[Auth] signInWithGoogle: auth instance ready. authDomain =', auth.config.authDomain);
    console.log('[Auth] signInWithGoogle: current origin =', typeof window !== 'undefined' ? window.location.origin : 'n/a');

    const { signInWithPopup } = await import('firebase/auth');

    try {
      console.log('[Auth] signInWithGoogle: opening popup...');
      const result = await signInWithPopup(auth, firebase.googleAuthProvider);
      console.log('[Auth] signInWithGoogle: success for', result.user.email, '(uid:', result.user.uid, ')');
    } catch (error: any) {
      console.error('========== GOOGLE AUTH ERROR ==========');
      console.error('Error:', error);
      console.error('Code:', error.code);
      console.error('Message:', error.message);
      console.error('Stack:', error.stack);
      console.error('======================================');
      throw error;
    }
  };

  const signUp = async (email: string, password: string) => {
    const firebase = await import('@/lib/firebase');
    const auth = firebase.auth;
    if (!auth) throw new Error('Firebase auth not initialized');
    const { createUserWithEmailAndPassword, sendEmailVerification } = await import('firebase/auth');
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    if (credential.user) {
      await sendEmailVerification(credential.user);
    }
  };

  const signOutUser = async () => {
    const firebase = await import('@/lib/firebase');
    const auth = firebase.auth;
    if (!auth) throw new Error('Firebase auth not initialized');
    const { signOut } = await import('firebase/auth');
    await signOut(auth);
  };

  const sendPasswordReset = async (email: string) => {
    const firebase = await import('@/lib/firebase');
    const auth = firebase.auth;
    if (!auth) throw new Error('Firebase auth not initialized');
    const { sendPasswordResetEmail } = await import('firebase/auth');
    await sendPasswordResetEmail(auth, email);
  };

  const sendVerificationEmail = async () => {
    const firebase = await import('@/lib/firebase');
    const currentUser = firebase.auth?.currentUser;
    if (!currentUser) {
      throw new Error('Firebase auth not initialized');
    }
    const { sendEmailVerification } = await import('firebase/auth');
    await sendEmailVerification(currentUser);
  };

  const value = useMemo(
    () => ({ user, role, loading, signIn, signInWithGoogle, signUp, signOutUser, sendPasswordReset, sendVerificationEmail }),
    [user, role, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
