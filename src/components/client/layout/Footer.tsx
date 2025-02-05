import React from "react";
import {
  FaFacebook,
  FaHandScissors,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-base-200 text-base-content p-10 border-t-2 border-gray-300 sm:text-base font-medium">
        <nav>
          <a className="link link-hover">Græsslåning</a>
          <a className="link link-hover">Beskæring</a>
          <a className="link link-hover">Brolægning</a>
          <a className="link link-hover">Bortskaffelse</a>
        </nav>
        <nav>
          <a className="link link-hover">Hækkeklipning</a>
          <a className="link link-hover">Snerydning</a>
          <a className="link link-hover">Buskrydning</a>
          <a className="link link-hover">Byggepladsservice</a>
        </nav>
        <nav>
          <a className="link link-hover">Samtykkeerklæring</a>
          <a className="link link-hover">Privatlivspolitik</a>
        </nav>
      </footer>
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <p>
            Halsnæs Haveservice
            <br />
            CVR: 44777444
            <br />
            Ellevej 55, 3300 Frederiksværk
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-6 text-secondary">
            <a>
              <FaFacebook size={45} />
            </a>
            <a>
              <FaInstagram size={45} />
            </a>
            <a>
              <FaLinkedin size={45} />
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
