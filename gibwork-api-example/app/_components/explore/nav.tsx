"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function ExploreNav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const param = searchParams.get("explore") || "";
  const [paramValue, setParamValue] = useState("");

  const tab = [
    {
      label: "Looking for work",
      path: "work",
    },
    {
      label: "Looking To Hire",
      path: "hire",
    },
  ];

  useEffect(() => {
    const initParam = searchParams.get("explore");

    if (initParam) setParamValue(param?.toString());

    // When the URL changes, update the searchParams
  }, [param, searchParams]);

  function handleTabChange(param: string) {
    const params = new URLSearchParams();

    setParamValue(param);
    params.set("explore", param);
    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }

  return (
    <nav className="flex items-center pl-2 gap-2 border-b border-b-grey100 ">
      {tab.map((item, index) => (
        <button
          key={index}
          // href={item.path}
          className={`group rounded-lg text-[1rem] font-medium flex items-center px-3 py-3 hover:bg-accent hover:text-accent-foreground duration-300 ease-in-out transparent text-muted-foreground gap-2 ${
            paramValue === item.path ? "text-black " : "text-grey"
          } px-4 py-4 rounded-sm relative`}
          onClick={() => {
            handleTabChange(item.path);
          }}
        >
          <p className="font-semibold">{item.label}</p>
          {paramValue === item.path ? (
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-black" />
          ) : null}
        </button>
      ))}
    </nav>
  );
}

export default ExploreNav;
