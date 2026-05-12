"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { 
  TrendingUp, 
  Users, 
  Briefcase, 
  CheckCircle2, 
  ArrowUpRight, 
  ArrowDownRight 
} from "lucide-react";

const stats = [
  { label: "Total Revenue", value: "$124,500", change: "+12.5%", trending: "up", icon: TrendingUp },
  { label: "Active Clients", value: "48", change: "+3", trending: "up", icon: Users },
  { label: "Open Projects", value: "12", change: "0", trending: "neutral", icon: Briefcase },
  { label: "Completion Rate", value: "98.2%", change: "-0.5%", trending: "down", icon: CheckCircle2 },
];

export default function DashboardOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome back, <GradientText>Admin</GradientText></h1>
        <p className="text-white/40">Here is what's happening with Techsiah today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-white/5 text-primary">
                  <stat.icon size={20} />
                </div>
                <div className={cn(
                  "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
                  stat.trending === "up" ? "bg-green-500/10 text-green-500" : 
                  stat.trending === "down" ? "bg-red-500/10 text-red-500" : "bg-white/10 text-white/50"
                )}>
                  {stat.change}
                  {stat.trending === "up" ? <ArrowUpRight size={12} /> : 
                   stat.trending === "down" ? <ArrowDownRight size={12} /> : null}
                </div>
              </div>
              <p className="text-sm text-white/40">{stat.label}</p>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Area Placeholder */}
        <GlassCard className="lg:col-span-2 h-[400px] flex items-center justify-center border-dashed border-white/10 bg-transparent">
          <div className="text-center">
            <p className="text-white/20 mb-4 font-mono text-sm">Revenue Over Time (Analytics Ready)</p>
            <div className="w-full max-w-md h-32 flex items-end gap-2">
              {[40, 70, 45, 90, 65, 80, 50, 85, 60, 95].map((h, i) => (
                <motion.div 
                  key={i} 
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: i * 0.05, duration: 1 }}
                  className="flex-1 bg-gradient-to-t from-primary/20 to-primary rounded-t-sm" 
                />
              ))}
            </div>
          </div>
        </GlassCard>

        {/* Recent Activity */}
        <GlassCard className="h-[400px] overflow-hidden flex flex-col">
          <h3 className="text-lg font-bold mb-6">AI Insights</h3>
          <div className="space-y-6 flex-1 overflow-y-auto pr-2">
            {[
              { text: "Detected 15% drop in API latency for OmniMind.", type: "system" },
              { text: "New lead from Vercel Corp - Potential SaaS partnership.", type: "client" },
              { text: "Project 'Nexus-9' reaches Deployment phase.", type: "project" },
              { text: "Optimization suggested for Cloud Infrastructure nodes.", type: "ai" },
            ].map((activity, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-sm text-white/60 leading-relaxed">{activity.text}</p>
              </div>
            ))}
          </div>
          <button className="mt-6 text-xs text-primary font-bold uppercase tracking-widest hover:opacity-80">
            View Full Report
          </button>
        </GlassCard>
      </div>
    </div>
  );
}

// Helper function needed in this file or imported
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
