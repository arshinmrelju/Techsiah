import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Products } from "@/components/sections/Products";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <Services />
      <Products />
      <Process />
      <Pricing />
      <Contact />




      
      {/* 
        Future sections will be added here:
        - Introduction
        - Products
        - Why Techsiah
        - Process
        - Portfolio
        - Testimonials
        - Pricing
        - FAQ
        - Contact
      */}

      
      <section className="py-20 px-8 text-center glass-morphism">
        <h2 className="text-4xl font-bold mb-4">More Sections Coming Soon</h2>
        <p className="opacity-50">Developing the full premium experience...</p>
      </section>
    </div>
  );
}

