"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type User = {
  id: number;
  name?: string;
  email?: string;
  role: "user" | "admin";
} | null;

type AuthContextType = {
  user: User;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch("https://finafidutsav.com/mplayer/api/user.php", {
        credentials: "include",
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        setUser(null);
        router.push("/login"); // Redirect if authentication fails
      }
    } catch (error) {
      console.error("Error checking auth:", error);
      setUser(null);
      router.push("/login"); // Redirect on error
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
           }
      const response = await fetch("https://finafidutsav.com/mplayer/api/login.php", {
        method: "post",
        headers:headersList,
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setUser({
          id: data.user_id,
          email,            
          role: data.role,
        });
        router.push("/"); // Redirect to home on successful login
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await fetch("https://finafidutsav.com/mplayer/api/logout.php", {
        method: "POST",
        credentials: "include",
      });
      setUser(null);
      router.push("/login"); // Redirect to login after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return <AuthContext.Provider value={{ user, login, logout, isLoading }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
