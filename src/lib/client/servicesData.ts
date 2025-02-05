// Define the structure for city data
export interface ByData {
  [key: string]: { name: string; region: string; postnummer: string };
}

// Define available cities
export const byData: ByData = {
  hundested: { name: "Hundested", region: "Halsnæs", postnummer: "3390" },
  frederiksvaerk: {
    name: "Frederiksværk",
    region: "Halsnæs",
    postnummer: "3300",
  },
  liseleje: { name: "Liseleje", region: "Halsnæs", postnummer: "3360" },
  melby: { name: "Melby", region: "Halsnæs", postnummer: "3370" },
  olsted: { name: "Ølsted", region: "Halsnæs", postnummer: "3310" },
  tise: { name: "Tisvildeleje", region: "Nordsjælland", postnummer: "3220" },
  helsinge: { name: "Helsinge", region: "Nordsjælland", postnummer: "3200" },
};

export interface ServiceData {
  key: string;
  name: string;
  icon: string;
  image1: string;
  image2: string;
  image3: string;
}

export const services: ServiceData[] = [
  {
    key: "graesslaaning",
    name: "Græsslåning",
    icon: "/lawn.png",
    image1: "/grass1.jpeg",
    image2: "/grass2.jpeg",
    image3: "/grass3.jpeg",
  },
  {
    key: "beskaering",
    name: "Beskæring",
    icon: "/trim.png",
    image1: "/prune1.jpeg",
    image2: "/prune2.jpeg",
    image3: "/prune3.jpeg",
  },
  {
    key: "haekklipning",
    name: "Hækkeklipning",
    icon: "/hedge.png",
    image1: "/hedge1.jpeg",
    image2: "/hedge2.jpeg",
    image3: "/hedge3.jpeg",
  },
  {
    key: "brolaegning",
    name: "Brolægning",
    icon: "/tile.png",
    image1: "/paving1.jpeg",
    image2: "/paving2.jpeg",
    image3: "/paving3.jpeg",
  },
  {
    key: "snerydning",
    name: "Snerydning",
    icon: "/snow.png",
    image1: "/grass1.jpeg",
    image2: "/grass2.jpeg",
    image3: "/grass3.jpeg",
  },
  {
    key: "bortskaffelse",
    name: "Bortskaffelse",
    icon: "/reno.png",
    image1: "/grass1.jpeg",
    image2: "/grass2.jpeg",
    image3: "/grass3.jpeg",
  },
  {
    key: "ukrudtsfjernelse",
    name: "Ukrudtsfjernelse",
    icon: "/weeds.png",
    image1: "/grass1.jpeg",
    image2: "/grass2.jpeg",
    image3: "/grass3.jpeg",
  },
  {
    key: "byggepladsservice",
    name: "Byggepladsservice",
    icon: "/construction.png",
    image1: "/grass1.jpeg",
    image2: "/grass2.jpeg",
    image3: "/grass3.jpeg",
  },
];
