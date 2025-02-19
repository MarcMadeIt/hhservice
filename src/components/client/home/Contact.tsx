import React from "react";
import CallMeForm from "../forms/CallMeForm";
import Tip from "./Tip";

const Contact = () => {
  return (
    <article className="w-full h-full p-4 py-16">
      <div className="flex flex-col md:flex-row p-4 justify-center items-center h-full rounded-lg">
        <div className="flex-1 hidden lg:flex justify-center">
          <Tip />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <CallMeForm />
        </div>
      </div>
    </article>
  );
};

export default Contact;
