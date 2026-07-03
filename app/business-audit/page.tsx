"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/ui/ContactForm";
import Link from "next/link";
import {
  Settings,
  TrendingUp,
  Megaphone,
  DollarSign,
  Users,
  Monitor,
  Bot,
  Zap,
  FileText,
  Map,
  GitBranch,
  Flag,
  ClipboardList,
  ArrowRight,
  Mail,
  CheckCircle2,
  Phone,
  MapPin,
  Clock,
  Building2,
  Scale,
  Briefcase,
  Layers,
  Factory,
  Cog,
  Puzzle,
  Stethoscope,
} from "lucide-react";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const auditAreas = [
  {
    icon: Settings,
    title: "Business Operations",
    description:
      "Review daily workflows, approvals, task management, team coordination, and operational bottlenecks.",
  },
  {
    icon: TrendingUp,
    title: "Sales & CRM",
    description:
      "Audit lead management, sales pipeline, follow-ups, customer tracking, and conversion gaps.",
  },
  {
    icon: Megaphone,
    title: "Marketing & Customer Engagement",
    description:
      "Review campaigns, communication channels, lead generation, WhatsApp/email engagement, and customer journey.",
  },
  {
    icon: DollarSign,
    title: "Finance & Reporting",
    description:
      "Analyze invoicing, expense tracking, reporting, approvals, and financial visibility.",
  },
  {
    icon: Users,
    title: "HR & Workforce",
    description:
      "Review hiring, onboarding, attendance, performance, training, and workforce processes.",
  },
  {
    icon: Monitor,
    title: "Tools & Technology",
    description:
      "Analyze existing CRM, ERP, HRMS, finance tools, spreadsheets, WhatsApp, and custom applications.",
  },
  {
    icon: Bot,
    title: "AI Readiness",
    description:
      "Identify where AI assistants, chatbots, voice agents, workflow automation, and analytics can create real value.",
  },
  {
    icon: Zap,
    title: "Automation Opportunities",
    description:
      "Find repetitive tasks, manual workflows, disconnected systems, and areas where automation can reduce time and cost.",
  },
];

const deliverables = [
  {
    icon: FileText,
    title: "Business Gap Report",
    description: "A complete analysis of gaps across all business functions.",
  },
  {
    icon: Map,
    title: "AI Opportunity Map",
    description: "Where AI can create the highest impact in your business.",
  },
  {
    icon: GitBranch,
    title: "Workflow Improvement Plan",
    description: "Step-by-step recommendations to streamline core workflows.",
  },
  {
    icon: Zap,
    title: "Automation Recommendations",
    description: "Prioritized list of processes ready for automation.",
  },
  {
    icon: Monitor,
    title: "Tool & System Review",
    description: "Evaluation of your current tech stack and tooling gaps.",
  },
  {
    icon: TrendingUp,
    title: "Cost & Efficiency Insights",
    description: "Quantified inefficiencies and potential savings identified.",
  },
  {
    icon: Flag,
    title: "Priority Roadmap",
    description: "A sequenced action plan — what to fix first and why.",
  },
  {
    icon: ClipboardList,
    title: "Implementation Proposal",
    description: "A tailored proposal for executing the recommended solutions.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, tools, teams, and current processes through structured interviews and documentation review.",
  },
  {
    number: "02",
    title: "Analyze",
    description:
      "We review workflows, systems, data flow, bottlenecks, and AI opportunities across every function of your business.",
  },
  {
    number: "03",
    title: "Recommend",
    description:
      "We provide clear recommendations for improvement, automation, and AI adoption — mapped to your specific context.",
  },
  {
    number: "04",
    title: "Roadmap",
    description:
      "We deliver a practical roadmap showing what to fix first, what to automate, and what to build next.",
  },
];

