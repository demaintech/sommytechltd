
"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Code2,
  Cloud,
  LineChart,
  Palette,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";

type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  tags: string[];
};

const services: Service[] = [
  {
    id: "web-development",
    number: "01",
    title: "Web Development",
    description:
      "High-performance websites and web applications engineered for speed, scalability, accessibility, and exceptional user experiences.",
    icon: Code2,
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    id: "mobile-apps",
    number: "02",
    title: "Mobile Applications",
    description:
      "Beautiful, reliable mobile experiences designed to help your business connect with customers wherever they are.",
    icon: Smartphone,
    tags: ["iOS", "Android", "Cross-platform"],
  },
  {
    id: "cloud-solutions",
    number: "03",
    title: "Cloud Solutions",
    description:
      "Secure and scalable cloud infrastructure that improves performance, reliability, deployment speed, and operational efficiency.",
    icon: Cloud,
    tags: ["AWS", "DevOps", "Infrastructure"],
  },
  {
    id: "ui-ux-design",
    number: "04",
    title: "UI/UX Design",
    description:
      "Human-centered digital experiences that combine beautiful interfaces with intuitive interactions and measurable business outcomes.",
    icon: Palette,
    tags: ["Research", "UI Design", "Prototyping"],
  },
  {
    id: "cybersecurity",
    number: "05",
    title: "Cybersecurity",
    description:
      "Practical security solutions designed to protect your applications, infrastructure, data, and customers from evolving digital threats.",
    icon: ShieldCheck,
    tags: ["Security", "Monitoring", "Compliance"],
  },
  {
    id: "it-consulting",
    number: "06",
    title: "IT Consulting",
    description:
      "Strategic technology guidance that helps organizations make smarter decisions, modernize operations, and accelerate growth.",
    icon: LineChart,
    tags: ["Strategy", "Architecture", "Growth"],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-zinc-950 py-24 sm:py-32"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-green-500/10 blur-[140px]" />

        <div className="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
            <Sparkles className="h-4 w-4" />
            Our Expertise
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Technology that turns{" "}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              ideas into impact.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            From strategy and design to development, infrastructure, and
            security, we provide the technology expertise you need to build,
            launch, and scale.
          </p>
        </div>

        {/* Top capability strip */}
        <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
          {[
            "Innovation",
            "Scalability",
            "Security",
            "Performance",
            "User Experience",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300 backdrop-blur-sm"
            >
              <Check className="h-4 w-4 text-green-400" />
              {item}
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-green-500/30 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-green-950/30"
              >
                {/* Hover gradient */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-green-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Number */}
                <div className="absolute right-6 top-5 text-5xl font-black tracking-tighter text-white/[0.04] transition-colors duration-500 group-hover:text-green-400/10">
                  {service.number}
                </div>

                {/* Icon */}
                <div className="relative mb-7 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/10 text-green-400 transition-all duration-500 group-hover:scale-110 group-hover:border-green-400/40 group-hover:bg-green-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-green-500/20">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-600 transition-all duration-300 group-hover:border-green-500/30 group-hover:text-green-400">
                    <ArrowRight className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 min-h-[84px] text-sm leading-6 text-zinc-400">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-zinc-500 transition-colors group-hover:border-green-500/10 group-hover:text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom line */}
                  <div className="mt-7 h-px w-full bg-white/10">
                    <div className="h-px w-0 bg-gradient-to-r from-green-400 to-emerald-400 transition-all duration-700 group-hover:w-full" />
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-zinc-500 transition-colors group-hover:text-green-400">
                    Explore service
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-20 overflow-hidden rounded-[2rem] border border-green-500/20 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-transparent p-8 sm:p-10 lg:p-12">
          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-green-500/10" />
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-green-500/10" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-2 text-green-400">
                <Zap className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Let&apos;s build something great
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Have a project in mind?
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400 sm:text-base">
                Tell us what you&apos;re trying to achieve and our team can help
                turn your vision into a scalable digital solution.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-400 hover:shadow-green-500/30"
            >
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;