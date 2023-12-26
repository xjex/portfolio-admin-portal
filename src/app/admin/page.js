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
  const [File, setFile] = useState({});
  const { isProfileActive } = isUser();
  console.log(isProfileActive);

  const changeCV = async (e) => {
    const file = e.target.files[0];
    const fileExt = file.name.split(".").pop();
    const fileName = `Xavier-joseph-manaloto.${fileExt}`;
    const filePath = `public/${fileName}`;
    setFile(file);
    console.log(file);
  };

  const uploadCV = async () => {
    const CVFile = File;
    const fileExt = CVFile.name.split(".").pop();
    const fileName = `Xavier-Joseph-Manaloto.${fileExt}`;
    const filePath = `public/${fileName}`;
    const { data, error } = await supabase.storage
      .from("portfolio")
      .update(filePath, CVFile);
    console.log(data, error);
  };

  return (
    <main className="my-24 text-center">
      {isProfileActive ? (
        <div>
          <SideNav />

          <div className="flex justify-center">
            <div className="w-full max-w-xs">
              {/* Profilepicture */}
              {/* <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block  text-sm font-bold mb-2">
                    Profile Picture
                  </label>

                  <input
                    type="file"
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div className="flex flex-col items-center justify-between">
                  <button className="btn btn-wide" type="submit">
                    Change Profile Picture
                  </button>
                </div>
              </form> */}

              {/* CV */}
              <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block  text-sm font-bold mb-2">CV</label>

                  <input
                    type="file"
                    onChange={changeCV}
                    accept=".pdf"
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div className="flex flex-col items-center justify-between">
                  <button
                    className="btn btn-wide"
                    type="submit"
                    onClick={uploadCV}
                  >
                    Change CV
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-primary">
            {" "}
            <Link href="/admin/write-blog"> Write Blog </Link>
          </button>
        </div>
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default page;
