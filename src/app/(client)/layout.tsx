import Footer from "@/components/client/layout/Footer";
import Header from "@/components/client/layout/Header";
import { FaPhone } from "react-icons/fa6";

export default function clientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="sm:h-lvh h-dvh">
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
      <article className="sticky bottom-0 w-full px-2 block md:hidden">
        <div className="p-4 bg-secondary text-neutral-content rounded-tl-lg rounded-tr-lg ">
          <a
            href="tel:+4526181201"
            className="flex  gap-2 items-center justify-center"
          >
            Ring til os <FaPhone /> +4526181201
          </a>
        </div>
      </article>
    </div>
  );
}
