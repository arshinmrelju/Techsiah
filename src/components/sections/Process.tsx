"use client";

import { motion } from "framer-motion";
import { GradientText } from "../ui/GradientText";
import { GlassCard } from "../ui/GlassCard";

const steps = [
  {
    title: "Discovery",
    description: "In-depth analysis of your business needs and AI opportunities.",
  },
  {
    title: "Strategy",
    description: "Designing a custom architecture for scalable automation.",
  },
  {
    title: "Development",
    description: "Building your solution with premium code and intelligent systems.",
  },
  {
    title: "Deployment",
    description: "Seamless integration into your existing infrastructure.",
  },
  {
    title: "Scaling",
    description: "Continuous optimization and growth tracking with AI insights.",
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-32 px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Our <GradientText>Precision Process</GradientText>
        </h2>
        <p className="text-foreground/50">
          How we take your vision from concept to a world-class digital ecosystem.
        </p>
      </div>

      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-violet to-transparent hidden md:block" />

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="flex-1 w-full md:w-auto">
                <GlassCard className={index % 2 === 0 ? "md:text-right" : "md:text-left"}>
                  <h3 className="text-xl font-bold mb-2">0{index + 1}. {step.title}</h3>
                  <p className="text-foreground/50">{step.description}</p>
                </GlassCard>
              </div>
              
              <div className="relative flex items-center justify-center z-10">
                <div className="w-10 h-10 rounded-full bg-background border-4 border-primary shadow-[0_0_15px_rgba(0,112,243,0.5)]" />
              </div>

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
