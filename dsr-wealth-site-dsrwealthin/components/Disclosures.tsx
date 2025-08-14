
import React from "react";

export default function Disclosures() {
  return (
    <section id="disclosures" className="py-16 md:py-24 bg-neutral-50">
      <div className="container max-w-5xl">
        <h2 className="text-2xl md:text-4xl font-extrabold">Disclosures</h2>
        <div className="mt-6 grid gap-4 text-sm">
          <div className="card p-6">
            <p><strong>Regulatory status:</strong> Mutual Fund Distributor (AMFI ARN – <em>insert ARN</em>). Not a SEBI‑registered Investment Adviser unless specifically stated.</p>
            <p className="mt-2"><strong>No guaranteed returns:</strong> Investments in mutual funds and securities markets are subject to market risks. Read all scheme related documents carefully.</p>
            <p className="mt-2"><strong>Illustrations only:</strong> Any charts, calculators, or comparisons are for education. Past performance does not guarantee future results.</p>
            <p className="mt-2"><strong>Privacy:</strong> Client information is kept confidential and used only to deliver services. KYC/AML norms apply.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
