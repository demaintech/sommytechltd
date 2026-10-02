"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const MinorContact = () => {
  return (
    <section className="bg-green-600 py-16 sm:py-24">
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to transform your business?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
          Let&apos;s build something amazing together. Our team is ready to help you achieve your digital goals.
        </p>
        <div className="mt-8 flex items-center justify-center gap-x-6">
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-green-600 shadow-sm transition-all hover:bg-blue-50 hover:scale-105"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MinorContact;