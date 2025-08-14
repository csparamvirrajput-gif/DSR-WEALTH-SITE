
import React from "react";

export default function Footer() {
  return (
    <footer className="py-10 border-t">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" className="w-9 h-9" alt="DSR logo"/>
          <div>
            <div className="font-semibold">DSR Wealth Advisory</div>
            <div className="text-xs text-neutral-500">© {new Date().getFullYear()} • All rights reserved</div>
          </div>
        </div>
        <div className="text-xs text-neutral-500 flex flex-col md:flex-row gap-2 md:gap-6 text-center">
          <span>SEBI / AMFI disclosures available on request</span>
          <span>Investments are subject to market risks</span>
        </div>
      </div>
    </footer>
  );
}
