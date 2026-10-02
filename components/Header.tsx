"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
    hasDropdown: true,
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Teams",
    href: "/teams",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Header = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all bg-white py-5 duration-500 ${
          isScrolled
            ? "border-b border-white/10  shadow-2xl shadow-black/20 backdrop-blur-2xl"
            : " backdrop-blur-xl"
        }`}
      >
        {/* Ambient header glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[15%] top-0 h-20 w-40 rounded-full bg-green-500/10 blur-3xl" />
          <div className="absolute right-[15%] top-0 h-20 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
        </div>

        {/* Subtle top accent */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/60 to-transparent" />

        <div
          className={`relative mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8 lg:px-10 ${
            isScrolled ? "h-16" : "h-[76px]"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="group relative flex items-center"
            aria-label="SommyTech Global Solutions home"
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl  " />

              <Image
                src="/assets/images/logo.jpg"
                width={150}
                height={50}
                alt="SommyTech Global Solutions LTD"
                priority
                className="relative h-auto w-[125px] object-contain sm:w-[145px]"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative flex items-center gap-1 px-4 py-2.5"
                >
                  <span
                    className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
                      active
                        ? "text-zinc-900"
                        : "text-zinc-900 group-hover:text-green-500"
                    }`}
                  >
                    {item.name}
                  </span>

                  {item.hasDropdown && (
                    <ChevronDown
                      className={`relative z-10 h-3.5 w-3.5 transition-all duration-300 ${
                        active
                          ? "text-green-400"
                          : "text-zinc-900 group-hover:text-green-400"
                      } group-hover:rotate-180`}
                    />
                  )}

                  {/* Hover background */}
                  <span className="absolute inset-0 rounded-xl bg-white/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Active indicator */}
                  {active && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-green-400 shadow-lg shadow-green-400/50"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="hidden items-center gap-5 lg:flex">
            {/* Availability */}
            <div className="hidden items-center gap-2 xl:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>

              <span className="text-xs font-medium text-zinc-500">
                Available for new projects
              </span>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-green-400 px-5 py-2.5 text-sm font-bold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-300 hover:shadow-xl hover:shadow-green-500/20"
            >
              <span className="relative z-10">Get Started</span>

              <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 transition-all duration-300 hover:border-green-400/30 hover:bg-green-400/10 hover:text-green-400 lg:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 top-[76px] -z-10 bg-black/60 backdrop-blur-sm lg:hidden"
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Menu Panel */}
              <motion.div
                id="mobile-navigation"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{
                  duration: 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute left-0 right-0 top-full border-t border-white/10 bg-zinc-950/98 shadow-2xl shadow-black/40 backdrop-blur-2xl lg:hidden"
              >
                <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
                  {/* Mobile status */}
                  <div className="mb-5 flex items-center gap-2 rounded-xl border border-green-400/10 bg-green-400/[0.04] px-4 py-3">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                    </span>

                    <span className="text-xs font-medium text-zinc-400">
                      Available for new projects
                    </span>
                  </div>

                  <nav className="space-y-1" aria-label="Mobile navigation">
                    {navigation.map((item, index) => {
                      const active = isActive(item.href);

                      return (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: index * 0.04,
                            duration: 0.3,
                          }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`group flex items-center justify-between rounded-xl px-4 py-3.5 transition-all duration-300 ${
                              active
                                ? "bg-green-400/10 text-green-400"
                                : "text-zinc-300 hover:bg-white/[0.04] hover:text-white"
                            }`}
                          >
                            <span className="text-sm font-medium">
                              {item.name}
                            </span>

                            <ArrowRight
                              className={`h-4 w-4 transition-all duration-300 ${
                                active
                                  ? "translate-x-0 text-green-400"
                                  : "-translate-x-2 text-zinc-600 opacity-0 group-hover:translate-x-0 group-hover:text-green-400 group-hover:opacity-100"
                              }`}
                            />
                          </Link>
                        </motion.div>
                      );
                    })}
                  </nav>

                  {/* Mobile CTA */}
                  <div className="mt-5 border-t border-white/10 pt-5">
                    <Link
                      href="/contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-green-400 px-5 py-3.5 text-sm font-bold text-zinc-950 transition-all duration-300 hover:bg-green-300"
                    >
                      Start a project
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* Mobile trust points */}
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                    {[
                      "Modern technology",
                      "Scalable solutions",
                      "Security-focused",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-1.5 text-[11px] text-zinc-500"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-green-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer because header is fixed */}
      <div className="h-[76px]" aria-hidden="true" />
    </>
  );
};

export default Header;
