"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  FolderKanban,
  Sparkles,
} from "lucide-react";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  url: string;
  technologies: string[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Enterprise CRM Platform",
    category: "Web Development",
    description:
      "A scalable customer relationship platform designed to streamline sales, customer management, and business operations.",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop",
    url: "#",
    technologies: ["Next.js", "React", "TypeScript"],
    featured: true,
  },
  {
    id: 2,
    title: "E-commerce Mobile App",
    category: "Mobile Apps",
    description:
      "A modern shopping experience built around seamless product discovery, checkout, and customer engagement.",
    image:
      "https://images.unsplash.com/photo-1580974928064-7f3047335b9a?q=80&w=1974&auto=format&fit=crop",
    url: "#",
    technologies: ["React Native", "Node.js", "API"],
  },
  {
    id: 3,
    title: "SaaS Product Design",
    category: "UI/UX Design",
    description:
      "A clean and intuitive SaaS experience designed to simplify complex workflows and improve user productivity.",
    image:
      "https://images.unsplash.com/photo-1559028006-44a3a5f15d4e?q=80&w=1925&auto=format&fit=crop",
    url: "#",
    technologies: ["Figma", "UX Research", "Prototyping"],
  },
  {
    id: 4,
    title: "Corporate Website Relaunch",
    category: "Web Development",
    description:
      "A high-performance corporate website focused on brand positioning, content clarity, and lead generation.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    url: "#",
    technologies: ["Next.js", "Tailwind", "CMS"],
  },
  {
    id: 5,
    title: "Healthcare Companion App",
    category: "Mobile Apps",
    description:
      "A mobile-first healthcare experience that makes important health information easier to access and manage.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29209?q=80&w=2070&auto=format&fit=crop",
    url: "#",
    technologies: ["React Native", "Firebase", "REST API"],
  },
  {
    id: 6,
    title: "Cloud Migration for FinTech",
    category: "Cloud Solutions",
    description:
      "A cloud modernization project focused on reliability, scalability, deployment automation, and infrastructure efficiency.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    url: "#",
    technologies: ["AWS", "Docker", "DevOps"],
  },
];

const filters = [
  "All",
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "Cloud Solutions",
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-zinc-950 py-24 sm:py-32"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[550px] w-[800px] -translate-x-1/2 rounded-full bg-green-500/10 blur-[150px]" />

        <div className="absolute -left-48 top-1/2 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-3xl" />

        <div className="absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
            <FolderKanban className="h-4 w-4" />
            Our Work
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ideas transformed into{" "}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              digital experiences.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Explore a selection of digital products, platforms, and
            experiences we&apos;ve designed and built for modern businesses.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-12 flex justify-center">
          <div className="flex max-w-full flex-wrap justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-2 backdrop-blur-sm">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`relative rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-zinc-500 hover:text-zinc-200"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="portfolio-filter"
                      className="absolute inset-0 -z-10 rounded-xl bg-green-500 shadow-lg shadow-green-500/20"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project grid */}
        <motion.div
          layout
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: 20,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden ${
                    project.featured
                      ? "aspect-[16/9] md:aspect-[16/8]"
                      : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes={
                      project.featured
                        ? "(max-width: 768px) 100vw, (max-width: 1280px) 66vw, 50vw"
                        : "(max-width: 768px) 100vw, 33vw"
                    }
                    loading={index < 3 ? "eager" : "lazy"}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Image overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />

                  <div className="absolute inset-0 bg-green-500/0 transition-colors duration-500 group-hover:bg-green-500/10" />

                  {/* Project number */}
                  <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/20 text-xs font-bold text-white backdrop-blur-md">
                    {String(project.id).padStart(2, "0")}
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-500/20 px-3 py-1.5 text-xs font-semibold text-green-300 backdrop-blur-md">
                      <Sparkles className="h-3.5 w-3.5" />
                      Featured Project
                    </div>
                  )}

                  {/* View button */}
                  <Link
                    href={project.url}
                    aria-label={`View ${project.title}`}
                    className="absolute right-5 top-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-green-500 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>

                  {/* Project content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-400">
                      {project.category}
                    </p>

                    <h3
                      className={`mt-2 font-bold text-white ${
                        project.featured
                          ? "text-2xl sm:text-3xl"
                          : "text-xl"
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={`mt-2 max-w-2xl text-sm leading-6 text-zinc-300 transition-all duration-500 ${
                        project.featured
                          ? "max-h-20 opacity-100"
                          : "max-h-0 overflow-hidden opacity-0 group-hover:max-h-20 group-hover:opacity-100"
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[11px] font-medium text-zinc-300 backdrop-blur-md"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom interaction bar */}
                <div className="flex items-center justify-between border-t border-white/10 px-5 py-4">
                  <span className="text-xs font-medium text-zinc-500">
                    {project.category}
                  </span>

                  <Link
                    href={project.url}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 transition-colors hover:text-green-400"
                  >
                    View case study
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </div>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <p className="text-zinc-400">
              No projects found in this category.
            </p>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <div className="relative mt-20 overflow-hidden rounded-[2rem] border border-green-500/20 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-transparent p-8 sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-green-500/10" />
          <div className="pointer-events-none absolute -right-8 -top-20 h-56 w-56 rounded-full border border-green-500/10" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-green-400">
                Have a project in mind?
              </p>

              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Let&apos;s create something remarkable together.
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400 sm:text-base">
                Whether you&apos;re launching a new product or modernizing an
                existing business, we can help turn your ideas into a scalable
                digital experience.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-400 hover:shadow-green-500/30"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;