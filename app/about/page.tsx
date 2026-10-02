"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Code2,
  Cpu,
  Globe2,
  Layers3,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Telescope,
  Workflow,
  Zap,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously explore better ideas, emerging technologies, and smarter approaches to solving complex business challenges.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Security",
    description:
      "We build with responsibility, prioritizing reliability, security, transparency, and long-term value in the technology we deliver.",
  },
  {
    icon: Target,
    title: "Purpose-Driven",
    description:
      "Technology should solve meaningful problems. We focus on practical solutions that create measurable value for businesses and their customers.",
  },
  {
    icon: Workflow,
    title: "Excellence",
    description:
      "From strategy and design to engineering and deployment, we pursue high standards across every stage of a project.",
  },
];

const capabilities = [
  {
    icon: Code2,
    title: "Digital Products",
    description:
      "Modern web applications, software platforms, and digital experiences engineered for performance and scalability.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Cloud-ready architectures and technology infrastructure designed to support reliable and evolving digital operations.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Security-conscious technology solutions designed to help organizations protect systems, applications, and digital assets.",
  },
  {
    icon: BrainCircuit,
    title: "Emerging Technology",
    description:
      "Exploring AI, automation, intelligent systems, and other emerging technologies that can shape the next generation of digital products.",
  },
];

