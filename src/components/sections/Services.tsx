"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { GradientText } from "../ui/GradientText";
import { 
  Brain, 
  Cpu, 
  Globe, 
  Palette, 
  BarChart, 
  Lock, 
  Zap, 
  Layers 
} from "lucide-react";

const services = [
  {
    title: "AI Solutions",
    description: "Custom neural networks and LLM integrations for intelligent automation.",
    icon: Brain,
    color: "text-blue-500",
  },
  {
    title: "SaaS Development",
    description: "Scalable cloud-native platforms built for high-performance business.",
    icon: Cpu,
    color: "text-purple-500",
  },
  {
    title: "Web & App Development",
    description: "Premium digital experiences with cinematic UI/UX and smooth performance.",
    icon: Globe,
    color: "text-cyan-500",
  },
  {
    title: "Branding",
    description: "Futuristic brand identity systems that command attention and trust.",
    icon: Palette,
    color: "text-pink-500",
  },
  {
    title: "Automation Systems",
    description: "End-to-end business workflow automation powered by smart agents.",
    icon: Zap,
    color: "text-yellow-500",
  },
  {
    title: "Cloud Infrastructure",
    description: "Enterprise-grade architecture with 99.9% uptime and global scale.",
    icon: Layers,
    color: "text-indigo-500",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Our <GradientText>Core Expertise</GradientText>
        </motion.h2>
        <p className="text-foreground/50 max-w-2xl mx-auto">
          We combine cutting-edge technology with high-end design to deliver 
          transformative digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard glow className="h-full group hover:border-primary/30">
              <div className={`p-3 rounded-xl bg-white/5 w-fit mb-6 group-hover:scale-110 transition-transform ${service.color}`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-foreground/50 leading-relaxed">
                {service.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
