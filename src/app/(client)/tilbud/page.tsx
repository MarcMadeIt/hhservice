import OfferForm from "@/components/client/forms/OfferForm";
import Locations from "@/components/client/home/Locations";
import Image from "next/image";

import React from "react";
import { FaPhone } from "react-icons/fa6";

const Offer = () => {
  return (
    <div className="mt-[62px] md:mt-[95px] p-2 sm:p-3 w-full h-full flex flex-col gap-10 md:gap-20 xl:gap-28 justify-center items-center py-16 md:py-20 relative">
      <div className="max-w-lg md:max-w-xl">
        <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          Få et uforpligtende <span className="text-primary"> tilbud </span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-10 md:gap-16">
        <div className="flex-initial md:w-3/5 flex justify-center ">
          <OfferForm />
        </div>
        <div className="flex-1 md:w-2/5 relative">
          <div className="bg-base-100 rounded-lg shadow-md p-8 md:p-10 flex flex-col gap-5 max-w-md">
            <h3 className="text-xl font-bold">Haster det?</h3>
            <p className="font-medium">
              Du velkommen til at tage kontakt til os med det samme.
            </p>
            <p>Vi vil forsøge at give dig et prisestimat med det samme</p>
            <p className="font-medium">Ring til os på</p>
            <a
              href="tel:+4526181201"
              className="flex items-center gap-2 text-primary text-xl font-bold"
            >
              <FaPhone /> +45 26 18 12 01
            </a>
          </div>
          <Image
            src="/leaf2.png"
            alt="hero"
            width={200}
            height={200}
            className="w-9 md:w-9 lg:w-14 h-auto absolute rotate-45 bottom-10 right-32  hidden lg:block"
          />
        </div>
      </div>
      <Locations />
    </div>
  );
};

export default Offer;
