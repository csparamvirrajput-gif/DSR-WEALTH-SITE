
'use client';
import React, { useMemo } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

function makeFundSeries(years = 5, cagr = 24) {
  const months = years * 12;
  const r = Math.pow(1 + cagr / 100, 1 / 12) - 1;
  const data: any[] = [];
  let v = 100;
  for (let m = 1; m <= months; m++) {
    v *= 1 + r;
    if (m % 3 === 0 || m === months) data.push({ label: `M${m}`, value: Math.round(v) });
  }
  return data;
}

export default function RightFund() {
  const seriesA = useMemo(() => makeFundSeries(5, 24), []);
  const seriesB = useMemo(() => makeFundSeries(5, 16), []);
  const merged = seriesA.map((a, i) => ({ label: a.label, a: a.value, b: seriesB[i]?.value }));

  const bullets = [
    "Style & factor exposure (growth vs value, large vs mid/small)",
    "Total cost & capacity (expense ratio, AUM, cash levels)",
    "Portfolio construction & risk control (drawdown discipline)",
    "Process consistency & team depth (beyond star-manager risk)",
    "Tax impact & holding period strategy",
  ];

  return (
    <section id="why-fund" className="py-16 md:py-24">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-4xl font-extrabold">
            Why picking the <span className="text-[var(--brand-ink)]">right fund</span> matters
          </h2>
          <p className="mt-4 text-neutral-600">
            Funds in the same category can deliver very different outcomes. Our selection framework prioritizes risk‑adjusted returns and downside control—not just recent rank charts.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {bullets.map((b) => (
              <li key={b} className="flex gap-2 items-start"><span>•</span><span>{b}</span></li>
            ))}
          </ul>
          <div className="mt-6 text-xs text-neutral-500">Illustration only. Past performance is not indicative of future results.</div>
        </div>
        <div className="card p-4">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={merged} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
                <XAxis dataKey="label" hide />
                <YAxis hide />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="a" name="Fund A (Reg)" dot={false} strokeWidth={2} />
                <Line type="monotone" dataKey="b" name="Fund B (Reg)" dot={false} strokeDasharray="4 4" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