const futureFocus = [
  "Artificial intelligence & intelligent automation",
  "Cloud-native and distributed systems",
  "Advanced cybersecurity",
  "Data-driven digital platforms",
  "Connected and intelligent applications",
  "Emerging software architectures",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const AboutPage = () => {
  return (
    <main className="overflow-hidden bg-zinc-950 text-white">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative flex min-h-[75svh] items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2200&auto=format&fit=crop"
            alt="Advanced technology infrastructure"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/40" />

          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50" />
        </div>

        {/* Grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.045]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        {/* Ambient lights */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[15%] top-[25%] h-[400px] w-[400px] rounded-full bg-green-500/20 blur-[140px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-[5%] right-[10%] h-[450px] w-[450px] rounded-full bg-emerald-500/20 blur-[150px]"
        />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-32 sm:px-8 lg:px-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.div
              variants={fadeUp}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>

              <Sparkles className="h-3.5 w-3.5 text-green-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-green-300">
                About SommyTech
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[5.8rem]"
            >
              Technology built for{" "}
              <span className="bg-gradient-to-r from-green-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                what comes next.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg"
            >
              SommyTech Global Solutions LTD is a technology-focused company
              committed to helping businesses turn ideas, challenges, and
              opportunities into modern digital solutions.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-green-400 px-7 py-4 text-sm font-bold text-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:bg-green-300 hover:shadow-xl hover:shadow-green-500/20"
              >
                Work with us
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-green-400/30 hover:bg-white/[0.08]"
              >
                Explore our capabilities
                <ChevronRight className="h-4 w-4 text-green-400 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent" />
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================== */}
      <section className="relative bg-zinc-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            {/* Left */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
                Who we are
              </span>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                We believe technology should move{" "}
                <span className="text-green-400">business forward.</span>
              </h2>
            </motion.div>

            {/* Right */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="space-y-6"
            >
              <motion.p
                variants={fadeUp}
                className="text-lg leading-8 text-zinc-300"
              >
                At SommyTech, we approach technology as more than a collection
                of tools. We see it as a strategic capability that can improve
                how organizations operate, connect with customers, and create
                new opportunities.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="leading-8 text-zinc-500"
              >
                Our work brings together software development, digital
                experiences, cloud technologies, cybersecurity, and technology
                strategy. We aim to combine thoughtful engineering with
                practical business understanding to create solutions that are
                useful today while remaining ready for tomorrow.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex items-center gap-3 pt-3"
              >
                <div className="h-px w-12 bg-green-400" />
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                  Innovation with purpose
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION / VISION
      ========================================================== */}
      <section className="relative overflow-hidden bg-zinc-900 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
                Our direction
              </span>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Guided by purpose.{" "}
                <span className="text-zinc-500">Driven by the future.</span>
              </h2>
            </motion.div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {/* Mission */}
              <motion.div
                variants={fadeUp}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 p-8 backdrop-blur-xl sm:p-10"
              >
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-green-400/10 blur-[80px] transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-green-400/20 bg-green-400/10 text-green-400">
                      <Target className="h-5 w-5" />
                    </div>

                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-green-400">
                        Our Mission
                      </span>

                      <h3 className="mt-1 text-2xl font-bold text-white">
                        Create technology that matters.
                      </h3>
                    </div>
                  </div>

                  <p className="mt-8 leading-8 text-zinc-400">
                    Our mission is to design and deliver innovative,
                    dependable, and human-centered technology solutions that
                    help organizations solve real problems, improve
                    performance, and unlock new possibilities.
                  </p>

                  <div className="mt-8 h-px w-full bg-gradient-to-r from-green-400/40 to-transparent" />

                  <div className="mt-6 flex items-center gap-2 text-xs text-zinc-500">
                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                    Practical innovation
                  </div>
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div
                variants={fadeUp}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-green-400/[0.08] to-transparent p-8 backdrop-blur-xl sm:p-10"
              >
                <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-emerald-400/10 blur-[90px]" />

                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-400">
                      <Telescope className="h-5 w-5" />
                    </div>

                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
                        Our Vision
                      </span>

                      <h3 className="mt-1 text-2xl font-bold text-white">
                        Shape the digital future.
                      </h3>
                    </div>
                  </div>

                  <p className="mt-8 leading-8 text-zinc-400">
                    Our vision is to grow into a forward-looking technology
                    organization known for developing intelligent, secure, and
                    scalable digital solutions while contributing to the
                    advancement of technology and the businesses that depend
                    on it.

                    </p>

                  <div className="mt-8 h-px w-full bg-gradient-to-r from-emerald-400/40 to-transparent" />

                  <div className="mt-6 flex items-center gap-2 text-xs text-zinc-500">
                    <Rocket className="h-4 w-4 text-emerald-400" />
                    Future-focused technology
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================== */}
      <section className="relative bg-zinc-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
                What guides us
              </span>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Principles behind the technology.
              </h2>

              <p className="mt-5 leading-7 text-zinc-500">
                Our approach is grounded in principles that help us build
                technology responsibly and create lasting value.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <motion.div
                    key={value.title}
                    variants={fadeUp}
                    className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-green-400/20 hover:bg-white/[0.04]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-green-400/15 bg-green-400/10 text-green-400 transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-white">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-zinc-500">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================== */}
      <section className="relative bg-zinc-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
                  Our capabilities
                </span>

                <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Where technology meets{" "}
                  <span className="text-green-400">execution.</span>
                </h2>
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-lg leading-8 text-zinc-500"
              >
                We bring together multiple technology disciplines to help
                organizations move from concept to implementation with a
                connected, forward-thinking approach.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3"
              >
                <Layers3 className="h-4 w-4 text-green-400" />

                <span className="text-xs font-medium text-zinc-400">
                  Strategy • Design • Engineering • Technology
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="grid gap-4 sm:grid-cols-2"
            >
              {capabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <motion.div
                    key={capability.title}
                    variants={fadeUp}
                    className="group rounded-2xl border border-white/10 bg-black/20 p-6 transition-all duration-500 hover:border-green-400/20 hover:bg-black/30"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
                        <Icon className="h-5 w-5" />
                      </div>

                      <ArrowRight className="h-4 w-4 text-zinc-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-green-400" />
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-white">
                      {capability.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-zinc-500">
                      {capability.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FUTURE TECHNOLOGY COMMITMENT
      ========================================================== */}
      <section className="relative overflow-hidden bg-zinc-950 py-24 sm:py-32">
        {/* Large ambient glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.08, 0.14, 0.08],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/10 blur-[160px]"
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="overflow-hidden rounded-[2rem] border border-green-400/15 bg-gradient-to-br from-green-400/[0.08] via-zinc-900 to-zinc-950">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              {/* Content */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
                className="p-8 sm:p-12 lg:p-16"
              >
                <motion.div
                  variants={fadeUp}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-green-400/20 bg-green-400/10 text-green-400"
                >
                  <Cpu className="h-6 w-6" />
                </motion.div>

                <motion.div variants={fadeUp} className="mt-8">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
                    Our commitment to the future
                  </span>

                  <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    Building for the{" "}
                    <span className="bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
                      next era of technology.
                    </span>
                  </h2>
                </motion.div>

                <motion.p
                  variants={fadeUp}
                  className="mt-6 leading-8 text-zinc-400"
                >
                  Technology is changing rapidly. Our commitment is to keep
                  learning, experimenting, and evolving so that we can
                  contribute to the development and adoption of advanced
                  technologies that create meaningful opportunities.
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  className="mt-5 leading-8 text-zinc-500"
                >
                  We see the future in intelligent systems, cloud-native
                  infrastructure, automation, advanced security, connected
                  applications, and data-driven decision-making. We intend to
                  continually develop our capabilities in these areas while
                  remaining focused on responsible and practical applications.
                </motion.p>

                <motion.div variants={fadeUp} className="mt-8">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 text-sm font-bold text-green-400 transition-colors hover:text-green-300"
                  >
                    Start a conversation
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Future focus */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
                className="relative border-t border-white/10 bg-black/20 p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-16"
              >
                <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-green-400/10 blur-[90px]" />

                <motion.div variants={fadeUp}>
                  <div className="flex items-center gap-3">
                    <Globe2 className="h-5 w-5 text-green-400" />

                    <span className="text-sm font-semibold text-white">
                      Areas of future focus
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    Areas we intend to continue exploring and developing as
                    technology evolves.
                  </p>
                </motion.div>

                <div className="relative mt-8 space-y-3">
                  {futureFocus.map((item, index) => (
                    <motion.div
                      key={item}
                      variants={fadeUp}
                      className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.025] px-4 py-4 transition-all duration-300 hover:border-green-400/15 hover:bg-green-400/[0.04]"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-400/10 text-xs font-bold text-green-400">
                        0{index + 1}
                      </span>

                      <span className="text-sm text-zinc-400 transition-colors group-hover:text-zinc-200">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY MINDSET
      ========================================================== */}
      <section className="relative bg-zinc-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div variants={fadeUp}>
              <Zap className="mx-auto h-7 w-7 text-green-400" />

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                The future belongs to organizations that are ready to evolve.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-500">
                We want to be part of that evolution — helping businesses
                understand technology, adopt it intelligently, and build with
                confidence as the digital landscape continues to change.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-green-400 px-7 py-4 text-sm font-bold text-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:bg-green-300 hover:shadow-xl hover:shadow-green-500/20"
              >
                Let's build the future
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-7 py-4 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
              >
                Explore our work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="relative overflow-hidden bg-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-7 py-12 sm:px-12 sm:py-14">
            <div className="absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-green-400/10 blur-[100px]" />

            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-green-400">
                  Have an idea?
                </span>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Let's turn it into something remarkable.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-500">
                  Tell us what you are building, what you are trying to solve,
                  or where you want your technology to go.
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-green-400 px-6 py-3.5 text-sm font-bold text-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:bg-green-300 hover:shadow-xl hover:shadow-green-500/20"
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
