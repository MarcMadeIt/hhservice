"use client";
import Footer from "@/components/client/layout/Footer";
import Header from "@/components/client/layout/Header";
import { FaPhone, FaAngleUp } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <Script
          async
          defer
          src="/umami.js"
          data-website-id="92b19d71-7695-4a2a-bf87-2ab08ec7cf04"
        />
      </Head>
      <div className="sm:h-lvh h-dvh max-w-screen-2xl mx-auto 2xl:px-3">
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
        <article className="sticky bottom-0 w-full px-2 block md:hidden z-50">
          <div className="p-4 bg-secondary text-neutral-content rounded-tl-lg rounded-tr-lg  ">
            <Link
              href="tel:+4526181201"
              className="flex  gap-2 items-center justify-center"
            >
              Ring til os <FaPhone /> +45 26 18 12 01
            </Link>
          </div>
        </article>
        {showScroll && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-16 right-4 p-3 bg-secondary text-white rounded-full shadow-lg z-50 block md:hidden"
          >
            <FaAngleUp />
          </button>
        )}
      </div>
    </>
  );
}
