"use client";
import React, { useState } from "react";
import Link from "next/link";
import supabase from "@/components/lib/supabaseClient";
const page = () => {
  const [email, setEmail] = useState("");

  const checkIfUserExist = async () => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "https://www.google.com",
    });

    console.log(data, error);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    checkIfUserExist();
    console.log(email);
  };

  return (
    <div className="my-24 text-center">
      <div className="text-2xl m-10">Forget Password🔑</div>

      <div className="flex justify-center">
        <div className="w-full max-w-xs">
          <form
            onSubmit={handleLogin}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label className="block  text-sm font-bold mb-2">Email</label>

              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex flex-col items-center justify-between">
              <button className="btn btn-wide" type="submit">
                Forgot Password?
              </button>
            </div>

            <hr className="my-4" />

            <Link href="/login">
              <button className=" btn-ghost  btn-wide">Login</button>
            </Link>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default page;
