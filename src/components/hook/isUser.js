"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import supabase from "@/components/lib/supabaseClient";
const isUser = () => {
  const pathname = usePathname();
  const [isProfileActive, setIsProfileActive] = useState(false);
  const [User, setUser] = useState("");

  const checkUser = async () => {
    const user = supabase.auth.getUser().then((data) => {
      const getData = data.data;
      if (getData.user !== null) {
        setIsProfileActive(true);
        setUser(getData);
      } else {
        setIsProfileActive(false);
        window.location.href = "/login";
      }
    });
  };
  useEffect(() => {
    switch (pathname) {
      case "/admin":
        checkUser();
        break;
      case "/admin/write-blog":
        checkUser();
        break;
      case "/notifications":
        break;
      case "/messages":
        break;
      default:
        // Handle any other cases here
        break;
    }
  }, [pathname]);

  return {
    isProfileActive,
    setIsProfileActive,
  };
};

export default isUser;
