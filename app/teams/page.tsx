"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Layers3,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    name: "Somotochukwu Steve Prosper",
    role: "Founder & CEO",
    shortRole: "Leadership",
    description:
      "Driving SommyTech's vision, strategic direction, and commitment to building meaningful technology solutions for the future.",
    image: "/assets/images/sommy.jpg",
    icon: BriefcaseBusiness,
    initials: "SS",
  },
  {
    name: "Kelechi Kingsley",
    role: "CoFounder & CTO",
    shortRole: "Technology",
    description:
      "Leading the technical vision, engineering direction, and development of scalable digital systems and emerging technology solutions.",
    image: "/assets/images/demain.jpg",
    icon: Code2,
    initials: "KK",
  },
  {
    name: "Damaris Ndukwe",
    role: "Product Manager",
    shortRole: "Product",
    description:
      "Connecting customer needs, product strategy, and technology to create digital experiences that are purposeful, intuitive, and valuable.",
    image: "/assets/images/damaris.jpg",
    icon: Layers3,
    initials: "DN",
  },
];

const values = [
  "Innovation with purpose",
  "Technology that solves real problems",
  "Human-centered product thinking",
  "Continuous learning and improvement",
];

export default function TeamPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-white">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* Ambient liquid glows */}
        <motion.div
          animate={{
            x: [0, 80, -20, 0],
            y: [0, -40, 50, 0],
            scale: [1, 1.12, 0.95, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-12%] top-[8%] h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 50, -30, 0],
            scale: [1, 0.92, 1.1, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-12%] top-[35%] h-[550px] w-[550px] rounded-full bg-teal-500/10 blur-[150px]"
        />

        <div className="absolute bottom-[-10%] left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-green-500/[0.06] blur-[130px]" />
      </div>

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative px-5 pb-20 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Hero copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Eyebrow */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-sm font-medium text-emerald-300 backdrop-blur-xl">
                <Sparkles size={15} />
                The people behind the technology
              </div>

              <h1 className="max-w-4xl text-5xl font-bold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                Meet the team
                <span className="block bg-gradient-to-r from-emerald-300 via-green-400 to-teal-400 bg-clip-text text-transparent">
                  building what&apos;s next.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                SommyTech is driven by a team that combines strategy,
                technology, product thinking, and creativity to transform ideas
                into meaningful digital experiences.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 px-5 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-emerald-500/20"
                >
                  Work with us
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <a
                  href="#leadership"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-zinc-200 backdrop-blur-xl transition hover:border-emerald-400/20 hover:bg-white/[0.07]"
                >
                  Meet our leadership
                </a>
              </div>
            </motion.div>

            {/* Hero visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative mx-auto w-full max-w-xl"
            >
              <div className="relative aspect-square">
                {/* Outer glow */}
                <div className="absolute inset-[12%] rounded-full bg-emerald-400/10 blur-[80px]" />

                {/* Orbital rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-[8%] rounded-full border border-emerald-400/10"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 32,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-[18%] rounded-full border border-teal-400/10"
                />

                {/* Center liquid glass */}
                <div className="absolute inset-[25%] flex items-center justify-center rounded-[40%] border border-white/10 bg-white/[0.045] shadow-2xl shadow-emerald-500/10 backdrop-blur-2xl">
                  <div className="absolute inset-3 rounded-[38%] border border-emerald-400/10" />

                  <div className="relative text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                      <Sparkles size={27} />
                    </div>

                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                      SommyTech
                    </p>

                    <p className="mt-2 text-xl font-semibold text-white">
                      Human + Technology
                    </p>
                  </div>
                </div>

                {/* Floating labels */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-[3%] top-[28%] rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-3 shadow-xl backdrop-blur-xl"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-medium text-zinc-300">
                      Leadership
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-[22%] right-[2%] rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-3 shadow-xl backdrop-blur-xl"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-teal-400" />
                    <span className="text-xs font-medium text-zinc-300">
                      Innovation
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TEAM
      ========================================================== */}
      <section
        id="leadership"
        className="relative px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 max-w-2xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Leadership
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              The minds behind
              <span className="text-zinc-500"> the mission.</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-zinc-500">
              Different disciplines. One shared ambition — to build technology
              that creates lasting value.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {teamMembers.map((member, index) => {
              const Icon = member.icon;

              return (
                <motion.article
                  key={member.name}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                  }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  {/* Card glow */}
                  <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-b from-emerald-400/20 via-white/5 to-transparent opacity-60 blur-sm transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Liquid glass card */}
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/20 backdrop-blur-2xl">
                    {/* Liquid highlight */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-400/[0.08] blur-3xl transition-all duration-500 group-hover:bg-emerald-400/[0.14]" />

                    <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 rounded-full bg-teal-400/[0.04] blur-3xl" />

                    {/* Image */}
                    <div className="relative aspect-[4/4.5] overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover grayscal transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                      />

                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                      {/* Image top badge */}
                      <div className="absolute left-5 top-5">
                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/50 px-3 py-2 text-xs font-medium text-zinc-200 backdrop-blur-xl">
                          <Icon
                            size={13}
                            className="text-emerald-300"
                          />
                          {member.shortRole}
                        </div>
                      </div>

                      {/* Initial fallback visual */}
                      <div className="absolute inset-0 -z-10 flex items-center justify-center bg-gradient-to-br from-emerald-950 via-zinc-900 to-zinc-950">
                        <span className="text-6xl font-bold text-emerald-400/20">
                          {member.initials}
                        </span>
                      </div>

                      {/* Social */}
                      <div className="absolute bottom-5 right-5 flex translate-y-2 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <a
                          href="#"
                          aria-label={`${member.name} LinkedIn`}
                          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-zinc-950/60 text-zinc-300 backdrop-blur-xl transition hover:border-emerald-400/30 hover:text-emerald-300"
                        >
                          <Linkedin size={16} />
                        </a>

                        <a
                          href="mailto:hello@sommytech.com"
                          aria-label={`Email ${member.name}`}
                          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-zinc-950/60 text-zinc-300 backdrop-blur-xl transition hover:border-emerald-400/30 hover:text-emerald-300"
                        >
                          <Mail size={16} />
                        </a>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative p-6">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />

                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
                          {member.role}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold tracking-tight text-white">
                        {member.name}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-zinc-500">
                        {member.description}
                      </p>

                      {/* Bottom line */}
                      <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-5">
                        <span className="text-xs text-zinc-600">
                          SommyTech Leadership
                        </span>

                        <ArrowUpRight
                          size={17}
                          className="text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-300"
                        />
                      </div>
                    </div>

                    {/* Hover line */}
                    <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-400 to-transparent transition-all duration-500 group-hover:w-3/4" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CULTURE / PHILOSOPHY
      ========================================================== */}
      <section className="relative px-5 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl sm:p-10 lg:p-14"
          >
            {/* Background glow */}
            <div className="absolute right-[-10%] top-[-50%] h-[450px] w-[450px] rounded-full bg-emerald-400/[0.07] blur-[120px]" />

            <div className="relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  Our mindset
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Technology is better when{" "}
                  <span className="text-zinc-500">people come first.</span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
                  We believe great technology is not only about code and
                  infrastructure. It is about understanding people, solving
                  meaningful problems, and creating products that can evolve
                  with the world around them.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {values.map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="group rounded-2xl border border-white/7 bg-black/20 p-5 transition-all duration-300 hover:border-emerald-400/20 hover:bg-emerald-400/[0.04]"
                  >
                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                      <span className="text-xs font-bold">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="text-sm font-medium leading-6 text-zinc-300">
                      {value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="relative px-5 pb-24 sm:px-6 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] border border-emerald-400/15 bg-gradient-to-br from-emerald-400/[0.10] via-white/[0.03] to-transparent p-8 text-center backdrop-blur-xl sm:p-12 lg:p-16"
          >
            <div className="absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-emerald-400/[0.08] blur-[100px]" />

            <div className="relative">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                <Sparkles size={20} />
              </div>

              <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Have an idea worth building?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
                Bring your vision, challenge, or next big idea. Let&apos;s
                explore what we can create together.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 px-6 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/20"
              >
                Start a conversation
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}