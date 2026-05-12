"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { FuturisticButton } from "@/components/ui/FuturisticButton";
import { Bot, Sparkles, Zap, Shield, Play, Terminal } from "lucide-react";

export default function AIHubPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">AI <GradientText>Automation Hub</GradientText></h1>
          <p className="text-white/40">Orchestrate your multi-agent systems and custom LLMs.</p>
        </div>
        <div className="flex gap-4">
          <FuturisticButton variant="outline" size="sm" className="flex items-center gap-2">
            <Shield size={16} /> Audit Logs
          </FuturisticButton>
          <FuturisticButton size="sm" className="flex items-center gap-2">
            <Sparkles size={16} /> Deploy New Agent
          </FuturisticButton>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <GlassCard className="lg:col-span-2">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold">Active Workflows</h3>
            <span className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full font-bold uppercase">4 Live Agents</span>
          </div>

          <div className="space-y-4">
            {[
              { name: "OmniMind Lead Scraper", status: "Running", uptime: "14d 2h", load: "42%" },
              { name: "Support Ticket Classifier", status: "Standby", uptime: "5d 12h", load: "12%" },
              { name: "Financial Report Generator", status: "Scheduled", uptime: "N/A", load: "0%" },
              { name: "Code Review Assistant", status: "Running", uptime: "22d 8h", load: "68%" },
            ].map((agent, i) => (
              <div key={agent.name} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:border-primary/30 transition-all group">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${agent.status === "Running" ? "bg-primary/20 text-primary" : "bg-white/10 text-white/40"}`}>
                    <Zap size={20} />
                  </div>
                  <div>
                    <p className="font-bold">{agent.name}</p>
                    <p className="text-xs text-white/30">Uptime: {agent.uptime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="hidden md:block">
                    <p className="text-xs text-white/30 mb-1">Load</p>
                    <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: agent.load }} />
                    </div>
                  </div>
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors group-hover:text-primary">
                    <Play size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <div className="space-y-8">
          <GlassCard className="bg-primary/5 border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="text-primary" />
              <h3 className="font-bold">OmniMind Insights</h3>
            </div>
            <p className="text-sm text-white/60 mb-6">
              "Your automation efficiency increased by 22% this week. I recommend 
              optimizing the Support Classifier prompts for better accuracy."
            </p>
            <FuturisticButton size="sm" className="w-full">Analyze Suggestions</FuturisticButton>
          </GlassCard>

          <GlassCard>
            <div className="flex items-center gap-3 mb-6">
              <Terminal size={18} className="text-white/40" />
              <h3 className="font-bold">Quick Console</h3>
            </div>
            <div className="bg-black/50 p-4 rounded-lg font-mono text-xs text-green-500 mb-4 h-32 overflow-y-auto">
              <p>&gt; initializing omnimind-agent-v4...</p>
              <p>&gt; connecting to neural-bridge...</p>
              <p>&gt; security handshake success.</p>
              <p>&gt; load balancer: optimized.</p>
              <p className="animate-pulse">&gt; system ready_</p>
            </div>
            <input 
              type="text" 
              placeholder="Enter command..." 
              className="w-full bg-white/5 border border-white/10 px-4 py-2 rounded-lg outline-none focus:border-primary text-sm"
            />
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
