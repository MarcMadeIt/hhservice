"use client";

import { NextSeo } from "next-seo";
import Image from "next/image";
import CallMeForm from "@/components/client/forms/CallMeForm";
import Steps from "@/components/client/service/Steps";
import Link from "next/link";
import { byData } from "@/lib/client/servicesData";
import Locations from "@/components/client/home/Locations";

const ServiceClient = ({
  serviceInfo,
  serviceKey,
  cityInfo,
}: {
  serviceInfo: {
    name: string;
    image1: string;
    image2: string;
    image3: string;
    introText: string;
    moreText: string;
    outroHeader: string;
    outroText: string;
  };
  serviceKey: string;
  cityInfo?: { name: string; kommune: string; postnummer: string };
}) => {
  return (
    <>
      <NextSeo
        title={`${serviceInfo.name} i ${
          cityInfo?.name || "Halsnæs"
        } | Professionel Service`}
        description={`Få professionel ${serviceInfo.name.toLowerCase()} i ${
          cityInfo?.name || "Halsnæs"
        }. Vi tilbyder kvalitetsservice i ${
          cityInfo?.kommune || "Nordsjælland"
        }.`}
        canonical={`https://hhservice.dk/service/${serviceKey}${
          cityInfo ? `/${cityInfo.name.toLowerCase()}` : ""
        }`}
        openGraph={{
          url: `https://hhservice.dk/service/${serviceKey}${
            cityInfo ? `/${cityInfo.name.toLowerCase()}` : ""
          }`,
          title: `${serviceInfo.name} i ${
            cityInfo?.name || "Halsnæs"
          } | Professionel Service`,
          description: `Halsnæs Haveservice tilbyder professionel ${serviceInfo.name.toLowerCase()} i ${
            cityInfo?.name || "Halsnæs"
          }.`,
        }}
      />

      <div className="mt-[62px] md:mt-[95px] p-4 w-full h-full flex flex-col gap-16 justify-center items-center">
        <div className="lg:py-16 w-full flex justify-between flex-col lg:flex-row gap-10 lg:gap-4 max-w-7xl 2xl:max-w-full">
          <div className="lg:w-2/3 py-4 lg:py-0 flex flex-col items-start justify-center bg-base-200 rounded-lg">
            <div className="flex flex-col max-w-full lg:max-w-2xl xl:max-w-3xl gap-4">
              <div>
                <h1 className="mb-5 text-2xl md:text-4xl font-bold">
                  {serviceInfo.name} {cityInfo?.name ? "i" : ""}{" "}
                  {cityInfo?.name || ""}
                </h1>
                <p className="text-base md:text-lg">
                  {serviceInfo.introText} <br />
                  {serviceInfo.moreText} <br />
                  Vi tilbyder {serviceInfo.name.toLowerCase()} i{" "}
                  <strong>{cityInfo?.name || "Halsnæs"}</strong> og resten af{" "}
                  <strong>{cityInfo?.kommune || "Nordsjælland"}</strong>.
                </p>

                <br />
                <h4 className="text-base md:text-lg font-semibold">
                  {serviceInfo.outroHeader}
                </h4>
                <p className="text-base md:text-lg">{serviceInfo.outroText}</p>
              </div>
              {cityInfo && (
                <div className="text-base md:text-lg">
                  <p>
                    Vi tilbyder {serviceInfo.name.toLowerCase()} i{" "}
                    <strong>{cityInfo.name}</strong> og resten af{" "}
                    <strong>{cityInfo.kommune}</strong>.
                  </p>
                  <p>Kontakt os i dag og få et uforpligtende tilbud.</p>
                </div>
              )}

              <div className="flex flex-col gap-3">
                <h2 className="text-md font-semibold">
                  Vi dækker bl.a. disse områder:
                </h2>
                <ul className="flex gap-3 flex-wrap">
                  {Object.entries(byData)
                    .filter(([slug]) => slug !== cityInfo?.name.toLowerCase())
                    .map(([slug, city]) => (
                      <li
                        key={slug}
                        className="text-primary bg-base-100 shadow-md py-1 px-2 rounded-md font-semibold"
                      >
                        <Link href={`/service/${serviceKey}/${slug}`}>
                          {city.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="flex gap-5 max-w-full sm:max-w-xl lg:max-w-2xl xl:max-w-3xl justify-center p-4">
                <Image
                  src={serviceInfo.image1}
                  alt="service"
                  width={200}
                  height={200}
                  className="rounded-md hidden sm:block object-cover w-[50%] sm:w-[33%]"
                />
                <Image
                  src={serviceInfo.image2}
                  alt="service"
                  width={200}
                  height={200}
                  className="rounded-md object-cover w-[50%] sm:w-[33%]"
                />
                <Image
                  src={serviceInfo.image3}
                  alt="service"
                  width={200}
                  height={200}
                  className="rounded-md object-cover w-[50%] sm:w-[33%]"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-auto flex items-start justify-center">
            <CallMeForm />
          </div>
        </div>
        <Steps />
        <Locations />
      </div>
    </>
  );
};

export default ServiceClient;
