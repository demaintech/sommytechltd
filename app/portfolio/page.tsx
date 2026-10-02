"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Code2,
  ExternalLink,
  Layers3,
  LayoutDashboard,
  Smartphone,
  Sparkles,
  Star,
} from "lucide-react";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  featured?: boolean;
  result: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Enterprise Business Platform",
    category: "Web Development",
    description:
      "A modern digital platform designed to streamline business operations, workflows, reporting, and team collaboration.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    featured: true,
    result: "Digital Operations",
  },
  {
    id: 2,
    title: "E-Commerce Experience",
    category: "Web Development",
    description:
      "A conversion-focused commerce experience combining a clean interface, product discovery, customer journeys, and scalable architecture.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",
    technologies: ["React", "Next.js", "Payments", "API"],
    result: "Digital Commerce",
  },
  {
    id: 3,
    title: "Mobile Product Experience",
    category: "Mobile Apps",
    description:
      "A mobile-first product experience designed to make important services and functionality accessible through a focused mobile interface.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&q=85",
    technologies: ["React Native", "TypeScript", "API", "UX"],
    result: "Mobile Experience",
  },
  {
    id: 4,
    title: "SaaS Product Design",
    category: "UI/UX Design",
    description:
      "A structured product design system for a SaaS platform, covering user flows, dashboards, components, and responsive experiences.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
    technologies: ["Figma", "Design Systems", "UX", "Prototyping"],
    result: "Product Design",
  },
  {
    id: 5,
    title: "Cloud Infrastructure Modernization",
    category: "Cloud Solutions",
    description:
      "A technology modernization initiative focused on improving deployment workflows, infrastructure scalability, reliability, and operational visibility.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85",
    technologies: ["Cloud", "DevOps", "Containers", "Monitoring"],
    result: "Cloud Modernization",
  },
  {
    id: 6,
    title: "Corporate Digital Transformation",
    category: "Technology Consulting",
    description:
      "A strategic digital transformation initiative connecting business objectives with modern technology, processes, and customer experiences.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85",
    technologies: ["Strategy", "Architecture", "Digital", "Consulting"],
    result: "Digital Strategy",
  },
];

const categories = [
  "All",
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "Cloud Solutions",
  "Technology Consulting",
];

