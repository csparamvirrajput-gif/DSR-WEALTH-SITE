
'use client';
import React, { useMemo, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

function sipProjection(monthly = 15000, years = 5, annualReturnPct = 12, stepUpPct = 0) {
  const months = years * 12;
  const r = annualReturnPct / 100 / 12;
  let balance = 0;
  let investSoFar = 0;
  let installment = monthly;
  const rows: any[] = [];
  for (let m = 1; m <= months; m++) {
    balance += installment;
    investSoFar += installment;
    balance *= 1 + r;
    if (stepUpPct > 0 && m % 12 === 0) installment *= 1 + stepUpPct / 100;
    if (m % 3 === 0 || m === months) {
      rows.push({ month: m, label: `M${m}`, invested: Math.round(investSoFar), value: Math.round(balance) });
    }
  }
  return rows;
}

function currency(n: number) {
  return n.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
}

export default function SIP() {
  const [monthly, setMonthly] = useState(15000);
  const [years, setYears] = useState(5);
  const [ret, setRet] = useState(12);
  const [step, setStep] = useState(0);
  const data = useMemo(() => sipProjection(monthly, years, ret, step), [monthly, years, ret, step]);
  const invested = data.length ? data[data.length - 1].invested : 0;
  const value = data.length ? data[data.length - 1].value : 0;
  const gain = value - invested;

  return (
    <section id="sip" className="py-16 md:py-24 bg-neutral-50">
      <div className="container">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl md:text-4xl font-extrabold">SIP & Step‑Up Projection</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="card p-6">
            <div className="grid grid-cols-2 gap-4">
              <label className="text-sm">Monthly SIP (₹)<input className="w-full mt-1 rounded-xl border px-3 py-2" type="number" value={monthly} onChange={e=>setMonthly(Number(e.target.value||0))}/></label>
              <label className="text-sm">Years<input className="w-full mt-1 rounded-xl border px-3 py-2" type="number" value={years} onChange={e=>setYears(Number(e.target.value||0))}/></label>
              <label className="text-sm">Expected return (% p.a.)<input className="w-full mt-1 rounded-xl border px-3 py-2" type="number" value={ret} onChange={e=>setRet(Number(e.target.value||0))}/></label>
              <label className="text-sm">Step‑up each year (%)<input className="w-full mt-1 rounded-xl border px-3 py-2" type="number" value={step} onChange={e=>setStep(Number(e.target.value||0))}/></label>
              <div className="col-span-2 text-xs text-neutral-500">For illustration only. Actual outcomes vary with markets and fund selection.</div>
            </div>
          </div>
          <div className="card p-6">
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-4 rounded-xl bg-neutral-100 border">
                <div className="text-xs text-neutral-500">Invested</div>
                <div className="font-bold text-lg">{currency(invested)}</div>
              </div>
              <div className="p-4 rounded-xl bg-neutral-100 border">
                <div className="text-xs text-neutral-500">Estimated value</div>
                <div className="font-bold text-lg">{currency(value)}</div>
              </div>
              <div className="p-4 rounded-xl bg-neutral-100 border">
                <div className="text-xs text-neutral-500">Est. gain</div>
                <div className="font-bold text-lg">{currency(gain)}</div>
              </div>
            </div>
            <div className="h-64 mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
                  <XAxis dataKey="label" />
                  <YAxis hide />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="invested" name="Invested" dot={false} strokeWidth={2} />
                  <Line type="monotone" dataKey="value" name="Estimated value" dot={false} strokeWidth={2} strokeDasharray="4 4" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
