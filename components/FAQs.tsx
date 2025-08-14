
import React from "react";

export default function FAQs() {
  const faqs = [
    {
      q: "Are you an Investment Adviser (IA)?",
      a: "We operate primarily as a Mutual Fund Distributor (MFD). If/when SEBI IA registration is obtained, IA services will be offered under that license. Until then, our role is distribution/execution with research‑backed frameworks and documentation.",
    },
    {
      q: "What minimums do you work with?",
      a: "Typical starting points are ₹15,000/month SIP or ₹1,00,000 lumpsum per family. We remain flexible based on goals and commitment to the review process.",
    },
    {
      q: "How often do you review portfolios?",
      a: "Usually every quarter; formal rebalancing checks happen semi‑annually or annually depending on the agreed IPS.",
    },
    {
      q: "Do you help with PMS/AIF?",
      a: "We facilitate access to third‑party PMS/AIF platforms as required. Suitability and documentation are handled case‑by‑case.",
    },
  ];
  return (
    <section id="faqs" className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <h2 className="text-2xl md:text-4xl font-extrabold">FAQs</h2>
        <div className="mt-6 grid gap-4">
          {faqs.map((f) => (
            <div key={f.q} className="card p-6">
              <div className="font-semibold">{f.q}</div>
              <div className="text-sm text-neutral-700 mt-2">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
