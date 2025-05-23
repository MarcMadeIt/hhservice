import { Metadata } from "next";
import ServiceClientWrapper from "./ServiceClientWrapper";
import { generateMetadata as generateSeo } from "@/lib/client/seoData";

type Params = { service: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { service } = await params;
  return generateSeo(service);
}

export default function Page() {
  return <ServiceClientWrapper />;
}
