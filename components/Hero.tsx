"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Globe2,
  Layers3,
  MousePointer2,
  Server,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    eyebrow: "Digital innovation",
    title: "Build what comes next.",
    highlight: "with technology.",
    description:
      "We design and engineer scalable digital products that help ambitious businesses move faster, operate smarter, and grow with confidence.",
    accent: "Web • Software • Digital Products",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    eyebrow: "Secure infrastructure",
    title: "Power your business",
    highlight: "with confidence.",
    description:
      "From cloud infrastructure to cybersecurity, we build resilient technology environments designed for performance, reliability, and scale.",
    accent: "Cloud • Security • Infrastructure",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    eyebrow: "Digital transformation",
    title: "Turn ideas into",
    highlight: "real-world impact.",
    description:
      "We combine strategy, design, and engineering to transform complex ideas into useful digital experiences your customers can love.",
    accent: "Strategy • Design • Engineering",
  },
];

const floatingItems = [
  {
    icon: Code2,
    label: "Development",
    className: "left-[7%] top-[25%]",
    delay: 0,
  },
  {
    icon: Cloud,
    label: "Cloud",
    className: "right-[8%] top-[22%]",
    delay: 0.8,
  },
  {
    icon: Shield,
    label: "Security",
    className: "bottom-[25%] left-[10%]",
    delay: 1.4,
  },
  {
    icon: Cpu,
    label: "Technology",
    className: "bottom-[20%] right-[12%]",
    delay: 2,
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(nextSlide, 7000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const slide = slides[currentSlide];

  return (
    <section
      className="relative min-h-[calc(100svh-64px)] overflow-hidden bg-zinc-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <AnimatePresence mode="sync">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          {/* Image */}
          <motion.div
            key={`image-${slide.id}`}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 7,
              ease: "linear",
            }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />

          {/* Main dark overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Left-to-right cinematic gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/30" />

          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/30" />

          {/* Green atmosphere */}
          <div className="absolute left-[15%] top-[20%] h-80 w-80 rounded-full bg-green-500/10 blur-[130px]" />
          <div className="absolute bottom-[10%] right-[10%] h-96 w-96 rounded-full bg-emerald-500/10 blur-[150px]" />
        </motion.div>
      </AnimatePresence>

      {/* =====================================================
          TECH GRID
      ====================================================== */}

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

      {/* =====================================================
          FLOATING TECHNOLOGY ELEMENTS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {floatingItems.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              className={`absolute ${item.className}`}
              animate={{
                y: [0, -15, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 5,
                delay: item.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-xl">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
                  <Icon className="h-4 w-4" />
                </div>

                <span className="text-xs font-medium text-zinc-400">
                  {item.label}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Decorative center glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/10 blur-[150px]"
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-64px)] max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-10">
        <div className="w-full max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.15,
                  },
                },
                exit: {
                  opacity: 0,
                  y: -20,
                  transition: {
                    duration: 0.3,
                  },
                },
              }}
            >
              {/* Eyebrow */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                    },
                  },
                }}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 backdrop-blur-md"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>

                <Sparkles className="h-3.5 w-3.5 text-green-400" />

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-green-300">
                  {slide.eyebrow}
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 35,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[5.8rem]"
              >
                {slide.title}
                <span className="mt-2 block bg-gradient-to-r from-green-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  {slide.highlight}
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 25,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.7,
                    },
                  },
                }}
                className="mt-7 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8"
              >
                {slide.description}
              </motion.p>

              {/* Accent */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -15,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.6,
                    },
                  },
                }}
                className="mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-zinc-500"
              >
                <Layers3 className="h-4 w-4 text-green-400" />
                {slide.accent}
              </motion.div>

              {/* CTA */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 25,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.7,
                    },
                  },
                }}
                className="mt-9 flex flex-col gap-4 sm:flex-row"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-green-400 px-7 py-4 text-sm font-bold text-zinc-950 shadow-xl shadow-green-500/10 transition-all duration-300 hover:-translate-y-1 hover:bg-green-300 hover:shadow-green-500/20"
                >
                  Start a project
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/services"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10"
                >
                  Explore our services
                  <ArrowUpRightIcon />
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                  },
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 0.8,
                    },
                  },
                }}
                className="mt-12 flex flex-wrap gap-x-6 gap-y-3"
              >
                {[
                  "Modern technology",
                  "Scalable solutions",
                  "Security-focused",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs font-medium text-zinc-400"
                  >
                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                    {item}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* =====================================================
          SLIDE CONTROLS
      ====================================================== */}

      <div className="absolute bottom-8 left-0 right-0 z-30">
        <div className="mx-auto flex max-w-7xl items-end justify-between px-5 sm:px-8 lg:px-10">
          {/* Slide numbers */}
          <div className="flex items-center gap-3">
            {slides.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide ? "true" : undefined}
                className="group flex items-center gap-2"
              >
                <span
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === currentSlide
                      ? "w-12 bg-green-400"
                      : "w-5 bg-white/30 group-hover:bg-white/60"
                  }`}
                />

                <span
                  className={`hidden text-xs font-medium sm:block ${
                    index === currentSlide
                      ? "text-white"
                      : "text-zinc-600"
                  }`}
                >
                  0{index + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Previous / Next */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white backdrop-blur-md transition-all hover:border-green-400/30 hover:bg-green-400/10 hover:text-green-400"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white backdrop-blur-md transition-all hover:border-green-400/30 hover:bg-green-400/10 hover:text-green-400"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mx-auto mt-4 h-px max-w-7xl overflow-hidden bg-white/10 px-5 sm:px-8 lg:px-10">
          <motion.div
            key={`${currentSlide}-${isPaused}`}
            initial={{ width: "0%" }}
            animate={{
              width: isPaused ? "0%" : "100%",
            }}
            transition={{
              duration: isPaused ? 0 : 7,
              ease: "linear",
            }}
            className="h-full bg-green-400"
          />
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-24 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-500 lg:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.25em]">
          Scroll
        </span>

        <ArrowDown className="h-4 w-4" />
      </motion.div>

      {/* Decorative vertical line */}
      <div className="absolute bottom-0 left-1/2 hidden h-24 w-px bg-gradient-to-t from-green-400/40 to-transparent lg:block" />
    </section>
  );
};

/**
 * Small reusable icon component.
 */
const ArrowUpRightIcon = () => (
  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/20 transition-transform duration-300 group-hover:rotate-45">
    <ArrowRight className="h-3 w-3 -rotate-45" />
  </span>
);

export default Hero;
