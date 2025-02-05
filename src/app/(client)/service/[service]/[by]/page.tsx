import { getCityInfo, getServiceInfo } from "@/lib/client/fetchData";
import ServiceClient from "../ServiceClient";

const CityServicePage = async ({
  params,
}: {
  params: { service: string; by: string };
}) => {
  const serviceInfo = getServiceInfo(params.service);
  const cityInfo = getCityInfo(params.by);

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
