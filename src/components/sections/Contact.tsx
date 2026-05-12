"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { GradientText } from "../ui/GradientText";
import { FuturisticButton } from "../ui/FuturisticButton";
import { Mail, MessageSquare, MapPin, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <GradientText>Build the Future?</GradientText>
          </h2>
          <p className="text-foreground/50 mb-12 max-w-lg">
            Connect with our team to explore how Techsiah can transform your business 
            with AI-powered innovation and premium digital solutions.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-foreground/50">Email Us</p>
                <p className="text-lg font-bold">hello@techsiah.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-violet/10 flex items-center justify-center group-hover:bg-violet/20 transition-colors">
                <MessageSquare className="text-violet" />
              </div>
              <div>
                <p className="text-sm text-foreground/50">Live Chat</p>
                <p className="text-lg font-bold">Available 24/7</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <MapPin className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-foreground/50">Location</p>
                <p className="text-lg font-bold">Global / Remote</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <GlassCard glow className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium opacity-50">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium opacity-50">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium opacity-50">Project Type</label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary outline-none transition-colors appearance-none">
                  <option>AI Automation</option>
                  <option>SaaS Development</option>
                  <option>Web Platform</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium opacity-50">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your vision..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary outline-none transition-colors resize-none"
                />
              </div>

              <FuturisticButton className="w-full py-4 group">
                Send Message <Send className="inline-block ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
              </FuturisticButton>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
