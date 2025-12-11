import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

// Create a single supabase client for interacting with your database
const key = process.env.SUPABASE_KEY;
const url = process.env.SUPABASE_URL;
if (!key || !url) {
  console.log("key or url missing");
}
export const supabase = createClient(url, key);
