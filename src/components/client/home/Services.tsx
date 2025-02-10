import Image from "next/image";
import Link from "next/link";
import React from "react";

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
            <div className="w-20 h-20 sm:w-24  sm:h-24 lg:w-28 lg:h-28 rounded-full shadow-md bg-base-100 flex items-center justify-center">
              <Image
                src="/lawn.png"
                alt="Græsslåning"
                width={200}
                height={200}
                className="w-10 md:w-[55px] lg:w-[60] h-auto"
              />
            </div>
            <h3 className="text-[17px] lg:text-[22px] font-semibold md:font-bold">
              Græsslåning
            </h3>
          </Link>
          <Link
            href="/service/haekkeklipning"
            className="flex flex-col items-center gap-4 md:gap-6"
          >
            <div className=" w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full shadow-md bg-base-100 flex items-center justify-center">
              <Image
                src="/hedge.png"
                alt="Hækkeklipning"
                width={200}
                height={200}
                className="w-8 sm:w-[45px] lg:w-[50px] h-auto"
              />
            </div>
            <h3 className="text-[17px] lg:text-[22px] font-semibold md:font-bold ">
              Hækkeklipning
            </h3>
          </Link>
        </div>
        <div className="flex justify-center gap-10 md:gap-16 lg:gap-20">
          <Link
            href="/service/brolaegning"
            className="flex flex-col items-center gap-4 md:gap-6"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full shadow-md bg-base-100 flex items-center justify-center">
              <Image
                src="/tile.png"
                alt="Brolægning"
                width={200}
                height={200}
                className="w-9 sm:w-[47px] lg:w-[60px] h-auto"
              />
            </div>
            <h3 className="text-[17px] lg:text-[22px] font-semibold md:font-bold">
              Brolægning
            </h3>
          </Link>
          <Link
            href="/service/bortskaffelse"
            className="flex flex-col items-center gap-4 md:gap-6"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full shadow-md bg-base-100 flex items-center justify-center">
              <Image
                src="/reno.png"
                alt="Bortskaffelse"
                width={200}
                height={200}
                className="w-9 sm:w-[47px] lg:w-[60px] h-auto"
              />
            </div>
            <h3 className="text-[17px] lg:text-[22px] font-semibold md:font-bold">
              Bortskaffelse
            </h3>
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
