"use client";
import { React, useEffect, useState } from "react";
import supabase from "../../components/lib/supabaseClient";

import SideNav from "@/components/sidenav";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Loading from "@/components/loading-component/loading";

import isUser from "@/components/hook/isUser";
const page = () => {
  const [isLogged, setLoginStatus] = useState(null);
  const { isProfileActive } = isUser();
  console.log(isProfileActive);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(error.message);
    } else {
      window.location.href = "/";
    }
    console.log(error);
  };

  return (
    <main className="my-24 text-center">
      {isProfileActive ? (
        <div>
          <SideNav />
          <button className="btn btn-primary">
            {" "}
            <Link href="/admin/write-blog"> Write Blog </Link>
          </button>
          <div className="h-full">
            <button
              onClick={signOut}
              className="bg-red-500  hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign Out
            </button>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default page;
