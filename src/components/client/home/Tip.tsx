import { FaLightbulb } from "react-icons/fa6";

const Tip = () => {
  return (
    <div className="bg-base-100 rounded-lg shadow-md max-w-lg relative border-l-8 border-primary">
      <FaLightbulb
        size={300}
        className="text-3xl text-primary absolute inset-0 m-auto opacity-10"
      />

      <div className="flex flex-col gap-3 p-5 md:p-7 relative z-10">
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-semibold tracking-wide text-primary">
            Servicefradrag
          </h3>
        </div>
        <p className="tracking-wide">
          Du kan få servicefradrag for vores haveservice og trække en del af
          udgifterne fra i skat. Fradraget gælder for arbejdsløn til opgaver
          som: <br />
          <strong>Græsslåning, hækkeklipning, fliserens og snerydning</strong>
        </p>
        <p className="tracking-wide">
          I 2025 kan du få op til 17.500 kr. pr. person i fradrag – og op til
          35.000 kr. for to voksne. Det gælder kun for arbejdsløn, ikke
          materialer.
        </p>
        <h4 className="font-semibold tracking-wide">
          Efter du har fået en service
        </h4>
        <p className="tracking-wide">
          Indberet beløbet på Skat.dk under &quot;Servicefradrag&quot; og få en
          del af udgifterne tilbage i skat.
        </p>
        <p className="text-sm text-gray-500">Kilde: Skat.dk</p>
      </div>
    </div>
  );
};

export default Tip;
