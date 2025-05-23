"use client";

import React, { useState } from "react";
import { createRequest } from "@/lib/client/actions";
import ConsentModal from "../modal/ConsentModal";
import TaskSelect from "./TaskSelect";

const OfferForm = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [mail, setMail] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [hasTyped, setHasTyped] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [successText, setSuccessText] = useState("");
  const charLimit = 200;

  const validatePhoneNumber = (phoneNumber: string) => {
    const danishPhoneRegex = /^(?:\+45\d{8}|\d{8})$/;
    return danishPhoneRegex.test(phoneNumber);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validatePhoneNumber(mobile)) {
      setErrorText("Ugyldigt telefonnummer");
      return;
    }

    if (!isChecked) {
      setErrorText("Du skal acceptere opbevaring af dine oplysninger.");
      return;
    }

    setIsLoading(true);
    setErrorText("");
    setSuccessText("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email: mail,
          phone: mobile,
          category,
          message,
          consent: isChecked,
        }),
      });

      if (!response.ok) throw new Error("Fejl i serverkald");

      setIsSuccess(true);
      setSuccessText("Henvendelsen er sendt.");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Fejl ved afsendelse:", error);
      setErrorText("Noget gik galt. Prøv igen senere.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= charLimit) {
      setMessage(value);
      setCharCount(value.length);
      if (!hasTyped) setHasTyped(true);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setSuccessText("");
    setErrorText("");
    setName("");
    setMail("");
    setMobile("");
    setCategory("");
    setMessage("");
    setIsChecked(false);
  };

  return (
    <div className="lg:max-w-2xl max-w-md w-full">
      {isSuccess ? (
        <div className="flex flex-col gap-4 bg-base-100 p-10 h-full md:h-[600px] rounded-lg shadow-md border-l-4 border-primary animate-fade-in">
          <h2 className="text-2xl font-bold text-primary">
            Tak for din henvendelse!
          </h2>
          <p className="text-base">
            Vi har modtaget din besked og vender tilbage hurtigst muligt –
            typisk inden for 24 timer.
          </p>
          <button
            onClick={handleClose}
            className="btn btn-primary mt-5 self-start"
          >
            Luk besked
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 bg-base-100 rounded-lg shadow-md p-8 md:p-10"
        >
          <h2 className="text-xl font-bold">Tilbud på opgave</h2>
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-10">
            <div className="flex-1 flex flex-col gap-3">
              <label htmlFor="name" className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text md:text-base">Navn</span>
                </div>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  type="text"
                  placeholder="Skriv dit navn"
                  className="input input-bordered w-full max-w-xs"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
              <label htmlFor="mail" className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text md:text-base">Mailadresse</span>
                </div>
                <input
                  id="mail"
                  name="mail"
                  autoComplete="email"
                  type="email"
                  placeholder="Skriv din e-mail"
                  className="input input-bordered w-full max-w-xs"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  required
                />
              </label>
              <label htmlFor="phone" className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text md:text-base">Mobilnummer</span>
                </div>
                <input
                  autoComplete="tel"
                  id="phone"
                  type="tel"
                  placeholder="Skriv dit mobilnummer"
                  className="input input-bordered w-full"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <TaskSelect onChange={(value) => setCategory(value)} />
              <label
                htmlFor="message"
                className="form-control w-full max-w-xs relative"
              >
                <div className="label">
                  <span className="label-text md:text-base">Besked</span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Beskriv dit behov, tidspunkt, adresse, osv."
                  className="textarea textarea-bordered textarea-md text-base w-full max-w-xs resize-none"
                  rows={5}
                  value={message}
                  onChange={handleMessageChange}
                  maxLength={charLimit}
                />
                {hasTyped && (
                  <div className="text-right text-xs text-gray-500 absolute -bottom-5 right-0">
                    {charCount}/{charLimit}
                  </div>
                )}
              </label>
            </div>
          </div>
          <div className="flex items-center justify-start gap-3">
            <label className="cursor-pointer flex items-center justify-start gap-3">
              <input
                type="checkbox"
                className="checkbox checkbox-md checkbox-primary"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                required
              />
            </label>
            <span className="label-text text-xs max-w-60">
              Jeg accepterer opbevaring af mine oplysninger i op til 30
              dage&nbsp;
              <ConsentModal buttonText="Læs mere" variant="primary" />
            </span>
          </div>
          {errorText && <p className="text-error">{errorText}</p>}
          {successText && <p className="text-success">{successText}</p>}
          <div>
            <button
              type="submit"
              className="btn btn-primary mt-5"
              disabled={isLoading}
            >
              {isLoading ? "Sender..." : "Send forespørgsel"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default OfferForm;
