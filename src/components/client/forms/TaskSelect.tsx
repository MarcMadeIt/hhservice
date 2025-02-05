"use client";

import React, { useState } from "react";

interface ContactSelectProps {
  onChange: (value: string) => void;
}

const TaskSelect = ({ onChange }: ContactSelectProps) => {
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
        className="select select-bordered select-md md:select-lg"
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

export default TaskSelect;
