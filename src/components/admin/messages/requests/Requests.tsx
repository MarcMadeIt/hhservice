import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaArrowDownWideShort } from "react-icons/fa6";
import RequestsSearch from "./RequestsSearch";
import RequestsList from "./RequestsList";

const Requests = () => {
  return (
    <div className="flex flex-col gap-4">
      <RequestsSearch />
      <RequestsList />
    </div>
  );
};

export default Requests;
