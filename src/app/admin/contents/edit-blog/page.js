"use client";
import React from "react";
import EditMCE from "./EditMCE";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "@/components/loading-component/loading";
const page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/admin/contents/");
  }, []);

  return (
    <div>
      <Loading />
    </div>
  );
};

export default page;