const capabilities = [
  {
    icon: Code2,
    title: "Engineering",
    text: "Modern web applications, APIs, platforms, and custom software.",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    text: "Focused mobile experiences designed around real user needs.",
  },
  {
    icon: LayoutDashboard,
    title: "Product Design",
    text: "Interfaces, design systems, prototypes, and product experiences.",
  },
  {
    icon: Cloud,
    title: "Cloud",
    text: "Scalable infrastructure and modern technology environments.",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <main className="overflow-hidden bg-zinc-950 text-white">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative isolate overflow-hidden">
        {/* Grid */}
        <div
          className="absolute inset-0 -z-20 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Ambient glow */}
        <div className="absolute -left-40 top-20 -z-10 h-[30rem] w-[30rem] rounded-full bg-emerald-500/15 blur-[150px]" />
        <div className="absolute right-[-10rem] top-[-10rem] -z-10 h-[34rem] w-[34rem] rounded-full bg-teal-500/10 blur-[160px]" />

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-8 lg:pb-32 lg:pt-28">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.7fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300 backdrop-blur-xl">
                <Sparkles size={15} />
                Selected Work
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                Turning ideas into
                <span className="block bg-gradient-to-r from-emerald-300 via-green-400 to-teal-300 bg-clip-text text-transparent">
                  digital experiences.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
                Explore a selection of digital products, software solutions,
                user experiences, and technology initiatives designed to solve
                meaningful business problems.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3.5 font-medium text-zinc-950 transition hover:bg-emerald-300"
                >
                  Start a Project
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 font-medium text-white backdrop-blur-xl transition hover:border-emerald-400/30 hover:bg-white/[0.08]"
                >
                  Explore Services
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
              <div className="relative mx-auto max-w-[440px]">
                <div className="absolute -inset-10 rounded-full bg-emerald-400/10 blur-[90px]" />

                <div className="relative rounded-[2rem] border border-white/10 bg-zinc-900/80 p-5 shadow-2xl backdrop-blur-2xl">
                  <div className="rounded-[1.5rem] border border-white/[0.06] bg-zinc-950 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                          Project Overview
                        </p>
                        <h3 className="mt-2 text-lg font-semibold">
                          Digital Product
                        </h3>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                        <Layers3 size={19} />
                      </div>
                    </div>

                    <div className="mt-7 grid grid-cols-3 gap-2">
                      <div className="h-24 rounded-xl bg-gradient-to-br from-emerald-400/20 to-emerald-400/5" />
                      <div className="h-24 rounded-xl bg-white/[0.04]" />
                      <div className="h-24 rounded-xl bg-teal-400/10" />
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="h-2 w-3/4 rounded-full bg-white/[0.08]" />
                      <div className="h-2 w-1/2 rounded-full bg-white/[0.05]" />
                    </div>

                    <div className="mt-7 flex items-center justify-between border-t border-white/[0.06] pt-5">
                      <div>
                        <p className="text-xs text-zinc-600">Technology</p>
                        <p className="mt-1 text-sm text-zinc-300">
                          Modern Stack
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        <span className="text-xs text-emerald-300">
                          Live
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -left-12 top-20 rounded-2xl border border-white/10 bg-zinc-900/80 px-4 py-3 shadow-xl backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-emerald-400"
                    />
                    <span className="text-sm text-zinc-300">
                      Built with purpose
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
                  className="absolute -bottom-6 right-0 rounded-2xl border border-white/10 bg-zinc-900/80 px-4 py-3 shadow-xl backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <Star size={17} className="text-emerald-400" />
                    <span className="text-sm text-zinc-300">
                      Crafted digitally
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PORTFOLIO FILTER
      ========================================================== */}
      <section className="relative border-y border-white/[0.06] bg-zinc-900/40 py-7">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`relative shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition ${
                    active
                      ? "text-zinc-950"
                      : "text-zinc-500 hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="portfolio-filter"
                      className="absolute inset-0 -z-10 rounded-full bg-emerald-400"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECTS
      ========================================================== */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">
                Portfolio
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Selected projects
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-zinc-500">
              A curated collection of digital products, platforms, and
              technology initiatives.
            </p>
          </div>

          <motion.div layout className="grid gap-6 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                  }}
                  className={`group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-zinc-900/60 ${
                    project.featured ? "md:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`grid ${
                      project.featured
                        ? "md:grid-cols-[1.2fr_0.8fr]"
                        : "grid-cols-1"
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={`relative overflow-hidden ${
                        project.featured
                          ? "min-h-[360px] md:min-h-[470px]"
                          : "aspect-[16/10]"
                      }`}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                        sizes={
                          project.featured
                            ? "(max-width: 768px) 100vw, 60vw"
                            : "(max-width: 768px) 100vw, 50vw"
                        }
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                      {/* Project category */}
                      <div className="absolute left-5 top-5">
                        <span className="rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-xl">
                          {project.category}
                        </span>
                      </div>

                      {/* Hover icon */}
                      <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-zinc-950/70 text-white opacity-0 backdrop-blur-xl transition duration-300 group-hover:opacity-100">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`flex flex-col justify-between p-7 ${
                        project.featured ? "md:p-9" : ""
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs text-emerald-400">
                            {String(project.id).padStart(2, "0")}
                          </span>

                          <span className="text-xs text-zinc-600">
                            {project.result}
                          </span>
                        </div>

                        <h3
                          className={`mt-7 font-semibold ${
                            project.featured
                              ? "text-2xl sm:text-3xl"
                              : "text-xl"
                          }`}
                        >
                          {project.title}
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-zinc-500">
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-8">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-500"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>

                        {/* Replace # with real case-study URL */}
                        <Link
                          href="#"
                          className="group/link mt-7 inline-flex items-center gap-2 text-sm font-medium text-emerald-400"
                        >
                          View case study
                          <ArrowUpRight
                            size={16}
                            className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 transition-all duration-500 group-hover:w-full" />
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="rounded-3xl border border-white/[0.07] bg-zinc-900/50 p-12 text-center">
              <p className="text-zinc-500">
                No projects available in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================== */}
      <section className="border-y border-white/[0.06] bg-zinc-900/40 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">
                What We Build
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                One team.
                <span className="block text-zinc-500">
                  Multiple technology capabilities.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-base leading-8 text-zinc-400">
                Our work brings together product thinking, engineering, design,
                infrastructure, and technology strategy to create complete
                digital experiences.
              </p>

              <Link
                href="/services"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-emerald-400"
              >
                Explore our services
                <ChevronRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;

                return (
                  <motion.div
                    key={capability.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.07,
                    }}
                    className="group rounded-3xl border border-white/[0.07] bg-zinc-950/60 p-6 transition duration-500 hover:-translate-y-1 hover:border-emerald-400/20"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400">
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-5 font-semibold">
                      {capability.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                      {capability.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CASE STUDY CTA
      ========================================================== */}
      <section className="py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-500/15 via-zinc-900 to-zinc-900 p-8 sm:p-12 lg:p-16">
            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-400/10 blur-[110px]" />
            <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-teal-400/10 blur-[110px]" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
                  <Sparkles size={13} />
                  Have an idea?
                </div>

                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  Your next project could be here.
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
                  Whether you are starting something new, modernizing an
                  existing platform, or exploring what technology can do for
                  your organization, let's build the next chapter together.
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3.5 font-medium text-zinc-950 transition hover:bg-emerald-300"
              >
                Start a Conversation
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER SPACE
      ========================================================== */}
      <div className="h-4" />
    </main>
  );
}
