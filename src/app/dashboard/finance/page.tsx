"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { FuturisticButton } from "@/components/ui/FuturisticButton";
import { DollarSign, CreditCard, PieChart, ArrowUp, ArrowDown, FileText } from "lucide-react";

export default function FinancePage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Finance <GradientText>Dashboard</GradientText></h1>
          <p className="text-white/40">Monitor revenue, expenses, and financial health.</p>
        </div>
        <FuturisticButton size="md" className="flex items-center gap-2">
          <FileText size={18} /> Generate Report
        </FuturisticButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="bg-green-500/5 border-green-500/20">
          <p className="text-sm text-green-500/60 mb-1 font-bold uppercase tracking-widest">Total Revenue</p>
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-bold">$128,430</h2>
            <span className="text-green-500 flex items-center text-sm font-bold"><ArrowUp size={14} /> 12%</span>
          </div>
        </GlassCard>
        
        <GlassCard className="bg-red-500/5 border-red-500/20">
          <p className="text-sm text-red-500/60 mb-1 font-bold uppercase tracking-widest">Expenses</p>
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-bold">$42,120</h2>
            <span className="text-red-500 flex items-center text-sm font-bold"><ArrowUp size={14} /> 4%</span>
          </div>
        </GlassCard>

        <GlassCard className="bg-primary/5 border-primary/20">
          <p className="text-sm text-primary/60 mb-1 font-bold uppercase tracking-widest">Net Profit</p>
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-bold">$86,310</h2>
            <span className="text-primary flex items-center text-sm font-bold"><ArrowUp size={14} /> 18%</span>
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassCard>
          <h3 className="text-xl font-bold mb-6">Recent Transactions</h3>
          <div className="space-y-4">
            {[
              { desc: "OpenAI API Subscription", amount: "-$1,200", date: "May 10", status: "Paid" },
              { desc: "Vercel Enterprise Payment", amount: "+$25,000", date: "May 08", status: "Received" },
              { desc: "AWS Infrastructure", amount: "-$3,450", date: "May 05", status: "Paid" },
              { desc: "Stripe Project Milestone", amount: "+$12,000", date: "May 02", status: "Received" },
            ].map((tx, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${tx.amount.startsWith("+") ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"}`}>
                    <CreditCard size={20} />
                  </div>
                  <div>
                    <p className="font-medium">{tx.desc}</p>
                    <p className="text-xs text-white/30">{tx.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${tx.amount.startsWith("+") ? "text-green-500" : "text-white"}`}>{tx.amount}</p>
                  <p className="text-[10px] uppercase tracking-widest opacity-30">{tx.status}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="flex flex-col">
          <h3 className="text-xl font-bold mb-6">Revenue Breakdown</h3>
          <div className="flex-1 flex items-center justify-center relative">
            {/* Visual representation of a donut chart */}
            <div className="w-48 h-48 rounded-full border-[12px] border-white/5 relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[12px] border-primary border-t-transparent border-r-transparent rotate-45" />
              <div className="absolute inset-0 rounded-full border-[12px] border-violet border-b-transparent border-l-transparent -rotate-12" />
              <div className="text-center">
                <p className="text-xs text-white/40 uppercase">Total</p>
                <p className="text-xl font-bold">$128k</p>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-xs text-white/60">SaaS Products (65%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-violet" />
                <span className="text-xs text-white/60">AI Services (35%)</span>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
