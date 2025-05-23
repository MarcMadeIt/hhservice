"use client";

import { getImageVersion } from "@/lib/server/getImageVersion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCut } from "react-icons/fa";
import { FaSeedling, FaSprayCan } from "react-icons/fa6";
import { MdGrass } from "react-icons/md";
import { PiWallFill } from "react-icons/pi";

const About = () => {
  const [imageVersion, setImageVersion] = useState(1);
  const [clientTimestamp, setClientTimestamp] = useState("");

  useEffect(() => {
    getImageVersion("about").then(setImageVersion);

    setClientTimestamp(`&t=${Date.now()}`);
  }, []);

  return (
    <article className="w-full h-full p-2 sm:p-3 2xl:p-0 relative">
      <div className="bg-secondary py-8 w-full h-full rounded-lg flex flex-col lg:flex-row justify-between gap-6">
        <div className="flex-1 p-10 hidden lg:flex">
          <div className="relative w-full lg:h-full rounded-lg overflow-hidden">
            <Image
              src={`/about.webp?v=${imageVersion}${clientTimestamp}`}
              alt="Beskrivelse af billedet"
              fill
              className="absolute object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className="lg:flex-1 flex flex-col justify-center gap-8 md:gap-12 p-5 md:p-10 text-neutral-content">
          <div className="flex flex-col gap-6">
            <h3 className="text-lg md:text-3xl font-bold">
              Om Os – Halsnæs Haveservice
            </h3>
            <p className="text-[15px] md:text-base font-medium  tracking-wide">
              Vi er Halsnæs Haveservice, og vi har hjulpet kunder med at holde
              deres haver flotte siden April 2024. Det hele startede som en
              lille sidebeskæftigelse, hvor vi hjalp et par lokale med at
              vedligeholde deres haver. Men med tiden voksede efterspørgslen, og
              det, der begyndte som en hobby, er i dag blevet til en
              professionel haveservice.
            </p>
            <p className="text-[15px] md:text-base font-medium  tracking-wide">
              Vi hjælper både private og virksomheder i Halsnæs og Nordsjælland
              med alt fra græsslåning, hækkeklipning og brolægning til
              Ukrudtsbekæmpelse og vedligeholdelse. For os handler det ikke kun
              om at passe en have – vi ønsker at skabe uderum, som vores kunder
              virkelig kan nyde.
            </p>
            <p className="text-[15px] md:text-base font-medium tracking-wide">
              Trænger haven til lidt ekstra opmærksomhed? Vi er klar til at
              hjælpe dig godt i mål med dit næste haveprojekt.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex-1 flex flex-col gap-3 items-start">
              <ul className="flex flex-col gap-5 list-none font-medium ">
                <li className="flex items-center gap-2 text-base sm:text-lg tracking-wide">
                  <MdGrass size={21} /> Græsslåning & plænepleje
                </li>
                <li className="flex items-center gap-2 text-base sm:text-lg tracking-wide">
                  <FaCut size={18} /> Hækkeklipning & beskæring
                </li>
                <li className="flex items-center gap-2 text-base sm:text-lg tracking-wide">
                  <PiWallFill size={20} /> Brolægning & bedafgrænsning
                </li>
                <li className="flex items-center gap-2 text-base sm:text-lg tracking-wide">
                  <FaSeedling size={18} /> Ukrudtsbekæmpelse & lugning
                </li>
                <li className="flex items-center gap-2 text-base sm:text-lg tracking-wide">
                  <FaSprayCan size={18} /> Fliserens & vedligeholdelse
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -top-20 left-5 md:-top-24 md:left-16 p-4 w-28 md:w-32 h-auto">
        <Image src="/grass-about.png" alt="græs" width={200} height={200} />
      </div>
    </article>
  );
};

export default About;
