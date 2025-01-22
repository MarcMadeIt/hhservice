"use client";

import React from "react";
import ContactSelect from "./ContactSelect";

const ContactForm = () => {
  return (
    <div>
      <form action="" className="flex flex-col gap-4 bg-base-100 p-10">
        <h2 className="text-xl font-bold">Få et uforpligtende tilbud</h2>
        <ContactSelect />
        <label htmlFor="name" className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Navn</span>
          </div>
          <input
            id="name"
            name="name"
            autoComplete="name"
            type="text"
            placeholder="Type here"
            className="input input-bordered input-md w-full max-w-xs"
            required
          />
        </label>
        <label htmlFor="phone" className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Mobilnummer</span>
          </div>
          <input
            autoComplete="tel"
            id="phone"
            type="tel"
            pattern="[0-9]{8}"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            title="Telefonnummeret skal være præcis 8 cifre."
            required
          />
        </label>
        <div className="flex items-center justify-start gap-3">
          <label className="cursor-pointer flex items-center justify-start gap-3">
            <input
              type="checkbox"
              className="checkbox checkbox-md checkbox-primary "
            />
          </label>
          <span className="label-text text-xs max-w-60">
            Jeg accepterer opbevaring af mine oplysninger i op til 30 dage
            &nbsp;
            <a className="link link-primary">Læs mere.</a>
          </span>
        </div>
        <button type="submit" className="btn btn-primary mt-5">
          Bliv kontaktet
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
