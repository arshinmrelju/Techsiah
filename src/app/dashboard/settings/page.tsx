"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { FuturisticButton } from "@/components/ui/FuturisticButton";
import { User, Bell, Lock, Globe, Database, Cpu } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold mb-2">System <GradientText>Settings</GradientText></h1>
        <p className="text-white/40">Configure your OS preferences and brand identity.</p>
      </div>

      <div className="space-y-6">
        <GlassCard>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <User size={24} />
            </div>
            <div>
              <h3 className="font-bold">Profile Settings</h3>
              <p className="text-xs text-white/40">Manage your administrator account details.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/30">Display Name</label>
              <input type="text" defaultValue="Techsiah Admin" className="w-full bg-white/5 border border-white/10 px-4 py-2 rounded-lg outline-none focus:border-primary text-sm" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/30">Email Address</label>
              <input type="email" defaultValue="admin@techsiah.com" className="w-full bg-white/5 border border-white/10 px-4 py-2 rounded-lg outline-none focus:border-primary text-sm" />
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-xl bg-violet/10 text-violet">
              <Cpu size={24} />
            </div>
            <div>
              <h3 className="font-bold">AI Infrastructure</h3>
              <p className="text-xs text-white/40">Configure LLM models and API integrations.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
              <div>
                <p className="font-medium">Primary Model</p>
                <p className="text-xs text-white/30">Gemini 1.5 Pro (via Google Cloud)</p>
              </div>
              <FuturisticButton variant="outline" size="sm">Change</FuturisticButton>
            </div>

            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
              <div>
                <p className="font-medium">Neural Bridge Latency</p>
                <p className="text-xs text-white/30">Optimized for &lt;200ms responses</p>
              </div>
              <div className="w-12 h-6 bg-primary rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
              </div>
            </div>
          </div>
        </GlassCard>

        <div className="flex justify-end gap-4">
          <FuturisticButton variant="ghost">Discard Changes</FuturisticButton>
          <FuturisticButton>Save Configuration</FuturisticButton>
        </div>
      </div>
    </div>
  );
}
