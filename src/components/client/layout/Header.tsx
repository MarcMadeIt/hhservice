"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import Link from "next/link";

import { FaBars, FaFacebook, FaInstagram, FaXmark } from "react-icons/fa6";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const handleCloseDrawer = () => {
    const drawerCheckbox = document.getElementById(
      "my-drawer-4"
    ) as HTMLInputElement;
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      detailsRef.current &&
      !detailsRef.current.contains(event.target as Node)
    ) {
      detailsRef.current.open = false;
    }
  };

  useEffect(() => {
    handleCloseDrawer();
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [pathname]);

  return (
    <div className="navbar fixed top-0 bg-base-100 inset-x-0 z-50 max-w-[1536px] mx-auto p-2 md:p-4 flex justify-between items-center 2xl:rounded-b-lg">
      <div className="flex-1">
        <Link className="h-auto w-56 md:w-72 pl-1" href="/">
          <Image
            src="/hh-logo.png"
            alt="logo"
            width={500}
            height={113}
            priority
            rel="preload"
          />
        </Link>
      </div>
      <nav className="flex-none">
        <ul className="menu md:menu-lg menu-horizontal font-bold md:font-medium gap-3 md:gap-5 items-center hidden md:flex">
          <li>
            <details ref={detailsRef}>
              <summary>
                {" "}
                <Link href="/service">Services</Link>
              </summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <Link href="/service">Alle Services</Link>
                </li>
                <li>
                  <Link href="/service/graesslaaning">Græsslåning</Link>
                </li>
                <li>
                  <Link href="/service/haekkeklipning">Hækkeklipning</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/service/beskaering">Beskæring</Link>
                </li>
                <li>
                  <Link href="/service/brolaegning">Brolægning</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/service/bortskaffelse">Bortskaffelse</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/service/snerydning">Snerydning</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/service/ukrudtfjernelse">Udkrudtfjernelse</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/service/byggepladsservice">
                    Byggepladsservice
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/nyheder">Nyheder</Link>
          </li>
          <li>
            <Link href="/tilbud" className="btn btn-primary">
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
                  Services
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
                  <Link
                    href="https://www.instagram.com/hhaveservice/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="w-14 h-14 shadow-lg rounded-full flex items-center justify-center">
                      <FaInstagram className="text-3xl text-secondary" />
                    </div>
                    <span className="text-secondary font-bold">Instagram</span>
                  </Link>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
