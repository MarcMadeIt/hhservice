import React from "react";

const ServiceTip = () => {
  return (
    <div className="bg-primary/10 border-l-4 border-primary p-5 rounded-lg shadow-md max-w-2xl mx-auto">
      <h3 className="text-lg md:text-xl font-semibold text-primary">
        Vidste du?
      </h3>
      <p className="text-base md:text-lg mt-2">
        Du kan faktisk få **servicefradrag** på haveserviceopgaver som{" "}
        <strong>græsslåning, hækkeklipning og snerydning</strong>. Det betyder,
        at du kan trække en del af udgifterne fra i skat!
      </p>
      <p className="mt-3">
        💰 **Fradrag i 2024**: Op til **6.600 kr. pr. person** i husstanden.
      </p>
      <p className="mt-3">
        📞 <strong>Kontakt os</strong> for at høre, hvordan du kan spare penge
        på din haveservice!
      </p>
    </div>
  );
};

export default ServiceTip;
