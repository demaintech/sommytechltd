"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Layers3,
  LockKeyhole,
  Palette,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Web & Software Development",
    description:
      "We design and build modern web applications, business platforms, APIs, and custom software engineered around your goals.",
    tags: ["Web Apps", "Enterprise Software", "APIs", "SaaS"],
    featured: true,
  },
  {
    number: "02",
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Build reliable, scalable, and cloud-ready technology environments that support modern digital operations and future growth.",
    tags: ["Cloud Architecture", "Migration", "DevOps", "Infrastructure"],
  },
  {
    number: "03",
    icon: Palette,
    title: "UI/UX & Product Design",
    description:
      "We create intuitive digital experiences that combine thoughtful user journeys, strong visual systems, and functional product design.",
    tags: ["UX Research", "UI Design", "Prototyping", "Design Systems"],
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Security-conscious technology solutions designed to help organizations protect applications, systems, data, and digital operations.",
    tags: ["Security", "Risk", "App Security", "Monitoring"],
  },
  {
    number: "05",
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "We develop modern mobile experiences that help organizations connect their products and services with users wherever they are.",
    tags: ["iOS", "Android", "Cross-platform", "Mobile UX"],
  },
  {
    number: "06",
    icon: BrainCircuit,
    title: "Technology Consulting",
    description:
      "Strategic technology guidance that helps organizations evaluate opportunities, modernize systems, and make better technology decisions.",
    tags: ["Strategy", "Architecture", "Digital Transformation", "Advisory"],
  },
];

const process = [
  {
    number: "01",
    icon: Workflow,
    title: "Discover",
    description:
      "We understand your objectives, users, challenges, technology environment, and the outcomes you want to achieve.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Design",
    description:
      "We translate requirements into thoughtful product experiences, technical architecture, workflows, and implementation plans.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build",
    description:
      "Our team develops, integrates, tests, and refines the solution with a strong focus on quality, security, and scalability.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Evolve",
    description:
      "After launch, technology can continue to improve through optimization, new capabilities, maintenance, and strategic evolution.",
  },
];

