"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
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
    label: "Email",
    value: "hello@sommytech.com",
    href: "mailto:hello@sommytech.com",
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 800 000 0000",
    href: "tel:+2348000000000",
    description: "Let's discuss your project",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nigeria",
    href: "#",
    description: "Serving clients globally",
  },
];

const projectTypes = [
  "Web Development",
  "Mobile Application",
  "UI/UX & Product Design",
  "Cloud Solutions",
  "Cybersecurity",
  "Technology Consulting",
];

const trustPoints = [
  "Clear communication",
  "Security-conscious development",
  "Scalable technology solutions",
  "Long-term technical thinking",
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-zinc-950 py-24 text-white sm:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="absolute left-[-10%] top-[15%] h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[5%] h-[420px] w-[420px] rounded-full bg-teal-500/10 blur-[120px]" />

        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Let&apos;s build something meaningful
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Have an idea?
            <span className="block bg-gradient-to-r from-emerald-300 via-green-400 to-teal-400 bg-clip-text text-transparent">
              Let&apos;s make it real.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            Whether you are launching a new digital product, modernizing an
            existing system, or exploring what technology can do for your
            business, we would love to hear from you.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Contact Card */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8">
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                  <MessageSquare size={22} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Start a conversation
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500">
                    We&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-black/20 p-4 transition-all duration-300 hover:border-emerald-400/20 hover:bg-emerald-400/[0.04]"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 transition-colors group-hover:border-emerald-400/20 group-hover:text-emerald-300">
                        <Icon size={19} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                          {item.label}
                        </p>
                        <p className="mt-1 truncate font-medium text-white">
                          {item.value}
                        </p>
                        <p className="mt-0.5 text-xs text-zinc-500">
                          {item.description}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={17}
                        className="text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-300"
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Trust Card */}
            <div className="rounded-3xl border border-emerald-400/10 bg-gradient-to-br from-emerald-400/[0.08] via-white/[0.02] to-transparent p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                  <Sparkles size={19} />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Built around your goals
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    We approach every project with a focus on clarity,
                    reliability, security, and long-term value.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-2 text-sm text-zinc-400"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-emerald-400"
                    />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                <Clock3 size={19} />
              </div>

              <div>
                <p className="font-medium text-white">
                  Available for new projects
                </p>
                <p className="mt-1 text-sm text-zinc-500">
                  Tell us what you&apos;re working on and let&apos;s explore
                  the possibilities.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8 lg:p-10"
          >
            <div className="mb-8">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-300">
                Project enquiry
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Tell us about your project
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                Share a few details and we&apos;ll have a better understanding
                of how we can help.
              </p>
            </div>

            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Full name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-400/50 focus:bg-black/30 focus:ring-4 focus:ring-emerald-400/5"
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
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-400/50 focus:bg-black/30 focus:ring-4 focus:ring-emerald-400/5"
                  />
                </div>
              </div>

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
                    placeholder="Company name"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-400/50 focus:bg-black/30 focus:ring-4 focus:ring-emerald-400/5"
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
                    className="w-full appearance-none rounded-xl border border-white/10 bg-zinc-950 px-4 py-3.5 text-sm text-zinc-300 outline-none transition focus:border-emerald-400/50 focus:ring-4 focus:ring-emerald-400/5"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

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
                  className="w-full appearance-none rounded-xl border border-white/10 bg-zinc-950 px-4 py-3.5 text-sm text-zinc-300 outline-none transition focus:border-emerald-400/50 focus:ring-4 focus:ring-emerald-400/5"
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  <option value="discuss">Let&apos;s discuss</option>
                  <option value="small">Small project</option>
                  <option value="medium">Medium project</option>
                  <option value="large">Large project</option>
                  <option value="enterprise">Enterprise project</option>
                </select>
              </div>

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
                  rows={6}
                  placeholder="What are you building? What problem are you trying to solve?"
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-400/50 focus:bg-black/30 focus:ring-4 focus:ring-emerald-400/5"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 px-6 py-4 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/20"
              >
                Send project enquiry
                <Send
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
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
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 overflow-hidden rounded-3xl border border-emerald-400/15 bg-gradient-to-r from-emerald-500/[0.12] via-green-500/[0.06] to-transparent"
        >
          <div className="relative flex flex-col gap-6 p-7 sm:p-9 md:flex-row md:items-center md:justify-between">
            <div className="relative">
              <p className="text-sm font-medium text-emerald-300">
                Not ready to start yet?
              </p>

              <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                Explore what we can build together.
              </h3>
            </div>

            <Link
              href="/services"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-emerald-400/30 hover:bg-emerald-400/10"
            >
              Explore our services
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}