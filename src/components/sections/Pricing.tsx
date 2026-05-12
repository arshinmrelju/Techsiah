"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { GradientText } from "../ui/GradientText";
import { FuturisticButton } from "../ui/FuturisticButton";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$2,500",
    description: "Perfect for startups looking to automate basic workflows.",
    features: ["AI Chatbot Integration", "Basic CRM", "Standard Support", "Core Dashboard"],
  },
  {
    name: "Growth",
    price: "$7,500",
    description: "Advanced systems for scaling companies with AI-first logic.",
    features: ["Custom LLM Training", "Full SiahOS Access", "Priority Support", "Advanced Analytics", "Client Portal"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Unparalleled scale and security for global organizations.",
    features: ["Unlimited AI Agents", "White-label OS", "24/7 Dedicated Team", "Security Audit", "API Access"],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-32 px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Scalable <GradientText>Pricing Models</GradientText>
        </h2>
        <p className="text-foreground/50">
          Transparent investments for exponential growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard 
              className={`h-full flex flex-col ${plan.highlight ? "border-primary/50 shadow-[0_0_40px_rgba(0,112,243,0.2)]" : ""}`}
              glow={plan.highlight}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-extrabold mb-4">
                  {plan.price}<span className="text-sm font-normal text-foreground/50">/month</span>
                </div>
                <p className="text-foreground/50 text-sm">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="text-primary" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <FuturisticButton 
                variant={plan.highlight ? "primary" : "outline"}
                className="w-full"
              >
                Get Started
              </FuturisticButton>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
