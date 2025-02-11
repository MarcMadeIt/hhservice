import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLeaf } from "react-icons/fa6";

const Larger = () => {
  return (
    <div className="w-full h-full flex flex-col gap-10 justify-center items-center xl:gap-28 py-4 xl:pt-20 relative">
      <div className="bg-secondary rounded-lg p-4 py-4 md:py-8 flex flex-col gap-5 md:gap-10 justify-center items-center relative max-w-2xl ">
        <div className="h-full w-full absolute opacity-15">
          <Image
            src="/larger.jpg"
            alt="Haveprojekt"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" text-neutral-content flex flex-col items-start gap-5 md:gap-10 p-2 py-4 md:p-8 z-10">
          <h3 className="text-2xl lg:text-3xl text-neutral-content font-bold ">
            Ønsker du hjælp til et større projekt?
          </h3>
          <p className=" text-md md:text-lg font-medium tracking-wide">
            Vi hjælper med større projekter, vi sørger for et flot og kompetent
            resultat. Vi kan bl.a. hjælpe med:
          </p>
          <ul className="list-none space-y-5">
            <li className="flex items-center gap-3">
              <FaLeaf className="text-2xl md:text-3xl" />

              <p className="text-sm md:text-md flex flex-col">
                <strong className="text-base md:text-lg">
                  Total haveforandring
                </strong>
                <span> Ny belægning, beplantning og fjernelse </span>
              </p>
            </li>
            <li className="flex items-center gap-3">
              <FaLeaf className="text-2xl md:text-3xl" />

              <p className="text-sm md:text-md flex flex-col">
                <strong className="text-base md:text-lg">
                  Brolægning & flisearbejde
                </strong>
                <span> Terrasse, gangstier og indkørsel </span>
              </p>
            </li>
            <li className="flex items-center gap-3">
              <FaLeaf className="text-2xl md:text-3xl" />

              <p className="text-sm md:text-md flex flex-col">
                <strong className="text-base md:text-lg">
                  Plantning af hæk
                </strong>
                <span> Skab en ny grøn afskærmning </span>
              </p>
            </li>
            <li className="flex items-center gap-3">
              <FaLeaf className="text-2xl md:text-3xl" />

              <p className="text-sm md:text-md flex flex-col">
                <strong className="text-base md:text-lg">
                  Fjernelse af træer og buske
                </strong>
                <span> Rydning for mere lys og plads </span>
              </p>
            </li>
          </ul>
          <p>
            Har du en specifik opgave? <br /> Kontakt os, så finder vi den
            bedste løsning sammen!
          </p>
          <div className="flex gap-5" id="priseeksempler">
            <Link href="/tilbud" className="btn font-semibold text-primary ">
              Få et tilbud
            </Link>
          </div>
        </div>
      </div>
      <Image
        src="/leaf1.png"
        alt="hero"
        width={200}
        height={200}
        className="w-9 md:w-9 lg:w-16 h-auto absolute rotate-45 top-40 right-5 lg:right-16 xl:right-40 hidden md:block"
      />
      <Image
        src="/leaf4.png"
        alt="hero"
        width={200}
        height={200}
        className="w-9 md:w-9 lg:w-16 h-auto absolute -rotate-45 bottom-40 left-5 lg:left-16 xl:left-40 hidden md:block"
      />
    </div>
  );
};

export default Larger;
