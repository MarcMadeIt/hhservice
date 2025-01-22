import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaArrowDownWideShort } from "react-icons/fa6";

const RequestsSearch = () => {
  return (
    <div className="flex items-center justify-between">
      <label className="input input-bordered input-md flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" />
        <FaSearch />
      </label>
      <div className="dropdown dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button" className=" m-1">
          <FaArrowDownWideShort size={20} />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu md:menu-sm bg-base-100 rounded-box z-[1] w-52 p-2 shadow gap-1"
        >
          <span className="text-[10px] p-2 text-gray-400 font-bold">
            Filter
          </span>
          <li>
            <a>Græsslåning</a>
          </li>
          <li>
            <a>Hækklipning</a>
          </li>
          <li>
            <a>Ukrudtsbekæmpelse</a>
          </li>
          <li>
            <a>Plantning</a>
          </li>
          <li>
            <a>Specialopgaver</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RequestsSearch;
