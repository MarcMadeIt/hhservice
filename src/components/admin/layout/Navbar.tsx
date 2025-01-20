"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGear, FaHouse, FaList } from "react-icons/fa6";
import { useAuthStore } from "@/lib/store/authStore";
import { readUserSession } from "@/lib/auth/authSessions";

const Navbar = () => {
  const pathname = usePathname();
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const session = await readUserSession();
      if (session) {
        setRole(session.role);
      } else {
        setRole(null);
      }
    })();
  }, []);

  return (
    <div className="flex flex-col items-center justify-between  bg-base-100 rounded-lg md:fixed sm:h-full md:py-0 md:pr-0">
      <div className="flex flex-col md:gap-7 h-full ">
        <div className="flex flex-col items-center justify-center h-24 w-full text-xl">
          <span className="font-bold">ADMIN</span>
          <span className="text-sm">HH SERVICE</span>
        </div>
        <div className="hidden sm:flex">
          <ul className="menu gap-2 rounded-box w-56">
            <li>
              <Link
                className={pathname === "/admin" ? "active" : ""}
                href="/admin"
              >
                Overblik
              </Link>
            </li>
            <li>
              <Link
                className={pathname === "/admin/content" ? "active" : ""}
                href="/admin/content"
              >
                Indhold
              </Link>
            </li>
            {role === "admin" && (
              <li>
                <Link
                  className={pathname === "/admin/settings" ? "active" : ""}
                  href="/admin/settings"
                >
                  Indstillinger
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="flex flex-col items-center sm:hidden fixed bottom-5 left-1/2 transform -translate-x-1/2 justify-center z-30 max-w-[230px] w-full">
          <ul className="menu menu-horizontal bg-base-200 rounded-box flex-wrap justify-center max-w-md w-full gap-4">
            <li>
              <Link
                href="/admin"
                className={pathname === "/admin" ? "active" : ""}
              >
                <FaHouse size={25} />
              </Link>
            </li>
            <li>
              <Link
                href="/admin/content"
                className={pathname === "/admin/content" ? "active" : ""}
              >
                <FaList size={25} />
              </Link>
            </li>
            {role === "admin" && (
              <li>
                <Link
                  href="/admin/settings"
                  className={pathname === "/admin/settings" ? "active" : ""}
                >
                  <FaGear size={25} />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <span className=" text-[9px] items-center justify-center p-4 hidden md:flex">
        © Crafted by Marccode
      </span>
    </div>
  );
};

export default Navbar;
