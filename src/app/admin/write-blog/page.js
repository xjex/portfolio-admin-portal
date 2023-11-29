"use client";
import React from "react";
import MCE from "./admincomponents/TinymceEditor";
import isUser from "@/components/hook/isUser";
import Loading from "@/components/loading-component/loading";
const page = () => {
  const { isProfileActive } = isUser();
  return (
    <>
      {!isProfileActive ? (
        <main className="my-24 text-center">
          <Loading />
        </main>
      ) : (
        <MCE />
      )}
    </>
  );
};

export default page;
