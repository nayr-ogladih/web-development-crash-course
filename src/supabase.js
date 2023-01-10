import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xosmubhghtehtswwsjda.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhvc211YmhnaHRlaHRzd3dzamRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMxMzU1NTMsImV4cCI6MTk4ODcxMTU1M30.rERpWpgi6t76xWdCQKxW6tdcZZNFO-q5mHifi9ugMoI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
