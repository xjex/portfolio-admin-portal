"use client";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
);
// console.log(
//   process.env.NEXT_REACT_PROJECT_URL,
//   "process.env.NEXT_REACT_PROJECT_URL"
// );
export default supabase;
