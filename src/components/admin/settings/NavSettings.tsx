"use client";

import React, { useState } from "react";
import Setup from "./setup/Setup";
import Users from "./users/Users";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";

const NavSettings = () => {
  const [activeTab, setActiveTab] = useState("users");
  return (
    <div className="w-full">
      {/* Fanenavigation */}
      <div role="tablist" className="tabs tabs-md w-full md:w-96 text-[15px]">
        <button
          role="tab"
          className={`tab gap-2  ${
            activeTab === "users"
              ? "bg-neutral text-neutral-content rounded-lg shadow-md"
              : ""
          }`}
          onClick={() => setActiveTab("users")}
        >
          <FaUsers />
          Brugeradgang
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
          <FaExternalLinkAlt />
          Sideopsætning
        </button>
      </div>

      <div className="mt-3 md:mt-5">
        {activeTab === "users" && (
          <div className="bg-base-100 rounded-lg shadow-md p-5 md:p-7">
            <Users />
          </div>
        )}
        {activeTab === "extra" && (
          <div className="bg-base-100 rounded-lg shadow-md p-5 md:p-7">
            <Setup />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavSettings;
