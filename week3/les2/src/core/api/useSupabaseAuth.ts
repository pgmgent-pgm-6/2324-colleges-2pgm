import { useEffect, useState } from "react";
import { AuthEvent, supabase } from "./supabase";
import { Session } from "@supabase/supabase-js";
import { getCurrentSession } from "@core/modules/auth/api";

const useSupabaseAuth = () => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [auth, setAuth] = useState<Session | null>(null);

  // 1. Is user ingelogd?
  useEffect(() => {
    const checkAuth = async () => {
      const session = await getCurrentSession();
      setAuth(session);
      setIsInitialized(true);
    };
    checkAuth();
  }, []);

  // 2. Watchen -> is user nog steeds ingelogd?
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      switch (event) {
        case AuthEvent.SIGNED_IN:
        case AuthEvent.USER_UPDATED:
        case AuthEvent.TOKEN_REFRESHED:
          setAuth(session);
          break;

        case AuthEvent.SIGNED_OUT:
        case AuthEvent.USER_DELETED:
          setAuth(null);
          break;
      }
    });
  }, []);

  const isLoggedIn = isInitialized && !!auth;

  return {
    isLoggedIn,
    isInitialized,
    auth,
    user: auth?.user,
  };
};

export default useSupabaseAuth;
