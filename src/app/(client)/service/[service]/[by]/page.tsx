import { Metadata } from "next";
import { getCityInfo, getServiceInfo } from "@/lib/client/fetchData";
import ServiceClient from "../ServiceClient";
import { notFound } from "next/navigation";

type Params = { service: string; by: string };

// 1) Await params here
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { service, by } = await params;

  const serviceInfo = await getServiceInfo(service);
  const cityInfo = await getCityInfo(by);

  if (!serviceInfo || !cityInfo) {
    return {
      title: "Halsnæs Haveservice – Din lokale havespecialist",
      description:
        "Vi tilbyder haveservice i hele Halsnæs – fra græsslåning og beskæring til brolægning og snerydning.",
    };
  }

  return {
    title: {
      absolute: `${serviceInfo.name} i ${cityInfo.name} – Halsnæs Haveservice`,
    },
    description: `Få professionel ${serviceInfo.name.toLowerCase()} i ${
      cityInfo.name
    } (${cityInfo.kommune}).`,
    alternates: {
      canonical: `https://hhservice.dk/service/${service}/${by}`,
    },
    openGraph: {
      title: `${serviceInfo.name} i ${cityInfo.name} – Halsnæs Haveservice`,
      description: `Professionel ${serviceInfo.name.toLowerCase()} i ${
        cityInfo.name
      }.`,
      url: `https://hhservice.dk/service/${service}/${by}`,
    },
  };
}

// 2) And here too
export default async function Page({ params }: { params: Promise<Params> }) {
  const { service, by } = await params;

  const serviceInfo = await getServiceInfo(service);
  const cityInfo = await getCityInfo(by);

  if (!serviceInfo || !cityInfo) {
    notFound();
  }

  return (
    <ServiceClient
      serviceInfo={serviceInfo}
      serviceKey={service}
      cityInfo={cityInfo}
    />
  );
}
