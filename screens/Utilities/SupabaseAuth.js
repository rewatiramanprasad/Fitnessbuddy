import { createClient } from "@supabase/supabase-js";
import { supabaseUrl, supabaseKey } from "../../env/credentials.json";
// const SupabaseAuth = () => {
// const supabaseUrl = "https://zyqpgpdsddwpfzfasjtc.supabase.co";
// const supabaseKey =
console.log(supabaseUrl);
const supabase = createClient(supabaseUrl, supabaseKey);
console.log(supabase);
// return supabase;
// };

export default supabase;
