import About from "@/components/client/home/About";
import Contact from "@/components/client/home/Contact";
import Hero from "@/components/client/home/Hero";
import Services from "@/components/client/home/Services";
import React from "react";
import FAQ from "@/components/client/home/FAQ";
import Review from "@/components/client/home/Reviews";
import News from "@/components/client/home/News";
import Locations from "@/components/client/home/Locations";

const Home = () => {
  return (
    <>
      <section className="h-full">
        <Hero />
      </section>
      <section className="h-full md:h-[800px]">
        <Services />
      </section>
      <section className="h-full lg:h-[800px]">
        <About />
      </section>
      <section className="h-full md:h-[800px]">
        <Contact />
      </section>
      <section className="h-[380px]  md:h-[500px]">
        <Review />
      </section>
      <section className="h-full md:h-[800px]">
        <FAQ />
      </section>
      <section className="h-[380px] sm:h-[500px] md:h-[700px]">
        <News />
      </section>
      <section className="h-full md:h-[500px] mt-10">
        <Locations />
      </section>
    </>
  );
};

export default Home;
