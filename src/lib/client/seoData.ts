import { Metadata } from "next";

const seoData: Record<string, { title: string; description: string }> = {
  graesslaaning: {
    title: "Græsslåning i Halsnæs – Halsnæs Haveservice",
    description:
      "Få slået græsset nemt og professionelt. Halsnæs Haveservice sørger for en flot og velplejet græsplæne – uden at du skal løfte en finger.",
  },
  beskaering: {
    title: "Beskæring af træer og buske – Halsnæs Haveservice",
    description:
      "Vi beskærer træer og buske med fokus på sund vækst og æstetik. Skab en flot og harmonisk have med hjælp fra Halsnæs Haveservice.",
  },
  haekkeklipning: {
    title: "Hækkeklipning i Halsnæs – Halsnæs Haveservice",
    description:
      "Vi tilbyder fast og professionel hækkeklipning. En pæn hæk giver privatliv og karakter – vi klarer arbejdet for dig.",
  },
  haekklipning: {
    title: "Hækklipning i Halsnæs – Halsnæs Haveservice",
    description:
      "Lad os tage os af hækklipningen. Halsnæs Haveservice sikrer et flot og ensartet udtryk med professionelt udstyr og faste aftaler.",
  },
  brolaegning: {
    title: "Brolægning i Halsnæs – Halsnæs Haveservice",
    description:
      "Vi skaber smukke flise- og stenløsninger til have og indkørsel. Få en holdbar og æstetisk løsning med vores professionelle brolægning.",
  },
  snerydning: {
    title: "Snerydning i Halsnæs – Halsnæs Haveservice",
    description:
      "Hold indkørsel og fortov snefri med vores effektive snerydning. Vi tilbyder faste aftaler, så du slipper for bekymringer i vinterkulden.",
  },
  bortskaffelse: {
    title: "Affaldsbortskaffelse i Halsnæs – Halsnæs Haveservice",
    description:
      "Slip for besværet med affald. Vi henter og bortskaffer have- og byggeaffald hurtigt og effektivt – altid professionelt udført.",
  },
  ukrudtsbekaempelse: {
    title: "Ukrudtsbekæmpelse i Halsnæs – Halsnæs Haveservice",
    description:
      "Få bugt med ukrudtet på en miljøvenlig måde. Vi tilbyder professionel ukrudtsbekæmpelse for en ren og vedligeholdt have.",
  },
  byggepladsservice: {
    title: "Byggepladsservice i Halsnæs – Halsnæs Haveservice",
    description:
      "Hold orden og sikkerhed på byggepladsen med vores service. Vi tilbyder oprydning og maskinføring – effektivt og certificeret.",
  },
};

export function generateMetadata(slug: string): Metadata {
  const seo = seoData[slug];

  if (!seo) {
    return {
      title: {
        absolute: "Halsnæs Haveservice – Din lokale havespecialist",
      },
      description:
        "Vi tilbyder haveservice i hele Halsnæs – fra græsslåning og beskæring til brolægning og snerydning. Kontakt os for en skræddersyet løsning.",
    };
  }

  return {
    title: { absolute: seo.title },
    description: seo.description,
    alternates: {
      canonical: `https://hhservice.dk/service/${slug}`,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `https://hhservice.dk/service/${slug}`,
    },
  };
}
