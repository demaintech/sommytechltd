"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  ChevronRight,
  Clock3,
  Mail,
  Search,
  TrendingUp,
} from "lucide-react";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  slug: string;
  featured?: boolean;
};

const posts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Business Technology: Building for Continuous Change",
    excerpt:
      "Technology is evolving faster than ever. Explore how organizations can build digital systems that remain adaptable as business needs and emerging technologies change.",
    category: "Technology",
    date: "October 02, 2026",
    readTime: "7 min read",
    author: "SommyTech Team",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=85",
    slug: "future-of-business-technology",
    featured: true,
  },
  {
    id: 2,
    title: "Why Cloud-Native Architecture Matters for Modern Businesses",
    excerpt:
      "Cloud technology is more than moving applications online. Discover the architectural principles behind scalable, resilient digital systems.",
    category: "Cloud",
    date: "September 24, 2026",
    readTime: "6 min read",
    author: "SommyTech Engineering",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85",
    slug: "cloud-native-architecture",
  },
  {
    id: 3,
    title: "Designing Digital Products People Actually Want to Use",
    excerpt:
      "Great digital products combine technology with empathy, clarity, usability, and thoughtful product design.",
    category: "UI/UX",
    date: "September 18, 2026",
    readTime: "5 min read",
    author: "SommyTech Design",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=85",
    slug: "designing-digital-products",
  },
  {
    id: 4,
    title: "Security by Design: Why Cybersecurity Starts Before Development",
    excerpt:
      "Security should not be an afterthought. Learn how security-conscious architecture can become part of the product development lifecycle.",
    category: "Cybersecurity",
    date: "September 10, 2026",
    readTime: "8 min read",
    author: "SommyTech Security",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=85",
    slug: "security-by-design",
  },
  {
    id: 5,
    title: "Practical Applications of AI and Intelligent Automation",
    excerpt:
      "Artificial intelligence is becoming increasingly accessible. Here are practical areas where intelligent automation can support modern organizations.",
    category: "AI & Innovation",
    date: "September 03, 2026",
    readTime: "7 min read",
    author: "SommyTech Innovation",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=85",
    slug: "ai-intelligent-automation",
  },
  {
    id: 6,
    title: "Choosing the Right Technology Stack for a New Digital Product",
    excerpt:
      "Technology choices can shape the future of a product. Here are the key factors teams should consider before selecting a stack.",
    category: "Development",
    date: "August 27, 2026",
    readTime: "6 min read",
    author: "SommyTech Engineering",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=85",
    slug: "choosing-the-right-technology-stack",
  },
];

