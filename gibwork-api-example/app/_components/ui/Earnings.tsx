"use client";
import usdcIcon from "@/public/icons/usdc.jpg";
import Image from "next/image";
import { formatCurrency } from "../../_utils/util";
import Button from "./button";
function Earnings() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center px-4">
      <span className="flex gap-1 items-center">
        <div className="relative w-8 h-8">
          <Image src={usdcIcon} alt="Usdc logo" fill />
        </div>
        <h2 className="font-bold text-2xl md:text-4xl">{formatCurrency(0)}</h2>
      </span>
      <p className="text-sm leading-3 font-light">total earned</p>
      <Button className="w-full font-semibold " type="secondary">
        CREATE
      </Button>
    </div>
  );
}

export default Earnings;
