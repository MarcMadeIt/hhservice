"use client";
import React, { useState } from "react";

interface ConsentModalProps {
  buttonText: string;
  variant?: "primary" | "hover";
}

const ConsentModal = ({ buttonText, variant = "hover" }: ConsentModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Link til at åbne modal */}
      <span
        className={`link ${
          variant === "primary" ? "link-primary" : "link-hover"
        }`}
        onClick={() => setIsOpen(true)}
      >
        {buttonText}
      </span>

      {/* Modal */}
      {isOpen && (
        <div className="modal modal-open fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal-box max-w-2xl p-6 bg-white rounded-lg shadow-lg">
            <h3 className="font-bold text-xl md:text-2xl py-2">
              Samtykkeerklæring & Privatlivspolitik
            </h3>

            <div className="py-4 text-sm max-h-96 overflow-y-auto flex flex-col gap-5">
              <div>
                <h4 className="font-semibold md:text-base mb-2">
                  1. Indsamling og Behandling af Personoplysninger
                </h4>
                <p>
                  Når du udfylder en formular på vores hjemmeside for at anmode
                  om et tilbud eller anden kontakt, indsamler og behandler
                  Halsnæs Haveservice følgende oplysninger:
                </p>
                <ul className="list-disc pl-5 my-2">
                  <li>Navn</li>
                  <li>Telefonnummer</li>
                  <li>E-mailadresse</li>
                  <li>Eventuelle oplysninger du angiver i beskedfeltet</li>
                </ul>
                <p>
                  Disse oplysninger bruges udelukkende til at behandle din
                  forespørgsel, give dig den ønskede service samt følge op på
                  din henvendelse.
                </p>
              </div>
              <div>
                <h4 className="font-semibold md:text-base mb-2">
                  2. Opbevaring og Sletning af Data
                </h4>
                <p>
                  Vi opbevarer dine oplysninger sikkert og fortroligt. Dine data
                  bliver automatisk slettet efter 30 dage, medmindre der indgås
                  en kundeaftale, hvor det kan være nødvendigt at opbevare
                  oplysningerne længere.
                </p>
                <p>
                  Hvis du ønsker at få dine oplysninger slettet før de 30 dage
                  er gået, kan du kontakte os på{" "}
                  <strong>
                    {" "}
                    <a href="mailto:hhs@hhservice.dk" target="_blank">
                      hhs@hhservice.dk
                    </a>
                  </strong>
                  , hvorefter vi sletter dem inden for rimelig tid.
                </p>
              </div>
              <div>
                <h4 className="font-semibold md:text-base mb-2">
                  3. Videregivelse af Oplysninger
                </h4>
                <p>
                  Vi videregiver <strong>ikke</strong> dine oplysninger til
                  tredjepart, medmindre det er nødvendigt for at opfylde din
                  forespørgsel (f.eks. en underleverandør). I så fald vil det
                  kun ske med dit samtykke.
                </p>
              </div>
              <div>
                <h4 className="font-semibold md:text-base mb-2">
                  4. Dine Rettigheder
                </h4>
                <p>Du har ret til:</p>
                <ul className="list-disc pl-5 my-2">
                  <li>Indsigt i de oplysninger, vi har registreret om dig.</li>
                  <li>Berigtigelse af eventuelle forkerte oplysninger.</li>
                  <li>
                    Sletning af dine data (medmindre lovgivning kræver
                    opbevaring).
                  </li>
                  <li>
                    Tilbagekaldelse af dit samtykke til opbevaring af dine data.
                  </li>
                </ul>
                <p>
                  For at udøve dine rettigheder kan du kontakte os via{" "}
                  <strong>
                    <a href="mailto:hhs@hhservice.dk" target="_blank">
                      hhs@hhservice.dk
                    </a>
                  </strong>
                  .
                </p>
              </div>
              <div>
                <h4 className="font-semibold md:text-base mb-2">5. Samtykke</h4>
                <p>
                  Ved at indsende dine oplysninger via vores hjemmeside giver du
                  dit samtykke til, at vi må behandle dine oplysninger som
                  beskrevet ovenfor.
                </p>
                <p>
                  Du kan til enhver tid tilbagekalde dit samtykke ved at
                  kontakte os, hvorefter vi vil slette dine oplysninger,
                  medmindre der er et juridisk grundlag for fortsat opbevaring.
                </p>
              </div>
              <div>
                <h4 className="font-semibold md:text-base mb-2">
                  6. Datasikkerhed
                </h4>
                <p>
                  Vi beskytter dine oplysninger gennem passende tekniske og
                  organisatoriske sikkerhedsforanstaltninger, så de ikke
                  misbruges eller tilgås af uvedkommende.
                </p>
              </div>
              <div>
                <h4 className="font-semibold md:text-base mb-2">
                  7. Ændringer i Samtykkeerklæring og Privatlivspolitik
                </h4>
                <p>
                  Vi forbeholder os retten til at opdatere denne
                  samtykkeerklæring og privatlivspolitik. Den nyeste version vil
                  altid være tilgængelig på vores hjemmeside.
                </p>
              </div>

              <p className="mt-2 text-xs">Sidst opdateret: 5. februar 2025</p>
            </div>

            <div className="modal-action">
              <button
                className="btn btn-primary"
                onClick={() => setIsOpen(false)}
              >
                Luk
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConsentModal;
