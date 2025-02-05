"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ServiceClient from "./ServiceClient";
import { getServiceInfo } from "@/lib/client/fetchData";
import { ServiceData } from "@/lib/client/servicesData"; // Importér korrekt type

const ServiceClientWrapper = () => {
  const params = useParams();
  const [serviceInfo, setServiceInfo] = useState<ServiceData | null>(null);

  useEffect(() => {
    if (params?.service) {
      const serviceKey = Array.isArray(params.service)
        ? params.service[0]
        : params.service;

      if (serviceKey) {
        setServiceInfo(getServiceInfo(serviceKey) || null);
      }
    }
  }, [params?.service]);

  if (!serviceInfo) {
    return <div>Service ikke fundet</div>;
  }

  return (
    <ServiceClient
      serviceInfo={serviceInfo}
      serviceKey={params.service as string}
    />
  );
};

export default ServiceClientWrapper;
