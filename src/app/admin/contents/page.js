import React from "react";
import supabase from "@/components/lib/supabaseClient";
import Blog from "./blog";
const page = () => {
  return (
    <div>
      <Blog />
    </div>
  );
};

export default page;