const audiences = [
  {
    icon: Building2,
    title: "Startups",
    description: "Set the right foundation before scaling your operations.",
  },
  {
    icon: TrendingUp,
    title: "SMEs & Growing Businesses",
    description: "Identify what's holding back your next stage of growth.",
  },
  {
    icon: Stethoscope,
    title: "Hospitals & Clinics",
    description: "Streamline patient workflows, billing, and team coordination.",
  },
  {
    icon: Scale,
    title: "Legal Firms",
    description: "Automate document workflows, client tracking, and reporting.",
  },
  {
    icon: Briefcase,
    title: "Service Businesses",
    description: "Optimize client onboarding, delivery, and support processes.",
  },
  {
    icon: Layers,
    title: "Agencies & Studios",
    description: "Unify project management, billing, and client communication.",
  },
  {
    icon: Factory,
    title: "Manufacturing Teams",
    description: "Audit production, inventory, and supply chain workflows.",
  },
  {
    icon: Cog,
    title: "Operations-Heavy Businesses",
    description: "Eliminate manual bottlenecks across multi-team operations.",
  },
  {
    icon: Puzzle,
    title: "Businesses Using Too Many Disconnected Tools",
    description: "Consolidate your tech stack into a unified, efficient system.",
  },
];

const nextStepsCards = [
  {
    icon: Cog,
    title: "Improve Existing Tools",
    description:
      "We optimize what you already have — making your current stack work harder and smarter for your business.",
  },
  {
    icon: Bot,
    title: "Add AI Products",
    description:
      "Deploy AI chatbots, voice agents, automated workflows, and intelligent analytics tailored to your needs.",
  },
  {
    icon: Layers,
    title: "Build Business OS",
    description:
      "Build a complete connected platform — a custom Business OS that unifies every part of your operation.",
  },
];

// ─── Page Component ───────────────────────────────────────────────────────────

