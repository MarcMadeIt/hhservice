import React from "react";

const Overview = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <div className="bg-base-100 rounded-lg shadow-md p-3 md:p-7">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg">Besøgende på siden </h3>

            <div className="font-semibold text-4xl">260</div>
            <span className="text-xs">Seneste 30 dage</span>
          </div>
        </div>
        <div className="flex gap-5 ">
          <div className="flex-1 flex flex-col gap-2 bg-base-100 rounded-lg shadow-md p-3 md:p-7 ">
            <h3>Henvendelser</h3>
            <span className="text-2xl md:text-4xl font-semibold">5</span>
          </div>
          <div className="flex-1 flex flex-col gap-2 bg-base-100 rounded-lg shadow-md p-3 md:p-7">
            <h3>Nyheder</h3>
            <span className="text-2xl md:text-4xl font-semibold">10</span>
          </div>
          <div className="flex-1 flex flex-col gap-2 bg-base-100 rounded-lg shadow-md p-3 md:p-7">
            <h3>Anmeldelser</h3>
            <span className="text-2xl md:text-4xl font-semibold">24</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