const categories = [
  "All",
  "Technology",
  "Cloud",
  "UI/UX",
  "Cybersecurity",
  "AI & Innovation",
  "Development",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;

      const searchValue = search.toLowerCase().trim();

      const matchesSearch =
        !searchValue ||
        post.title.toLowerCase().includes(searchValue) ||
        post.excerpt.toLowerCase().includes(searchValue) ||
        post.category.toLowerCase().includes(searchValue);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const featuredPost = posts.find((post) => post.featured);

  const regularPosts = filteredPosts.filter(
    (post) => post.id !== featuredPost?.id
  );

  return (
    <main className="overflow-hidden bg-zinc-950 text-white">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-20 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute -left-40 top-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-emerald-500/15 blur-[150px]" />
        <div className="absolute right-[-12rem] top-[-8rem] -z-10 h-[34rem] w-[34rem] rounded-full bg-teal-500/10 blur-[160px]" />

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-8 lg:pb-28 lg:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300 backdrop-blur-xl">
              <BookOpen size={15} />
              Insights & Resources
            </div>

            <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Ideas for the
              <span className="block bg-gradient-to-r from-emerald-300 via-green-400 to-teal-300 bg-clip-text text-transparent">
                digital future.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
              Explore practical insights, technology perspectives, product
              thinking, and ideas shaping the future of digital business.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-10 max-w-xl"
          >
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
              />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search articles..."
                className="w-full rounded-full border border-white/10 bg-white/[0.04] py-3.5 pl-12 pr-5 text-sm text-white outline-none backdrop-blur-xl placeholder:text-zinc-600 transition focus:border-emerald-400/30 focus:bg-white/[0.06]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CATEGORIES
      ========================================================== */}
      <section className="border-y border-white/[0.06] bg-zinc-900/40 py-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((category) => {
              const active = category === activeCategory;

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
                      layoutId="blog-category"
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
          FEATURED ARTICLE
      ========================================================== */}
      {featuredPost && !search && activeCategory === "All" && (
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-10 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">
                  Featured
                </p>

                <h2 className="mt-3 text-2xl font-semibold">
                  Editor’s pick
                </h2>
              </div>

              <div className="hidden items-center gap-2 text-sm text-zinc-600 sm:flex">
                <TrendingUp size={16} />
                Latest thinking
              </div>
            </div>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="group overflow-hidden rounded-[2rem] border border-white/[0.08] bg-zinc-900/60"
            >
              <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="relative min-h-[360px] overflow-hidden sm:min-h-[450px]"
                >
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    priority
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                  <div className="absolute left-6 top-6">
                    <span className="rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur-xl">
                      {featuredPost.category}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 flex items-center gap-2 text-xs text-zinc-300">
                    <CalendarDays size={14} />
                    {featuredPost.date}
                  </div>
                </Link>

                <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                  <div className="flex items-center gap-3 text-xs text-zinc-600">
                    <span>{featuredPost.readTime}</span>
                    <span className="h-1 w-1 rounded-full bg-zinc-700" />
                    <span>{featuredPost.author}</span>
                  </div>

                  <h2 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl">
                    {featuredPost.title}
                  </h2>

                  <p className="mt-5 text-base leading-7 text-zinc-400">
                    {featuredPost.excerpt}
                  </p>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="group/link mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-emerald-400"
                  >
                    Read article
                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </Link>
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* =========================================================
          ARTICLE GRID
      ========================================================== */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">
                Latest Articles
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Explore our thinking
              </h2>
            </div>

            <span className="hidden text-sm text-zinc-600 sm:block">
              {regularPosts.length} articles
            </span>
          </div>

          {regularPosts.length > 0 ? (
            <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {regularPosts.map((post, index) => (
                  <motion.article
                    layout
                    key={post.id}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.05,
                    }}
                    className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-zinc-900/60 transition duration-500 hover:-translate-y-1 hover:border-emerald-400/20"
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="relative block aspect-[16/10] overflow-hidden"
                    >
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />

                      <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-xl">
                        {post.category}
                      </span>
                    </Link>

                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-zinc-600">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays size={13} />
                          {post.date}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-zinc-700" />

                        <span className="inline-flex items-center gap-1.5">
                          <Clock3 size={13} />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="mt-5 text-xl font-semibold leading-snug transition group-hover:text-emerald-300">
                        {post.title}
                      </h3>

                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-500">
                        {post.excerpt}
                      </p>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="group/link mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-400"
                      >
                        Read more
                        <ChevronRight
                          size={16}
                          className="transition-transform group-hover/link:translate-x-1"
                        />
                      </Link>
                    </div>

                    <div className="h-px w-0 bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-500 group-hover:w-full" />
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="rounded-3xl border border-white/[0.07] bg-zinc-900/50 px-6 py-16 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.04] text-zinc-500">
                <Search size={20} />
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                No articles found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-500">
                Try another search term or select a different category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="mt-6 text-sm font-medium text-emerald-400 hover:text-emerald-300"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          TOPICS
      ========================================================== */}
      <section className="border-y border-white/[0.06] bg-zinc-900/40 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">
                Topics
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Explore ideas across
                <span className="block text-zinc-500">
                  the technology landscape.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-zinc-400">
                From engineering and cybersecurity to product design and
                emerging technology, explore practical perspectives for the
                digital world.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {categories
                .filter((category) => category !== "All")
                .map((category, index) => (
                  <motion.button
                    key={category}
                    type="button"
                    onClick={() => {
                      setActiveCategory(category);
                      setSearch("");
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    className="group flex items-center justify-between rounded-2xl border border-white/[0.07] bg-zinc-950/50 p-5 text-left transition hover:border-emerald-400/20 hover:bg-zinc-950"
                  >
                    <span className="text-sm font-medium text-zinc-300">
                      {category}
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="text-zinc-700 transition group-hover:text-emerald-400"
                    />
                  </motion.button>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          NEWSLETTER
      ========================================================== */}
      <section className="px-6 py-24 lg:px-8 lg:py-28">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-500/15 via-zinc-900 to-zinc-900 p-8 sm:p-12 lg:p-16">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-400/10 blur-[110px]" />
          <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-teal-400/10 blur-[110px]" />

          <div className="relative mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
              <Mail size={23} />
            </div>

            <p className="mt-6 text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">
              Stay Curious
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Technology insights, without the noise.
            </h2>

            <p className="mt-4 text-base leading-7 text-zinc-400">
              Get thoughtful technology insights, product ideas, and practical
              perspectives delivered to your inbox.
            </p>

            {/* Connect this form to your email provider */}
            <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Your email address"
                className="min-w-0 flex-1 rounded-full border border-white/10 bg-zinc-950/70 px-5 py-3.5 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-emerald-400/30"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3.5 text-sm font-medium text-zinc-950 transition hover:bg-emerald-300"
              >
                Subscribe
                <ArrowUpRight size={17} />
              </button>
            </form>

            <p className="mt-4 text-xs text-zinc-600">
              Connect this form to your preferred newsletter or email service
              before using it in production.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/[0.07] bg-zinc-900/60 p-8 sm:p-12 lg:p-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">
                Have an idea?
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Let’s build something meaningful.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">
                Have a project, technology challenge, or idea worth exploring?
                Start a conversation with the SommyTech team.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3.5 font-medium text-zinc-950 transition hover:bg-emerald-300"
            >
              Talk to Us
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
