'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { 
  User, 
  onAuthStateChanged, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut
} from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

// Mock user for demo mode when Firebase is not configured
const mockUser = {
  uid: 'demo-user',
  email: 'demo@example.com',
  displayName: 'Demo User',
  photoURL: null
} as User;

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [demoMode, setDemoMode] = useState(false);
  const router = useRouter();

  // Set authentication token in cookies
  const setAuthToken = (token: string) => {
    document.cookie = `auth-token=${token}; path=/; max-age=3600; secure; samesite=strict`;
  };

  // Remove authentication token from cookies
  const removeAuthToken = () => {
    document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  };

  // Check if user is authenticated
  const isAuthenticated = !!user;

  useEffect(() => {
    if (!auth) {
      // Firebase not configured, use demo mode
      setDemoMode(true);
      setUser(mockUser);
      setLoading(false);
      // Set demo token
      setAuthToken('demo-token');
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in
        setUser(user);
        // Get the ID token and set it in cookies
        try {
          const token = await user.getIdToken();
          setAuthToken(token);
        } catch (error) {
          console.error('Error getting ID token:', error);
        }
      } else {
        // User is signed out
        setUser(null);
        removeAuthToken();
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signInWithEmail = async (email: string, password: string) => {
    if (!auth) {
      // Demo mode - simulate successful login
      setUser(mockUser);
      setAuthToken('demo-token');
      router.push('/dashboard');
      return;
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const token = await result.user.getIdToken();
      setAuthToken(token);
      router.push('/dashboard');
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    }
  };

  const signUpWithEmail = async (email: string, password: string) => {
    if (!auth) {
      // Demo mode - simulate successful signup
      setUser(mockUser);
      setAuthToken('demo-token');
      router.push('/dashboard');
      return;
    }
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const token = await result.user.getIdToken();
      setAuthToken(token);
      router.push('/dashboard');
    } catch (error) {
      console.error('Sign up error:', error);
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    if (!auth || !googleProvider) {
      // Demo mode - simulate successful Google login
      setUser(mockUser);
      setAuthToken('demo-token');
      router.push('/dashboard');
      return;
    }
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const token = await result.user.getIdToken();
      setAuthToken(token);
      router.push('/dashboard');
    } catch (error) {
      console.error('Google sign in error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      if (auth) {
        await signOut(auth);
      }
      // Clear user state and token regardless of auth method
      setUser(null);
      removeAuthToken();
      
      // Force navigation to home page
      window.location.href = '/';
    } catch (error) {
      console.error('Logout error:', error);
      // Even if there's an error, clear local state
      setUser(null);
      removeAuthToken();
      window.location.href = '/';
    }
  };

  const value = {
    user,
    loading,
    signInWithEmail,
    signUpWithEmail,
    signInWithGoogle,
    logout,
    isAuthenticated
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};