const futureCapabilities = [
  {
    icon: BrainCircuit,
    title: "AI & Intelligent Automation",
    description:
      "Exploring practical ways to use artificial intelligence, automation, and intelligent workflows to improve digital products and operations.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Technology",
    description:
      "Designing systems around scalable infrastructure, modern deployment practices, distributed services, and cloud-first architecture.",
  },
  {
    icon: LockKeyhole,
    title: "Advanced Cybersecurity",
    description:
      "Building security into applications, infrastructure, data flows, and technology decisions from the beginning.",
  },
  {
    icon: Cpu,
    title: "Intelligent Digital Systems",
    description:
      "Developing connected platforms and software experiences capable of adapting to evolving business and user requirements.",
  },
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-zinc-950 text-white">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative isolate min-h-[82vh] overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 -z-20 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Ambient glows */}
        <div className="absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-emerald-500/20 blur-[140px]" />
        <div className="absolute right-[-10rem] top-[-5rem] -z-10 h-[32rem] w-[32rem] rounded-full bg-teal-500/10 blur-[150px]" />
        <div className="absolute bottom-[-12rem] left-1/3 -z-10 h-[28rem] w-[28rem] rounded-full bg-green-500/10 blur-[150px]" />

        <div className="mx-auto flex min-h-[82vh] max-w-7xl items-center px-6 py-24 lg:px-8">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Hero copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300 backdrop-blur-xl">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Our Services
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                Technology solutions
                <span className="block bg-gradient-to-r from-emerald-300 via-green-400 to-teal-300 bg-clip-text text-transparent">
                  designed to move you forward.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
                From digital products and custom software to cloud
                infrastructure, cybersecurity, and technology strategy, we
                build solutions that connect business goals with modern
                technology.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3.5 font-medium text-zinc-950 transition hover:bg-emerald-300"
                >
                  Start a Project
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 font-medium text-white backdrop-blur-xl transition hover:border-emerald-400/30 hover:bg-white/[0.08]"
                >
                  Explore Our Work
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

            {/* Hero visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative hidden lg:block"
            >
              <div className="relative mx-auto aspect-square max-w-[480px]">
                {/* Outer rings */}
                <div className="absolute inset-8 rounded-full border border-emerald-400/10" />
                <div className="absolute inset-20 rounded-full border border-emerald-400/10" />
                <div className="absolute inset-32 rounded-full border border-emerald-400/10" />

                {/* Glow */}
                <div className="absolute inset-20 rounded-full bg-emerald-400/10 blur-3xl" />

                {/* Central technology card */}
                <div className="absolute left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-zinc-900/80 p-7 shadow-2xl shadow-emerald-950/40 backdrop-blur-2xl">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                      <Sparkles size={23} />
                    </div>

                    <div className="flex items-center gap-2 text-xs text-emerald-300">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Building
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    Digital Innovation
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    Connecting strategy, design, engineering, security, and
                    emerging technology.
                  </p>

                  <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "78%" }}
                      transition={{ duration: 1.4, delay: 0.7 }}
                      className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-400"
                    />
                  </div>
                </div>

                {/* Floating cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-0 top-20 rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-3 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <Code2 size={18} className="text-emerald-400" />
                    <span className="text-sm text-zinc-300">
                      Software
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-24 right-0 rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-3 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={18} className="text-emerald-400" />
                    <span className="text-sm text-zinc-300">
                      Security
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-4 top-4 rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-3 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <Cloud size={18} className="text-emerald-400" />
                    <span className="text-sm text-zinc-300">
                      Cloud
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />
      </section>

      {/* =========================================================
          SERVICES
      ========================================================== */}
      <section className="relative py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">
              What We Do
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              From ideas to
              <span className="text-zinc-500"> intelligent solutions.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
              Our capabilities cover the essential layers of modern digital
              technology — helping organizations create, modernize, secure,
              and continuously improve their digital products and systems.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                  }}
                  className={`group relative overflow-hidden rounded-3xl border p-7 transition duration-500 ${
                    service.featured
                      ? "border-emerald-400/30 bg-gradient-to-br from-emerald-400/[0.12] via-zinc-900 to-zinc-900"
                      : "border-white/[0.08] bg-zinc-900/60 hover:border-emerald-400/20 hover:bg-zinc-900"
                  }`}
                >
                  {/* Hover glow */}
                  <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-400/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                        <Icon size={22} />
                      </div>

                      <span className="font-mono text-sm text-zinc-600">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="mt-8 text-xl font-semibold text-white">
                      {service.title}
                    </h3>

                    <p className="mt-3 min-h-[96px] text-sm leading-7 text-zinc-400">
                      {service.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-500 transition group-hover:border-emerald-400/10 group-hover:text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition hover:text-emerald-300"
                    >
                      Discuss this service
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-500 group-hover:w-full" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CAPABILITIES STRIP
      ========================================================== */}
      <section className="border-y border-white/[0.06] bg-zinc-900/50 py-7">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-zinc-500">
            {[
              "Product Engineering",
              "Cloud Architecture",
              "Digital Experiences",
              "Application Security",
              "API Development",
              "Technology Strategy",
            ].map((item, index) => (
              <React.Fragment key={item}>
                <span className="transition hover:text-emerald-300">
                  {item}
                </span>

                {index !== 5 && (
                  <span className="hidden h-1 w-1 rounded-full bg-emerald-400/40 sm:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================== */}
      <section className="relative py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-32 lg:self-start"
            >
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">
                Our Process
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                A clear path from
                <span className="block text-zinc-500">
                  concept to reality.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-zinc-400">
                Great technology requires more than writing code. We combine
                discovery, design, engineering, and continuous improvement to
                create solutions with a clear purpose.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-emerald-400"
              >
                Talk to our team
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            <div className="relative">
              {/* Process line */}
              <div className="absolute bottom-8 left-6 top-8 hidden w-px bg-gradient-to-b from-emerald-400/50 via-emerald-400/10 to-transparent md:block" />

              <div className="space-y-5">
                {process.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.number}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-70px" }}
                      transition={{
                        duration: 0.55,
                        delay: index * 0.08,
                      }}
                      className="group relative rounded-3xl border border-white/[0.07] bg-zinc-900/60 p-6 transition duration-500 hover:border-emerald-400/20 hover:bg-zinc-900 md:ml-14 md:p-8"
                    >
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                        <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/20 bg-zinc-950 text-emerald-300">
                          <Icon size={21} />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-xs text-emerald-400">
                              {item.number}
                            </span>

                            <h3 className="text-xl font-semibold">
                              {item.title}
                            </h3>
                          </div>

                          <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FUTURE TECHNOLOGY
      ========================================================== */}
      <section className="relative overflow-hidden border-y border-white/[0.06] bg-gradient-to-b from-zinc-900 to-zinc-950 py-28">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/[0.08] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
              <Zap size={25} />
            </div>

            <p className="mt-7 text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">
              Future Ready
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Building with tomorrow in mind.
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-400">
              Technology changes quickly. Our approach is designed to help
              businesses remain adaptable by embracing modern architectures,
              intelligent systems, security, and continuous innovation.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {futureCapabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group rounded-3xl border border-white/[0.08] bg-zinc-950/70 p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-emerald-400/20"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300 transition group-hover:bg-emerald-400/15">
                      <Icon size={21} />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-zinc-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY SOMMYTECH
      ========================================================== */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">
                Our Approach
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Technology should solve
                <span className="block text-zinc-500">
                  meaningful problems.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400">
                We approach every engagement with a balance of technology,
                business objectives, usability, security, and long-term
                maintainability.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: CheckCircle2,
                  title: "Purpose-driven",
                  text: "Technology decisions are connected to a clear business or user outcome.",
                },
                {
                  icon: ShieldCheck,
                  title: "Security-conscious",
                  text: "Security is considered throughout the technology lifecycle.",
                },
                {
                  icon: Layers3,
                  title: "Scalable thinking",
                  text: "Solutions are designed with future growth and change in mind.",
                },
                {
                  icon: Sparkles,
                  title: "Continuous innovation",
                  text: "We stay curious about emerging technologies and practical applications.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.07,
                    }}
                    className="rounded-3xl border border-white/[0.07] bg-zinc-900/50 p-6"
                  >
                    <Icon size={21} className="text-emerald-400" />

                    <h3 className="mt-5 font-semibold">{item.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="relative px-6 pb-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-500/15 via-zinc-900 to-zinc-900 p-8 sm:p-12 lg:p-16">
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-emerald-400/15 blur-[100px]" />
          <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-teal-400/10 blur-[100px]" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
                <Sparkles size={13} />
                Let’s build something meaningful
              </div>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Have a technology challenge?
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
                Tell us what you are building, what you want to improve, or
                where technology is getting in the way. Let’s explore what is
                possible.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3.5 font-medium text-zinc-950 transition hover:bg-emerald-300"
            >
              Start a Conversation
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
