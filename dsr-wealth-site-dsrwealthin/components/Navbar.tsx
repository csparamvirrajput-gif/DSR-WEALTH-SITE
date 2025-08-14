
import React from "react";

export default function Navbar() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#why-fund", label: "Right Fund" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#services", label: "Services" },
    { href: "#sip", label: "SIP" },
    { href: "#faqs", label: "FAQs" },
    { href: "#disclosures", label: "Disclosures" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="container py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src="/logo.svg" className="w-10 h-10" alt="DSR logo" />
          <div className="leading-tight">
            <div className="font-bold">DSR Wealth Advisory</div>
            <div className="text-xs text-neutral-500">Process-driven wealth partner</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-neutral-900 text-neutral-600">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-primary">Book a 15‑min consult</a>
      </div>
    </div>
  );
}
