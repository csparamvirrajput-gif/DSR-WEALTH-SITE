
'use client';
import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle"|"submitting"|"done">("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("done"), 900);
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl md:text-4xl font-extrabold">Let's build your plan</h2>
          <p className="mt-4 text-neutral-600">Book a 15‑minute discovery call. We'll understand your goals and outline a simple next‑step plan.</p>
          <div className="mt-6 grid gap-3 text-sm">
            <div className="flex items-center gap-2">📞 +91‑<em>your number</em></div>
            <div className="flex items-center gap-2">✉️ <em>your@email</em></div>
            <div className="flex items-center gap-2">📍 Ludhiana, Punjab • Serving pan‑India</div>
          </div>
          <div className="mt-6 text-xs text-neutral-500">Office visits by appointment only.</div>
        </div>
        <div className="card p-6">
          {status !== "done" ? (
            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <label className="text-sm">Name<input required className="w-full mt-1 rounded-xl border px-3 py-2" value={form.name} onChange={e=>setForm({...form, name: e.target.value})}/></label>
                <label className="text-sm">Phone<input className="w-full mt-1 rounded-xl border px-3 py-2" value={form.phone} onChange={e=>setForm({...form, phone: e.target.value})}/></label>
              </div>
              <label className="text-sm">Email<input type="email" className="w-full mt-1 rounded-xl border px-3 py-2" value={form.email} onChange={e=>setForm({...form, email: e.target.value})}/></label>
              <label className="text-sm">Your message<textarea rows={4} className="w-full mt-1 rounded-xl border px-3 py-2" value={form.message} onChange={e=>setForm({...form, message: e.target.value})}></textarea></label>
              <div className="text-xs text-neutral-500">By submitting you consent to be contacted for this enquiry. We do not spam.</div>
              <div><button className="btn btn-primary" disabled={status==='submitting'}>{status==='submitting'?'Submitting…':'Send enquiry'}</button></div>
            </form>
          ) : (
            <div className="p-6 bg-neutral-50 rounded-2xl text-sm">
              <div className="font-semibold">Thanks! Your request has been noted.</div>
              <div className="text-neutral-600 mt-1">We'll reach out shortly to schedule a call.</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
