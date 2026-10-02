"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Sparkles,
  User,
} from "lucide-react";

type BlogPost = {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  authorName: string;
  authorAvatar: string;
  readTime: string;
  href: string;
  featured?: boolean;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: "Web Development",
    title: "The Future of Headless CMS and Next.js",
    excerpt:
      "Discover how headless CMS platforms are changing modern web development and how Next.js can be used to build faster, more flexible digital experiences.",
    imageUrl:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2231&auto=format&fit=crop",
    authorName: "Jane Doe",
    authorAvatar: "https://i.pravatar.cc/150?u=jane",
    readTime: "6 min read",
    href: "/blog/headless-cms-nextjs",
    featured: true,
  },
  {
    id: 2,
    category: "Cloud Solutions",
    title: "Scaling Your Application with Serverless Architecture",
    excerpt:
      "A practical look at serverless computing, its benefits, and how modern teams can build scalable cloud applications.",
    imageUrl:
      "https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2071&auto=format&fit=crop",
    authorName: "John Smith",
    authorAvatar: "https://i.pravatar.cc/150?u=john",
    readTime: "8 min read",
    href: "/blog/scaling-serverless",
  },
  {
    id: 3,
    category: "UI/UX Design",
    title: "10 UI/UX Principles for a Better User Experience",
    excerpt:
      "Learn practical design principles that help create intuitive, engaging, and user-friendly digital products.",
    imageUrl:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop",
    authorName: "Alex Johnson",
    authorAvatar: "https://i.pravatar.cc/150?u=alex",
    readTime: "5 min read",
    href: "/blog/ui-ux-principles",
  },
];

const Blog = () => {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-zinc-50 py-24 sm:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-green-500/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-500/5 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#18181b 1px, transparent 1px), linear-gradient(90deg, #18181b 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
              <Sparkles className="h-4 w-4" />
              Insights &amp; Resources
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              Ideas that move
              <span className="block bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                technology forward.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
              Explore practical insights, emerging technologies, development
              strategies, and design thinking from the SommyTech team.
            </p>
          </div>

          <Link
            href="/blog"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition-all hover:-translate-y-0.5 hover:border-green-300 hover:text-green-700 lg:self-auto"
          >
            View all insights
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Featured Article */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <Link
              href={featuredPost.href}
              className="group grid overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-zinc-200/70 lg:grid-cols-[1.25fr_0.75fr]"
            >
              {/* Image */}
              <div className="relative min-h-[320px] overflow-hidden lg:min-h-[460px]">
                <Image
                  src={featuredPost.imageUrl}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Featured badge */}
                <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5 text-green-400" />
                  Featured insight
                </div>

                {/* Image category */}
                <div className="absolute bottom-6 left-6">
                  <span className="rounded-full bg-green-400 px-3 py-1.5 text-xs font-bold text-zinc-950">
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <Clock3 className="h-4 w-4 text-green-600" />
                  {featuredPost.readTime}
                </div>

                <h3 className="mt-5 text-2xl font-bold leading-tight text-zinc-950 transition-colors group-hover:text-green-700 sm:text-3xl lg:text-4xl">
                  {featuredPost.title}
                </h3>

                <p className="mt-5 leading-7 text-zinc-600">
                  {featuredPost.excerpt}
                </p>

                {/* Author */}
                <div className="mt-8 flex items-center gap-3 border-t border-zinc-100 pt-6">
                  <Image
                    src={featuredPost.authorAvatar}
                    alt={featuredPost.authorName}
                    width={42}
                    height={42}
                    className="rounded-full object-cover ring-2 ring-zinc-100"
                  />

                  <div>
                    <p className="text-sm font-semibold text-zinc-900">
                      {featuredPost.authorName}
                    </p>
                    <p className="text-xs text-zinc-500">Technology &amp; Innovation</p>
                  </div>

                  <div className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Regular Articles */}
        <div className="grid gap-6 md:grid-cols-2">
          {regularPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <Link
                href={post.href}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-zinc-200/60"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

                  <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    {post.category}
                  </span>

                  <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-zinc-900 opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
                    <Clock3 className="h-3.5 w-3.5 text-green-600" />
                    {post.readTime}
                  </div>

                  <h3 className="mt-3 text-xl font-bold leading-snug text-zinc-950 transition-colors group-hover:text-green-700">
                    {post.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex items-center gap-3 border-t border-zinc-100 pt-5">
                    <Image
                      src={post.authorAvatar}
                      alt={post.authorName}
                      width={34}
                      height={34}
                      className="rounded-full object-cover"
                    />

                    <div>
                      <p className="text-sm font-semibold text-zinc-900">
                        {post.authorName}
                      </p>
                      <p className="flex items-center gap-1 text-xs text-zinc-500">
                        <User className="h-3 w-3" />
                        Author
                      </p>
                    </div>

                    <span className="ml-auto inline-flex items-center gap-1 text-sm font-semibold text-green-600 transition-all group-hover:gap-2">
                      Read article
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 overflow-hidden rounded-3xl bg-zinc-950 p-8 sm:p-10"
        >
          <div className="relative flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            {/* CTA glow */}
            <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-green-500/20 blur-[80px]" />

            <div className="relative">
              <p className="text-sm font-semibold text-green-400">
                Stay ahead of the curve
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                More technology insights are on the way.
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
                Explore our complete collection of articles, guides, and
                technology insights.
              </p>
            </div>

            <Link
              href="/blog"
              className="group relative inline-flex shrink-0 items-center gap-2 rounded-xl bg-green-400 px-5 py-3.5 text-sm font-bold text-zinc-950 transition-all hover:-translate-y-0.5 hover:bg-green-300"
            >
              Explore the blog
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
