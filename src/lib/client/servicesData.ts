// Define the structure for city data
export interface ByData {
  [key: string]: { name: string; kommune: string; postnummer: string };
}

// Define available cities
export const byData: ByData = {
  hundested: { name: "Hundested", kommune: "Halsnæs", postnummer: "3390" },
  frederiksvaerk: {
    name: "Frederiksværk",
    kommune: "Halsnæs",
    postnummer: "3300",
  },
  liseleje: { name: "Liseleje", kommune: "Halsnæs", postnummer: "3360" },
  olsted: { name: "Ølsted", kommune: "Halsnæs", postnummer: "3310" },
  tise: { name: "Tisvildeleje", kommune: "Gribskov", postnummer: "3220" },
  helsinge: { name: "Helsinge", kommune: "Gribskov", postnummer: "3200" },
  vejby: { name: "Vejby Strand", kommune: "Gribskov", postnummer: "3210" },
  raageleje: { name: "Rågeleje", kommune: "Gribskov", postnummer: "3210" },
  smidstrup: {
    name: "Smidstrup Strand",
    kommune: "Gribskov",
    postnummer: "3250",
  },
  gilleleje: { name: "Gilleleje", kommune: "Gribskov", postnummer: "3250" },
  dronningmolle: {
    name: "Dronningmølle",
    kommune: "Gribskov",
    postnummer: "3120",
  },
  hornbaek: { name: "Hornbæk", kommune: "Helsingør", postnummer: "3100" },
  aalsgaarde: { name: "Ålsgårde", kommune: "Helsingør", postnummer: "3140" },
};

export interface ServiceData {
  key: string;
  name: string;
  icon: string;
  image1: string;
  image2: string;
  image3: string;
  text1: string;
}

export const services: ServiceData[] = [
  {
    key: "graesslaaning",
    name: "Græsslåning",
    icon: "/lawn.png",
    image1: "/grass1.jpeg",
    image2: "/grass2.jpeg",
    image3: "/grass3.jpeg",
    text1: "",
  },
  {
    key: "beskaering",
    name: "Beskæring",
    icon: "/trim.png",
    image1: "/prune1.jpeg",
    image2: "/prune2.jpeg",
    image3: "/prune3.jpeg",
    text1: "",
  },
  {
    key: "haekkeklipning",
    name: "Hækkeklipning",
    icon: "/hedge.png",
    image1: "/hedge1.jpeg",
    image2: "/hedge2.jpeg",
    image3: "/hedge3.jpeg",
    text1: "",
  },
  {
    key: "brolaegning",
    name: "Brolægning",
    icon: "/tile.png",
    image1: "/paving1.jpeg",
    image2: "/paving2.jpeg",
    image3: "/paving3.jpeg",
    text1: "",
  },
  {
    key: "snerydning",
    name: "Snerydning",
    icon: "/snow.png",
    image1: "/grass1.jpeg",
    image2: "/grass2.jpeg",
    image3: "/grass3.jpeg",
    text1: "",
  },
  {
    key: "bortskaffelse",
    name: "Bortskaffelse",
    icon: "/reno.png",
    image1: "/grass1.jpeg",
    image2: "/grass2.jpeg",
    image3: "/grass3.jpeg",
    text1: "",
  },
  {
    key: "ukrudtsfjernelse",
    name: "Ukrudtsfjernelse",
    icon: "/weeds.png",
    image1: "/weeds1.jpeg",
    image2: "/weeds2.jpeg",
    image3: "/weeds3.jpeg",
    text1: "",
  },
  {
    key: "byggepladsservice",
    name: "Byggepladsservice",
    icon: "/construction.png",
    image1: "/grass1.jpeg",
    image2: "/grass2.jpeg",
    image3: "/grass3.jpeg",
    text1: "",
  },
];
