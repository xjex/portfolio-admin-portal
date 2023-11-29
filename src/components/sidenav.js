"use client";

import React from "react";

import Link from "next/link";

import useNavigation from "@/components/hook/usenavigation";
import { Icon } from "@iconify/react";

import supabase from "@/components/lib/supabaseClient";
const SideNav = () => {
  const {
    isHomeActive,
    isExploreActive,
    isNotificationsActive,
    isMessagesActive,
    isProfileActive,
  } = useNavigation();

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
  };

  return (
    <div className="flex-col space-y-4 items-center py-8 hidden sm:flex border-r border-zinc-700 h-full  w-[120px] md:w-[250px] md:items-start fixed">
      <Link
        href="/admin"
        className="flex flex-row space-x-1 items-center hover:bg-white/10 p-4 rounded-full duration-200"
      >
        Logo
      </Link>

      <Link
        href="/admin"
        className="flex flex-row space-x-4 items-center px-4 py-3 rounded-full duration-200 hover:bg-white/10 relative"
      >
        {isHomeActive ? (
          <Icon icon="mingcute:home-5-fill" width="38" height="38" />
        ) : (
          <Icon icon="mingcute:home-5-line" width="38" height="38" />
        )}
        <span
          className={`text-2xl pt-2 hidden md:flex ${
            isHomeActive ? "font-bold" : ""
          }`}
        >
          Home
        </span>
        {/* <span className='h-2 w-2 rounded-full bg-sky-500 absolute top-3 right-[16px] md:right-[100px]'></span> */}
      </Link>
      <Link
        href="/explore"
        className="flex flex-row space-x-4 items-center px-4 py-3 rounded-full duration-200 hover:bg-white/10"
      >
        {isExploreActive ? (
          <Icon
            icon="uil:search"
            width="38"
            height="38"
            className="stroke-current stroke-5"
          />
        ) : (
          <Icon icon="uil:search" width="38" height="38" />
        )}
        <span
          className={`text-2xl pt-2 hidden md:flex ${
            isExploreActive ? "font-bold" : ""
          }`}
        >
          Explore
        </span>
      </Link>
      <Link
        href="/notifications"
        className="flex flex-row space-x-4 items-center px-4 py-3 rounded-full duration-200 hover:bg-white/10"
      >
        {isNotificationsActive ? (
          <Icon icon="mingcute:notification-fill" width="38" height="38" />
        ) : (
          <Icon icon="mingcute:notification-line" width="38" height="38" />
        )}
        <span
          className={`text-2xl pt-2 hidden md:flex ${
            isNotificationsActive ? "font-bold" : ""
          }`}
        >
          Notifications
        </span>
      </Link>
      <Link
        href="/messages"
        className="flex flex-row space-x-4 items-center px-4 py-3 rounded-full duration-200 hover:bg-white/10"
      >
        {isMessagesActive ? (
          <Icon icon="ic:baseline-email" width="38" height="38" />
        ) : (
          <Icon icon="ic:outline-email" width="38" height="38" />
        )}
        <span
          className={`text-2xl pt-2 hidden md:flex ${
            isMessagesActive ? "font-bold" : ""
          }`}
        >
          Messages
        </span>
      </Link>

      {isProfileActive ? (
        <Link
          href="/"
          onClick={signOut}
          className="flex flex-row space-x-4 items-center px-4 py-3 rounded-full duration-200 hover:bg-white/10"
        >
          {isMessagesActive ? (
            <Icon icon="fluent:sign-out-20-filled" width="38" height="38" />
          ) : (
            <Icon icon="fluent:sign-out-20-regular" width="38" height="38" />
          )}
          <span
            className={`text-2xl pt-2 hidden md:flex ${
              isMessagesActive ? "font-bold" : ""
            }`}
          >
            Sign Out
          </span>
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SideNav;
