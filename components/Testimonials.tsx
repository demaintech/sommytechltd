"use client";

import React from "react";
import { Avatar } from "@nextui-org/react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Quote,
  Star,
  Users,
} from "lucide-react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  testimonial: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "Company ABC",
    image: "https://i.pravatar.cc/150?u=sarah",
    testimonial:
      "SommyTech completely transformed our digital presence. Their team understood our goals, challenged our assumptions, and delivered a platform that has made a measurable difference to our business.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "CTO",
    company: "Tech Solutions",
    image: "https://i.pravatar.cc/150?u=michael",
    testimonial:
      "The cloud infrastructure SommyTech built for us gave our team the reliability and scalability we needed. Their technical expertise and communication throughout the project were exceptional.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily White",
    role: "Marketing Director",
    company: "Innovate Corp",
    image: "https://i.pravatar.cc/150?u=emily",
    testimonial:
      "From the first design concepts to the final product, the SommyTech team delivered an experience that our customers genuinely enjoy using. The attention to detail was outstanding.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Lee",
    role: "Founder",
    company: "Startup X",
    image: "https://i.pravatar.cc/150?u=david",
    testimonial:
      "SommyTech helped us turn a complicated technology roadmap into a clear and actionable plan. They became a trusted technical partner rather than just another service provider.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-zinc-950 py-24 sm:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-green-500/10 blur-[140px]" />

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />

        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

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
            <Users className="h-4 w-4" />
            Client Success Stories
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Trusted by teams building{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              what&apos;s next.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            We partner with ambitious businesses to solve complex technology
            challenges and create digital experiences people love.
          </p>
        </div>

        {/* Trust indicators */}
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="flex items-center justify-center gap-3 px-6 py-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
            </div>

            <div>
              <p className="font-bold text-white">98%</p>
              <p className="text-xs text-zinc-500">Client satisfaction</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 px-6 py-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10">
              <Building2 className="h-5 w-5 text-green-400" />
            </div>

            <div>
              <p className="font-bold text-white">50+</p>
              <p className="text-xs text-zinc-500">Businesses served</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 px-6 py-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10">
              <Star className="h-5 w-5 text-green-400" />
            </div>

            <div>
              <p className="font-bold text-white">5.0/5</p>
              <p className="text-xs text-zinc-500">Average rating</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="relative mx-auto mt-16 max-w-6xl">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop
            speed={700}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".testimonial-pagination",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 2,
                spaceBetween: 28,
              },
            }}
            className="!overflow-visible"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <article className="group relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-green-500/30 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-black/30 sm:p-10">
                  {/* Decorative quote */}
                  <div className="absolute right-7 top-6 text-green-500/10 transition-colors duration-500 group-hover:text-green-500/20">
                    <Quote className="h-24 w-24 fill-current" />
                  </div>

                  {/* Rating */}
                  <div className="relative flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map(
                      (_, index) => (
                        <Star
                          key={index}
                          className="h-4 w-4 fill-green-400 text-green-400"
                        />
                      ),
                    )}

                    <span className="ml-2 text-xs font-medium text-zinc-500">
                      Verified experience
                    </span>
                  </div>

                  {/* Testimonial */}
                  <blockquote className="relative mt-8 flex-1">
                    <p className="text-lg font-medium leading-8 text-zinc-200 sm:text-xl">
                      &ldquo;{testimonial.testimonial}&rdquo;
                    </p>
                  </blockquote>

                  {/* Divider */}
                  <div className="my-8 h-px bg-gradient-to-r from-white/10 via-white/10 to-transparent" />

                  {/* Client */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <Avatar
                        src={testimonial.image}
                        name={testimonial.name}
                        alt={testimonial.name}
                        className="h-12 w-12 shrink-0 border-2 border-white/10"
                      />

                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-white">
                            {testimonial.name}
                          </p>

                          <CheckCircle2 className="h-4 w-4 text-green-400" />
                        </div>

                        <p className="mt-0.5 text-sm text-zinc-500">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>

                    <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-600 transition-all duration-300 group-hover:border-green-500/30 group-hover:text-green-400 sm:flex">
                      <ArrowRight className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                    </div>
                  </div>

                  {/* Bottom hover line */}
                  <div className="absolute bottom-0 left-8 right-8 h-px overflow-hidden bg-white/5">
                    <div className="h-full w-0 bg-gradient-to-r from-green-400 to-emerald-400 transition-all duration-700 group-hover:w-full" />
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination */}
          <div className="testimonial-pagination mt-10 flex justify-center gap-2" />
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto mt-20 flex max-w-5xl flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-center sm:p-8 lg:flex-row lg:text-left">
          <div>
            <p className="text-lg font-semibold text-white">
              Your success story could be next.
            </p>

            <p className="mt-1 text-sm text-zinc-500">
              Let&apos;s discuss what we can build together.
            </p>
          </div>

          <a
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-zinc-950 transition-all duration-300 hover:bg-green-400 hover:text-white"
          >
            Start a Conversation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Swiper pagination styling */}
      <style jsx global>{`
        .testimonial-pagination .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          margin: 0 4px !important;
          background: rgba(255, 255, 255, 0.2);
          opacity: 1;
          transition: all 0.3s ease;
        }

        .testimonial-pagination .swiper-pagination-bullet-active {
          width: 28px;
          border-radius: 999px;
          background: rgb(74, 222, 128);
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
