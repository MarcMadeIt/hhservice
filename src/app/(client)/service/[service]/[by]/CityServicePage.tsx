import { getCityInfo, getServiceInfo } from "@/lib/client/fetchData";
import ServiceClient from "../ServiceClient";

const CityServicePage = async ({
  params,
}: {
  params: { service: string; by: string };
}) => {
  const serviceInfo = await getServiceInfo(params.service);
  const byInfo = await getCityInfo(params.by);

  if (!serviceInfo || !byInfo) {
    return <div>Service eller by ikke fundet</div>;
  }

  return (
    <ServiceClient
      serviceInfo={serviceInfo}
      serviceKey={params.service}
      cityInfo={byInfo}
    />
  );
};

export default CityServicePage;
