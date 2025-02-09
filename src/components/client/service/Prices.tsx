import Image from "next/image";
import Link from "next/link";
import React from "react";

const Prices = () => {
  const services = [
    {
      title: "Hækkeklipning & Græsslåning",
      price: "Fra 1.200 kr.",
      description:
        "Inkluderer klipning af hæk op til 2 meter samt græsslåning af en almindelig villahave (ca. 300-500 m²). Oprydning og bortkørsel af affald kan tilkøbes.",
    },
    {
      title: "Græsslåning – fast aftale",
      price: "Fra 500 kr. pr. gang",
      description:
        "Perfekt til dig, der ønsker en velplejet græsplæne uden besvær. Vi slår græsset efter aftale, f.eks. hver 14. dag i sæsonen. Prisen gælder for en almindelig græsplæne op til 500 m².",
    },
    {
      title: "Hækkeklipning – stor hæk",
      price: "Fra 1.800 kr.",
      description:
        "For større hække eller hække over 2 meter i højden. Vi sørger for et skarpt resultat.",
    },
    {
      title: "Anlægning af ny græsplæne",
      price: "Fra 5.000 kr.",
      description:
        "Inkluderer planering af jorden, såning af græs samt vejledning til pleje af plænen. Prisen gælder op til 200 m² – kontakt os for større arealer.",
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
            <p className="mt-6 text-center  font-semibold">
              Har du en specifik opgave? &nbsp;
              <Link href="/tilbud" className="text-green-400" id="erhverv">
                Kontakt os
              </Link>{" "}
              for et uforpligtende tilbud!
            </p>
          </div>
        </div>
        <Image
          src="/leaf1.png"
          alt="hero"
          width={200}
          height={200}
          className=" w-6 md:w-9 lg:w-16 h-auto absolute rotate-45 top-0 right-5 lg:top-40 lg:right-16 xl:right-40"
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
