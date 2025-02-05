import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCalendar, FaPhone } from "react-icons/fa6";

const Services = () => {
  return (
    <article className="p-4 py-16 h-full flex flex-col justify-center items-center gap-10 md:gap-16 ">
      <h2 className="text-2xl md:text-4xl font-bold">Vores Services</h2>
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-20">
        <div className="flex justify-center gap-10 md:gap-16 lg:gap-20">
          <Link
            href="/service/graesslaaning"
            className="flex flex-col items-center gap-4 md:gap-6"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-xl flex items-center justify-center">
              <Image
                src="/lawn.png"
                alt="Græsslåning"
                width={200}
                height={200}
                className="w-[55px] md:w-[70px] h-auto"
              />
            </div>
            <h3 className="text-lg md:text-2xl font-bold">Græsslåning</h3>
          </Link>
          <Link
            href="/service/haekklipning"
            className="flex flex-col items-center gap-4 md:gap-6"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-xl flex items-center justify-center">
              <Image
                src="/hedge.png"
                alt="Hækkeklipning"
                width={200}
                height={200}
                className="w-[45px] md:w-[60px] h-auto"
              />
            </div>
            <h3 className="text-lg md:text-2xl font-bold">Hækkeklipning</h3>
          </Link>
        </div>
        <div className="flex justify-center gap-10 md:gap-16 lg:gap-20">
          <Link
            href="/service/brolaegning"
            className="flex flex-col items-center gap-4 md:gap-6"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-xl flex items-center justify-center">
              <Image
                src="/tile.png"
                alt="Brolægning"
                width={200}
                height={200}
                className="w-[47px] md:w-[70px] h-auto"
              />
            </div>
            <h3 className="text-lg md:text-2xl font-bold">Brolægning</h3>
          </Link>
          <Link
            href="/service/bortskaffelse"
            className="flex flex-col items-center gap-4 md:gap-6"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-xl flex items-center justify-center">
              <Image
                src="/reno.png"
                alt="Bortskaffelse"
                width={200}
                height={200}
                className="w-[47px] md:w-[70px] h-auto"
              />
            </div>
            <h3 className="text-lg md:text-2xl font-bold">Bortskaffelse</h3>
          </Link>
        </div>
      </div>
      <Link href="/service" className="btn md:btn-lg btn-primary">
        Se alle services
      </Link>
    </article>
  );
};

export default Services;
