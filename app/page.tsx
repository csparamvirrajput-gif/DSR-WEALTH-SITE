
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RightFund from "@/components/RightFund";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import SIP from "@/components/SIP";
import FAQs from "@/components/FAQs";
import Disclosures from "@/components/Disclosures";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <main className="space-y-0 pt-24">
        <Hero />
        <RightFund />
        <Portfolio />
        <Services />
        <SIP />
        <FAQs />
        <Disclosures />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
