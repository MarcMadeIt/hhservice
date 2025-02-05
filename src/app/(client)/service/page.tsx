"use client";

import Locations from "@/components/client/home/Locations";
import { services } from "@/lib/client/servicesData";
import Image from "next/image";
import Link from "next/link";

const Service = () => {
  return (
    <div className="mt-[62px] md:mt-[95px] p-4 w-full h-full flex flex-col gap-10 justify-center items-center">
      <div className="max-w-lg py-16">
        <h1 className="mb-5 text-xl md:text-4xl lg:text-5xl font-bold text-center">
          Hvad tilbyder vi i <span className="text-primary"> haven? </span>
        </h1>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 lg:gap-20">
        {services.map((service) => (
          <Link
            key={service.key}
            href={`/service/${service.key}`}
            className="flex flex-col items-center gap-4 md:gap-6"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-xl flex items-center justify-center">
              <Image
                src={service.icon}
                alt={service.name}
                width={200}
                height={200}
                className={`w-[55px] md:w-[65px] h-auto`}
              />
            </div>
            <h3 className="text-lg md:text-2xl font-bold">{service.name}</h3>
          </Link>
        ))}
      </div>

      <h2>Priser</h2>
      <Locations />
    </div>
  );
};

export default Service;
