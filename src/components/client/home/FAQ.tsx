import React from "react";

const FAQ = () => {
  return (
    <div className="w-full h-full p-4 py-20 md:py-16">
      <div className="flex flex-col gap-10 sm:gap-16 md:gap-20 justify-center items-center h-full w-full">
        <h2 className="text-2xl md:text-4xl font-bold">
          Ofte stillede spørgsmål
        </h2>
        <div className="flex flex-col gap-4 md:gap-6 w-full justify-center items-center">
          <div className="collapse collapse-arrow shadow-sm max-w-[650px] w-full bg-base-100">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-md md:text-xl font-semibold">
              Kan jeg få servicefradrag for haveservice?
            </div>
            <div className="collapse-content">
              <p className="tracking-wide font-medium">
                Ja, du kan få servicefradrag for visse typer haveservice,
                herunder græsslåning, hækkeklipning og beskæring af træer og
                buske. Rydning af haveaffald og nyanlæg af have giver ikke
                fradrag.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow shadow-sm max-w-[650px] w-full bg-base-100">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-md md:text-xl font-semibold">
              Hvilke typer haveservice tilbyder I?
            </div>
            <div className="collapse-content">
              <p className="tracking-wide font-medium">
                Vi tilbyder en bred vifte af haveservices, herunder græsslåning,
                hækkeklipning, ukrudtsbekæmpelse, brolægning, beskæring og
                anlægning af bede samt fliserens.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow shadow-sm max-w-[650px] w-full bg-base-100">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-md md:text-xl font-semibold">
              Hvad koster jeres haveservice?
            </div>
            <div className="collapse-content">
              <p className="tracking-wide font-medium">
                Prisen afhænger af opgavens omfang, arealets størrelse og den
                ønskede service. Kontakt os for et uforpligtende tilbud, så
                finder vi en løsning, der passer til dine behov og budget.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow shadow-sm max-w-[650px] w-full bg-base-100">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-md md:text-xl font-semibold">
              Hvilken tid på året er bedst til beskæring af hække og træer?
            </div>
            <div className="collapse-content">
              <p className="tracking-wide font-medium">
                De fleste hække bør klippes mindst én gang om året, typisk i
                juni og/eller september. Træer beskæres bedst i vinterhalvåret,
                når de er i dvale, men det afhænger af træsorten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
