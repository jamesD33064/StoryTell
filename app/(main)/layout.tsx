"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar/navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  return (
    <div>
      {pathName.includes("library/") ? (
        children
      ) : (
        <>
          {children}
          <Navbar />
        </>
      )}
    </div>
  );
}
