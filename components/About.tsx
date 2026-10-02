"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Cloud,
  Code2,
  Gauge,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    title: "Experienced Team",
    description:
      "A multidisciplinary team of developers, designers, cloud engineers, and strategists focused on solving complex digital challenges.",
    icon: Users,
  },
  {
    title: "Innovation Driven",
    description:
      "We leverage modern technologies and proven engineering practices to build solutions that are scalable, secure, and future-ready.",
    icon: Lightbulb,
  },
  {
    title: "Results Focused",
    description:
      "Every project is designed around measurable business outcomes, from improved efficiency to increased customer engagement.",
    icon: Target,
  },
];

const capabilities = [
  { name: "Software Development", icon: Code2 },
  { name: "Cloud Solutions", icon: Cloud },
  { name: "Cybersecurity", icon: ShieldCheck },
  { name: "Digital Transformation", icon: Zap },
];

const highlights = [
  "Custom software solutions",
  "Scalable cloud infrastructure",
  "Dedicated technical support",
  "Business-focused consulting",
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute left-0 top-20 -z-0 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
            <Sparkles className="h-4 w-4" />
            About SommyTech
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
            Building technology that{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              moves businesses forward.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            We combine technology, creativity, and strategic thinking to help
            businesses build better digital experiences and operate more
            efficiently.
          </p>
        </div>

        {/* Main content */}
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Image side */}
          <div className="relative">
            {/* Decorative grid */}
            <div
              className="absolute -left-6 -top-6 h-32 w-32 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(#16a34a 1px, transparent 1px)",
                backgroundSize: "12px 12px",
              }}
            />

            <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-100 shadow-2xl shadow-zinc-900/10">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=85"
                  alt="SommyTech team collaborating on digital solutions"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/10 to-transparent" />

                {/* Image badge */}
                <div className="absolute left-6 top-6 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white shadow-xl backdrop-blur-xl">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-500">
                    <Rocket className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs text-zinc-300">Since</p>
                    <p className="text-sm font-bold">2020</p>
                  </div>
                </div>

                {/* Bottom stats */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="grid grid-cols-2 divide-x divide-white/20 rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-xl">
                    <div className="px-2">
                      <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                        500+
                      </p>
                      <p className="mt-1 text-sm text-zinc-300">
                        Projects Completed
                      </p>
                    </div>

                    <div className="px-5">
                      <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                        98%
                      </p>
                      <p className="mt-1 text-sm text-zinc-300">
                        Client Satisfaction
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating experience card */}
            <div className="absolute -bottom-8 -right-5 hidden w-52 rounded-2xl border border-zinc-200 bg-white p-5 shadow-xl sm:block">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
                  <Award className="h-5 w-5 text-green-600" />
                </div>

                <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
                  Trusted
                </span>
              </div>

              <p className="text-sm font-semibold text-zinc-950">
                Technology Partner
              </p>

              <p className="mt-1 text-xs leading-5 text-zinc-500">
                Helping organizations turn ideas into reliable digital
                products.
              </p>
            </div>
          </div>

          {/* Content side */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-green-600" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
                Who We Are
              </span>
            </div>

            <h3 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Technology solutions designed around your business.
            </h3>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              At{" "}
              <span className="font-semibold text-zinc-900">
                SommyTech Global Solutions LTD
              </span>
              , we believe technology should simplify complexity, create new
              opportunities, and deliver tangible business value.
            </p>

            <p className="mt-4 leading-7 text-zinc-600">
              From custom software development and cloud infrastructure to
              digital transformation and strategic consulting, we work closely
              with our clients to create dependable solutions that can grow
              with their organizations.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50/70 p-3 transition-all duration-300 hover:border-green-200 hover:bg-green-50/50"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
                  <span className="text-sm font-medium text-zinc-700">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-zinc-950/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-green-600/20"
              >
                Discover Our Story
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-800 transition-all duration-300 hover:border-zinc-300 hover:bg-zinc-50"
              >
                Work With Us
              </Link>
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mt-24 border-t border-zinc-200 pt-12">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-600">
                Our Capabilities
              </p>

              <h3 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950">
                Built for modern businesses.
              </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.name}
                    className="group rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg hover:shadow-zinc-900/5"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 transition-colors duration-300 group-hover:bg-green-100">
                      <Icon className="h-5 w-5 text-zinc-700 transition-colors group-hover:text-green-600" />
                    </div>

                    <p className="text-sm font-semibold leading-5 text-zinc-900">
                      {item.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-zinc-900/10"
              >
                {/* Number */}
                <span className="absolute right-6 top-5 text-5xl font-black text-zinc-100 transition-colors duration-300 group-hover:text-green-50">
                  0{index + 1}
                </span>

                <div className="relative">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 transition-all duration-300 group-hover:bg-green-600">
                    <Icon className="h-6 w-6 text-green-600 transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <h4 className="text-lg font-bold text-zinc-950">
                    {feature.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-green-600">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom trust banner */}
        <div className="relative mt-20 overflow-hidden rounded-[2rem] bg-zinc-950 px-7 py-10 sm:px-10 lg:px-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-500/20 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-2 text-green-400">
                <Gauge className="h-5 w-5" />
                <span className="text-sm font-semibold">
                  Built for performance
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Ready to turn your next idea into a digital reality?
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Let&apos;s build technology that works for your business,
                customers, and long-term goals.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:bg-green-500 hover:text-white"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;