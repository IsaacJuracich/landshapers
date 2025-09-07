import React from "react";
import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { TrustStrip } from "./components/sections/TrustStrip";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";
import { Features } from "./components/sections/Features";
import { Testimonials } from "./components/sections/Testimonials";
import { Process } from "./components/sections/Process";
import { HomeCTA } from "./components/sections/HomeCTA";
import { Footer } from "./components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Features />
        <Testimonials />
        <Process />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
