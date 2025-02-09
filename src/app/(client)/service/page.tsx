"use client";

import Locations from "@/components/client/home/Locations";
import Business from "@/components/client/service/Business";
import Larger from "@/components/client/service/Larger";
import Prices from "@/components/client/service/Prices";
import { services } from "@/lib/client/servicesData";
import Image from "next/image";
import Link from "next/link";

const Service = () => {
  const largeIcons = ["beskaering", "haekkeklipning", "snerydning"];

  return (
    <div className="mt-[62px] md:mt-[95px] p-2 sm:p-3 w-full h-full flex flex-col gap-10 md:gap-20 xl:gap-32 justify-center items-center py-16 md:py-20 relative">
      <div className="max-w-lg md:max-w-xl">
        <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          Hvad tilbyder vi i <span className="text-primary"> haven? </span>
        </h1>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-16 lg:gap-20">
        {services.map((service) => (
          <Link
            key={service.key}
            href={`/service/${service.key}`}
            className="flex flex-col justify-center items-center gap-3 md:gap-6"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 xl:w-28 xl:h-28 rounded-full shadow-md bg-base-100 flex items-center justify-center">
              <Image
                src={service.icon}
                alt={service.name}
                width={200}
                height={200}
                className={`w-10 sm:w-[55px] xl:w-[60px] h-auto ${
                  largeIcons.includes(service.key)
                    ? "w-8 sm:w-[40px] xl:w-[45px]"
                    : ""
                }`}
              />
            </div>
            <h3 className="text-base sm:text-[17px] xl:text-[22px] font-semibold md:font-bold">
              {service.name}
            </h3>
          </Link>
        ))}
      </div>
      <Larger />
      <Prices />
      <Business />
      <Locations />
    </div>
  );
};

export default Service;
