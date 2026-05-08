"use client";

import dynamic from "next/dynamic";
import React from "react";

const PageHeader3D = dynamic(() => import("./PageHeader3D"), {
  ssr: false,
});

const DynamicPageHeader3D = () => {
  return <PageHeader3D />;
};

export default DynamicPageHeader3D;
