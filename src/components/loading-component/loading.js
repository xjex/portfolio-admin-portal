"use client";
import React from "react";
import { Icon } from "@iconify/react";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Icon
        className="content-center"
        icon="svg-spinners:gooey-balls-1"
        width="100"
        height="100"
      />
    </div>
  );
};

export default Loading;
