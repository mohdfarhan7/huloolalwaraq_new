"use client";
import React, { useRef, useState } from "react";

const PACKAGING_TYPES = [
  "Corrugated Box",
  "Rigid Box",
  "Mailer Box",
  "Folding Carton",
  "Custom",
];

export default function QuoteRequestForm({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({
    company: "",
    packagingType: "",
    quantity: "",
    specs: null as File | null,
    timeline: "",
    name: "",
    email: "",
    phone: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    if (e.target instanceof HTMLInputElement && e.target.type === 'file') {
      const fileInput = e.target as HTMLInputElement;
      setForm((prev) => ({
        ...prev,
        [name]: fileInput.files && fileInput.files.length > 0 ? fileInput.files[0] : null,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
        <p>Your quote request has been submitted. We will contact you soon.</p>
        <button className="mt-6 px-6 py-2 bg-deepgreen text-offwhite rounded-lg font-bold" onClick={onClose}>Close</button>
      </div>
    );
  }

  return (
    <form className="p-8 w-full max-w-[95vw] sm:max-w-md mx-auto my-4 bg-white rounded-2xl shadow-xl border border-kraft/30 max-h-[80vh] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-kraft scrollbar-track-offwhite hide-scrollbar" onSubmit={handleSubmit} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <div className="sticky top-0 z-10 bg-white pb-2 mb-4">
        <h2 className="text-3xl font-extrabold text-deepgreen text-center tracking-tight">Request a Quote</h2>
      </div>
      <div className="space-y-6">
        <div>
          <label className="block mb-1 font-semibold text-steel">Company Name</label>
          <input name="company" value={form.company} onChange={handleChange} required className="w-full px-4 py-3 border border-kraft/30 rounded-xl bg-offwhite focus:ring-2 focus:ring-deepgreen focus:outline-none transition" />
        </div>
        <div>
          <label className="block mb-1 font-semibold text-steel">Packaging Type</label>
          <select name="packagingType" value={form.packagingType} onChange={handleChange} required className="w-full px-4 py-3 border border-kraft/30 rounded-xl bg-offwhite focus:ring-2 focus:ring-deepgreen focus:outline-none transition">
            <option value="">Select type</option>
            {PACKAGING_TYPES.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-semibold text-steel">Quantity</label>
          <input name="quantity" type="number" min="1" value={form.quantity} onChange={handleChange} required className="w-full px-4 py-3 border border-kraft/30 rounded-xl bg-offwhite focus:ring-2 focus:ring-deepgreen focus:outline-none transition" />
        </div>
        <div>
          <label className="block mb-1 font-semibold text-steel">Upload Specifications</label>
          <input name="specs" type="file" ref={fileInputRef} onChange={handleChange} accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" className="w-full px-4 py-2 border border-kraft/30 rounded-xl bg-offwhite focus:ring-2 focus:ring-deepgreen focus:outline-none transition file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-kraft/20 file:text-deepgreen file:font-semibold" />
        </div>
        <div className="border-t border-kraft/20 my-4" />
        <div>
          <label className="block mb-1 font-semibold text-steel">Delivery Timeline</label>
          <input name="timeline" value={form.timeline} onChange={handleChange} required className="w-full px-4 py-3 border border-kraft/30 rounded-xl bg-offwhite focus:ring-2 focus:ring-deepgreen focus:outline-none transition" placeholder="e.g. 2 weeks" />
        </div>
        <div>
          <label className="block mb-1 font-semibold text-steel">Contact Name</label>
          <input name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 border border-kraft/30 rounded-xl bg-offwhite focus:ring-2 focus:ring-deepgreen focus:outline-none transition" />
        </div>
        <div>
          <label className="block mb-1 font-semibold text-steel">Email</label>
          <a href={`mailto:${form.email}`} className="cursor-pointer hover:text-deepgreen">
            <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-3 border border-kraft/30 rounded-xl bg-offwhite focus:ring-2 focus:ring-deepgreen focus:outline-none transition" />
          </a>
        </div>
        <div>
          <label className="block mb-1 font-semibold text-steel">Phone</label>
          <a href={`tel:${form.phone}`} className="cursor-pointer hover:text-deepgreen">
            <input name="phone" type="tel" value={form.phone} onChange={handleChange} required className="w-full px-4 py-3 border border-kraft/30 rounded-xl bg-offwhite focus:ring-2 focus:ring-deepgreen focus:outline-none transition" />
          </a>
        </div>
      </div>
      <button type="submit" className="w-full bg-deepgreen text-offwhite py-3 rounded-xl font-extrabold mt-6 text-lg shadow-lg hover:bg-kraft hover:text-deepgreen transition-all disabled:opacity-60" disabled={submitting}>
        {submitting ? "Submitting..." : "Submit Request"}
      </button>
      <button type="button" className="w-full mt-2 py-2 rounded-xl border border-kraft/30 text-steel hover:bg-kraft/10 transition" onClick={onClose}>Cancel</button>
    </form>
  );
} 