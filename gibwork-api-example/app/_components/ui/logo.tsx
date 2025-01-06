import Image from "next/image";

import logo from "@/public/icons/logo.avif";
function Logo() {
  return (
    <span className="flex gap-2 items-center">
      <div className="relative w-8 h-8 rounded-s-md">
        <Image src={logo} fill alt="Logo icon" className="rounded-md" />
      </div>

      <h1 className="text-2xl overflow-hidden md:text-4xl font-bold tracking-tight">
        gibwork
      </h1>
    </span>
  );
}

export default Logo;
