import React from "react";

type BtnProps = {
  children: React.ReactNode;
  type?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
};

function Button({ children, type = "primary", className, onClick }: BtnProps) {
  return (
    <button
      className={`${
        type === "primary" ? "bg-purple" : "bg-black"
      } rounded-md px-4 py-2 text-center  text-white ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
