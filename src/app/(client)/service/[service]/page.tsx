import { Metadata } from "next";
import ServiceClientWrapper from "./ServiceClientWrapper";
import { generateMetadata as generateSeo } from "@/lib/client/seoData";

export async function generateMetadata({
  params,
}: {
  params: { service: string };
}): Promise<Metadata> {
  return generateSeo(params.service);
}

export default function Page() {
  return <ServiceClientWrapper />;
}
