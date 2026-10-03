import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import React from "react";

const page = () => {
  return (
    <main className="w-full">
      {/* Hero section */}
      <div>
        <Hero />
      </div>

      {/* About Section */}
      <div className="w-full">
        <About />
      </div>

      <div className="w-full">
        <Services />
      </div>

      

      <div>
        <Testimonials />
      </div>

      <div>
        <Portfolio />
      </div>

      <div>
        <Contact />
      </div>

      

      <div>
        <Blog />
      </div>
    </main>
  );
};

export default page;
