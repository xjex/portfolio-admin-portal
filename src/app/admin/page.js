"use client";
import { React, useEffect, useState } from "react";
import supabase from "../../components/lib/supabaseClient";

import SideNav from "@/components/sidenav";

import { Icon } from "@iconify/react";
import Link from "next/link";
const page = () => {
  const [isLogged, setLoginStatus] = useState(null);

  useEffect(() => {
    checkUser();
  }, []);

  //create a use effect if user is authenticated
  const checkUser = async () => {
    const user = supabase.auth.getUser().then((data) => {
      const getData = data.data;

      if (getData.user === null) {
        window.location.href = "/login";
        setLoginStatus(null);
      } else {
        setLoginStatus(true);
      }
    });
  };

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
      {isLogged ? (
        <div>
          <SideNav />
          <Link href="/admin/write-blog"> Write Blog </Link>
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
        <div className="flex justify-center items-center  ">
          <Icon
            className="content-center"
            icon="svg-spinners:gooey-balls-1"
            width="100"
            height="100"
          />
        </div>
      )}
    </main>
  );
};

export default page;
