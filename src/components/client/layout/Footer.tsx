import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaHandScissors,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import ConsentModal from "../modal/ConsentModal";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-base-200 text-base-content p-10 border-t-2 border-gray-300 sm:text-base font-medium">
        <nav className="flex flex-col gap-3">
          <Link href="/service/graesslaaning" className="link link-hover">
            Græsslåning
          </Link>
          <Link href="/service/beskaering" className="link link-hover">
            Beskæring
          </Link>
          <Link href="/service/brolaegning" className="link link-hover">
            Brolægning
          </Link>
          <Link href="/service/bortskaffelse" className="link link-hover">
            Bortskaffelse
          </Link>
        </nav>
        <nav className="flex flex-col gap-3">
          <Link href="/service/haekkeklipning" className="link link-hover">
            Hækkeklipning
          </Link>
          <Link href="/service/snerydning" className="link link-hover">
            Snerydning
          </Link>
          <Link href="/service/ukrudtfjernelse" className="link link-hover">
            Udkrudtfjernelse
          </Link>
          <Link href="/service/byggepladsservice" className="link link-hover">
            Byggepladsservice
          </Link>
        </nav>
        <nav className="flex flex-col gap-3">
          <Link href="/service/#priseeksempler" className="link link-hover">
            Priseksempler
          </Link>
          <Link href="/service/#erhverv" className="link link-hover">
            Erhvervsløsninger
          </Link>
          <ConsentModal
            buttonText="Samtykke & Privatlivspolitik"
            variant="hover"
          />
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
            <Link
              href="https://www.facebook.com/share/18mtAGts1w/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={45} />
            </Link>
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