export default function BusinessAuditPage() {
  return (
    <main className="overflow-hidden">
      {/* ═══════════════════════════════════════════════════════ HERO ══════════ */}
      <section className="relative bg-brand-black min-h-[92vh] flex flex-col justify-center overflow-hidden">
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#FFE000 1px, transparent 1px), linear-gradient(90deg, #FFE000 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-yellow/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/15 border border-brand-yellow/40 mb-8"
          >
            <CheckCircle2 className="w-4 h-4 text-brand-yellow" />
            <span className="text-sm font-semibold text-brand-yellow tracking-wide uppercase">
              Business Audit
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6"
          >
            AI & Business Audit
            <br />
            <span
              className="text-brand-yellow"
              style={{ WebkitTextStroke: "1.5px #0A0A0A" }}
            >
              for Smarter Growth
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-xl md:text-2xl text-white/80 font-medium max-w-3xl mx-auto mb-5 leading-snug"
          >
            Understand where your business stands today — and discover what can
            be improved, automated, or transformed with AI.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base md:text-lg text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Our Business Audit analyzes your operations, workflows, tools,
            customer journey, team processes, and AI readiness to identify clear
            improvement opportunities. We help you uncover inefficiencies,
            automation gaps, technology gaps, and growth opportunities before
            building the right solution.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-yellow text-brand-black font-black text-base uppercase tracking-wide hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-brand-yellow/30 hover:scale-105"
            >
              Book an Audit
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white font-bold text-base uppercase tracking-wide hover:border-white hover:bg-white/5 transition-all duration-200"
            >
              Get Audit Proposal
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {[
              { value: "48-Hour", label: "Turnaround" },
              { value: "100%", label: "Confidential" },
              { value: "Actionable", label: "Roadmap" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-black text-brand-yellow">
                  {stat.value}
                </div>
                <div className="text-sm text-white/40 font-medium uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ SECTION 1: WHAT WE AUDIT ══ */}
      <section className="bg-background py-28 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/15 border border-brand-yellow/40 mb-5"
            >
              <CheckCircle2 className="w-4 h-4 text-brand-yellow" />
              <span className="text-sm font-semibold text-brand-black uppercase tracking-wide">
                Audit Coverage
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black text-brand-black dark:text-white uppercase tracking-tighter leading-none"
            >
              A Complete View of
              <br />
              <span
                className="text-brand-yellow"
                style={{ WebkitTextStroke: "1.5px #0A0A0A" }}
              >
                Your Business.
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-lg text-text-muted dark:text-white/60 max-w-2xl mx-auto"
            >
              We audit every critical dimension of your business — leaving no
              blind spot unexamined.
            </motion.p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {auditAreas.map((area, i) => (
              <motion.div
                key={area.title}
                custom={i}
                variants={fadeUp}
                className="bg-white dark:bg-zinc-900/60 border border-border-base dark:border-white/[0.06] rounded-2xl p-6 hover:border-brand-yellow/50 hover:shadow-xl hover:shadow-brand-yellow/10 transition-all duration-300 group relative overflow-hidden hover:-translate-y-1.5"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-10 h-10 bg-brand-black rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <area.icon className="w-5 h-5 text-brand-yellow" />
                </div>
                <h3 className="font-bold text-brand-black dark:text-white text-base mb-2 leading-snug">
                  {area.title}
                </h3>
                <p className="text-sm text-text-muted dark:text-white/60 leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════ SECTION 2: WHAT YOU GET FROM THE AUDIT ══ */}
      <section className="bg-surface py-28 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/15 border border-brand-yellow/40 mb-5"
            >
              <FileText className="w-4 h-4 text-brand-yellow" />
              <span className="text-sm font-semibold text-brand-black uppercase tracking-wide">
                Deliverables
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black text-brand-black dark:text-white uppercase tracking-tighter leading-none"
            >
              Clear Insights.{" "}
              <span
                className="text-brand-yellow"
                style={{ WebkitTextStroke: "1.5px #0A0A0A" }}
              >
                Practical Roadmap.
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-lg text-text-muted dark:text-white/60 max-w-2xl mx-auto"
            >
              Every Business Audit results in a structured report with actionable
              steps — not just observations.
            </motion.p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {deliverables.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUp}
                className="bg-white dark:bg-zinc-900/60 border border-border-base dark:border-white/[0.06] rounded-2xl p-5 hover:border-brand-yellow/50 hover:shadow-xl hover:shadow-brand-yellow/10 transition-all duration-300 group relative overflow-hidden hover:-translate-y-1.5"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-9 h-9 bg-brand-yellow/10 border border-brand-yellow/30 rounded-xl flex items-center justify-center mb-3 group-hover:bg-brand-yellow/20 transition-colors duration-200">
                  <item.icon className="w-4 h-4 text-brand-yellow" />
                </div>
                <h3 className="font-bold text-brand-black dark:text-white text-sm mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-text-muted dark:text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════ SECTION 3: HOW THE AUDIT WORKS ══════════ */}
      <section className="bg-brand-black py-28 px-6 relative overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#FFE000 1px, transparent 1px), linear-gradient(90deg, #FFE000 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-20"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/15 border border-brand-yellow/40 mb-5"
            >
              <GitBranch className="w-4 h-4 text-brand-yellow" />
              <span className="text-sm font-semibold text-brand-yellow uppercase tracking-wide">
                Our Process
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none"
            >
              How It{" "}
              <span
                className="text-brand-yellow"
                style={{ WebkitTextStroke: "1.5px #0A0A0A" }}
              >
                Works.
              </span>
            </motion.h2>
          </motion.div>

          {/* Steps */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="relative"
          >
            {/* Connecting dashed line on desktop */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-brand-yellow/30 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  custom={i}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center"
                >
                  {/* Number circle */}
                  <div className="w-16 h-16 rounded-full bg-brand-yellow flex items-center justify-center mb-6 shadow-lg shadow-brand-yellow/20 flex-shrink-0">
                    <span className="text-xl font-black text-brand-black">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════ SECTION 4: WHO THIS IS FOR ════════════ */}
      <section className="bg-background py-28 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/15 border border-brand-yellow/40 mb-5"
            >
              <Users className="w-4 h-4 text-brand-yellow" />
              <span className="text-sm font-semibold text-brand-black uppercase tracking-wide">
                Who We Serve
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black text-brand-black dark:text-white uppercase tracking-tighter leading-none"
            >
              Built for Businesses
              <br />
              <span
                className="text-brand-yellow"
                style={{ WebkitTextStroke: "1.5px #0A0A0A" }}
              >
                at Every Stage.
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-lg text-text-muted dark:text-white/60 max-w-2xl mx-auto"
            >
              Whether you&apos;re a startup or an established enterprise, a
              Business Audit gives you the clarity to grow with confidence.
            </motion.p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {audiences.map((audience, i) => (
              <motion.div
                key={audience.title}
                custom={i}
                variants={fadeUp}
                className="bg-white dark:bg-zinc-900/60 border border-border-base dark:border-white/[0.06] border-l-4 border-l-brand-yellow rounded-2xl p-5 hover:shadow-xl hover:border-r-brand-yellow/50 hover:border-t-brand-yellow/50 hover:border-b-brand-yellow/50 transition-all duration-300 group flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-brand-black rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <audience.icon className="w-5 h-5 text-brand-yellow" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-black dark:text-white text-sm mb-1 leading-snug">
                    {audience.title}
                  </h3>
                  <p className="text-xs text-text-muted dark:text-white/60 leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════ SECTION 5: FROM AUDIT TO EXECUTION ══════════ */}
      <section className="bg-surface py-28 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-6"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/15 border border-brand-yellow/40 mb-5"
            >
              <ArrowRight className="w-4 h-4 text-brand-yellow" />
              <span className="text-sm font-semibold text-brand-black uppercase tracking-wide">
                Next Steps
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black text-brand-black dark:text-white uppercase tracking-tighter leading-none"
            >
              From Audit
              <br />
              <span
                className="text-brand-yellow"
                style={{ WebkitTextStroke: "1.5px #0A0A0A" }}
              >
                to Execution.
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-lg text-text-muted dark:text-white/60 max-w-2xl mx-auto"
            >
              After the audit, buziness365 can help you implement the right
              solution — whether that means improving your existing tools, adding
              AI products, automating workflows, or building a complete Business
              OS around your company.
            </motion.p>
          </motion.div>

          {/* 3 cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 mt-14"
          >
            {nextStepsCards.map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                variants={fadeUp}
                className="bg-white dark:bg-zinc-900/60 border border-border-base dark:border-white/[0.06] rounded-2xl p-8 hover:border-brand-yellow/50 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className="w-14 h-14 bg-brand-black rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-200">
                  <card.icon className="w-7 h-7 text-brand-yellow" />
                </div>
                <h3 className="font-black text-brand-black dark:text-white text-lg mb-3 uppercase tracking-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-text-muted dark:text-white/60 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Big CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-brand-yellow text-brand-black font-black text-lg uppercase tracking-wide hover:bg-yellow-300 transition-all duration-200 shadow-xl hover:shadow-brand-yellow/30 hover:scale-105"
            >
              Start Your Business Audit
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ SECTION 6: FINAL CTA / CONTACT ══════ */}
      <section id="contact" className="bg-brand-black py-24 md:py-32 px-6 relative overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#FFE000 1px, transparent 1px), linear-gradient(90deg, #FFE000 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-yellow/8 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/15 border border-brand-yellow/40 mb-5">
              <CheckCircle2 className="w-4 h-4 text-brand-yellow" />
              <span className="text-sm font-semibold text-brand-yellow uppercase tracking-wide">
                Get Started
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-4">
              Ready to Understand
              <br />
              <span className="text-brand-yellow" style={{ WebkitTextStroke: "1.5px #0A0A0A" }}>
                Your Business Better?
              </span>
            </h2>
            <p className="text-base text-white/50 max-w-xl mx-auto">
              Book your custom AI & Business Audit today and get a clear picture of where you stand.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Sidebar */}
            <div className="space-y-4">
              <div className="p-6 bg-brand-yellow rounded-2xl mb-6">
                <p className="text-brand-black font-black text-lg uppercase tracking-tight mb-2">
                  Confidential Audit
                </p>
                <p className="text-brand-black/75 text-sm font-medium leading-relaxed">
                  Every business audit is 100% confidential. We sign NDA documents prior to starting any system integrations.
                </p>
              </div>

              {[
                { icon: Mail, label: "Email", value: "enquiry@buziness365.com" },
                { icon: MapPin, label: "Presence", value: "India · USA · UK" },
                { icon: Phone, label: "Phone", value: "Available via Email" },
                { icon: Clock, label: "Support", value: "24/7 · Always On" },
              ].map(info => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.label}
                    className="flex items-start gap-4 p-4 bg-zinc-900/50 rounded-xl border border-white/[0.05]"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-yellow/15 border border-brand-yellow/30 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-white/30 uppercase tracking-widest">{info.label}</p>
                      <p className="text-sm font-semibold text-white mt-0.5">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white dark:bg-zinc-900/60 rounded-2xl border border-border-base dark:border-white/10 p-6 md:p-8 shadow-sm">
              <ContactForm source="audit" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
