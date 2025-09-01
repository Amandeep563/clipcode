"use client";

import { useEffect, useState } from "react";
import { User } from "@/types/auth";

/**
 * Custom hook for managing authentication state
 * Provides user data and authentication status
 */
export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === "undefined") return;

    // Check for existing session in localStorage or cookies
    const checkAuth = async () => {
      try {
        // You can implement session checking logic here
        // For now, we'll rely on the server-side session
        setIsLoading(false);
      } catch (error) {
        console.error("Auth check failed:", error);
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const logout = async () => {
    try {
      // Clear local state
      setUser(null);
      
      // Call logout API
      const response = await fetch("/api/auth/signout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        // Redirect to home page
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Logout failed:", error);
      // Fallback: redirect anyway
      window.location.href = "/";
    }
  };

  return {
    user,
    isLoggedIn: !!user,
    isLoading,
    logout,
  };
}
