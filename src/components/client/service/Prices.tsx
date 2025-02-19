import Image from "next/image";
import Link from "next/link";
import React from "react";

const Prices = () => {
  const services = [
    {
      title: "Græsslåning – fast aftale",
      price: "Fra 249 kr. pr. gang",
      description:
        "Perfekt til dig, der ønsker en velplejet græsplæne uden besvær. Prisen på 249 kr. gælder for en lille have op til 300 m². For større arealer som sommerhushaver (300-1000 m²) er prisen fra 299 kr. Vi slår græsset efter aftale, f.eks. hver 14. dag i sæsonen.",
    },
    {
      title: "Hækkeklipning – fast aftale",
      price: "Fra 995 kr. pr. gang",
      description:
        "Prisen starter ved 995 kr. inkl. moms for en lille rækkehushæk. De fleste villahække koster typisk mellem 2.000-4.000 kr. inkl. moms. Vi sørger for et skarpt resultat, og oprydning samt bortskaffelse af haveaffaldet er altid inkluderet i prisen.",
    },

    {
      title: "Fliserens & Behandling",
      price: "Fra 28 kr./m²",
      description:
        "Giv dine fliser nyt liv med professionel fliserens. Inkluderer effektiv fjernelse af snavs og belægninger. Mulighed for algebehandling og imprægnering fra 10 kr./m², så dine fliser forbliver flotte i længere tid.",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-10 justify-center items-center relative">
      <div className="bg-base-200 p-4 py-8 w-full h-full flex flex-col justify-center items-center gap-5 md:gap-16">
        <h3 className="text-2xl lg:text-4xl text-neutral font-bold">
          Priseksempler
        </h3>
        <div className="w-full flex justify-center items-center gap-5 md:gap-10">
          <div className="max-w-2xl h-full text-neutral ">
            <ul className="space-y-6">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="p-4 rounded-lg shadow-md flex flex-col gap-4 bg-base-100"
                >
                  <h4 className="text-base md:text-xl font-semibold">
                    {service.title}
                  </h4>
                  <p className="text-primary font-bold">{service.price}</p>
                  <p className="text-sm md:text-base">{service.description}</p>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center justify-center gap-6 mt-4">
              <p className=" text-center text-xs md:text-sm text-gray-600 md:max-w-lg">
                Alle priser er <strong>vejledende eksempler</strong> og{" "}
                <strong>inkluderer moms</strong>. Den endelige pris afhænger af
                opgavens omfang og specifikke forhold.
              </p>

              <p className=" text-center font-semibold">
                Har du en specifik opgave? &nbsp;
                <Link href="/tilbud" className="text-green-500" id="erhverv">
                  Kontakt os
                </Link>{" "}
                for et uforpligtende tilbud!
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/leaf2.png"
          alt="hero"
          width={200}
          height={200}
          className="w-6 md:w-9 lg:w-16 h-auto absolute rotate-45 top-0 right-5 lg:top-40 lg:right-16 xl:right-40"
        />
        <Image
          src="/leaf3.png"
          alt="hero"
          width={200}
          height={200}
          className="w-6 md:w-9 lg:w-16 h-auto absolute -rotate-45 bottom-0 left-5 lg:bottom-40 lg:left-16 xl:left-40 "
        />
      </div>
    </div>
  );
};

export default Prices;
