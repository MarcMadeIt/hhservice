"use client";

import React, { useState } from "react";
import Requests from "./requests/Requests";
import { FaCalendarCheck, FaClipboardCheck } from "react-icons/fa6";

const NavMessages = () => {
  const [activeTab, setActiveTab] = useState("users");
  return (
    <div className="w-full">
      {/* Fanenavigation */}
      <div
        role="tablist"
        className="tabs sm:tabs-lg w-full md:w-96 text-[15px]"
      >
        <button
          role="tab"
          className={`tab gap-2  ${
            activeTab === "users"
              ? "bg-neutral text-neutral-content rounded-lg shadow-md"
              : ""
          }`}
          onClick={() => setActiveTab("users")}
        >
          <FaClipboardCheck />
          Kontaktformular
        </button>
        <button
          role="tab"
          className={`tab gap-2  ${
            activeTab === "extra"
              ? "bg-neutral text-neutral-content rounded-lg shadow-md"
              : ""
          }`}
          onClick={() => setActiveTab("extra")}
        >
          <FaCalendarCheck />
          Bookings
        </button>
      </div>

      <div className="mt-3 md:mt-5">
        {activeTab === "users" && (
          <div className="bg-base-100 rounded-lg shadow-md p-5 md:p-7">
            <Requests />
          </div>
        )}
        {activeTab === "extra" && (
          <div className="bg-base-100 rounded-lg shadow-md p-5 md:p-7"></div>
        )}
      </div>
    </div>
  );
};

export default NavMessages;
