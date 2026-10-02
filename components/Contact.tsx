"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    title: "Email us",
    description: "Our team is ready to answer your questions.",
    value: "hello@sommytech.com",
    href: "mailto:hello@sommytech.com",
  },
  {
    icon: Phone,
    title: "Call us",
    description: "Speak directly with our technology team.",
    value: "+1 (234) 567-890",
    href: "tel:+1234567890",
  },
  {
    icon: MapPin,
    title: "Visit our office",
    description: "Come meet our team and explore possibilities.",
    value: "123 Innovation Drive, Tech City, 12345",
    href: "#",
  },
];

const projectTypes = [
  "Web Development",
  "Mobile Application",
  "UI/UX Design",
  "Cloud Solutions",
  "Cybersecurity",
  "IT Consulting",
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-zinc-950 py-24 sm:py-32"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Ambient glows */}
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-green-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[140px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-medium text-green-400">
            <MessageSquare className="h-4 w-4" />
            Let&apos;s build something great
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Have a project in mind?
            <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Let&apos;s talk about it.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Tell us what you&apos;re building, what you&apos;re trying to solve,
            or where you want to go next. Our team will help turn your ideas
            into practical digital solutions.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Availability card */}
            <div className="mb-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-400/10">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
                  </span>
                </div>

                <div>
                  <p className="font-semibold text-white">
                    We&apos;re available
                  </p>
                  <p className="text-sm text-zinc-500">
                    Currently accepting new projects
                  </p>
                </div>
              </div>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {contactDetails.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                  >
                    <Link
                      href={item.href}
                      className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-green-400/30 hover:bg-white/[0.06]"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-green-400/10 bg-green-400/10 text-green-400 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-semibold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm text-zinc-500">
                          {item.description}
                        </p>

                        <p className="mt-2 break-words text-sm font-medium text-green-400 transition-colors group-hover:text-green-300">
                          {item.value}
                        </p>
                      </div>

                      <ArrowRight className="ml-auto mt-1 hidden h-4 w-4 shrink-0 text-zinc-600 transition-all group-hover:translate-x-1 group-hover:text-green-400 sm:block" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Response time */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-br from-green-500/10 to-transparent p-5">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
                  <Clock3 className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Quick response
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-500">
                    Send us your project details and our team will get back to
                    you as soon as possible.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust points */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                "Dedicated support",
                "Clear communication",
                "Scalable solutions",
                "Long-term partnership",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-zinc-400"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-green-400" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8 lg:p-10"
          >
            <div className="mb-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 text-zinc-950">
                <Sparkles className="h-5 w-5" />
              </div>

              <h3 className="text-2xl font-bold text-white">
                Start a conversation
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Fill out the form below and tell us a little about your
                project.
              </p>
            </div>

            <form className="space-y-5">
              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Your name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-green-400/50 focus:ring-2 focus:ring-green-400/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-green-400/50 focus:ring-2 focus:ring-green-400/10"
                  />
                </div>
              </div>

              {/* Company + Project type */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Company
                    <span className="ml-1 text-zinc-600">(optional)</span>
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-green-400/50 focus:ring-2 focus:ring-green-400/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Project type
                  </label>

                  <select
                    id="projectType"
                    name="projectType"
                    defaultValue=""
                    required
                    className="w-full appearance-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-zinc-400 outline-none transition focus:border-green-400/50 focus:ring-2 focus:ring-green-400/10"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-zinc-900">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Budget */}
              <div>
                <label
                  htmlFor="budget"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Estimated budget
                  <span className="ml-1 text-zinc-600">(optional)</span>
                </label>

                <select
                  id="budget"
                  name="budget"
                  defaultValue=""
                  className="w-full appearance-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-zinc-400 outline-none transition focus:border-green-400/50 focus:ring-2 focus:ring-green-400/10"
                >
                  <option value="" disabled>
                    Select a budget range
                  </option>
                  <option value="under-5k" className="bg-zinc-900">
                    Under $5,000
                  </option>
                  <option value="5k-10k" className="bg-zinc-900">
                    $5,000 – $10,000
                  </option>
                  <option value="10k-25k" className="bg-zinc-900">
                    $10,000 – $25,000
                  </option>
                  <option value="25k-plus" className="bg-zinc-900">
                    $25,000+
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Tell us about your project
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="What are you looking to build or improve?"
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-green-400/50 focus:ring-2 focus:ring-green-400/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 px-6 py-4 font-semibold text-zinc-950 shadow-lg shadow-green-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-green-500/20"
              >
                Send project enquiry
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <p className="text-center text-xs leading-5 text-zinc-600">
                By submitting this form, you agree to be contacted regarding
                your enquiry.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:p-8"
        >
          <div>
            <p className="text-sm font-medium text-green-400">
              Not sure where to start?
            </p>

            <h3 className="mt-1 text-xl font-bold text-white">
              Let&apos;s figure it out together.
            </h3>

            <p className="mt-1 text-sm text-zinc-500">
              We can discuss your idea and identify the right technology
              approach.
            </p>
          </div>

          <Link
            href="mailto:hello@sommytech.com"
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-green-400/30 hover:bg-green-400/10"
          >
            Talk to our team
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
