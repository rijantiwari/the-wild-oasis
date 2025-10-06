import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fenyqnvlijtkulsljwzg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlbnlxbnZsaWp0a3Vsc2xqd3pnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzNTA4NDIsImV4cCI6MjA3MzkyNjg0Mn0.Tzq3dHHkUVWYPcJ40kwYQ_ml_xbtviqDFFLo0YhFrso";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
