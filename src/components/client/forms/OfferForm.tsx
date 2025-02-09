"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

import { createRequest } from "@/lib/client/actions";
import TaskSelect from "./TaskSelect";
import ConsentModal from "../modal/ConsentModal";

const OfferForm = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [mail, setMail] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [hasTyped, setHasTyped] = useState(false);
  const charLimit = 200;
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [successText, setSuccessText] = useState("");

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
      await createRequest(name, mobile, mail, category, isChecked, message);

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
        },
        publicKey
      );

      setIsSuccess(true);
      setSuccessText("Henvendelsen er sendt.");
    } catch (error) {
      console.error("Failed to send email:", error);
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
      if (!hasTyped) {
        setHasTyped(true);
      }
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
        <div className="flex flex-col gap-4 bg-base-100 p-10 h-[600px]">
          <h2 className="text-xl font-bold">Tak for din henvendelse!</h2>
          <p>Vi vender tilbage til dig hurtigst muligt.</p>
          <button onClick={handleClose} className="btn btn-primary mt-5">
            Luk
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
                  placeholder="Indtast 8-cifret nummer"
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
                  placeholder="Beskriv dit evt. behov, tidspunkt, adresse, osv."
                  className="textarea textarea-bordered textarea-md text-base  w-full max-w-xs resize-none"
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

            <span className="label-text text-xs max-w-60 ">
              Jeg accepterer opbevaring af mine oplysninger i op til 30 dage
              &nbsp;
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
