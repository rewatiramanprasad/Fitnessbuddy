import { createClient } from "@supabase/supabase-js";

const SupabaseAuth=()=>{
 const supabaseUrl = "https://zyqpgpdsddwpfzfasjtc.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5cXBncGRzZGR3cGZ6ZmFzanRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQzNjk2MDksImV4cCI6MjAwOTk0NTYwOX0.mpZR4-LLwwKKR_ONf_yNZU1dkWy9P_4VI3Cin8CMYQo";
  const supabase = createClient(supabaseUrl, supabaseKey);

  return supabase

}

export default SupabaseAuth;