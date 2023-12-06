import "react-native-url-polyfill/auto";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL ?? "",
  process.env.EXPO_PUBLIC_SUPABASE_KEY ?? "",
  {
    auth: {
      storage: AsyncStorage,
      detectSessionInUrl: false, // Prevents Supabase from evaluating window.location.href, breaking mobile,
      autoRefreshToken: true,
      persistSession: true,
    },
  }
);
