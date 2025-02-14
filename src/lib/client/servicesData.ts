export interface ByData {
  [key: string]: {
    name: string;
    kommune: string;
    postnummer: string;
  };
}

export const byData: ByData = {
  hundested: {
    name: "Hundested",
    kommune: "Halsnæs",
    postnummer: "3390",
  },
  frederiksvaerk: {
    name: "Frederiksværk",
    kommune: "Halsnæs",
    postnummer: "3300",
  },
  liseleje: {
    name: "Liseleje",
    kommune: "Halsnæs",
    postnummer: "3360",
  },
  olsted: {
    name: "Ølsted",
    kommune: "Halsnæs",
    postnummer: "3310",
  },
  melby: {
    name: "Melby",
    kommune: "Halsnæs",
    postnummer: "3370",
  },
  asserbo: {
    name: "Asserbo",
    kommune: "Halsnæs",
    postnummer: "3300",
  },
  tise: {
    name: "Tisvildeleje",
    kommune: "Gribskov",
    postnummer: "3220",
  },
  helsinge: {
    name: "Helsinge",
    kommune: "Gribskov",
    postnummer: "3200",
  },
  vejby: {
    name: "Vejby Strand",
    kommune: "Gribskov",
    postnummer: "3210",
  },
  raageleje: {
    name: "Rågeleje",
    kommune: "Gribskov",
    postnummer: "3210",
  },
  smidstrup: {
    name: "Smidstrup Strand",
    kommune: "Gribskov",
    postnummer: "3250",
  },
  gilleleje: {
    name: "Gilleleje",
    kommune: "Gribskov",
    postnummer: "3250",
  },
  aalsgaarde: {
    name: "Ålsgårde",
    kommune: "Helsingør",
    postnummer: "3140",
  },
  hoejby: {
    name: "Højby",
    kommune: "Odsherred",
    postnummer: "4573",
  },
  dronningmolle: {
    name: "Dronningmølle",
    kommune: "Gribskov",
    postnummer: "3120",
  },
  hornbaek: {
    name: "Hornbæk",
    kommune: "Helsingør",
    postnummer: "3100",
  },
  kulhuse: {
    name: "Kulhuse",
    kommune: "Frederikssund",
    postnummer: "4573",
  },
};

export interface ServiceData {
  key: string;
  name: string;
  icon: string;
  image1: string;
  image2: string;
  image3: string;
  introText: string;
  moreText: string;
  outroHeader: string;
  outroText: string;
}

