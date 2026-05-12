"use client";

import { motion } from "framer-motion";
import { FuturisticButton } from "../ui/FuturisticButton";
import { GradientText } from "../ui/GradientText";
import { GlassCard } from "../ui/GlassCard";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-8 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-violet/20 rounded-full blur-[120px] animate-pulse delay-700" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-1.5 mb-6 glass rounded-full border border-white/10 text-sm font-medium tracking-wide text-primary/80"
        >
          THE NEXT GENERATION OF AI SYSTEMS
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1]">
          Building the Future with <br />
          <GradientText>AI-Powered Innovation</GradientText>
        </h1>

        <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-12">
          Techsiah empowers businesses with state-of-the-art automation, digital products, 
          and scalable SaaS solutions. Welcome to the intelligent enterprise.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <FuturisticButton size="lg">
            Get Started
          </FuturisticButton>
          <FuturisticButton variant="outline" size="lg">
            Explore Services
          </FuturisticButton>
        </div>
      </motion.div>

      {/* Floating UI Elements */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-20 right-10 hidden lg:block"
      >
        <GlassCard className="w-64" glow>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-ping" />
            <span className="text-xs font-mono uppercase tracking-widest opacity-50">System Status</span>
          </div>
          <div className="space-y-2">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary" 
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ duration: 2, delay: 1 }}
              />
            </div>
            <p className="text-sm">99.9% Efficiency</p>
          </div>
        </GlassCard>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="absolute top-1/3 left-10 hidden lg:block"
      >
        <GlassCard className="w-48">
          <p className="text-2xl font-bold">+250%</p>
          <p className="text-xs opacity-50">ROI Performance</p>
        </GlassCard>
      </motion.div>
    </section>
  );
};
