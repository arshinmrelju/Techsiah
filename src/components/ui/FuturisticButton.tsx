"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FuturisticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const FuturisticButton = ({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: FuturisticButtonProps) => {
  const variants = {
    primary: "bg-primary text-white shadow-lg shadow-primary/20 hover:shadow-primary/40",
    secondary: "bg-secondary text-white shadow-lg shadow-secondary/20 hover:shadow-secondary/40",
    outline: "border border-white/20 hover:bg-white/5",
    ghost: "hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-bold",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative overflow-hidden rounded-full transition-all duration-300 active:scale-95",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 z-0 bg-gradient-to-r from-accent to-violet opacity-0 transition-opacity duration-300 hover:opacity-100"
          initial={false}
        />
      )}
    </motion.button>
  );
};
