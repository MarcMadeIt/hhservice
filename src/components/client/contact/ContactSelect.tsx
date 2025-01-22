"use client";

import React, { useState } from "react";

const ContactSelect = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">Hvilken opgave ønsker du?</span>
      </div>
      <select
        className="select select-bordered"
        value={selectedOption}
        onChange={handleChange}
        required
      >
        <option value="" disabled>
          Vælg opgave
        </option>
        <option value="Græsslåning">Græsslåning</option>
        <option value="Hækkeklipning">Hækkeklipning</option>
        <option value="Plantning">Plantning</option>
        <option value="Specialopgaver">Specialopgaver</option>
        <option value="Andet">Andet</option>
      </select>
    </label>
  );
};

export default ContactSelect;
