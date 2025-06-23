'use client';
import React, { useState } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import toast from 'react-hot-toast';

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const ContactSection = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name')?.toString().trim() || '';
    const email = data.get('email')?.toString().trim() || '';
    const message = data.get('message')?.toString().trim() || '';

    if (!name) {
      toast.error('Please enter your name.');
      return;
    }
    if (!email || !isValidEmail(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    if (!message) {
      toast.error('Please enter a message.');
      return;
    }

    setSending(true);
    try {
      const res = await fetch("https://formspree.io/f/mvgrwaqy", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });
      if (res.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-900">
      <div className="container mx-auto max-w-2xl px-4">
        <h2 className="font-serif text-3xl md:text-4xl mb-6 text-emerald-300 text-center">Contact Me</h2>
        <p className="text-white/80 text-center mb-8 md:text-lg">
          Interested in working together or have a question? Fill out the form below or reach out directly.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col gap-4"
        >
          <label className="text-white/80 font-semibold" htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-emerald-300 focus:outline-none"
            autoComplete="name"
          />
          <label className="text-white/80 font-semibold" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-emerald-300 focus:outline-none"
            autoComplete="email"
          />
          <label className="text-white/80 font-semibold" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-emerald-300 focus:outline-none resize-none"
          />
          <button
            type="submit"
            disabled={sending}
            className="mt-4 bg-emerald-300 text-gray-900 font-semibold py-2 rounded-lg shadow hover:bg-emerald-200 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
          <a
            href="mailto:mwiruki@outlook.com"
            className="inline-flex items-center gap-2 bg-emerald-300 text-gray-900 px-4 py-2 rounded-lg font-semibold shadow hover:bg-emerald-200 transition"
          >
            <FaEnvelope /> Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/brianmwiruki/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-emerald-300 text-emerald-300 px-4 py-2 rounded-lg font-semibold hover:bg-emerald-300 hover:text-gray-900 transition"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};
