import { Metadata } from "next";
import type { JSX } from "react";
import ServiceClientWrapper from "./ServiceClientWrapper";
import { generateMetadata as generateSeo } from "@/lib/client/seoData";

type PageProps = { params: { service: string } };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return generateSeo(params.service);
}

const Page = async (): Promise<JSX.Element> => {
  return <ServiceClientWrapper />;
};

export default Page;
