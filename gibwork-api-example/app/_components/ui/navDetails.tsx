import { ReactNode } from "react";

type NavDatailProp = {
  comp?: "btn" | "span";
  children: ReactNode;
  onClick?: () => void;
};

function NavDetails({ comp = "span", children, onClick }: NavDatailProp) {
  if (comp === "btn")
    return (
      <button
        className="justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-transparent hover:bg-accent hover:text-accent-foreground px-4 py-2 text-sm h-7 md:h-9 flex items-center !p-1 md:!px-4 md:gap-2 cursor-pointer"
        onClick={onClick}
      >
        {children}
      </button>
    );
  return (
    <span className="justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-transparent hover:bg-accent hover:text-accent-foreground px-4 py-2 text-sm h-7 md:h-9 flex items-center !p-1 md:!px-4 md:gap-2">
      {children}
    </span>
  );
}

export default NavDetails;
