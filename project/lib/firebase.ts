import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBayTAMuS8N-edF9yoI9G0RoChp3bNjzlI",
  authDomain: "goodsinminutes.firebaseapp.com",
  projectId: "goodsinminutes",
  storageBucket: "goodsinminutes.firebasestorage.app",
  messagingSenderId: "701827935261",
  appId: "1:701827935261:web:da6a4a52514065661daaf4"
};

// Initialize Firebase with error handling
let app;
try {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
} catch (error) {
  console.warn('Firebase initialization failed. Using demo mode.', error);
  // Create a minimal app instance for demo purposes
  app = null;
}

// Initialize Firebase services with error handling
export const auth = app ? getAuth(app) : null;
export const db = app ? getFirestore(app) : null;
export const storage = app ? getStorage(app) : null;

// Configure Google Auth Provider
export const googleProvider = auth ? (() => {
  const provider = new GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  return provider;
})() : null;

export default app;