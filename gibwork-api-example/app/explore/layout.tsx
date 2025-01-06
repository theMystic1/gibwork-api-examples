import { ReactNode } from "react";
import ExploreNav from "../_components/explore/nav";

function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <ExploreNav />

      {children}
    </div>
  );
}

export default layout;
