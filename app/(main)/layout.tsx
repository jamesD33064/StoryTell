"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar/navbar";
import { cn } from "@/lib/utils";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  return (
    <>
      {pathName.includes("library/") ? (
        children
      ) : (
        <div className="flex h-screen flex-col">
          {children}
          <div
            className={cn(
              !pathName.includes("questionnaire") && "fixed",
              ` bottom-0 w-screen`
            )}
          >
            <Navbar />
          </div>
        </div>
      )}
    </>
  );
}