export const services: ServiceData[] = [
  {
    key: "graesslaaning",
    name: "Græsslåning",
    icon: "/lawn.png",
    image1: "/grass1.jpeg",
    image2: "/grass2.jpeg",
    image3: "/grass3.jpeg",
    introText: "Lad os slå græsset for dig – nemt og bekvemt!",
    moreText:
      "En flot, grøn græsplæne kræver regelmæssig pleje. Vi sørger for professionel græsslåning, så du kan nyde en velholdt have uden besvær.",
    outroHeader: "Fast aftale – ingen bekymringer",
    outroText:
      "Få slået græsset uden at løfte en finger! Med en fast aftale holder vi din plæne flot hele sæsonen. Kontakt os i dag for en skræddersyet løsning.",
  },
  {
    key: "beskaering",
    name: "Beskæring",
    icon: "/trim.png",
    image1: "/prune1.jpeg",
    image2: "/prune2.jpeg",
    image3: "/prune3.jpeg",
    introText: "Giv dine træer og buske den pleje, de fortjener!",
    moreText:
      "Med korrekt beskæring får dine planter de bedste vækstbetingelser og et flot, velplejet udseende. Vi sørger for, at dine træer og buske trives og ser fantastiske ud året rundt.",
    outroHeader: "Vi skaber sunde og flotte haver",
    outroText:
      "Lad os tage hånd om beskæringen, så du kan nyde en smuk og velplejet have. Kontakt os for en vurdering og et godt tilbud!",
  },
  {
    key: "haekkeklipning",
    name: "Hækkeklipning",
    icon: "/hedge.png",
    image1: "/hedge1.jpeg",
    image2: "/hedge2.jpeg",
    image3: "/hedge3.jpeg",
    introText: "En veltrimmet hæk giver din have karakter og privatliv!",
    moreText:
      "Vi sørger for, at din hæk altid står skarpt og velplejet. Med professionel hækkeklipning får du en smuk og harmonisk have – uden besvær.",
    outroHeader: "Fast aftale – altid en flot hæk",
    outroText:
      "Lad os tage os af hækken, så du slipper for arbejdet. Med en fast aftale sørger vi for, at din hæk altid er pæn. Kontakt os i dag!",
  },
  {
    key: "haekklipning",
    name: "Hækklipning (Hækkeklipning)",
    icon: "/hedge.png",
    image1: "/hedge1.jpeg",
    image2: "/hedge2.jpeg",
    image3: "/hedge3.jpeg",
    introText:
      "En flot, klippet hæk skaber et pænt og harmonisk udtryk i haven!",
    moreText:
      "Vi tilbyder professionel hækklipning, så din hæk altid står flot og velplejet. Lad os tage os af arbejdet for dig!",
    outroHeader: "Fast aftale – en altid flot hæk",
    outroText:
      "Slip for besværet – vi sørger for, at din hæk altid er veltrimmet og flot. Kontakt os i dag for en skræddersyet løsning!",
  },
  {
    key: "brolaegning",
    name: "Brolægning",
    icon: "/tile.png",
    image1: "/paving1.jpeg",
    image2: "/paving2.jpeg",
    image3: "/paving3.jpeg",
    introText: "Få en smuk ny terrasse eller indkørsel med fliser og sten!",
    moreText:
      "Uanset om du drømmer om en ny terrasse, en flot gangsti eller en solid indkørsel, så leverer vi professionel brolægning med kvalitetsfliser og sten.",
    outroHeader: "Lad os skabe din drømmeterrasse",
    outroText:
      "Vi hjælper dig med at designe og anlægge en terrasse eller indkørsel, der passer perfekt til dit hjem. Kontakt os i dag for en uforpligtende samtale!",
  },
  {
    key: "snerydning",
    name: "Snerydning",
    icon: "/snow.png",
    image1: "/grass1.jpeg",
    image2: "/grass2.jpeg",
    image3: "/grass3.jpeg",
    introText: "Hold dine stier og indkørsler fri for sne – nemt og effektivt!",
    moreText:
      "Vi sørger for, at du ikke behøver bekymre dig om glatte veje og fortove i vintermånederne. Vores snerydningsservice sikrer, at du kan komme sikkert frem.",
    outroHeader: "Fast aftale – ingen sneproblemer",
    outroText:
      "Få ryddet sne uden besvær! Med en fast aftale er din indkørsel og fortov altid sikre. Kontakt os for en løsning, der passer til dig.",
  },
  {
    key: "bortskaffelse",
    name: "Bortskaffelse",
    icon: "/reno.png",
    image1: "/grass1.jpeg",
    image2: "/grass2.jpeg",
    image3: "/grass3.jpeg",
    introText: "Slip af med have- og byggeaffald uden besvær!",
    moreText:
      "Vi sørger for, at affaldet forsvinder hurtigt og effektivt. Hvad enten det er grene, jord, gamle materialer eller andet, så klarer vi det for dig.",
    outroHeader: "Vi rydder op, så du slipper for besværet",
    outroText:
      "Brug din tid på vigtigere ting! Vi henter og bortskaffer affaldet professionelt. Kontakt os, så vi kan tage os af det for dig.",
  },
  {
    key: "ukrudtfjernelse",
    name: "Ukrudtfjernelse",
    icon: "/weeds.png",
    image1: "/weeds1.jpeg",
    image2: "/weeds2.jpeg",
    image3: "/weeds3.jpeg",
    introText: "Slip af med ukrudtet én gang for alle!",
    moreText:
      "Vores effektive ukrudtsfjernelse giver dig en flot, velholdt have uden uønsket vækst – uden brug af skadelige kemikalier.",
    outroHeader: "En ukrudtsfri have med minimal indsats",
    outroText:
      "Få fjernet ukrudt på en skånsom og effektiv måde. Vi sørger for et flot og vedligeholdelsesfrit resultat. Kontakt os for en løsning!",
  },
  {
    key: "byggepladsservice",
    name: "Byggepladsservice",
    icon: "/construction.png",
    image1: "/grass1.jpeg",
    image2: "/grass2.jpeg",
    image3: "/grass3.jpeg",
    introText: "Hold din byggeplads ryddelig og sikker!",
    moreText:
      "Vi sørger for, at din byggeplads forbliver ren og organiseret, så arbejdet kan forløbe effektivt og sikkert.",
    outroHeader: "Vi sørger for orden på din byggeplads",
    outroText:
      "Lad os tage os af oprydningen, så du kan fokusere på byggeriet. Kontakt os i dag for en professionel løsning!",
  },
];
