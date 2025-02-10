import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLeaf, FaPaperPlane, FaPhone } from "react-icons/fa6";
import Head from "next/head";

const Business = () => {
  return (
    <>
      <Head>
        <title>
          Haveservice til erhverv | Vedligeholdelse for virksomheder
        </title>
        <meta
          name="description"
          content="Få professionel haveservice til erhverv. Vi tilbyder fleksible løsninger til virksomheder, boligforeninger og institutioner – inkl. græsslåning, ukrudtsbekæmpelse & snerydning."
        />
        <meta
          name="keywords"
          content="haveservice erhverv, erhvervsaftale, virksomheder, boligforeninger, græsslåning, snerydning, ukrudtsbekæmpelse, grøn vedligeholdelse"
        />
        <meta
          property="og:title"
          content="Haveservice til Erhverv | Grøn Vedligeholdelse for Virksomheder"
        />
        <meta
          property="og:description"
          content="Vi tilbyder professionel haveservice til virksomheder, boligforeninger og institutioner. Faste aftaler eller enkeltstående opgaver. Kontakt os for et tilbud."
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className="w-full h-full flex flex-col gap-10 justify-center items-center xl:gap-28 relative">
        <article className="bg-secondary shadow-lg rounded-lg p-2 py-4 md:p-8 flex flex-col lg:flex-row gap-5 md:gap-10 justify-center items-center relative overflow-hidden max-w-3xl">
          <div className="h-full w-full absolute opacity-15 md:opacity-50">
            <Image
              src="/business.png"
              alt="Haveservice til erhverv – Vedligeholdelse af grønne områder"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-neutral-content flex flex-col items-start gap-5 md:gap-10 p-4 z-10">
            <h2 className="text-2xl lg:text-3xl font-bold">
              Haveservice til erhverv - fleksible løsninger
            </h2>
            <p>
              Et velplejet udeområde skaber et professionelt indtryk og en
              indbydende atmosfære. Vi tilbyder fleksible løsninger til
              <strong> virksomheder</strong>, <strong>boligforeninger</strong>{" "}
              og <strong>institutioner</strong>, så jeres grønne områder altid
              fremstår velholdte.
            </p>
            <h3 className="text-lg font-semibold">
              Eksempler på vores erhvervsservice:
            </h3>
            <ul className="list-none space-y-5">
              <li className="flex items-center gap-2">
                <FaLeaf className="text-2xl" />
                <p className="flex gap-2">
                  <strong>Fast græsslåning & hækklipning</strong>
                </p>
              </li>
              <li className="flex items-center gap-2">
                <FaLeaf className="text-2xl" />
                <p className="flex gap-2">
                  <strong>Ukrudtsbekæmpelse & fliserens</strong>
                </p>
              </li>
              <li className="flex items-center gap-2">
                <FaLeaf className="text-2xl" />
                <p className="flex gap-2">
                  <strong>Snerydning & saltning</strong>
                </p>
              </li>
            </ul>
            <p>
              Vi skræddersyr vores <strong>haveservice til erhverv</strong>{" "}
              efter jeres behov – uanset om I har brug for en{" "}
              <strong>fast aftale</strong> eller en{" "}
              <strong>enkeltstående opgave</strong>.
            </p>
            <div className="flex gap-5">
              <Link href="tel:26181201" className="btn ">
                <FaPhone /> Ring for en aftale
              </Link>
              <Link href="/tilbud" className="btn btn-primary">
                <FaPaperPlane /> Få et tilbud
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Business;
