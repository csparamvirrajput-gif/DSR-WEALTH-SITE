
import React from "react";

export default function Hero() {
  return (
    <section id="home" className="pt-28 md:pt-32">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Build long‑term wealth with governance‑grade discipline
          </h1>
          <p className="mt-4 text-neutral-600 md:text-lg">
            We help entrepreneurs, affluent families, and senior professionals create and manage diversified portfolios—
            via goal mapping, strategic asset allocation, and disciplined reviews. No hype. Just process.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="badge">Risk‑profiling first</span>
            <span className="badge">Asset‑allocation led</span>
            <span className="badge">Periodic rebalancing</span>
          </div>
          <div className="mt-8 flex gap-3">
            <a href="#contact" className="btn btn-primary">Talk to us</a>
            <a href="#sip" className="btn btn-outline">Run a SIP projection</a>
          </div>
          <div className="mt-6 text-xs text-neutral-500">
            Led by a Chartered Wealth Manager (CWM) & Company Secretary (CS). Based in Ludhiana, serving clients pan‑India.
          </div>
        </div>
        <div className="grid gap-6">
          <div className="card p-6">
            <div className="font-semibold mb-3">Outcomes we focus on</div>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-2xl bg-neutral-50">
                <div className="font-medium">Capital for business expansion</div>
                <div className="text-neutral-600">Plan capex buffers & liquidity</div>
              </div>
              <div className="p-4 rounded-2xl bg-neutral-50">
                <div className="font-medium">Education corpus</div>
                <div className="text-neutral-600">India & overseas education goals</div>
              </div>
              <div className="p-4 rounded-2xl bg-neutral-50">
                <div className="font-medium">Second home planning</div>
                <div className="text-neutral-600">Align cash flows & tax</div>
              </div>
              <div className="p-4 rounded-2xl bg-neutral-50">
                <div className="font-medium">Succession‑ready family pools</div>
                <div className="text-neutral-600">Structures, nominations, WPs</div>
              </div>
            </div>
          </div>
          <div className="card p-6">
            <div className="font-semibold mb-3">Who we work with</div>
            <div className="text-sm text-neutral-600">
              Entrepreneurs • Affluent families • Senior corporate professionals • NRIs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
