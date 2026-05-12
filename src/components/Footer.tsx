"use client";

import Link from "next/link";
import { GradientText } from "./ui/GradientText";
import { MessageCircle, Briefcase, GitBranch, Camera } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-20 px-8 border-t border-white/5 glass-morphism">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-violet rounded-lg" />
            <span className="text-xl font-bold tracking-tighter">
              TECH<GradientText>SIAH</GradientText>
            </span>
          </Link>
          <p className="text-foreground/50 max-w-sm mb-8">
            Building the infrastructure of the future. AI-powered systems designed 
            for the modern intelligent enterprise.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors" title="X (Twitter)">
              <MessageCircle size={18} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors" title="LinkedIn">
              <Briefcase size={18} />
            </Link>
            <Link href="https://github.com/arshinmrelju" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors" title="GitHub">
              <GitBranch size={18} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors" title="Instagram">
              <Camera size={18} />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-foreground/50">
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
            <li><Link href="/blog" className="hover:text-primary transition-colors">Journal</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Resources</h4>
          <ul className="space-y-4 text-sm text-foreground/50">
            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
            <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
            <li><Link href="/dashboard" className="hover:text-primary transition-colors">OS Portal</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-foreground/30">
        <p>© 2026 Techsiah Labs. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          <Link href="/security" className="hover:text-foreground transition-colors">Security</Link>
        </div>
      </div>
    </footer>
  );
};
