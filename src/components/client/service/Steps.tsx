"use client";

import React from "react";
import { FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import {
  FaAngleDown,
  FaAngleRight,
  FaClipboardList,
  FaSquarePhone,
} from "react-icons/fa6";

const Steps = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-16 max-w-7xl">
      <h3 className="text-xl lg:text-3xl font-bold">
        Sådan får du vores haveservice
      </h3>
      <ul className=" flex gap-5 lg:gap-3 items-center justify-center xl:flex-row flex-col">
        <li className="w-80 lg:w-full h-48 lg:h-60 bg-secondary text-neutral-content p-3 rounded-md text-center items-center flex flex-col gap-3 py-8 justify-start">
          <FaSquarePhone size={50} className="" />

          <h2 className="text-lg 2xl:text-xl font-semibold">1. Kontakt os</h2>
          <p className="text-sm 2xl:text-base">
            Ring til os, bliv ringet op eller bestil et uforpligtende tilbud på
            græsslåning.
          </p>
        </li>

        <div>
          <FaAngleRight className="hidden xl:flex text-secondary text-6xl" />
          <FaAngleDown className="flex xl:hidden text-secondary text-3xl md:text-4xl" />
        </div>

        <li className="w-80 lg:w-full h-48 lg:h-60 bg-secondary text-neutral-content p-3 rounded-md text-center items-center flex flex-col gap-3 py-8">
          <FaClipboardList size={50} className="" />
          <h2 className="text-lg 2xl:text-xl font-semibold">
            2. Få et gratis tilbud
          </h2>
          <p className="text-sm 2xl:text-base">
            Vi vurderer opgaven og sender et uforpligtende tilbud.
          </p>
        </li>
        <div>
          <FaAngleRight className="hidden xl:flex text-secondary text-6xl" />
          <FaAngleDown className="flex xl:hidden text-secondary text-3xl md:text-4xl" />
        </div>
        <li className="w-80 lg:w-full h-48 lg:h-60  bg-secondary text-neutral-content p-3 rounded-md text-center items-center flex flex-col gap-3 py-8">
          <FaCalendarAlt size={50} className="" />
          <h2 className="text-lg 2xl:text-xl font-semibold">3. Aftal en tid</h2>
          <p className="text-sm 2xl:text-base">
            Når du accepterer tilbuddet, aftaler vi en dag for arbejdet.
          </p>
        </li>

        <div>
          <FaAngleRight className="hidden xl:flex text-secondary text-6xl" />
          <FaAngleDown className="flex xl:hidden text-secondary text-3xl md:text-4xl" />
        </div>
        <li className="w-80  lg:w-full h-48 lg:h-60 bg-base-100 text-neutral ring-4 ring-primary p-6 rounded-md items-center text-center flex flex-col gap-3 py-8">
          <FaCheckCircle size={50} className="text-primary" />
          <h2 className="text-lg 2xl:text-xl font-semibold">
            4. Vi udfører arbejdet
          </h2>
          <p className="text-sm 2xl:text-base">
            Vi udfører arbejdet grundigt, så din have står flot og velplejet. 🌿
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Steps;
