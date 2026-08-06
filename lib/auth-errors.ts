export type AuthDiagnosis = {
  code: string;
  rawMessage: string;
  friendlyMessage: string;
  hint: string;
};

const CODE_DIAGNOSES: Record<string, { friendlyMessage: string; hint: string }> = {
  'auth/unauthorized-domain': {
    friendlyMessage: 'This domain is not authorized for Google sign-in.',
    hint: 'Firebase Console -> Authentication -> Settings -> Authorized domains. Add the exact host you are running on (e.g. localhost, or your Vercel domain).'
  },
  'auth/configuration-not-found': {
    friendlyMessage: 'Google sign-in is not configured for this Firebase project.',
    hint: 'Firebase Console -> Authentication -> Sign-in method -> enable the Google provider.'
  },
  'auth/operation-not-allowed': {
    friendlyMessage: 'Google sign-in is disabled for this Firebase project.',
    hint: 'Firebase Console -> Authentication -> Sign-in method -> enable the Google provider.'
  },
  'auth/internal-error': {
    friendlyMessage: 'Firebase returned an internal error during sign-in.',
    hint: 'Usually caused by a malformed request (bad API key, mismatched OAuth client, or a misconfigured Google Cloud OAuth consent screen). Check the raw error payload logged above.'
  },
  'auth/popup-blocked': {
    friendlyMessage: 'Your browser blocked the Google sign-in popup.',
    hint: 'Allow popups for this site, or switch to signInWithRedirect for browsers/extensions that always block popups.'
  },
  'auth/popup-closed-by-user': {
    friendlyMessage: 'The Google sign-in popup was closed before completing sign-in.',
    hint: 'Expected if the user closes the popup. If this fires immediately/every time, check the browser console for a COOP (Cross-Origin-Opener-Policy) warning that can cause Firebase to lose the popup handle right after it opens.'
  },
  'auth/cancelled-popup-request': {
    friendlyMessage: 'Another sign-in popup was already open.',
    hint: 'Multiple signInWithPopup calls fired concurrently (e.g. double-click). Disable the button while loading is true.'
  },
  'auth/network-request-failed': {
    friendlyMessage: 'Network error while contacting Firebase Authentication.',
    hint: 'Check internet connectivity, DNS, ad-blockers, or corporate firewalls blocking identitytoolkit.googleapis.com / securetoken.googleapis.com.'
  },
  'auth/invalid-api-key': {
    friendlyMessage: 'The Firebase API key is invalid.',
    hint: 'NEXT_PUBLIC_FIREBASE_API_KEY does not match a valid Firebase Web App key. Re-copy it from Firebase Console -> Project Settings -> General -> Your apps.'
  },
  'auth/api-key-not-valid.-please-pass-a-valid-api-key.': {
    friendlyMessage: 'The Firebase API key is invalid.',
    hint: 'NEXT_PUBLIC_FIREBASE_API_KEY does not match a valid Firebase Web App key. Re-copy it from Firebase Console -> Project Settings -> General -> Your apps.'
  },
  'auth/user-disabled': {
    friendlyMessage: 'This account has been disabled.',
    hint: 'Firebase Console -> Authentication -> Users -> re-enable the account.'
  },
  'auth/account-exists-with-different-credential': {
    friendlyMessage: 'An account already exists with this email using a different sign-in method.',
    hint: 'The user previously signed up with email/password (or another provider) using the same email address.'
  }
};

export function diagnoseAuthError(error: unknown): AuthDiagnosis {
  const err = error as { code?: string; message?: string } | null;
  const code = err?.code ?? 'auth/unknown-error';
  const rawMessage = err?.message ?? String(error);

  if (code === 'auth/unknown-error' && rawMessage.includes('Firebase auth not initialized')) {
    return {
      code: 'auth/not-initialized',
      rawMessage,
      friendlyMessage: 'Firebase is not configured on this deployment.',
      hint: 'One or more NEXT_PUBLIC_FIREBASE_* environment variables are missing. Check .env.local (local) or your hosting provider\'s env var settings (production), then redeploy/restart.'
    };
  }

  const known = CODE_DIAGNOSES[code];

  return {
    code,
    rawMessage,
    friendlyMessage: known?.friendlyMessage ?? `Google sign-in failed (${code}).`,
    hint: known?.hint ?? 'See the console log above for the full error object.'
  };
}
