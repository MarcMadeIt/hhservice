import Image from "next/image";
import React from "react";

const Locations = () => {
  return (
    <div className="w-full h-[260px] md:h-[400px] p-2 sm:p-3">
      <h2 className="hidden">Vi tilbyder haveservice i disse byer</h2>

      <div className="flex flex-col items-center justify-center h-full gap-10 text-center">
        <h3 className="max-w-sm sm:max-w-md md:max-w-lg font-semibold text-[11px] sm:text-base">
          Vi dækker hele Nordsjælland, alt fra Frederiksværk, Gilleleje, Hornbæk
          til Kulhuse og Jyllinge med mange flere endnu.
        </h3>
        <ul className="flex flex-wrap justify-center gap-4 max-w-sm sm:max-w-xl md:max-w-3xl">
          <li className=" w-24 sm:w-32 h-10 md:w-44 md:h-14 ring-2 ring-neutral rounded-lg md:rounded-xl flex flex-col items-center p-1 md:p-0 relative">
            <h3 className="font-semibold sm:font-bold tracking-wider text-[11px] sm:text-xs md:text-base">
              Frederiksværk
            </h3>
            <Image
              className="opacity-70 absolute bottom-0 h-auto w-14 sm:w-16 md:w-24"
              src="/city.png"
              alt="byskilt"
              width={135}
              height={50}
            />
          </li>
          <li className=" w-24  sm:w-32 h-10 md:w-44 md:h-14 ring-2 ring-neutral rounded-lg md:rounded-xl flex flex-col items-center p-1 md:p-0 relative">
            <h3 className="font-semibold sm:font-bold tracking-wider text-[11px] sm:text-xs md:text-base">
              Tisvildeleje
            </h3>
            <Image
              className="opacity-70 absolute bottom-0 h-auto w-16 md:w-24"
              src="/city.png"
              alt="byskilt"
              width={135}
              height={50}
            />
          </li>
          <li className=" w-24  sm:w-32 h-10 md:w-44 md:h-14 ring-2 ring-neutral rounded-lg md:rounded-xl flex flex-col items-center p-1 md:p-0 relative">
            <h3 className="font-semibold sm:font-bold tracking-wider text-[11px] sm:text-xs md:text-base">
              Hundested
            </h3>
            <Image
              className="opacity-70 absolute bottom-0 h-auto w-16 md:w-24"
              src="/city.png"
              alt="byskilt"
              width={135}
              height={50}
            />
          </li>
          <li className=" w-24  sm:w-32 h-10 md:w-44 md:h-14 ring-2 ring-neutral rounded-lg md:rounded-xl flex flex-col items-center p-1 md:p-0 relative">
            <h3 className="font-semibold sm:font-bold tracking-wider text-[11px] sm:text-xs md:text-base">
              Liseleje
            </h3>
            <Image
              className="opacity-70 absolute bottom-0 h-auto w-16 md:w-24"
              src="/city.png"
              alt="byskilt"
              width={135}
              height={50}
            />
          </li>
          <li className=" w-24 sm:w-32 h-10 md:w-44 md:h-14 ring-2 ring-neutral rounded-lg md:rounded-xl flex flex-col items-center p-1 md:p-0 relative">
            <h3 className="font-semibold sm:font-bold tracking-wider text-[11px] sm:text-xs md:text-base">
              Ølsted
            </h3>
            <Image
              className="opacity-70 absolute bottom-0 h-auto w-16 md:w-24"
              src="/city.png"
              alt="byskilt"
              width={135}
              height={50}
            />
          </li>
          <li className=" w-24 sm:w-32 h-10 md:w-44 md:h-14 ring-2 ring-neutral rounded-lg md:rounded-xl hidden sm:flex flex-col items-center p-1 md:p-0 relative">
            <h3 className="font-semibold sm:font-bold tracking-wider text-[11px] sm:text-xs md:text-base">
              Gilleleje
            </h3>
            <Image
              className="opacity-70 absolute bottom-0 h-auto w-16 md:w-24"
              src="/city.png"
              alt="byskilt"
              width={135}
              height={50}
            />
          </li>
          <li className=" w-24 sm:w-32 h-10 md:w-44 md:h-14 ring-2 ring-neutral rounded-lg md:rounded-xl hidden sm:flex flex-col items-center p-1 md:p-0 relative">
            <h3 className="font-semibold sm:font-bold tracking-wider text-[11px] sm:text-xs md:text-base">
              Hillerød
            </h3>
            <Image
              className="opacity-70 absolute bottom-0 h-auto w-16 md:w-24"
              src="/city.png"
              alt="byskilt"
              width={135}
              height={50}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Locations;
