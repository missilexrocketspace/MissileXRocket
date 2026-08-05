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
      const firebase = await import('@/lib/firebase');
      if (!firebase.auth) {
        setLoading(false);
        return;
      }

      const { onAuthStateChanged } = await import('firebase/auth');
      unsubscribe = onAuthStateChanged(firebase.auth, (firebaseUser) => {
        if (firebaseUser) {
          const authUser: AuthUser = {
            email: firebaseUser.email ?? 'unknown@missilex.space',
            name: firebaseUser.displayName,
            emailVerified: firebaseUser.emailVerified
          };

          setUser(authUser);
          setRole(deriveRole(firebaseUser.email));
        } else {
          setUser(null);
          setRole('Guest');
        }

        setLoading(false);
      });
    };

    initializeAuth();

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    const firebase = await import('@/lib/firebase');
    if (!firebase.auth) throw new Error('Firebase auth not initialized');
    const { signInWithEmailAndPassword } = await import('firebase/auth');
    await signInWithEmailAndPassword(firebase.auth, email, password);
  };

  const signInWithGoogle = async () => {
    const firebase = await import('@/lib/firebase');
    if (!firebase.auth) throw new Error('Firebase auth not initialized');
    const { signInWithPopup } = await import('firebase/auth');
    await signInWithPopup(firebase.auth, firebase.googleAuthProvider);
  };

  const signUp = async (email: string, password: string) => {
    const firebase = await import('@/lib/firebase');
    if (!firebase.auth) throw new Error('Firebase auth not initialized');
    const { createUserWithEmailAndPassword, sendEmailVerification } = await import('firebase/auth');
    const credential = await createUserWithEmailAndPassword(firebase.auth, email, password);
    if (credential.user) {
      await sendEmailVerification(credential.user);
    }
  };

  const signOutUser = async () => {
    const firebase = await import('@/lib/firebase');
    if (!firebase.auth) throw new Error('Firebase auth not initialized');
    const { signOut } = await import('firebase/auth');
    await signOut(firebase.auth);
  };

  const sendPasswordReset = async (email: string) => {
    const firebase = await import('@/lib/firebase');
    if (!firebase.auth) throw new Error('Firebase auth not initialized');
    const { sendPasswordResetEmail } = await import('firebase/auth');
    await sendPasswordResetEmail(firebase.auth, email);
  };

  const sendVerificationEmail = async () => {
    const firebase = await import('@/lib/firebase');
    if (!firebase.auth || !firebase.auth.currentUser) {
      throw new Error('Firebase auth not initialized');
    }
    const { sendEmailVerification } = await import('firebase/auth');
    await sendEmailVerification(firebase.auth.currentUser);
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
