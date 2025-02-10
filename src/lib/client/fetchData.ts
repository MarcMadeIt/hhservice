import { byData, services } from "./servicesData";

export const getAllServices = () => {
  return services;
};

export const getServiceInfo = (serviceKey: string) => {
  return services.find((service) => service.key === serviceKey) || null;
};

export const getCityInfo = (cityKey: string) => {
  return byData[cityKey] || null;
};
