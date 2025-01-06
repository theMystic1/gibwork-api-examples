"use client";

import { useSearchParams } from "next/navigation";
import Button from "../ui/button";

import bannerImg from "@/public/icons/gibwork-bg.avif";
import Image from "next/image";

function Banner() {
  const searchParams = useSearchParams();

  const explore = searchParams.get("explore") || "";

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm relative z-0 overflow-hidden">
      <Image src={bannerImg} fill alt="Banner image" className="object-cover" />

      <div className="sm:bg-gradient-to-r bg-gradient-to-t from-black via-black/90 to-transparent sm:pt-0 pt-2">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight text-white">
            {explore === "hire"
              ? "Can't Find the Service You Need?"
              : "Don't Have Any Work to Do?"}
          </h3>
          <p className="text-sm text-white/80">
            {explore === "hire"
              ? "Create your own unique task for others to complete."
              : "Create a personalized service where others can submit requests directly to you."}
          </p>
        </div>
        <div className="p-6 pt-0 ">
          <Button>
            {explore === "hire" ? "Create Task" : "Create A Service"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
