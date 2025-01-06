"use client";

import Logo from "./logo";
import NavDetails from "./navDetails";
import { BsWallet } from "react-icons/bs";

import logo from "@/public/icons/18247.jpg";
import Image from "next/image";
import { useState } from "react";
import Button from "./button";

function Nav() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleAuth() {
    setIsAuthenticated((auth) => !auth);
    // handle authentication logic here
  }
  return (
    <nav className="hidden h-14 left-0 top-0 right-0 fixed lg:flex bg-white z-50 border-b border-b-[#f1f4f7]">
      <div className="flex w-full items-center justify-between px-4 mx-auto">
        <Logo />

        {isAuthenticated ? (
          <NavDet handleClick={handleAuth} />
        ) : (
          <Button type="secondary" onClick={handleAuth}>
            Login
          </Button>
        )}
      </div>
    </nav>
  );
}

export default Nav;

function NavDet({ handleClick }: { handleClick: () => void }) {
  return (
    <div className="flex items-center gap-3">
      <NavDetails>
        <span>Priority: </span>
        <span className="font-semibold">Ultra</span>
      </NavDetails>
      <NavDetails onClick={handleClick} comp="btn">
        <BsWallet />
        <p className="font-semibold">Connect</p>
      </NavDetails>

      <div className="relative w-8 h-8">
        <Image src={logo} alt="image" fill className="rounded-full" />
      </div>
    </div>
  );
}
