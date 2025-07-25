"use client";
import React, { useState } from "react";
import QuoteRequestForm from "./QuoteRequestForm";

export default function FloatingQuoteButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-deepgreen text-offwhite px-6 py-4 rounded-full shadow-lg font-bold text-lg hover:bg-kraft hover:text-deepgreen transition-all"
        aria-label="Request a Quote"
      >
        Request a Quote
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-xl font-bold text-steel hover:text-deepgreen"
              aria-label="Close"
            >
              ×
            </button>
            <QuoteRequestForm onClose={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
} 