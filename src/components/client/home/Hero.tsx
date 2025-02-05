"use client";
import Link from "next/link";
import React from "react";
import { FaCalendar, FaPhone } from "react-icons/fa6";

const Hero = () => {
  return (
    <div
      className="hero min-h-[200px] md:min-h-[550px] mt-[60px]"
      style={{
        backgroundImage: "url(/test.jpeg)",
        backgroundPosition: "50% 58%",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay bg-gray-700 bg-opacity-20"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-xl lg:max-w-2xl text-center flex flex-col justify-center items-center mx-auto md:mt-20">
          <h1 className="mb-5 text-xl md:text-4xl lg:text-5xl font-bold">
            Professionel Haveservice
          </h1>
          <p className="mb-5 text-sm font-semibold md:text-2xl drop-shadow-lg">
            Din have, vores passion – haveservice i Halsnæs <br />
          </p>
          <Link
            href="/tilbud"
            className="btn btn-primary  md:text-lg hidden md:flex"
          >
            Få et tilbud
          </Link>
          <div className="gap-16 md:gap-20 mt-5 hidden md:flex">
            <div className="flex flex-col shadow-xl items-center justify-center gap-2 md:gap-3 w-32 h-28 md:w-48 md:h-40 rounded-lg">
              <FaCalendar className="text-2xl md:text-4xl text-primary" />
              <div className="flex flex-col items-center gap-0">
                <h3 className="md:text-xl font-bold">Alle dage</h3>
                <h3 className="md:text-xl font-bold">07 - 17</h3>
              </div>
            </div>
            <div className="flex flex-col shadow-xl items-center justify-center gap-2 md:gap-3 w-32 h-28 md:w-48 md:h-40 rounded-lg">
              <FaPhone className="text-2xl md:text-4xl  text-primary" />
              <div className="flex flex-col items-center gap-0">
                <h3 className="md:text-xl font-bold">Ring til os</h3>
                <a className="md:text-xl font-bold" href="+4526181201">
                  +45 26 18 12 01
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
