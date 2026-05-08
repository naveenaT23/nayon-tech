"use client";

import dynamic from "next/dynamic";
import React from "react";

const Hero3D = dynamic(() => import("./Hero3D"), {
  ssr: false,
});

const DynamicHero3D = () => {
  return <Hero3D />;
};

export default DynamicHero3D;
