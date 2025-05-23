import { Metadata } from "next";
import ServiceClientWrapper from "./ServiceClientWrapper";
import { generateMetadata as generateSeo } from "@/lib/client/seoData";

type Params = { service: string };

// Next.js now passes params as a Promise — so we accept Promise<Params> and await it.
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { service } = await params;
  return generateSeo(service);
}

// Synchronous page component rendering the client wrapper
export default function Page() {
  return <ServiceClientWrapper />;
}
