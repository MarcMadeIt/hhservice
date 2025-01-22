import React from "react";

const RequestsList = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox checkbox-primary" />
              </label>
            </th>
            <th>Navn</th>
            <th className="hidden md:block">Opgave</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox checkbox-primary" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">Frederiksværk</div>
                </div>
              </div>
            </td>
            <td className="hidden md:block">
              Græsslåning
              <br />
              <span className="badge badge-ghost badge-xs text-[10px] lg:badge-sm lg:text-xs">
                Henvendt: 20. marts 2025
              </span>
            </td>

            <th>
              <button className="btn btn-primary btn-sm md:btn-xs">
                Detaljer
              </button>
            </th>
          </tr>
          {/* row 2 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox checkbox-primary" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div>
                  <div className="font-bold">Brice Swyre</div>
                  <div className="text-sm opacity-50">Hundested</div>
                </div>
              </div>
            </td>
            <td className="hidden md:block">
              Specialopgaver
              <br />
              <span className="badge badge-ghost badge-xs text-[10px] lg:badge-sm lg:text-xs">
                Henvendt: 17. marts 2025
              </span>
            </td>
            <th>
              <button className="btn btn-primary btn-sm md:btn-xs">
                Detaljer
              </button>
            </th>
          </tr>
          {/* row 3 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox checkbox-primary" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div>
                  <div className="font-bold">Marjy Ferencz</div>
                  <div className="text-sm opacity-50">Ølsted</div>
                </div>
              </div>
            </td>
            <td className="hidden md:block">
              Plantning
              <br />
              <span className="badge badge-ghost badge-xs text-[10px] lg:badge-sm lg:text-xs">
                Henvendt: 30. februar 2025
              </span>
            </td>
            <th>
              <button className="btn btn-primary btn-sm md:btn-xs">
                Detaljer
              </button>
            </th>
          </tr>
          {/* row 4 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox checkbox-primary" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div>
                  <div className="font-bold">Yancy Tear</div>
                  <div className="text-sm opacity-50">Gilleleje</div>
                </div>
              </div>
            </td>
            <td className="hidden md:block">
              Hækklipning
              <br />
              <span className="badge badge-ghost badge-xs text-[10px] lg:badge-sm lg:text-xs">
                Henvendt: 12. februar 2025
              </span>
            </td>
            <th>
              <button className="btn btn-primary btn-sm md:btn-xs">
                Detaljer
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RequestsList;
