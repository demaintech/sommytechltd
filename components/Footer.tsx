"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Twitter,
} from "lucide-react";

const services = [
  { label: "Web Development", href: "/services" },
  { label: "Mobile Applications", href: "/services" },
  { label: "Cloud Solutions", href: "/services" },
  { label: "UI/UX Design", href: "/services" },
  { label: "Cybersecurity", href: "/services" },
  { label: "IT Consulting", href: "/services" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const socialLinks = [
  {
    label: "Twitter",
    href: "#",
    icon: Twitter,
  },
  {
    label: "GitHub",
    href: "#",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: Linkedin,
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-zinc-950 text-zinc-400">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-green-500/10 blur-[140px]" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* =========================================
            CTA
        ========================================= */}
        <div className="container mx-auto px-4 pt-16 sm:px-6 lg:px-8 lg:pt-20">
          <div className="relative overflow-hidden rounded-[2rem] border border-green-400/20 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-transparent p-8 sm:p-10 lg:p-12">
            {/* CTA glow */}
            <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full bg-green-400/10 blur-[100px]" />

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-green-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  Let&apos;s build the future
                </div>

                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Ready to turn your idea into
                  <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    something remarkable?
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                  Whether you&apos;re launching a new product, modernizing an
                  existing system, or solving a complex technology challenge,
                  our team is ready to help.
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-green-400 px-6 py-3.5 text-sm font-bold text-zinc-950 shadow-lg shadow-green-500/10 transition-all duration-300 hover:-translate-y-1 hover:bg-green-300 hover:shadow-green-500/20"
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* =========================================
            Main Footer
        ========================================= */}
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
            {/* Brand */}
            <div>
              {/* <Link href="/" className="inline-flex items-center">
                <Image
                  src="/assets/logo.jpg"
                  width={150}
                  height={150}
                  alt="SommyTech Global Solutions LTD"
                  className="h-14 w-14 rounded-xl object-cover ring-1 ring-white/10"
                />
              </Link> */}

              <h3 className="mt-6 text-xl font-bold text-white">
                SommyTech
                <span className="text-green-400">.</span>
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-500">
                Building modern digital experiences and technology solutions
                that help ambitious businesses grow, adapt, and move forward.
              </p>

              {/* Availability */}
              <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                </span>

                <span className="text-xs font-medium text-zinc-300">
                  Available for new projects
                </span>
              </div>

              {/* Contact shortcuts */}
              <div className="mt-7 space-y-3">
                <a
                  href="mailto:hello@sommytech.com"
                  className="group flex items-center gap-3 text-sm transition-colors hover:text-green-400"
                >
                  <Mail className="h-4 w-4 text-green-400" />
                  hello@sommytech.com
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                </a>

                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-green-400" />
                  <span>123 Innovation Drive, Tech City</span>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-8 flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-500 transition-all duration-300 hover:-translate-y-1 hover:border-green-400/30 hover:bg-green-400/10 hover:text-green-400"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              {/* Services */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Services
                </h4>

                <ul className="mt-5 space-y-3.5">
                  {services.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-green-400"
                      >
                        <span className="h-1 w-1 rounded-full bg-zinc-700 transition-colors group-hover:bg-green-400" />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Company
                </h4>

                <ul className="mt-5 space-y-3.5">
                  {companyLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-green-400"
                      >
                        <span className="h-1 w-1 rounded-full bg-zinc-700 transition-colors group-hover:bg-green-400" />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="col-span-2 sm:col-span-1">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Stay Updated
                </h4>

                <p className="mt-5 text-sm leading-6 text-zinc-500">
                  Get occasional insights about technology, digital products,
                  and what we&apos;re building.
                </p>

                <form className="mt-5">
                  <label htmlFor="footer-email" className="sr-only">
                    Email address
                  </label>

                  <div className="flex overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition-colors focus-within:border-green-400/40">
                    <input
                      id="footer-email"
                      name="email"
                      type="email"
                      required
                      placeholder="Your email"
                      className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600"
                    />

                    <button
                      type="submit"
                      aria-label="Subscribe to newsletter"
                      className="flex w-12 shrink-0 items-center justify-center bg-green-400 text-zinc-950 transition-colors hover:bg-green-300"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </form>

                <p className="mt-3 text-[11px] leading-5 text-zinc-600">
                  No spam. Just useful technology insights.
                </p>
              </div>
            </div>
          </div>

          {/* Trust strip */}
          <div className="mt-16 grid gap-4 border-y border-white/5 py-7 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <div>
                <p className="text-sm font-semibold text-zinc-200">
                  Modern technology
                </p>
                <p className="text-xs text-zinc-600">
                  Built for today and tomorrow
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <div>
                <p className="text-sm font-semibold text-zinc-200">
                  Human-centered
                </p>
                <p className="text-xs text-zinc-600">
                  Technology designed around people
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <div>
                <p className="text-sm font-semibold text-zinc-200">
                  Long-term thinking
                </p>
                <p className="text-xs text-zinc-600">
                  Solutions designed to scale
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col gap-5 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
            <p className="text-zinc-600">
              © {new Date().getFullYear()} SommyTech Global Solutions LTD. All
              rights reserved.
            </p>

            <div className="flex flex-wrap gap-5">
              {legalLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-zinc-600 transition-colors hover:text-zinc-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <p className="text-zinc-700">
              Built with <span className="text-green-500">technology</span> &
              creativity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;