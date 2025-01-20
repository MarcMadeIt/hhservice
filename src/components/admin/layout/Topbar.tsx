"use client";
import { signOut } from "@/lib/server/actions";
import { usePathname } from "next/navigation";
import React from "react";
import { FaEllipsis } from "react-icons/fa6";

interface PageTitleMapping {
  [key: string]: string;
}

const Topbar = () => {
  const pathname = usePathname();

  const pageTitles: PageTitleMapping = {
    "/admin": "Overblik",
    "/admin/content": "Indhold",
    "/admin/settings": "Indstillinger",
  };

  const currentTitle = pageTitles[pathname] || "Unknown Page";

  return (
    <div className="navbar bg-base-100 shadow-sm w-full rounded-md pl-5">
      <div className="flex-1">
        <a className="text-lg">{currentTitle}</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost m-1">
            {" "}
            <FaEllipsis />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <button onClick={signOut}>Log ud</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
