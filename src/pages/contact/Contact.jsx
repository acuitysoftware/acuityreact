import React from "react";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";

export default function ContactPage({ company }) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 font-body">
      <h1 className="text-3xl font-heading font-bold mb-6 text-primary">Contact Us</h1>
      <ContactInfo company={company} />
      <ContactForm />
    </div>
  );
}