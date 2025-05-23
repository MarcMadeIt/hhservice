import { getCityInfo, getServiceInfo } from "@/lib/client/fetchData";
import ServiceClient from "../ServiceClient";

interface CityServicePageProps {
  params: { service: string; by: string };
}

const CityServicePage = ({ params }: CityServicePageProps) => {
  if (!params) {
    return <div>Fejl: Ingen parametre fundet</div>;
  }

  const { service, by } = params;
  const serviceInfo = getServiceInfo(service);
  const cityInfo = getCityInfo(by);

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
