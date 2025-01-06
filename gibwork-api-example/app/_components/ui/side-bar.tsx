"use client";

import { CgProfile } from "react-icons/cg";
import Earnings from "./Earnings";
import { CiSearch } from "react-icons/ci";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SideBar() {
  const pathname = usePathname();

  // console.log(pathname);
  const tab = [
    {
      label: "Profile",
      path: "/profile",
      icon: (
        <CgProfile
          color={pathname === "/profile" ? "#000" : "#71717a"}
          size={24}
        />
      ),
    },
    {
      label: "Explore",
      path: "/",
      icon: (
        <CiSearch
          color={
            pathname === "/" || pathname.includes("explore")
              ? "#000"
              : "#71717a"
          }
          size={24}
        />
      ),
    },
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: (
        <RiDashboardHorizontalLine
          color={pathname === "/dashboard" ? "#000" : "#71717a"}
          size={24}
        />
      ),
    },
  ];
  return (
    <aside className=" hidden min-h-screen border-r border-stone-200 dark:border-zinc-800 lg:block min-w-[17rem] pt-16 fixed left-0 ">
      <Earnings />

      <div className="flex flex-col pl-2 gap-2 mt-8">
        {tab.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`group rounded-lg text-[1rem] font-medium flex items-center px-3 py-3 hover:bg-accent hover:text-accent-foreground duration-300 ease-in-out transparent text-muted-foreground gap-2 ${
              pathname === item.path || item.path.includes("explore")
                ? "text-black bg-[#f4f4f5]"
                : "text-grey"
            } px-4 py-4 w-[80%] rounded-sm `}
            // onClick={() => {
            //   // handleTabClick(item.path);
            // }}
          >
            {item.icon}
            <p className="font-semibold">{item.label}</p>
          </Link>
        ))}
      </div>
    </aside>
  );
}

export default SideBar;
