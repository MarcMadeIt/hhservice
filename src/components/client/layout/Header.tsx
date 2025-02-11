"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

import { FaBars, FaFacebook, FaInstagram, FaXmark } from "react-icons/fa6";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();

  const handleCloseDrawer = () => {
    const drawerCheckbox = document.getElementById(
      "my-drawer-4"
    ) as HTMLInputElement;
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };

  useEffect(() => {
    handleCloseDrawer();
  }, [pathname]);

  return (
    <div className="navbar fixed top-0 bg-base-100 inset-x-0 z-50">
      <div className="flex-1">
        <Link className="h-auto w-56 md:w-72 pl-1" href="/">
          <Image
            src="/HH-logoweb.png"
            alt="logo"
            width={500}
            height={113}
            priority
            rel="preload"
          />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu md:menu-lg menu-horizontal font-bold md:font-medium gap-3 md:gap-5 items-center hidden md:flex">
          <li>
            <Link href="/service">Service</Link>
          </li>
          <li>
            <Link href="/nyheder">Nyheder</Link>
          </li>
          <li>
            <Link
              href="/tilbud"
              className="btn btn-primary text-neutral-content m-2"
            >
              Få et tilbud
            </Link>
          </li>
        </ul>
        <div className="drawer drawer-end flex md:hidden">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn btn-ghost"
            >
              <FaBars size={30} />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu menu-lg bg-base-200 text-base-content min-h-full w-72 p-4 pt-20 gap-2 items-center relative">
              <li className="absolute top-1 right-1">
                <label htmlFor="my-drawer-4">
                  <FaXmark size={30} />
                </label>
              </li>
              <li className="text-2xl font-bold">
                <Link href="/" onClick={handleCloseDrawer}>
                  Forside
                </Link>
              </li>
              <li className="text-2xl font-bold">
                <Link href="/service" onClick={handleCloseDrawer}>
                  Service
                </Link>
              </li>
              <li className="text-2xl font-bold">
                <Link href="/nyheder" onClick={handleCloseDrawer}>
                  Nyheder
                </Link>
              </li>
              <li>
                <Link
                  href="/tilbud"
                  className="btn btn-primary text-neutral-content py-2 mt-4"
                  onClick={handleCloseDrawer}
                >
                  Få et tilbud
                </Link>
              </li>

              <div className="flex flex-col items-center gap-6 flex-1 justify-center w-full">
                <span className=" text-lg font-bold">Følg os på</span>
                <div className="flex gap-6">
                  <Link
                    href="https://www.facebook.com/share/18mtAGts1w/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="w-14 h-14 shadow-lg rounded-full flex items-center justify-center">
                      <FaFacebook className="text-3xl text-secondary" />
                    </div>
                    <span className="text-secondary font-bold">Facebook</span>
                  </Link>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 shadow-lg rounded-full flex items-center justify-center">
                      <FaInstagram className="text-3xl text-secondary" />
                    </div>
                    <span className="text-secondary font-bold">Instagram</span>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
