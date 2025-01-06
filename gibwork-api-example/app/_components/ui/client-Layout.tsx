"use client";

import { ReactNode } from "react";
import Nav from "./nav";
import SideBar from "./side-bar";
import { usePathname } from "next/navigation";
import ExploreNav from "../explore/nav";

function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <main className="  ">
      <Nav />
      <div className="py-6 pr-6 mt-6 grid  grid-cols-[300px,1fr]">
        <div className="relative">
          <SideBar />
        </div>
        <div className="relative   w-full lg:max-w-6xl xl:max-w-[1540px] lg:mx-auto p-3 sm:p-5 mb-32">
          {pathname === "/" ? <ExploreNav /> : null}
          {children}
        </div>
      </div>
    </main>
  );
}

export default ClientLayout;
