"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BusinessOSPagePreview } from "@/components/home/BusinessOSPagePreview";
import { ContactForm } from "@/components/ui/ContactForm";
import Link from "next/link";
import {
  Users,
  Megaphone,
  Settings,
  UserCheck,
  DollarSign,
  FolderOpen,
  MessageSquare,
  Package,
  BarChart2,
  Share2,
  Bot,
  Plug,
  Layers,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Phone,
  MapPin,
  Clock,
  TrendingUp,
  TrendingDown,
  Bell,
  Search,
  ChevronRight,
  LayoutDashboard,
  PieChart,
  ShoppingCart,
  GitBranch,
  HeadphonesIcon,
  Workflow,
  Mic,
  FileText,
  Lightbulb,
  Zap,
  Contact,
  GraduationCap,
  BookOpen,
  CheckSquare,
  Award,
  FolderLock,
  Stethoscope,
  Shirt,
  Film,
  Play,
  Cpu,
  Database,
  Shield,
  Sprout,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────────
   Animation Variants
───────────────────────────────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────────────────────────── */

const businessFunctions = [
  {
    icon: Users,
    title: "Sales & CRM",
    desc: "Track leads, deals, pipelines and customer relationships end-to-end.",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    desc: "Run campaigns, manage content, and measure performance across channels.",
  },
  {
    icon: Settings,
    title: "Operations",
    desc: "Streamline daily workflows, approvals, and business processes at scale.",
  },
  {
    icon: UserCheck,
    title: "HR & Workforce",
    desc: "Manage hiring, onboarding, attendance, payroll, and employee lifecycle.",
  },
  {
    icon: DollarSign,
    title: "Finance",
    desc: "Invoicing, expense management, budget tracking, and financial reporting.",
  },
  {
    icon: FolderOpen,
    title: "Projects",
    desc: "Plan, track, and deliver projects with milestones, tasks, and teams.",
  },
  {
    icon: MessageSquare,
    title: "Customer Support",
    desc: "Manage tickets, SLAs, and customer queries across every channel.",
  },
  {
    icon: Package,
    title: "Procurement & Inventory",
    desc: "Automate procurement, manage vendors, and track stock in real time.",
  },
  {
    icon: BarChart2,
    title: "Analytics",
    desc: "Live dashboards, custom reports, and data-driven business insights.",
  },
  {
    icon: Share2,
    title: "Collaboration",
    desc: "Shared workspaces, chat, document co-editing, and team coordination.",
  },
  {
    icon: Bot,
    title: "AI Assistants",
    desc: "Conversational AI agents that answer questions and take actions for you.",
  },
];

const aiFeatures = [
  {
    icon: Bot,
    title: "AI Assistants",
    desc: "Answer questions, summarize data, and take actions across your business — all through natural conversation.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Automate repetitive tasks, multi-step approvals, and complex business processes without code.",
  },
  {
    icon: Mic,
    title: "Voice Agents",
    desc: "AI-powered calling for sales outreach, customer support, appointment reminders, and follow-ups.",
  },
  {
    icon: MessageSquare,
    title: "Chatbots",
    desc: "Engage customers 24/7 across your website, WhatsApp, and messaging channels automatically.",
  },
  {
    icon: BarChart2,
    title: "Smart Reports",
    desc: "Auto-generated reports with AI-written insights, delivered to the right people at the right time.",
  },
  {
    icon: FileText,
    title: "Document Intelligence",
    desc: "Extract, analyze, classify, and act on data from documents, invoices, and contracts automatically.",
  },
  {
    icon: Lightbulb,
    title: "Predictive Insights",
    desc: "Forecast revenue, churn risk, and demand trends using your own business data and AI models.",
  },
];

const integrationTools = [
  "CRM",
  "ERP",
  "HRMS",
  "Finance Tools",
  "WhatsApp",
  "Google Workspace",
  "Microsoft 365",
  "Slack",
  "HubSpot",
  "Salesforce",
  "Zoho",
  "Tally",
  "Custom Applications",
];

const useCases = [
  {
    icon: Users,
    title: "Lead Management",
    desc: "Auto-capture, score, assign, and track leads across all channels in one unified view.",
  },
  {
    icon: MessageSquare,
    title: "Customer Follow-Up",
    desc: "Automated follow-ups via email, WhatsApp, and voice at exactly the right time in the journey.",
  },
  {
    icon: DollarSign,
    title: "Invoice Approvals",
    desc: "Route invoices through the correct approval chain automatically, with escalation rules built in.",
  },
  {
    icon: UserCheck,
    title: "HR Onboarding",
    desc: "Structured onboarding from offer letter to first 90 days — forms, tasks, and check-ins automated.",
  },
  {
    icon: FolderOpen,
    title: "Project Tracking",
    desc: "Milestones, tasks, team assignments, and progress visibility in one connected workspace.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support Ticket Handling",
    desc: "Auto-route, prioritize, and resolve support queries faster with AI triage and smart assignment.",
  },
  {
    icon: BarChart2,
    title: "Sales Reporting",
    desc: "Real-time dashboards with revenue, pipeline, and conversion data — no manual report building.",
  },
  {
    icon: Settings,
    title: "Operations Automation",
    desc: "Automate procurement, inventory, vendor workflows, and daily operations end-to-end.",
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page Component
───────────────────────────────────────────────────────────────────────────── */
export default function BusinessOSPage() {
  const [activeSystem, setActiveSystem] = useState("overview");
  const [activeModule, setActiveModule] = useState("overview");

  const systems = [
    {
      id: "overview",
      label: "Overview",
      icon: BarChart2,
      domains: [
        { id: "overview", label: "General Overview", icon: BarChart2, module: "overview" },
        { id: "revenue", label: "Global Revenue Metrics", icon: TrendingUp, module: "revenue" },
      ],
    },
    {
      id: "crm",
      label: "CRM",
      icon: Users,
      domains: [
        { id: "healthcare_crm", label: "Healthcare CRM", icon: Stethoscope, module: "hospital_crm" },
        { id: "edtech_crm", label: "EdTech CRM", icon: GraduationCap, module: "contacts" },
        { id: "retail_crm", label: "Textile & Retail CRM", icon: Shirt, module: "retail_crm" },
        { id: "consulting_crm", label: "Startup Client CRM", icon: GitBranch, module: "pipeline" },
        { id: "general_crm", label: "General Business CRM", icon: Users, module: "leads" },
      ],
    },
    {
      id: "erp",
      label: "ERP",
      icon: Package,
      domains: [
        { id: "textile_erp", label: "Textile & Manufacturing", icon: Shirt, module: "tshirt_customizer" },
        { id: "healthcare_erp", label: "Healthcare ERP", icon: Stethoscope, module: "healthcare_erp" },
        { id: "edtech_erp", label: "EdTech ERP", icon: GraduationCap, module: "edtech_erp" },
        { id: "agro_erp", label: "Agro-Tech ERP", icon: Sprout, module: "data_ingest" },
        { id: "finance_erp", label: "Corporate Finance ERP", icon: DollarSign, module: "finance" },
        { id: "hr_erp", label: "HR Staff Directory", icon: UserCheck, module: "hr" },
      ],
    },
    {
      id: "lms",
      label: "LMS",
      icon: GraduationCap,
      domains: [
        { id: "edtech_lms", label: "EdTech Course LMS", icon: BookOpen, module: "courses" },
        { id: "quizzes_lms", label: "Interactive Quizzes", icon: CheckSquare, module: "quizzes" },
        { id: "certs_lms", label: "Employee Certificates", icon: Award, module: "certificates" },
      ],
    },
    {
      id: "cms",
      label: "CMS",
      icon: FileText,
      domains: [
        { id: "media_cms", label: "Media & Production CMS", icon: Film, module: "render_queue" },
        { id: "web_cms", label: "Web Portal Repository", icon: LayoutDashboard, module: "overview" },
      ],
    },
    {
      id: "os",
      label: "OS System",
      icon: LayoutDashboard,
      domains: [
        { id: "law_os", label: "Law OS", icon: FileText, module: "law_os" },
        { id: "healthcare_os", label: "Healthcare OS", icon: Stethoscope, module: "healthcare_os" },
        { id: "textile_os", label: "Textile OS", icon: Shirt, module: "textile_os" },
        { id: "ai_os", label: "Data & AI OS", icon: Bot, module: "ai_os" },
        { id: "cyber_os", label: "Cybersecurity OS", icon: Shield, module: "cyber_os" },
      ],
    },
  ];

  useEffect(() => {
    if (activeModule === "ai") return;
    const foundSystem = systems.find((sys) =>
      sys.domains.some((dom) => dom.module === activeModule)
    );
    if (foundSystem && foundSystem.id !== activeSystem) {
      setActiveSystem(foundSystem.id);
    }
  }, [activeModule]);
  return (
    <div className="min-h-screen bg-background">
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO — Dark, yellow headline
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-brand-black overflow-hidden py-28 md:py-40 flex items-center">
        {/* Ambient grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #F5C800 1px, transparent 1px), linear-gradient(to bottom, #F5C800 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-yellow/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-yellow/30 bg-brand-yellow/5 mb-8"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
            <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest">
              Business OS — AI-Native Platform
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-[88px] font-black tracking-tighter leading-[0.95] mb-6 uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span
              className="text-brand-yellow block"
              style={{ WebkitTextStroke: "1.5px #F5C800" }}
            >
              Everything Your
            </span>
            <span
              className="text-brand-yellow block"
              style={{ WebkitTextStroke: "1.5px #F5C800" }}
            >
              Business Needs.
            </span>
            <span className="text-white block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              One AI-Native Operating System.
            </span>
          </motion.h1>



          {/* Body text */}
          <motion.p
            className="max-w-2xl mx-auto text-base md:text-lg text-white/50 font-medium leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Business OS is designed to work around the way your organization
            already operates. Connect your existing tools or build a complete
            business platform from the ground up.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.52 }}
          >
            <a
              href="/#contact"
              className="group inline-flex items-center gap-2 bg-brand-yellow text-brand-black font-black uppercase tracking-widest px-8 py-4 text-sm rounded-xl hover:bg-brand-yellow/90 shadow-[0_0_40px_rgba(255,224,0,0.3)] hover:shadow-[0_0_60px_rgba(255,224,0,0.5)] transition-all duration-200"
            >
              <CalendarDays className="w-4 h-4" />
              Book an Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#dashboard"
              className="inline-flex items-center gap-2 bg-transparent text-white font-black uppercase tracking-widest px-8 py-4 text-sm rounded-xl border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all duration-200"
            >
              Explore Platform
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1 — Built Around Your Existing Business
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="built-around" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/15 border border-brand-yellow/40 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow block" />
              <span className="text-xs font-bold text-brand-black uppercase tracking-widest">
                Built for Your Business
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-black dark:text-white uppercase tracking-tighter leading-none">
              Built Around Your{" "}
              <span
                className="text-brand-yellow"
                style={{ WebkitTextStroke: "1.5px #0A0A0A" }}
              >
                Existing Business.
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Card 1 */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="group relative bg-white dark:bg-zinc-900/60 rounded-2xl border border-border-base dark:border-white/[0.06] hover:border-brand-yellow/50 hover:shadow-xl hover:shadow-brand-yellow/10 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Yellow accent top */}
              <div className="h-1 w-full bg-brand-yellow" />
              <div className="p-8 flex flex-col flex-1">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-brand-black flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Plug className="w-7 h-7 text-brand-yellow" />
                </div>
                <h3 className="text-2xl font-black text-brand-black dark:text-white uppercase tracking-tight mb-4">
                  Connect What You Already Use
                </h3>
                <p className="text-base text-text-muted dark:text-white/60 font-medium leading-relaxed flex-1">
                  Already using CRM, ERP, finance tools, HR software, WhatsApp,
                  Excel, or custom applications? Business OS connects them into
                  one intelligent workspace — no need to rip and replace what
                  already works.
                </p>
                <div className="mt-8 pt-6 border-t border-border-base flex flex-wrap gap-2">
                  {[
                    "Salesforce",
                    "Zoho",
                    "HubSpot",
                    "Tally ERP",
                    "SAP",
                    "WhatsApp",
                    "Excel",
                    "HRMS",
                    "Custom Apps",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-black dark:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="group relative bg-white dark:bg-zinc-900/60 rounded-2xl border border-border-base dark:border-white/[0.06] hover:border-brand-yellow/50 hover:shadow-xl hover:shadow-brand-yellow/10 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Yellow accent top */}
              <div className="h-1 w-full bg-brand-yellow" />
              <div className="p-8 flex flex-col flex-1">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-brand-black flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Layers className="w-7 h-7 text-brand-yellow" />
                </div>
                <h3 className="text-2xl font-black text-brand-black dark:text-white uppercase tracking-tight mb-4">
                  Build What Your Business Needs
                </h3>
                <p className="text-base text-text-muted dark:text-white/60 font-medium leading-relaxed flex-1">
                  Need a complete system from scratch? We build custom modules
                  for sales, marketing, HR, finance, operations, support,
                  projects, and analytics — designed around your exact business
                  process, not a generic template.
                </p>
                <div className="mt-8 pt-6 border-t border-border-base flex flex-wrap gap-2">
                  {["Sales", "HR", "Finance", "Operations", "Analytics", "Support"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-black dark:text-white"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 2 — Business Functions
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="functions" className="py-24 md:py-32 bg-surface relative">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #0A0A0A 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/15 border border-brand-yellow/40 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow block" />
              <span className="text-xs font-bold text-brand-black uppercase tracking-widest">
                What Business OS Covers
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-black dark:text-white uppercase tracking-tighter leading-none mb-4">
              Every Part of Your Business.{" "}
              <span
                className="text-brand-yellow"
                style={{ WebkitTextStroke: "1.5px #0A0A0A" }}
              >
                Connected.
              </span>
            </h2>
            <p className="max-w-xl mx-auto text-base text-text-muted dark:text-white/60 font-medium leading-relaxed">
              From sales to support, HR to finance — Business OS brings every
              function of your organization into one intelligent platform.
            </p>
          </motion.div>

          {/* Function Cards Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {businessFunctions.map((fn, i) => {
              const Icon = fn.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden bg-white dark:bg-zinc-900/60 rounded-2xl border border-border-base dark:border-white/[0.06] hover:border-brand-yellow/50 hover:shadow-xl hover:shadow-brand-yellow/10 transition-all duration-300 p-6 flex flex-col gap-4"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="w-12 h-12 rounded-xl bg-brand-black flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-brand-yellow" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-brand-black dark:text-white uppercase tracking-tight mb-1.5">
                      {fn.title}
                    </h3>
                    <p className="text-sm text-text-muted dark:text-white/60 font-medium leading-relaxed">
                      {fn.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3 — Dashboard Mockup
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="dashboard" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/15 border border-brand-yellow/40 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow block" />
              <span className="text-xs font-bold text-brand-black uppercase tracking-widest">
                Platform Preview
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-black dark:text-white uppercase tracking-tighter leading-none mb-4">
              One Workspace.{" "}
              <span
                className="text-brand-yellow"
                style={{ WebkitTextStroke: "1.5px #0A0A0A" }}
              >
                Every Function.
              </span>{" "}
              Real-Time.
            </h2>
            <p className="max-w-xl mx-auto text-base text-text-muted dark:text-white/60 font-medium leading-relaxed">
              A single command center for your entire business — no tab
              switching, no data silos, no guesswork.
            </p>
          </motion.div>

          {/* Dashboard UI Mockup */}
          {/* Domain-wise Grouped Interactive Selection */}
          <div className="flex flex-col items-center gap-5 mb-8 max-w-4xl mx-auto">
            {/* Parent Domain Options */}
            <motion.div 
              className="flex flex-wrap justify-center gap-2.5"
              initial={{ opacity: 0, y: 12 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.08 }}
            >
              {systems.map((sys) => {
                const Icon = sys.icon;
                const active = activeSystem === sys.id;
                return (
                  <button
                    key={sys.id}
                    onClick={() => {
                      setActiveSystem(sys.id);
                      setActiveModule(sys.domains[0].module);
                    }}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                      active
                        ? "bg-brand-black text-brand-yellow border-brand-yellow shadow-[0_4px_20px_rgba(255,224,0,0.15)] dark:bg-brand-yellow dark:text-brand-black dark:border-brand-yellow"
                        : "bg-white dark:bg-zinc-900 border-border-base dark:border-white/10 text-brand-black/60 dark:text-white/60 hover:border-brand-yellow/40 hover:bg-brand-yellow/5"
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    {sys.label}
                  </button>
                );
              })}
            </motion.div>

            {/* Sub-System Module Chips */}
            <motion.div 
              className="flex flex-wrap justify-center gap-1.5 min-h-[40px]"
              initial={{ opacity: 0, y: 8 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.12 }}
            >
              {(() => {
                const currentSystem = systems.find((s) => s.id === activeSystem) || systems[0];
                return currentSystem.domains.map((d, i) => {
                  const Icon = d.icon;
                  const active = activeModule === d.module;
                  return (
                    <button
                      key={i}
                      onClick={() => setActiveModule(d.module)}
                      className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border transition-all duration-200 ${
                        active
                          ? "bg-brand-yellow/20 dark:bg-brand-yellow/15 border-brand-yellow text-brand-black dark:text-brand-yellow shadow-[0_0_12px_rgba(255,224,0,0.15)] font-bold"
                          : "bg-zinc-100 dark:bg-white/[0.03] border-zinc-200/60 dark:border-white/[0.06] text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-white/[0.08] hover:text-zinc-900 dark:hover:text-white/90"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0" />
                      <span className="text-[10px] font-bold tracking-wide uppercase">{d.label}</span>
                    </button>
                  );
                });
              })()}
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 24 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.14, duration: 0.6 }}
            className="relative max-w-6xl mx-auto mb-10"
          >
            <div className="absolute -inset-4 bg-brand-yellow/5 blur-3xl rounded-3xl pointer-events-none" />
            <BusinessOSPagePreview 
              activeModule={activeModule} 
              setActiveModule={setActiveModule} 
              activeSystem={activeSystem} 
              setActiveSystem={setActiveSystem} 
              height="600px" 
            />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4 — Intelligence Built Into Every Workflow
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-surface relative">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #0A0A0A 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/15 border border-brand-yellow/40 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow block" />
              <span className="text-xs font-bold text-brand-black uppercase tracking-widest">
                AI-Powered
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-black dark:text-white uppercase tracking-tighter leading-none mb-4">
              Intelligence Built Into{" "}
              <span
                className="text-brand-yellow"
                style={{ WebkitTextStroke: "1.5px #0A0A0A" }}
              >
                Every Workflow.
              </span>
            </h2>
            <p className="max-w-xl mx-auto text-base text-text-muted dark:text-white/60 font-medium leading-relaxed">
              Business OS doesn&apos;t just manage your business — it actively
              helps you run it faster, smarter, and with less manual effort.
            </p>
          </motion.div>

          {/* AI Feature Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {aiFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden bg-white dark:bg-zinc-900/60 rounded-2xl border border-border-base dark:border-white/[0.06] hover:border-brand-yellow/50 hover:shadow-xl hover:shadow-brand-yellow/10 transition-all duration-300 p-6 flex flex-col gap-4"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="w-12 h-12 rounded-xl bg-brand-black flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-brand-yellow" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-brand-black dark:text-white uppercase tracking-tight mb-1.5">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-text-muted dark:text-white/60 font-medium leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
            {/* Decorative CTA card */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              className="bg-brand-black rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-yellow flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-brand-black" />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-tight mb-1.5">
                  AI Works For You
                </h3>
                <p className="text-sm text-white/50 font-medium leading-relaxed">
                  Every module in Business OS has AI built in — not bolted on.
                </p>
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-xs font-black text-brand-yellow uppercase tracking-widest hover:gap-3 transition-all duration-200"
              >
                See AI Features <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5 — Integrations
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/15 border border-brand-yellow/40 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow block" />
              <span className="text-xs font-bold text-brand-black uppercase tracking-widest">
                Integrations
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-black dark:text-white uppercase tracking-tighter leading-none mb-5">
              Connect With the Tools{" "}
              <span
                className="text-brand-yellow"
                style={{ WebkitTextStroke: "1.5px #0A0A0A" }}
              >
                You Already Use
              </span>
            </h2>
            <p className="text-base text-text-muted dark:text-white/60 font-medium leading-relaxed mb-14 max-w-2xl mx-auto">
              Business OS connects with your existing business tools and brings
              them into one intelligent workspace — without forcing you to
              abandon what already works.
            </p>

            {/* Pills */}
            <motion.div
              className="flex flex-wrap justify-center gap-3"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {integrationTools.map((tool, i) => (
                <motion.span
                  key={i}
                  variants={fadeUp}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center gap-2 border border-border-base dark:border-white/10 rounded-full px-5 py-2.5 text-sm font-semibold text-brand-black dark:text-white/80 hover:border-brand-yellow/50 hover:bg-brand-yellow/5 hover:text-brand-black transition-all duration-200 cursor-default"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-yellow" />
                  {tool}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              className="mt-10 text-sm text-text-muted dark:text-white/40 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Don&apos;t see your tool?{" "}
              <a
                href="#contact"
                className="text-brand-black dark:text-white font-black underline underline-offset-4 hover:text-brand-yellow transition-colors"
              >
                We&apos;ll build the integration.
              </a>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 6 — Use Cases
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-surface relative">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #0A0A0A 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/15 border border-brand-yellow/40 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow block" />
              <span className="text-xs font-bold text-brand-black uppercase tracking-widest">
                Use Cases
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-black dark:text-white uppercase tracking-tighter leading-none mb-4">
              From Day One to Scale.{" "}
              <span
                className="text-brand-yellow"
                style={{ WebkitTextStroke: "1.5px #0A0A0A" }}
              >
                Built for Real Business Scenarios.
              </span>
            </h2>
            <p className="max-w-xl mx-auto text-base text-text-muted dark:text-white/60 font-medium leading-relaxed">
              Business OS handles the workflows that matter most — from
              first-touch to post-sale, from hire to retire.
            </p>
          </motion.div>

          {/* Use Case Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {useCases.map((uc, i) => {
              const Icon = uc.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -4, x: 2 }}
                  className="group bg-white dark:bg-zinc-900/60 rounded-2xl border border-border-base dark:border-white/[0.06] border-l-4 border-l-brand-yellow hover:shadow-xl hover:shadow-brand-yellow/10 hover:border-brand-yellow/60 transition-all duration-300 p-6 flex flex-col gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-black flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-brand-yellow" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-brand-black dark:text-white uppercase tracking-tight mb-2">
                      {uc.title}
                    </h3>
                    <p className="text-sm text-text-muted dark:text-white/60 font-medium leading-relaxed">
                      {uc.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 7 — Final CTA
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 bg-brand-black relative overflow-hidden">
        {/* Ambient grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #FFE000 1px, transparent 1px), linear-gradient(to bottom, #FFE000 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-brand-yellow/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-yellow/30 bg-brand-yellow/5 mb-8">
                <span className="flex h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
                <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest">
                  Get Started Today
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6"
            >
              Ready to Build Your{" "}
              <span
                className="text-brand-yellow"
                style={{ WebkitTextStroke: "1.5px #FFE000" }}
              >
                Business OS?
              </span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-xl text-white/50 font-medium leading-relaxed mb-12"
            >
              Start with what you have. Scale to where you want to go.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="/#contact"
                className="group inline-flex items-center gap-2 bg-brand-yellow text-brand-black font-black uppercase tracking-widest px-10 py-4 text-sm rounded-xl hover:bg-brand-yellow/90 shadow-[0_0_50px_rgba(255,224,0,0.35)] hover:shadow-[0_0_70px_rgba(255,224,0,0.55)] transition-all duration-200"
              >
                <CalendarDays className="w-4 h-4" />
                Book an Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-transparent text-white font-black uppercase tracking-widest px-10 py-4 text-sm rounded-xl border border-white/30 hover:border-white/60 hover:bg-white/5 transition-all duration-200"
              >
                Talk to an Expert
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Trust note */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/30"
            >
              {[
                "No lock-in contracts",
                "Setup in days, not months",
                "Dedicated onboarding team",
              ].map((note, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-yellow/60" />
                  <span className="text-xs font-semibold">{note}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
