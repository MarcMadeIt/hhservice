import { getCityInfo, getServiceInfo } from "@/lib/client/fetchData";
import ServiceClient from "../ServiceClient";

interface CityServicePageProps {
  params: Promise<{ service: string; by: string }>;
}

const CityServicePage = async ({ params }: CityServicePageProps) => {
  const { service, by } = await params; // Await params to ensure correct types
  const serviceInfo = await getServiceInfo(service);
  const cityInfo = await getCityInfo(by);

  if (!serviceInfo || !cityInfo) {
    return <div>Service eller by ikke fundet</div>;
  }

  return (
    <ServiceClient
      serviceInfo={serviceInfo}
      serviceKey={service}
      cityInfo={cityInfo}
    />
  );
};

export default CityServicePage;
