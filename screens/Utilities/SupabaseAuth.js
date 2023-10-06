import 'react-native-url-polyfill/auto'
import { createClient } from "@supabase/supabase-js";
import { supabaseUrl, supabaseKey } from "../../env/credentials.json";

const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
    //   storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: false,
      detectSessionInUrl: false,
    },
  });

export default supabase;
