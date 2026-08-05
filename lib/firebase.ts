import { initializeApp, getApps, getApp, type FirebaseApp, type FirebaseOptions } from 'firebase/app';
import { getAuth, GoogleAuthProvider, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { getStorage, type FirebaseStorage } from 'firebase/storage';

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const REQUIRED_KEYS: (keyof FirebaseOptions)[] = ['apiKey', 'authDomain', 'projectId', 'appId'];

function getMissingConfigKeys(): (keyof FirebaseOptions)[] {
  return REQUIRED_KEYS.filter((key) => !firebaseConfig[key]);
}

export const isFirebaseConfigured = getMissingConfigKeys().length === 0;

// Only ever touch the Firebase SDK in the browser. Importing this module on
// the server (e.g. accidentally from a Server Component) must not crash the
// build, so app/auth/firestore/storage stay nullable outside the client.
let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let firestore: Firestore | null = null;
let storage: FirebaseStorage | null = null;

if (typeof window !== 'undefined') {
  const missingKeys = getMissingConfigKeys();

  if (missingKeys.length > 0) {
    console.error(
      '[Firebase] Missing required config values:',
      missingKeys.map((key) => `NEXT_PUBLIC_FIREBASE_${key.replace(/[A-Z]/g, (c) => `_${c}`).toUpperCase()}`)
    );
    console.error(
      '[Firebase] Add these to .env.local (see .env.local.example) and restart the dev server. ' +
        'Values come from Firebase Console -> Project Settings -> General -> Your apps -> SDK setup and configuration.'
    );
  } else {
    console.log('[Firebase] Config loaded. projectId=%s authDomain=%s', firebaseConfig.projectId, firebaseConfig.authDomain);
  }

  if (missingKeys.length === 0) {
    try {
      // Guard against re-initializing on Fast Refresh / repeated module evaluation.
      app = getApps().length ? getApp() : initializeApp(firebaseConfig);
      console.log('[Firebase] App initialized:', app.name, '(apps in memory:', getApps().length, ')');

      auth = getAuth(app);
      firestore = getFirestore(app);
      storage = getStorage(app);
      console.log('[Firebase] Auth, Firestore, and Storage instances ready.');
    } catch (error) {
      console.error('[Firebase] Initialization threw an error:', error);
    }
  }
}

export { app, auth, firestore, storage };

export const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: 'select_account' });
