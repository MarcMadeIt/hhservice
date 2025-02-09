"use client";

import React, { useState } from "react";

interface ContactSelectProps {
  onChange: (value: string) => void;
  isCallForm?: boolean;
}

const TaskSelect = ({ onChange, isCallForm = false }: ContactSelectProps) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text md:text-base">
          Hvilken opgave ønsker du?
        </span>
      </div>
      <select
        className={`select select-bordered ${
          isCallForm ? "md:select-lg" : "select-md"
        }`}
        value={selectedOption}
        onChange={handleChange}
        required
      >
        <option value="" disabled>
          Vælg opgave
        </option>
        <option value="Græsslåning">Græsslåning</option>
        <option value="Hækkeklipning">Hækkeklipning</option>
        <option value="Brolægning">Brolægning</option>
        <option value="Plantning">Plantning</option>
        <option value="Snerydning">Snerydning</option>
        <option value="Ukrudtfjernelse">Ukrudtfjernelse</option>
        <option value="Beskæring">Beskæring</option>
        <option value="Plantning">Snerydning</option>
        <option value="Bortskaffelse">Bortskaffelse</option>
        <option value="Specialopgaver">Specialopgaver</option>
        <option value="Andet">Andet</option>
      </select>
    </label>
  );
};

export default TaskSelect;
