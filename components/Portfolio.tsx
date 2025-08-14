
'use client';
import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function series() {
  const out: any[] = [];
  let base = 100;
  for (let i = 0; i <= 60; i++) {
    const bump = 0.35 + Math.sin(i / 12) * 0.1;
    base = base * (1 + bump / 100);
    if (i % 3 === 0) out.push({ label: `M${i}`, value: Math.round(base) });
  }
  return out;
}

export default function Portfolio() {
  const alloc = [
    { name: "Equity", value: 55 },
    { name: "Debt", value: 30 },
    { name: "Gold", value: 10 },
    { name: "International", value: 5 },
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-neutral-50">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-4xl font-extrabold">Balanced portfolios, built to last</h2>
          <p className="mt-4 text-neutral-600">
            Long‑term wealth is a function of asset allocation, discipline, and behavior. We design portfolios to manage drawdowns and keep you invested through cycles.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {["Risk profiling & IPS","Allocation & fund selection","Execution & tracking","Periodic review & rebalancing"].map((t) => (
              <div key={t} className="p-4 rounded-2xl bg-white border text-sm flex items-start gap-3">
                <span>✓</span><span className="font-medium">{t}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 text-xs text-neutral-500">We prefer simple, diversified portfolios with clear exit rules for underperformers.</div>
        </div>
        <div className="card p-4">
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={series()} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
                <XAxis dataKey="label" hide />
                <YAxis hide />
                <Tooltip />
                <Area type="monotone" dataKey="value" strokeWidth={2} fillOpacity={0.2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-4 gap-3 mt-4 text-xs">
            {alloc.map((a) => (
              <div key={a.name} className="p-3 rounded-xl bg-neutral-100 border text-center">
                <div className="font-semibold">{a.value}%</div>
                <div className="text-neutral-500">{a.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
