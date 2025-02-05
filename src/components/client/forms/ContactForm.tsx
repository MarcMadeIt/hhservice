"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

import { createRequest } from "@/lib/client/actions";
import TaskSelect from "./TaskSelect";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [mail, setMail] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!isChecked) {
      setMessage("Du skal acceptere opbevaring af dine oplysninger.");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      // 1. Gem kundehenvendelsen i databasen
      await createRequest(name, mobile, category, isChecked);

      // 2. Send e-mail til virksomheden via EmailJS
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
      setMessage("Henvendelsen er sendt.");
    } catch (error) {
      console.error("Failed to send email:", error);
      setMessage("Noget gik galt. Prøv igen senere.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setMessage("");
    setName("");
    setMail("");
    setMobile("");
    setCategory("");
    setIsChecked(false);
  };

  return (
    <div>
      {isSuccess ? (
        <div className="flex flex-col gap-4 bg-base-100 p-10">
          <h2 className="text-xl font-bold">Tak for din henvendelse!</h2>
          <p>Vi vender tilbage til dig hurtigst muligt.</p>
          <button onClick={handleClose} className="btn btn-primary mt-5">
            Luk
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-base-100 p-10"
        >
          <h2 className="text-xl font-bold">Få et uforpligtende tilbud</h2>
          <TaskSelect onChange={(value) => setCategory(value)} />
          <label htmlFor="name" className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Navn</span>
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
              <span className="label-text">Mailadresse</span>
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
              <span className="label-text">Mobilnummer</span>
            </div>
            <input
              autoComplete="tel"
              id="phone"
              type="tel"
              pattern="(\+45\s?[0-9]{8}|[0-9]{3}\s?[0-9]{8})"
              placeholder="Indtast 8-cifret nummer"
              className="input input-bordered w-full "
              title="Telefonnummeret skal være præcis 8 cifre."
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </label>
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
              Jeg accepterer opbevaring af mine oplysninger i op til 30 dage
              &nbsp;
              <a className="link link-primary">Læs mere.</a>
            </span>
          </div>
          <div>
            {message && (
              <p className={`text-${isSuccess ? "green" : "red"}-500`}>
                {message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-5"
            disabled={isLoading}
          >
            {isLoading ? "Sender..." : "Bliv kontaktet"}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
