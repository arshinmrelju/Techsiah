"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { FuturisticButton } from "@/components/ui/FuturisticButton";
import { Plus, Calendar, CheckCircle2, Clock, MoreVertical } from "lucide-react";

const columns = [
  {
    title: "To Do",
    tasks: [
      { id: 1, title: "AI Model Refinement", project: "OmniMind", priority: "High", deadline: "May 15" },
      { id: 2, title: "Auth System Audit", project: "SiahOS", priority: "Medium", deadline: "May 18" },
    ]
  },
  {
    title: "In Progress",
    tasks: [
      { id: 3, title: "Stripe API Integration", project: "Stripe Tech", priority: "High", deadline: "May 20" },
      { id: 4, title: "Visual Identity Update", project: "Framer", priority: "Low", deadline: "May 25" },
    ]
  },
  {
    title: "Review",
    tasks: [
      { id: 5, title: "Beta Testing Phase 1", project: "Vercel", priority: "High", deadline: "May 12" },
    ]
  },
  {
    title: "Completed",
    tasks: [
      { id: 6, title: "Core Infrastructure Setup", project: "Internal", priority: "High", deadline: "May 01" },
    ]
  }
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Project <GradientText>Nexus</GradientText></h1>
          <p className="text-white/40">Track your sprints, tasks, and team progress.</p>
        </div>
        <div className="flex gap-4">
          <FuturisticButton variant="outline" size="sm">Invite Team</FuturisticButton>
          <FuturisticButton size="sm">Create Task</FuturisticButton>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
        {columns.map((column, i) => (
          <div key={column.title} className="w-80 shrink-0">
            <div className="flex items-center justify-between mb-4 px-2">
              <h3 className="font-bold flex items-center gap-2">
                {column.title}
                <span className="text-xs px-2 py-0.5 bg-white/5 rounded-full text-white/40">{column.tasks.length}</span>
              </h3>
              <button className="p-1 hover:bg-white/5 rounded-lg text-white/30"><Plus size={16} /></button>
            </div>

            <div className="space-y-4">
              {column.tasks.map((task, j) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (i * 0.1) + (j * 0.05) }}
                >
                  <GlassCard className="p-4 cursor-grab active:cursor-grabbing border-white/5 hover:border-primary/20 group">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest ${
                        task.priority === "High" ? "bg-red-500/10 text-red-500" :
                        task.priority === "Medium" ? "bg-yellow-500/10 text-yellow-500" :
                        "bg-blue-500/10 text-blue-500"
                      }`}>
                        {task.priority}
                      </span>
                      <button className="p-1 opacity-0 group-hover:opacity-100 transition-opacity"><MoreVertical size={14} /></button>
                    </div>
                    <h4 className="font-bold mb-2 line-clamp-2">{task.title}</h4>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2 text-xs text-white/30">
                        <Calendar size={12} />
                        <span>{task.deadline}</span>
                      </div>
                      <div className="flex items-center -space-x-2">
                        {[1, 2].map((u) => (
                          <div key={u} className="w-6 h-6 rounded-full bg-gray-800 border border-white/10" />
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
