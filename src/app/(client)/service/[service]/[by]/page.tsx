import { Metadata } from "next";
import { getCityInfo, getServiceInfo } from "@/lib/client/fetchData";
import ServiceClient from "../ServiceClient";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }): Promise<Metadata> {
  const { service, by } = params;

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

const Page = async ({ params }) => {
  const { service, by } = params;

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
};

export default Page;
