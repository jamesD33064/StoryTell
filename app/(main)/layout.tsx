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
          {/* <div className="flex h-screen w-screen flex-col">
            <div className="flex flex-grow items-center justify-center"> */}
              {children}
            {/* </div>
            <nav className="tol-0 sticky flex h-16 w-full items-center justify-center"> */}
              <Navbar />
            {/* </nav>
          </div> */}
        </>
      )}
    </div>
  );
}
