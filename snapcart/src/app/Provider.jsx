"use client";

import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";

export function Provider({ children }) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch("/api/auth/session");
        const data = await response.json();
        console.log("Session data from API:", data);
        setSession(data);
      } catch (error) {
        console.error("Session fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
}