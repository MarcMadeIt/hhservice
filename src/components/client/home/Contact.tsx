import React from "react";
import CallMeForm from "../forms/CallMeForm";
import ServiceTip from "./ServiceTip";

const Contact = () => {
  return (
    <article className="w-full h-full p-4 py-16">
      <div className="flex flex-col md:flex-row p-4 justify-center items-center h-full rounded-lg">
        <div className="flex-1 hidden md:flex">
          <ServiceTip />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <CallMeForm />
        </div>
      </div>
    </article>
  );
};

export default Contact;
