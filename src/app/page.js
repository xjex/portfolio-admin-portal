//use login in main page
import React from "react";
import Link from "next/link";
import SideNav from "@/components/sidenav";

export default function Home() {
  return (
    <main className="my-24 text-center">
      <SideNav />

      <h1 className="text-2xl">What to do? ✨</h1>
      <div className="flex gap-2 justify-center mt-12">
        <Link
          className=" inline-block py-3 px-6 rounded-md font-bold text-black bg-white"
          href="/login"
        >
          Admin Login 🔐
        </Link>
        <Link
          className="text-black  inline-block py-3 px-6 rounded-md font-bold bg-gradient-to-tr from-teal-400 to-cyan-400"
          href="https://hellofromxavier.vercel.app/"
        >
          Portfolio 📄
        </Link>
      </div>
      <div className="flex gap-2 justify-center">
        <Link
          className="text-black my-2 inline-block py-3 px-6 rounded-md font-bold bg-gradient-to-tr from-orange-400 to-red-400"
          href="/movies-error"
        >
          Random
        </Link>
        <Link
          className="text-black my-2 inline-block py-3 px-6 rounded-md font-bold bg-slate-400"
          href="/movie-not-found"
        >
          Hello
        </Link>
      </div>
    </main>
  );
}
