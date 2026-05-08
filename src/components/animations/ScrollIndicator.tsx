"use client";

import React from "react";
import Link from "next/link";

interface ScrollIndicatorProps {
  targetId: string;
  className?: string;
}

export default function ScrollIndicator({ targetId, className = "" }: ScrollIndicatorProps) {
  return (
    <div className={`scroll-indicator-wrapper ${className}`}>
      <Link href={`#${targetId}`} className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
        </div>
      </Link>
    </div>
  );
}
