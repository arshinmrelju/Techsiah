"use client";

import Link from "next/link";
import { FuturisticButton } from "./ui/FuturisticButton";
import { GradientText } from "./ui/GradientText";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 glass-morphism backdrop-blur-md"
    >
      <Link href="/" className="flex items-center gap-2">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-violet rounded-lg" />
        <span className="text-2xl font-bold tracking-tighter">
          TECH<GradientText>SIAH</GradientText>
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
        <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
        <Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
        <Link href="/about" className="hover:text-primary transition-colors">About</Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/contact">
          <FuturisticButton variant="outline" size="sm">
            Book Consultation
          </FuturisticButton>
        </Link>
        <Link href="/dashboard">
          <FuturisticButton size="sm">
            OS Portal
          </FuturisticButton>
        </Link>
      </div>
    </motion.nav>
  );
};
