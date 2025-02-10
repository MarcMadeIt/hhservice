import { getCityInfo, getServiceInfo } from "@/lib/client/fetchData";
import ServiceClient from "../ServiceClient";

interface CityServicePageProps {
  params: {
    service: string;
    by: string;
  };
}

const CityServicePage = async ({ params }: CityServicePageProps) => {
  const serviceInfo = await getServiceInfo(params.service);
  const cityInfo = await getCityInfo(params.by);

  if (!serviceInfo || !cityInfo) {
    return <div>Service eller by ikke fundet</div>;
  }

  return (
    <ServiceClient
      serviceInfo={serviceInfo}
      serviceKey={params.service}
      cityInfo={cityInfo}
    />
  );
};

export default CityServicePage;
