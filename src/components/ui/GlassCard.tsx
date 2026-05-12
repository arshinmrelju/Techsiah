"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export const GlassCard = ({ children, className, glow = false }: GlassCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-300",
        glow && "hover:shadow-[0_0_30px_rgba(0,112,243,0.3)] hover:border-primary/50",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
