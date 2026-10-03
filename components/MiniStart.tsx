
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const MiniStart = () => {
  return (
    <section className="bg-zinc-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Have a project in mind?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
          Let’s create something brilliant together. We are excited to help you achieve your business goals.
        </p>
        <div className="mt-8 flex items-center justify-center gap-x-6">
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-full bg-green-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-green-500 hover:scale-105"
          >
            Start a Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MiniStart;