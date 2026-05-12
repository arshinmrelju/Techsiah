"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { GradientText } from "../ui/GradientText";
import { FuturisticButton } from "../ui/FuturisticButton";
import Image from "next/image";

const products = [
  {
    title: "SiahOS",
    tag: "Internal OS",
    description: "The complete operating system for modern enterprises. Manage projects, finance, and AI in one place.",
    image: "https://images.unsplash.com/photo-1551288049-bbda38a594a0?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "OmniMind AI",
    tag: "Automation Hub",
    description: "Multi-agent orchestration platform that automates complex business logic with zero friction.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
  },
];

export const Products = () => {
  return (
    <section id="products" className="py-32 px-8 bg-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <GradientText>Flagship Products</GradientText>
            </h2>
            <p className="text-foreground/50">
              Battle-tested platforms designed to scale your operations 
              into the next decade.
            </p>
          </div>
          <FuturisticButton variant="outline">View All Products</FuturisticButton>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <GlassCard className="p-0 overflow-hidden group">
                <div className="relative h-64 w-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-primary/20 backdrop-blur-md rounded-full text-xs font-bold border border-primary/30">
                    {product.tag}
                  </div>
                  {/* Image placeholder - normally would use next/image with actual assets */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                  <p className="text-foreground/50 mb-6">{product.description}</p>
                  <FuturisticButton variant="ghost" size="sm" className="group/btn">
                    Learn More <span className="inline-block transition-transform group-hover/btn:translate-x-1 ml-2">→</span>
                  </FuturisticButton>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
