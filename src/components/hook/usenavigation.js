"use client";

import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import supabase from "@/components/lib/supabaseClient";
const useNavigation = () => {
  const pathname = usePathname();
  const [isHomeActive, setIsHomeActive] = useState(false);
  const [isExploreActive, setIsExploreActive] = useState(false);
  const [isNotificationsActive, setIsNotificationsActive] = useState(false);
  const [isMessagesActive, setIsMessagesActive] = useState(false);
  const [isProfileActive, setIsProfileActive] = useState(false);

  const checkUser = async () => {
    const user = supabase.auth.getUser().then((data) => {
      const getData = data.data;

      if (getData.user === null) {
        setIsProfileActive(false);
      } else {
        setIsProfileActive(true);
      }
    });
  };

  useEffect(() => {
    setIsHomeActive(false);
    setIsExploreActive(false);
    setIsNotificationsActive(false);
    setIsMessagesActive(false);

    switch (pathname) {
      case "/admin":
        setIsHomeActive(true);
        break;
      case "/explore":
        setIsExploreActive(true);
        break;
      case "/notifications":
        setIsNotificationsActive(true);
        break;
      case "/messages":
        setIsMessagesActive(true);
        break;
      default:
        // Handle any other cases here
        break;
    }
    checkUser();
  }, [pathname]);

  return {
    isHomeActive,
    isExploreActive,
    isNotificationsActive,
    isMessagesActive,
    isProfileActive,
  };
};

export default useNavigation;
