import { getCityInfo, getServiceInfo } from "@/lib/client/fetchData";
import ServiceClient from "../ServiceClient";

interface CityServicePageProps {
  params: { service: string; by: string };
}

const CityServicePage = async ({ params }: CityServicePageProps) => {
  const { service, by } = params;

  const serviceInfo = await getServiceInfo(service);
  const byInfo = await getCityInfo(by);

  if (!serviceInfo || !byInfo) {
    return <div>Service eller by ikke fundet</div>;
  }

  return (
    <ServiceClient
      serviceInfo={serviceInfo}
      serviceKey={service}
      cityInfo={byInfo}
    />
  );
};

export default CityServicePage;
