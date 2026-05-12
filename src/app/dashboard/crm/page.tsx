"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { FuturisticButton } from "@/components/ui/FuturisticButton";
import { Search, Filter, MoreHorizontal, Mail, Phone } from "lucide-react";

const clients = [
  { name: "Vercel Corp", email: "contact@vercel.com", project: "Enterprise AI Hub", status: "Active", value: "$25k" },
  { name: "Linear Systems", email: "ops@linear.app", project: "SiahOS Integration", status: "Pending", value: "$12k" },
  { name: "OpenAI Labs", email: "admin@openai.com", project: "Neural Bridge", status: "Active", value: "$45k" },
  { name: "Stripe Tech", email: "finance@stripe.com", project: "Payment Gateway AI", status: "Completed", value: "$30k" },
  { name: "Framer Design", email: "hello@framer.com", project: "Interactive UI Engine", status: "Active", value: "$18k" },
];

export default function CRMPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Client <GradientText>Management</GradientText></h1>
          <p className="text-white/40">Manage your clients, contracts, and pipelines.</p>
        </div>
        <FuturisticButton size="md">Add New Client</FuturisticButton>
      </div>

      <GlassCard className="p-0">
        <div className="p-6 border-b border-white/5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-lg border border-white/5 w-full md:w-96">
            <Search size={18} className="text-white/30" />
            <input 
              type="text" 
              placeholder="Search clients..." 
              className="bg-transparent border-none outline-none text-sm w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm border border-white/5">
              <Filter size={16} /> Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-xs uppercase tracking-wider text-white/40">
              <tr>
                <th className="px-6 py-4 font-medium">Client</th>
                <th className="px-6 py-4 font-medium">Project</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Value</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {clients.map((client, i) => (
                <motion.tr 
                  key={client.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-white/[0.02] transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-bold">{client.name}</span>
                      <span className="text-xs text-white/30">{client.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">{client.project}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                      client.status === "Active" ? "bg-green-500/10 text-green-500" :
                      client.status === "Pending" ? "bg-yellow-500/10 text-yellow-500" :
                      "bg-blue-500/10 text-blue-500"
                    }`}>
                      {client.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono text-sm">{client.value}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <Mail size={16} className="text-white/40" />
                      </button>
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <MoreHorizontal size={16} className="text-white/40" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t border-white/5 flex items-center justify-between">
          <p className="text-xs text-white/30">Showing 5 of 48 clients</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white/5 rounded-lg text-xs hover:bg-white/10 border border-white/5 disabled:opacity-30" disabled>Previous</button>
            <button className="px-4 py-2 bg-white/5 rounded-lg text-xs hover:bg-white/10 border border-white/5">Next</button>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
