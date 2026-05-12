"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Bot, 
  DollarSign, 
  Settings, 
  Bell,
  Search,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
  { icon: Users, label: "Clients", href: "/dashboard/crm" },
  { icon: Briefcase, label: "Projects", href: "/dashboard/projects" },
  { icon: Bot, label: "AI Hub", href: "/dashboard/ai-hub" },
  { icon: DollarSign, label: "Finance", href: "/dashboard/finance" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-[#020202] text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-[#050505] flex flex-col">
        <div className="p-6 mb-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-violet rounded-lg" />
            <span className="text-xl font-bold tracking-tighter">SIAH<span className="text-primary">OS</span></span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                pathname === item.href 
                  ? "bg-primary/10 text-primary border border-primary/20" 
                  : "text-white/40 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon size={20} className={cn(pathname === item.href ? "text-primary" : "group-hover:text-white")} />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button className="flex items-center gap-3 px-4 py-3 w-full text-white/40 hover:text-red-400 hover:bg-red-400/5 rounded-xl transition-all">
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Topbar */}
        <header className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-[#050505]/50 backdrop-blur-xl">
          <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-lg border border-white/5 w-96">
            <Search size={18} className="text-white/30" />
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="bg-transparent border-none outline-none text-sm w-full"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors relative">
              <Bell size={20} className="text-white/60" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10" />
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 scrollbar-hide">
          {children}
        </div>
      </main>
    </div>
  );
}
