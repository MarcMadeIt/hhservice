"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCalendar, FaPhone } from "react-icons/fa6";
import { getImageVersion } from "@/lib/server/getImageVersion";

const Hero = () => {
  const [imageVersion, setImageVersion] = useState(1);

  useEffect(() => {
    getImageVersion("hero").then(setImageVersion);
  }, []);

  return (
    <div className="relative min-h-[250px] md:min-h-[600px] mt-[65px] flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full 2xl:rounded-b-lg overflow-hidden">
        <Image
          src={`/hero.webp?v=${imageVersion}`}
          alt="Hero baggrundsbillede"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={60}
        />
        <div className="absolute inset-0 bg-gray-500 md:bg-gray-700 bg-opacity-30 md:bg-opacity-20"></div>
      </div>
      <div className="relative z-10 text-neutral-content text-center max-w-xl lg:max-w-2xl flex flex-col justify-center items-center mx-auto md:mt-20">
        <h1 className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold">
          Professionel Haveservice
        </h1>
        <p className="mb-5 text-lg font-medium md:text-2xl lg:text-3xl drop-shadow-lg">
          Din have, vores passion <br />
        </p>
        <Link
          href="/tilbud"
          className="btn btn-primary md:text-lg hidden md:flex"
        >
          Få et tilbud
        </Link>

        <div className="gap-16 md:gap-32 mt-5 hidden md:flex">
          <div className="flex flex-col items-center justify-center gap-2 md:gap-3 w-32 h-28 md:w-48 md:h-40 rounded-lg  p-3">
            <FaCalendar className="text-2xl md:text-4xl text-primary filter drop-shadow-[0_0_3px_rgba(150,150,150,0.7)]" />

            <div className="flex flex-col items-center gap-0">
              <h3 className="md:text-xl font-bold">Alle dage</h3>
              <h3 className="md:text-xl font-bold">07 - 18</h3>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 md:gap-3 w-32 h-28 md:w-48 md:h-40 rounded-lg  p-3">
            <FaPhone className="text-2xl md:text-4xl text-primary filter drop-shadow-[0_0_4px_rgba(150,150,150,0.7)]" />
            <div className="flex flex-col items-center gap-0">
              <h3 className="md:text-xl font-bold">Ring til os</h3>
              <a className="md:text-xl font-bold" href="tel:+4526181201">
                +45 26 18 12 01
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
