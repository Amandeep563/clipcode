/**
 * User interface representing the authenticated user
 */
export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Session interface representing the current authentication session
 */
export interface Session {
  user: User;
  expires: Date;
}

/**
 * Authentication state interface for components
 */
export interface AuthState {
  isLoggedIn: boolean;
  user?: User;
  isLoading: boolean;
}

/**
 * Login provider types
 */
export type LoginProvider = 'github' | 'google';

/**
 * Theme types
 */
export type Theme = 'light' | 'dark' | 'system';
