
import React from "react";

export default function Services() {
  const cards = [
    {
      title: "Corporate Secretarial",
      desc: "Annual filings, board support, registers & records, stakeholder services.",
      points: ["ROC filings & returns","Board minutes & resolutions","RTA coordination"],
    },
    {
      title: "Corporate Advisory",
      desc: "Incorporations, restructuring, governance frameworks, policy & SOPs.",
      points: ["Entity setup & licenses","M&A documentation","Policy & SOP drafting"],
    },
    {
      title: "Family Wealth Planning",
      desc: "Goal mapping, MF distribution, PMS/AIF facilitation, estate basics.",
      points: ["Risk profile & IPS","Fund selection & review","Succession basics"],
    },
  ];
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-extrabold">Services</h2>
        <p className="mt-3 text-neutral-600 md:w-2/3">
          We combine corporate governance rigor with practical wealth execution. Engagements are structured, documented, and reviewed.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="card p-6">
              <div className="font-semibold">{c.title}</div>
              <p className="text-sm text-neutral-600 mt-2">{c.desc}</p>
              <ul className="mt-4 text-sm space-y-2">
                {c.points.map((p) => (<li key={p} className="flex items-start gap-2">✓ {p}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
