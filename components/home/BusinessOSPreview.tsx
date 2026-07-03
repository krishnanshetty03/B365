"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
    ArrowRight, BarChart2, Users, Package, FileText, FolderLock,
    ShoppingCart, GitBranch, UserCheck, DollarSign, Bot, Search,
    TrendingUp, Bell, Activity, Zap, Shield, CheckCircle2,
    AlertCircle, Clock, ChevronRight, Inbox, Cpu, Globe, ChevronsUpDown, Cloud, Database, Contact, Megaphone, Sparkles, GraduationCap, Award, BookOpen, CheckSquare,
    LayoutDashboard, Stethoscope, Shirt, Film, Play, Settings
} from "lucide-react";
import Link from "next/link";
import { 
    AIMLPreview, DataEngPreview, CybersecurityPreview, 
    HealthcarePreview, TextilePreview, MediaPreview 
} from "../features/SolutionPreviews";

export interface SidebarItem {
    id: string;
    label: string;
    icon: any;
}

export const sidebarItems: SidebarItem[] = [
    { id: "overview", label: "Executive Overview", icon: BarChart2 },
    { id: "revenue", label: "Revenue Overview", icon: DollarSign },
    { id: "leads", label: "General CRM", icon: Users },
    { id: "hospital_crm", label: "Healthcare CRM", icon: Stethoscope },
    { id: "contacts", label: "EdTech CRM", icon: Contact },
    { id: "pipeline", label: "Startup Client CRM", icon: GitBranch },
    { id: "tshirt_customizer", label: "Textile ERP", icon: Shirt },
    { id: "data_ingest", label: "Agro-Tech ERP", icon: Database },
    { id: "finance", label: "Corporate Finance", icon: DollarSign },
    { id: "hr", label: "HR Staff Directory", icon: UserCheck },
    { id: "courses", label: "EdTech LMS", icon: BookOpen },
    { id: "quizzes", label: "Interactive Quizzes", icon: CheckSquare },
    { id: "certificates", label: "Employee Certificates", icon: Award },
    { id: "render_queue", label: "Media CMS", icon: Play },
    { id: "ai_orchestrator", label: "Data & AI OS", icon: Bot },
    { id: "cvss_scanner", label: "Cybersecurity OS", icon: Shield },
    { id: "ai", label: "AI Assistant", icon: Bot },
];

export function InteractiveDashboard({ 
    activeModule: parentActiveModule, 
    setActiveModule: parentSetActiveModule, 
    buildMode: parentBuildMode, 
    setBuildMode: parentSetBuildMode, 
    activeSystem: parentActiveSystem, 
    setActiveSystem: parentSetActiveSystem, 
    height = "550px" 
}: { 
    activeModule?: string; 
    setActiveModule?: (id: string) => void; 
    buildMode?: string;
    setBuildMode?: (m: string) => void;
    activeSystem?: string;
    setActiveSystem?: (s: string) => void;
    height?: string; 
}) {
    const [localActiveModule, setLocalActiveModule] = useState("overview");
    const [localBuildMode, setLocalBuildMode] = useState("new");
    const [localActiveSystem, setLocalActiveSystem] = useState("overview");

    const activeModule = parentActiveModule !== undefined ? parentActiveModule : localActiveModule;
    const setActiveModule = parentSetActiveModule !== undefined ? parentSetActiveModule : setLocalActiveModule;
    const bMode = parentBuildMode !== undefined ? parentBuildMode : localBuildMode;
    const setBMode = parentSetBuildMode !== undefined ? parentSetBuildMode : setLocalBuildMode;
    const aSystem = parentActiveSystem !== undefined ? parentActiveSystem : localActiveSystem;
    const setASystem = parentSetActiveSystem !== undefined ? parentSetActiveSystem : setLocalActiveSystem;

    const scaleWrapperRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(1);
    const numHeight = parseInt(height) || 550;

    const newSystems = [
        { id: "overview", label: "Overview", desc: "Performance & MRR", icon: BarChart2, modules: ["overview", "revenue", "ai"] },
        { id: "crm", label: "CRM Suite", desc: "Customer Relations", icon: Users, modules: ["leads", "hospital_crm", "contacts", "pipeline", "ai"] },
        { id: "erp", label: "ERP Suite", desc: "Enterprise Operations", icon: Package, modules: ["tshirt_customizer", "data_ingest", "finance", "hr", "ai"] },
        { id: "lms", label: "LMS Suite", desc: "Courses & training", icon: GraduationCap, modules: ["courses", "quizzes", "certificates", "ai"] },
        { id: "cms", label: "CMS Suite", desc: "Publishing & Media", icon: FileText, modules: ["render_queue", "overview", "ai"] },
        { id: "os", label: "OS System", desc: "AI & Security Core", icon: LayoutDashboard, modules: ["ai_orchestrator", "cvss_scanner", "ai"] }
    ];

    const existingSystems = [
        { id: "crm_int", label: "CRM", desc: "Salesforce & HubSpot", icon: Users, modules: ["salesforce", "hubspot", "ai"] },
        { id: "erp_int", label: "ERP", desc: "SAP & Tally ERP", icon: Package, modules: ["tally", "sap", "ai"] },
        { id: "lms_int", label: "LMS", desc: "TalentLMS", icon: GraduationCap, modules: ["talentlms", "ai"] }
    ];

    const [switcherOpen, setSwitcherOpen] = useState(false);

    useEffect(() => {
        if (parentBuildMode !== undefined) return;
        if (activeModule === "ai") return;

        if (["salesforce", "hubspot"].includes(activeModule)) {
            setLocalBuildMode("existing");
            setLocalActiveSystem("crm_int");
        } else if (["tally", "sap"].includes(activeModule)) {
            setLocalBuildMode("existing");
            setLocalActiveSystem("erp_int");
        } else if (["talentlms"].includes(activeModule)) {
            setLocalBuildMode("existing");
            setLocalActiveSystem("lms_int");
        } else {
            setLocalBuildMode("new");
            const systemForModule = newSystems.find(s => s.modules.includes(activeModule));
            if (systemForModule && systemForModule.id !== localActiveSystem) {
                setLocalActiveSystem(systemForModule.id);
            }
        }
    }, [activeModule, parentBuildMode, localActiveSystem]);

    useEffect(() => {
        const handleResize = () => {
            if (!scaleWrapperRef.current) return;
            const width = scaleWrapperRef.current.offsetWidth;
            const targetWidth = 1040;
            if (width < targetWidth) {
                setScale(width / targetWidth);
            } else {
                setScale(1);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [height]);

    const containerRef = useRef<HTMLDivElement>(null);
    const [mouse, setMouse]               = useState({ x: 0, y: 0 });
    const [hovering, setHovering]         = useState(false);
    const [tilt, setTilt]                 = useState({ x: 0, y: 0 });
    const [aiIdx, setAiIdx]               = useState(0);
    const [aiText, setAiText]             = useState("");
    const [typing, setTyping]             = useState(true);

    const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const r = containerRef.current.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        setMouse({ x, y });
        const tiltX = ((y / r.height) - 0.5) * -6;
        const tiltY = ((x / r.width) - 0.5) * 6;
        setTilt({ x: tiltX, y: tiltY });
    }, []);

    useEffect(() => {
        const insights = [
            "Revenue is up 18% this week. 3 high-value leads need follow-up today.",
            "AI Agent auto-responded to 4 new inbound RFQs. 100% compliance met.",
            "Anomaly detected: Tally Sync has mismatch of INR 20k. Auto-resolving...",
            "WhatsApp chatbot resolved 82% of customer FAQs. Human agent idle.",
            "Workflow suggest: Route billing invoices over $10k directly to CFO."
        ];
        setTyping(true);
        setAiText("");
        let idx = 0;
        const interval = setInterval(() => {
            const txt = insights[aiIdx];
            if (idx < txt.length) {
                const char = txt[idx];
                setAiText(p => p + char);
                idx++;
            } else {
                setTyping(false);
                clearInterval(interval);
            }
        }, 15);
        return () => clearInterval(interval);
    }, [aiIdx]);

    useEffect(() => {
        const interval = setInterval(() => {
            setAiIdx(prev => (prev + 1) % 5);
        }, 7000);
        return () => clearInterval(interval);
    }, [aiIdx]);

    const getPendingItems = () => {
        if (aSystem === "healthcare" || activeModule === "hospital_crm") {
            return ["Admit Request: Ward 4", "Dr. Sen Schedule Sync", "Lab Report Approval"];
        }
        if (aSystem === "lms" || ["courses", "quizzes", "certificates"].includes(activeModule)) {
            return ["Quiz Retake Request", "Cert #54 Approval", "Course Feedback Review"];
        }
        if (aSystem === "textile" || activeModule === "tshirt_customizer") {
            return ["Quote: 500 T-Shirts", "Embroidery Vector Check", "Restock Organic Cotton"];
        }
        if (aSystem === "media" || activeModule === "render_queue") {
            return ["Render Job #908", "GPU Node Allocation", "Final Cut Export Signoff"];
        }
        if (aSystem === "data-ai" || ["ai_orchestrator", "cvss_scanner"].includes(activeModule)) {
            return ["Pipeline Validation Fail", "API Token Expiry Alert", "CVSS Score Validation"];
        }
        return ["Invoice #2849", "Discount: TechVision", "Vendor PO ₹84K"];
    };

    const getSystemStats = () => {
        if (aSystem === "healthcare" || activeModule === "hospital_crm") {
            return [["Bed Occupancy", 82, "#FFE000"], ["Query Resolve Time", 94, "#4ade80"], ["HIPAA Status", 100, "#60a5fa"]];
        }
        if (aSystem === "lms" || ["courses", "quizzes", "certificates"].includes(activeModule)) {
            return [["Avg Course Progress", 72, "#FFE000"], ["Quiz Pass Rate", 98, "#4ade80"], ["LMS Completion", 94, "#60a5fa"]];
        }
        if (aSystem === "textile" || activeModule === "tshirt_customizer") {
            return [["Printer Ingest Node", 85, "#FFE000"], ["Embroidery Active", 60, "#4ade80"], ["Inventory Status", 90, "#60a5fa"]];
        }
        if (aSystem === "media" || activeModule === "render_queue") {
            return [["Render Node Speed", 72, "#FFE000"], ["GPU Load Factor", 98, "#4ade80"], ["Render Sync Rate", 100, "#60a5fa"]];
        }
        if (aSystem === "data-ai" || ["ai_orchestrator", "cvss_scanner"].includes(activeModule)) {
            return [["AI Orchestrator", 82, "#FFE000"], ["dbt Pipeline Velocity", 94, "#4ade80"], ["CVSS Scan Status", 99, "#60a5fa"]];
        }
        return [["AI Engine", 80, "#FFE000"], ["Workflows", 88, "#4ade80"], ["Sync", 85, "#60a5fa"]];
    };

    const currentList = bMode === "new" ? newSystems : existingSystems;
    const currentSystemConfig = currentList.find(s => s.id === aSystem) || currentList[0];
    const CurrentSystemIcon = currentSystemConfig.icon;
    const filteredSidebarItems = sidebarItems.filter(item => currentSystemConfig.modules.includes(item.id));

    const renderPanel = () => {
        switch (activeModule) {
            case "overview":   return <OverviewPanel />;
            case "revenue":    return <RevenuePanel />;
            case "leads":      return <CRMPanel />;
            case "contacts":   return <ContactsPanel />;
            case "pipeline":   return <PipelinePanel />;
            case "erp":        return <ERPPanel />;
            case "orders":     return <OrdersPanel />;
            case "finance":    return <FinancePanel />;
            case "hr":         return <HRPanel />;
            case "dataroom":   return <DataRoomPanel />;
            case "salesforce": return <SalesforcePanel />;
            case "hubspot":    return <HubSpotPanel />;
            case "tally":      return <TallyPanel />;
            case "sap":        return <SAPPanel />;
            case "courses":    return <LMSPanel />;
            case "quizzes":    return <QuizzesPanel />;
            case "certificates": return <CertificatesPanel />;
            case "talentlms":  return <TalentLMSPanel />;
            case "hospital_crm": return <HealthcarePreview />;
            case "tshirt_customizer": return <TextilePreview />;
            case "render_queue": return <MediaPreview />;
            case "ai_orchestrator": return <AIMLPreview />;
            case "data_ingest": return <DataEngPreview />;
            case "cvss_scanner": return <CybersecurityPreview />;
            case "ai":         return <AIPanel aiText={aiText} typing={typing} />;
            default:           return <OverviewPanel />;
        }
    };

    return (
        <div ref={scaleWrapperRef} className="w-full overflow-hidden flex justify-center" style={{ height: `${numHeight * scale}px` }}>
            <div style={{
                width: "1040px",
                height: `${numHeight}px`,
                transform: `scale(${scale})`,
                transformOrigin: "top center",
                flexShrink: 0,
            }}>
                <div ref={containerRef} onMouseMove={onMouseMove}
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => {
                        setHovering(false);
                        setTilt({ x: 0, y: 0 });
                    }}
                    className="w-full h-full relative rounded-2xl overflow-hidden border shadow-2xl select-none flex flex-col bg-zinc-950 text-white border-white/[0.07]"
                    style={{
                        transform: hovering
                            ? `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.005, 1.005, 1.005)`
                            : "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                        transition: hovering ? "none" : "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
                    }}
                >
            
            <div className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-500"
                style={{ opacity: hovering ? 1 : 0,
                    background: `radial-gradient(280px circle at ${mouse.x}px ${mouse.y}px, rgba(255,224,0,0.06), transparent 70%)` }} />
            <motion.div className="pointer-events-none absolute left-0 right-0 h-px z-10 bg-gradient-to-r from-transparent via-brand-yellow/20 to-transparent"
                animate={{ top: ["0%", "100%"] }} transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 3 }} />
            <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.02]"
                style={{ backgroundImage:"linear-gradient(rgba(255,224,0,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,224,0,1) 1px,transparent 1px)", backgroundSize:"32px 32px" }} />

            <div className="relative z-10 flex items-center justify-between px-4.5 py-3 border-b backdrop-blur-sm shrink-0 bg-zinc-900/70 border-white/[0.05]">
                <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" /><div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    <div className="ml-4 flex items-center gap-2 px-3 py-1 rounded border bg-zinc-800/50 border-white/[0.05]">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
                        <span className="text-[12px] font-mono text-zinc-500">app.buziness365.com</span>
                    </div>
                </div>
                <div className="flex items-center gap-2.5">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded border bg-zinc-800/40 border-white/[0.04]">
                        <Search className="w-3 h-3 text-zinc-500" />
                        <span className="text-[11px] font-mono text-zinc-500">Search...</span>
                    </div>
                    <div className="relative cursor-pointer"><Bell className="w-4 h-4 hover:opacity-80 text-white/25" /><span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" /></div>
                    <div className="w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center cursor-pointer hover:opacity-90"><span className="text-[8px] font-black text-black">JK</span></div>
                </div>
            </div>

            <div className="relative z-10 flex" style={{ height: "calc(100% - 44px)" }}>
                <div className="w-36 border-r flex flex-col py-3 shrink-0 relative bg-zinc-900/30 border-white/[0.04]">
                    <div className="px-2 mb-3 relative shrink-0">
                        <button onClick={() => setSwitcherOpen(!switcherOpen)}
                            className="flex items-center justify-between w-full p-1.5 rounded-xl transition-all text-left bg-zinc-900/50 border-white/[0.05] hover:bg-zinc-900">
                            <div className="flex items-center gap-1.5 overflow-hidden">
                                <div className="w-6 h-6 rounded-lg bg-brand-yellow/15 flex items-center justify-center shrink-0 border border-brand-yellow/20">
                                    <CurrentSystemIcon className="w-3.5 h-3.5 text-brand-yellow" />
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-[10px] font-black leading-tight uppercase tracking-tight text-white">{currentSystemConfig.label}</p>
                                    <p className="text-[8px] text-zinc-550 truncate leading-none mt-0.5">{currentSystemConfig.desc}</p>
                                </div>
                            </div>
                            <ChevronsUpDown className="w-3 h-3 text-zinc-500 shrink-0 ml-0.5" />
                        </button>

                        <AnimatePresence>
                            {switcherOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 4, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 4, scale: 0.95 }}
                                    transition={{ duration: 0.12 }}
                                    className="absolute left-2 right-2 top-full mt-1.5 z-50 rounded-xl p-1.5 bg-zinc-950 border-white/[0.08] shadow-lg"
                                >
                                    <p className="text-[8px] font-black text-zinc-500 uppercase tracking-widest px-2 py-1 mb-1">Switch Workspace</p>
                                    <div className="space-y-0.5">
                                        {currentList.map(s => {
                                            const SIcon = s.icon;
                                            const active = aSystem === s.id;
                                            return (
                                                <button key={s.id}
                                                    onClick={() => {
                                                        setASystem(s.id);
                                                        setActiveModule(s.modules[0]);
                                                        setSwitcherOpen(false);
                                                    }}
                                                    className={`flex items-center gap-2.5 w-full p-2 rounded-lg text-left transition-all ${
                                                        active
                                                            ? "bg-brand-yellow/10 text-brand-yellow font-bold border border-brand-yellow/20"
                                                            : "hover:bg-white/[0.03] text-zinc-400 hover:text-white"
                                                    }`}
                                                >
                                                    <SIcon className="w-3.5 h-3.5 shrink-0" />
                                                    <div className="overflow-hidden">
                                                        <p className="text-[10px] font-black leading-none">{s.label}</p>
                                                        <p className="text-[8px] text-zinc-550 truncate mt-0.5 leading-none">{s.desc}</p>
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="space-y-0.5 overflow-y-auto flex-1">
                        {filteredSidebarItems.map(item => {
                            const Icon = item.icon;
                            const active = activeModule === item.id;
                            return (
                                <motion.button key={item.id} onClick={() => setActiveModule(item.id)}
                                    whileHover={{ x: 2 }} whileTap={{ scale: 0.97 }}
                                    className={`relative flex items-center gap-2.5 px-4.5 py-1.5 text-[12px] font-bold tracking-tight transition-colors duration-200 w-full text-left ${
                                        active 
                                            ? "text-brand-yellow font-extrabold" 
                                            : "text-zinc-400 hover:text-zinc-200"
                                    }`}>
                                    {active && (
                                        <motion.span layoutId="sidebar-active"
                                            className="absolute inset-0 bg-brand-yellow/7 border-r-2 border-brand-yellow/60"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                                    )}
                                    <Icon className="w-4 h-4 relative z-10 shrink-0" />
                                    <span className="relative z-10 truncate">{item.label}</span>
                                </motion.button>
                            );
                        })}
                    </div>
                </div>

                <div className="flex-1 p-5 overflow-hidden min-w-0">
                    <AnimatePresence mode="wait">
                        <motion.div key={activeModule} variants={{ enter: { opacity: 0, x: 4 }, center: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -4 } }}
                            initial="enter" animate="center" exit="exit"
                            className="h-full">
                            {renderPanel()}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {activeModule !== "ai" && (
                    <div className="w-48 border-l p-4 flex flex-col gap-4 shrink-0 overflow-hidden justify-between bg-zinc-900/20 border-white/[0.04]">
                        <div className="border rounded-lg p-3 bg-zinc-900/70 border-brand-yellow/12">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-4 h-4 rounded bg-brand-yellow/12 flex items-center justify-center"><Bot className="w-2.5 h-2.5 text-brand-yellow" /></div>
                                <span className="text-[8px] font-black text-brand-yellow/60 uppercase tracking-widest">AI</span>
                            </div>
                            <p className="text-[11px] font-medium leading-relaxed text-zinc-300 min-h-[44px]">
                                {aiText}
                                {typing && <span className="animate-pulse text-brand-yellow">|</span>}
                            </p>
                        </div>

                        <div className="flex-1 flex flex-col justify-center min-h-0">
                            <p className="text-[8px] font-black text-zinc-550 uppercase tracking-widest mb-2.5">Pending</p>
                            <div className="space-y-1.5 overflow-y-auto pr-1 max-h-[140px]">
                                {getPendingItems().map((item, i) => (
                                    <div key={i} className="flex justify-between items-center bg-white/[0.02] border border-white/[0.04] p-2 rounded-lg hover:border-brand-yellow/30 transition-colors group">
                                        <span className="text-[9.5px] font-semibold text-zinc-300 truncate w-24">{item}</span>
                                        <button className="px-2 py-0.5 rounded text-[8px] font-black uppercase bg-brand-yellow text-black hover:scale-105 transition-transform">Review</button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="shrink-0">
                            <p className="text-[8px] font-black text-zinc-550 uppercase tracking-widest mb-2.5">System</p>
                            {getSystemStats().map(([l,p,c],i)=>(
                                <div key={i} className="mb-2.5">
                                    <div className="flex justify-between mb-1"><span className="text-[10px] text-zinc-400">{l}</span><span className="text-[8px] text-zinc-500">{p}%</span></div>
                                    <div className="h-1 bg-white/[0.05] rounded-full overflow-hidden">
                                        <motion.div className="h-full rounded-full" style={{ backgroundColor: c as string, opacity: 0.5 }}
                                            initial={{ width: 0 }} animate={{ width: `${p}%` }} transition={{ delay: 0.6 + i * 0.15, duration: 1 }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
            </div>
        </div>
    );
}

// ── PANELS ──────────────────────────────────────────────────────────

function OverviewPanel() {
    return (
        <div className="grid grid-rows-[auto,1fr] gap-4 h-full">
            <div className="grid grid-cols-4 gap-3">
                {[
                    { l: "Total Revenue", v: "$2.4M", p: "+18%", c: "text-green-400" },
                    { l: "Active Pipeline", v: "847 Leads", p: "+12%", c: "text-green-400" },
                    { l: "Live Projects", v: "23", p: "+4%", c: "text-green-400" },
                    { l: "Team Util.", v: "94%", p: "+2%", c: "text-green-400" }
                ].map((k, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                        className="bg-zinc-900/50 border border-white/[0.04] p-3 rounded-xl flex flex-col justify-between hover:border-brand-yellow/20 transition-colors">
                        <span className="text-[8px] font-black text-zinc-500 uppercase tracking-wider">{k.l}</span>
                        <div className="flex justify-between items-end mt-1">
                            <span className="text-[15px] font-black tracking-tight">{k.v}</span>
                            <span className={`text-[8.5px] font-bold ${k.c}`}>{k.p}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="grid grid-cols-[1fr,190px] gap-4 min-h-0">
                <div className="bg-zinc-900/40 border border-white/[0.03] p-4 rounded-xl flex flex-col min-h-0 justify-between">
                    <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-3 block">Revenue Last 6 Months</span>
                    <div className="flex-1 flex items-end justify-between px-2 gap-2 h-[120px]">
                        {[40, 55, 45, 70, 60, 85].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                                <motion.div className="w-full bg-brand-yellow rounded-t-sm relative group" style={{ height: `${h}%` }}
                                    initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: i * 0.1, duration: 0.8 }}>
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-zinc-950 text-brand-yellow text-[8px] font-black px-1.5 py-0.5 rounded border border-brand-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">${(h * 15).toFixed(0)}k</div>
                                </motion.div>
                                <span className="text-[8px] font-bold text-zinc-500">M{i + 1}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-zinc-900/40 border border-white/[0.03] p-3.5 rounded-xl flex flex-col min-h-0 justify-between">
                    <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-2.5 block">Pipeline Deals</span>
                    <div className="space-y-1.5 overflow-y-auto pr-1 flex-1">
                        {[
                            { c: "Acme Corp", v: "$48,000", s: "Proposal" },
                            { c: "TechVision", v: "$8,500", s: "Negotiate" },
                            { c: "GreenLeaf", v: "$21,000", s: "Qualified" },
                            { c: "NovaBuild", v: "$18,400", s: "Contacted" }
                        ].map((d, i) => (
                            <div key={i} className="flex justify-between items-center text-[9.5px] border-b border-white/[0.02] pb-1.5 last:border-0 last:pb-0">
                                <div className="flex flex-col"><span className="font-bold truncate w-20 text-zinc-300">{d.c}</span><span className="text-[8px] text-zinc-555">{d.s}</span></div>
                                <span className="font-black text-brand-yellow">{d.v}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function RevenuePanel() {
    return (
        <div className="grid grid-rows-[auto,1fr] gap-4 h-full">
            <div className="grid grid-cols-4 gap-3">
                {[
                    { l: "Monthly Rec. Revenue", v: "$198,400", p: "+14.2%", c: "text-green-400" },
                    { l: "Annual Rec. Revenue", v: "$2.38M", p: "+22.8%", c: "text-green-400" },
                    { l: "Customer Churn", v: "0.84%", p: "-0.12%", c: "text-green-400" },
                    { l: "Net Revenue Ret.", v: "118.4%", p: "+1.5%", c: "text-green-400" }
                ].map((k, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                        className="bg-zinc-900/50 border border-white/[0.04] p-3 rounded-xl flex flex-col justify-between hover:border-brand-yellow/20 transition-colors">
                        <span className="text-[8px] font-black text-zinc-500 uppercase tracking-wider">{k.l}</span>
                        <div className="flex justify-between items-end mt-1">
                            <span className="text-[15px] font-black tracking-tight">{k.v}</span>
                            <span className={`text-[8.5px] font-bold ${k.c}`}>{k.p}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="grid grid-cols-[1fr,190px] gap-4 min-h-0">
                <div className="bg-zinc-900/40 border border-white/[0.03] p-4 rounded-xl flex flex-col min-h-0 justify-between">
                    <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-3 block">MRR Growth History</span>
                    <div className="flex-1 flex items-end justify-between px-2 gap-2 h-[120px]">
                        {[120, 135, 148, 162, 178, 198].map((mrr, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                                <motion.div className="w-full bg-brand-yellow rounded-t-sm relative group" style={{ height: `${(mrr / 200) * 100}%` }}
                                    initial={{ height: 0 }} animate={{ height: `${(mrr / 200) * 100}%` }} transition={{ delay: i * 0.1, duration: 0.8 }}>
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-zinc-950 text-brand-yellow text-[8px] font-black px-1.5 py-0.5 rounded border border-brand-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">${mrr}k</div>
                                </motion.div>
                                <span className="text-[8px] font-bold text-zinc-500">Month {i + 1}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-zinc-900/40 border border-white/[0.03] p-3.5 rounded-xl flex flex-col min-h-0 justify-between">
                    <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-2.5 block">Latest Invoices</span>
                    <div className="space-y-1.5 overflow-y-auto pr-1 flex-1">
                        {[
                            { c: "Acme Corp", v: "$12,000", s: "Paid" },
                            { c: "TechVision", v: "$8,500", s: "Paid" },
                            { c: "GreenLeaf", v: "$4,200", s: "Overdue" },
                            { c: "NovaBuild", v: "$18,400", s: "Pending" }
                        ].map((d, i) => (
                            <div key={i} className="flex justify-between items-center text-[9.5px] border-b border-white/[0.02] pb-1.5 last:border-0 last:pb-0">
                                <div className="flex flex-col"><span className="font-bold truncate w-20 text-zinc-300">{d.c}</span><span className="text-[8px] text-zinc-500">{d.s}</span></div>
                                <span className="font-black text-brand-yellow">{d.v}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function CRMPanel() {
    return (
        <div className="grid grid-cols-[1fr,200px] gap-4 h-full min-h-0">
            <div className="bg-zinc-900/40 border border-white/[0.03] p-4 rounded-xl flex flex-col min-h-0 justify-between">
                <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-3 block">Lead Pipeline Tracker</span>
                <div className="space-y-3.5 overflow-y-auto pr-1 flex-1">
                    {[
                        { name: "Ravi Kumar", company: "Acme Corp", val: "$48,000", stage: "Proposal", c: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
                        { name: "Priya Shah", company: "TechVision", val: "$32,500", stage: "Negotiate", c: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
                        { name: "Amir Khan", company: "GreenLeaf", val: "$21,000", stage: "Qualified", c: "bg-green-500/10 text-green-400 border-green-500/20" },
                        { name: "Rhea Sen", company: "NovaBuild", val: "$18,400", stage: "Contacted", c: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20" }
                    ].map((lead, i) => (
                        <div key={i} className="flex justify-between items-center text-[11px] border-b border-white/[0.02] pb-3 last:border-0 last:pb-0">
                            <div className="flex flex-col">
                                <span className="font-black text-zinc-200">{lead.name}</span>
                                <span className="text-[9px] text-zinc-500 mt-0.5">{lead.company}</span>
                            </div>
                            <span className="font-bold text-zinc-300">{lead.val}</span>
                            <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase border ${lead.c}`}>{lead.stage}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-zinc-900/40 border border-white/[0.03] p-4 rounded-xl flex flex-col min-h-0 justify-between">
                <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-3 block">Funnel Analysis</span>
                <div className="flex-1 flex flex-col justify-between">
                    {[
                        { label: "New Leads", val: "1,247", p: "100%" },
                        { label: "Qualified", val: "384", p: "31%" },
                        { label: "Proposal", val: "142", p: "11%" }
                    ].map((f, i) => (
                        <div key={i} className="mb-3 last:mb-0">
                            <div className="flex justify-between text-[9.5px] mb-1"><span className="font-bold text-zinc-400">{f.label} ({f.val})</span><span className="text-zinc-500">{f.p}</span></div>
                            <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden"><div className="h-full bg-brand-yellow rounded-full" style={{ width: f.p }} /></div>
                        </div>
                    ))}
                    <div className="border-t border-white/[0.04] pt-3.5 mt-2 flex justify-between items-center"><span className="text-[10px] text-zinc-500 font-bold">Conversion:</span><span className="text-[11px] font-black text-green-400">2.8% target</span></div>
                </div>
            </div>
        </div>
    );
}

function ERPPanel() {
    return (
        <div className="grid grid-cols-[1fr,200px] gap-4 h-full min-h-0">
            <div className="bg-zinc-900/40 border border-white/[0.03] p-4 rounded-xl flex flex-col min-h-0 justify-between">
                <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-3 block">Inventory & Production Status</span>
                <div className="space-y-3.5 overflow-y-auto pr-1 flex-1">
                    {[
                        { item: "Organic Cotton Thread", qty: "1,240 kg", status: "Optimal", c: "bg-green-500/10 text-green-400 border-green-500/20" },
                        { item: "Matte Black Buttons", qty: "8,500 units", status: "Optimal", c: "bg-green-500/10 text-green-400 border-green-500/20" },
                        { item: "Premium Zipper YKK", qty: "240 units", status: "Reorder", c: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
                        { item: "Recycled Poly Bags", qty: "120 units", status: "Critical", c: "bg-red-500/10 text-red-400 border-red-500/20" }
                    ].map((inv, i) => (
                        <div key={i} className="flex justify-between items-center text-[11px] border-b border-white/[0.02] pb-3 last:border-0 last:pb-0">
                            <div className="flex flex-col">
                                <span className="font-black text-zinc-200">{inv.item}</span>
                                <span className="text-[9px] text-zinc-500 mt-0.5">Stock: {inv.qty}</span>
                            </div>
                            <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase border ${inv.c}`}>{inv.status}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-zinc-900/40 border border-white/[0.03] p-4 rounded-xl flex flex-col min-h-0 justify-between">
                <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-3 block">Production Nodes</span>
                <div className="flex-1 flex flex-col justify-between">
                    {[
                        { label: "Weaving Node #1", p: "88%" },
                        { label: "Dyeing Node #4", p: "94%" },
                        { label: "Stitching Node #7", p: "62%" }
                    ].map((node, i) => (
                        <div key={i} className="mb-3 last:mb-0">
                            <div className="flex justify-between text-[9.5px] mb-1"><span className="font-bold text-zinc-400">{node.label}</span><span className="text-zinc-500">{node.p}</span></div>
                            <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden"><div className="h-full bg-brand-yellow rounded-full" style={{ width: node.p }} /></div>
                        </div>
                    ))}
                    <div className="border-t border-white/[0.04] pt-3.5 mt-2 flex justify-between items-center"><span className="text-[10px] text-zinc-500 font-bold">Overall OEE:</span><span className="text-[11px] font-black text-green-400">84% (Good)</span></div>
                </div>
            </div>
        </div>
    );
}

function LMSPanel() {
    return (
        <div className="grid grid-cols-[1fr,200px] gap-4 h-full min-h-0">
            <div className="bg-zinc-900/40 border border-white/[0.03] p-4 rounded-xl flex flex-col min-h-0 justify-between">
                <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-3 block">Active Courses Registry</span>
                <div className="space-y-3.5 overflow-y-auto pr-1 flex-1">
                    {[
                        { title: "NextJS 14 Architecture", enroll: "420 students", rating: "4.9/5.0", c: "text-brand-yellow" },
                        { title: "Tailwind Advanced Styling", enroll: "850 students", rating: "4.7/5.0", c: "text-brand-yellow" },
                        { title: "TypeScript Deep Dive", enroll: "240 students", rating: "4.8/5.0", c: "text-brand-yellow" },
                        { title: "Framer Motion Micro-Anims", enroll: "120 students", rating: "4.9/5.0", c: "text-brand-yellow" }
                    ].map((c, i) => (
                        <div key={i} className="flex justify-between items-center text-[11px] border-b border-white/[0.02] pb-3 last:border-0 last:pb-0">
                            <div className="flex flex-col">
                                <span className="font-black text-zinc-200">{c.title}</span>
                                <span className="text-[9px] text-zinc-500 mt-0.5">Active: {c.enroll}</span>
                            </div>
                            <span className={`text-[9.5px] font-black ${c.c}`}>{c.rating}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-zinc-900/40 border border-white/[0.03] p-4 rounded-xl flex flex-col min-h-0 justify-between">
                <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-3 block">Student Progress</span>
                <div className="flex-1 flex flex-col justify-between">
                    {[
                        { label: "Course Completion", p: "72%" },
                        { label: "Quiz Average Score", p: "94%" },
                        { label: "Certificates Issued", p: "100%" }
                    ].map((prog, i) => (
                        <div key={i} className="mb-3 last:mb-0">
                            <div className="flex justify-between text-[9.5px] mb-1"><span className="font-bold text-zinc-400">{prog.label}</span><span className="text-zinc-500">{prog.p}</span></div>
                            <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden"><div className="h-full bg-brand-yellow rounded-full" style={{ width: prog.p }} /></div>
                        </div>
                    ))}
                    <div className="border-t border-white/[0.04] pt-3.5 mt-2 flex justify-between items-center"><span className="text-[10px] text-zinc-500 font-bold">LMS Completion:</span><span className="text-[11px] font-black text-green-400">94% (High)</span></div>
                </div>
            </div>
        </div>
    );
}

function PipelinePanel() {
    return <CRMPanel />;
}

function OrdersPanel() {
    return <ERPPanel />;
}

function FinancePanel() {
    return <OverviewPanel />;
}

function HRPanel() {
    return <OverviewPanel />;
}

function DataRoomPanel() {
    return (
        <div className="bg-zinc-900/40 border border-white/[0.03] p-4 rounded-xl h-full flex flex-col justify-between min-h-0">
            <div className="flex justify-between items-center mb-3.5 shrink-0">
                <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest block">Secure Document Room</span>
                <button className="px-2 py-0.5 rounded text-[8px] font-black uppercase bg-brand-yellow text-black hover:scale-105 transition-transform">Upload Document</button>
            </div>
            <div className="space-y-2.5 overflow-y-auto pr-1 flex-1 min-h-0">
                {[
                    { name: "Vendor Contract V3_Signed.pdf", size: "4.2 MB", date: "Yesterday, 4:20 PM", status: "Encrypted" },
                    { name: "Q3 Financial Audit Ledger.xlsx", size: "12.8 MB", date: "2 days ago", status: "Encrypted" },
                    { name: "Board Resolution - June 2026.pdf", size: "1.8 MB", date: "June 24, 2026", status: "Encrypted" },
                    { name: "AI IP Patent Filing Document.pdf", size: "6.5 MB", date: "June 18, 2026", status: "Encrypted" }
                ].map((doc, i) => (
                    <div key={i} className="flex justify-between items-center bg-white/[0.01] hover:bg-white/[0.02] border border-white/[0.03] p-2.5 rounded-lg transition-colors group">
                        <div className="flex items-center gap-2.5 overflow-hidden">
                            <div className="w-7 h-7 rounded bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20"><FileText className="w-4 h-4 text-red-400" /></div>
                            <div className="overflow-hidden">
                                <p className="text-[11px] font-bold text-zinc-200 truncate w-48 sm:w-64">{doc.name}</p>
                                <p className="text-[8.5px] text-zinc-550 mt-0.5">{doc.size} · Modified {doc.date}</p>
                            </div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[8px] font-black uppercase bg-green-500/10 text-green-400 border border-green-500/20 shrink-0">{doc.status}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function SalesforcePanel() {
    return <CRMPanel />;
}

function HubSpotPanel() {
    return <CRMPanel />;
}

function TallyPanel() {
    return <ERPPanel />;
}

function SAPPanel() {
    return <ERPPanel />;
}

function QuizzesPanel() {
    return <LMSPanel />;
}

function CertificatesPanel() {
    return <LMSPanel />;
}

function TalentLMSPanel() {
    return <LMSPanel />;
}

function AIPanel({ aiText, typing }: { aiText: string; typing: boolean }) {
    return (
        <div className="bg-zinc-900/40 border border-white/[0.03] p-5 rounded-xl h-full flex flex-col justify-between min-h-0">
            <div>
                <span className="text-[9px] font-black text-brand-yellow uppercase tracking-widest mb-3.5 block">B365 Autonomous AI Engine</span>
                <p className="text-[12px] font-medium leading-relaxed text-zinc-200 max-w-xl">
                    Our AI-Native business operating system automatically ingests and classifies leads, schedules clinical checkups, compiles videos, audits codebases, and alerts compliance teams.
                </p>
            </div>
            <div className="bg-zinc-950/60 rounded-xl p-4 border border-white/[0.03] font-mono text-[10px] text-brand-yellow min-h-[140px]">
                <span className="text-zinc-500">// Live LLM Reasoning Feed</span>
                <p className="mt-2.5 leading-relaxed">
                    {aiText}
                    {typing && <span className="animate-pulse text-brand-yellow">|</span>}
                </p>
            </div>
        </div>
    );
}

function ContactsPanel() {
    return <CRMPanel />;
}

function CampaignsPanel() {
    return <CRMPanel />;
}

export function BusinessOSPreview() {
    const [activeModule, setActiveModule] = useState("overview");
    const [buildMode, setBuildMode] = useState("new");
    const [activeSystem, setActiveSystem] = useState("overview");

    const scrollRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.45], [0.94, 1]);
    const rotateX = useTransform(scrollYProgress, [0, 0.45], [8, 0]);
    const yTransform = useTransform(scrollYProgress, [0, 0.45], [20, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.25], [0.6, 1]);

    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={scrollRef} className="relative w-full py-20 md:py-28 overflow-hidden bg-brand-black">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(to right, #F5C800 1px, transparent 1px), linear-gradient(to bottom, #F5C800 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
            
            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div className="mb-10" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-yellow/20 bg-brand-yellow/5 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow block animate-pulse" />
                        <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest">Interactive Platform Simulator</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-[56px] font-black text-white uppercase tracking-tighter leading-none mb-4">
                        Experience <span className="text-brand-yellow" style={{ WebkitTextStroke: "1px #0A0A0A" }}>Business OS</span> in Action.
                    </h2>
                    <p className="max-w-xl mx-auto text-sm md:text-base text-white/50 font-medium leading-relaxed mb-6">
                        Interact with our live workspace preview. Switch modules to see how different subsystems sync autonomously.
                    </p>
                    <Link href="/business-os" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-yellow text-black font-black text-xs uppercase hover:bg-brand-yellow/90 hover:scale-[1.02] active:scale-[0.98] transition-all group shadow-[0_4px_24px_rgba(255,224,0,0.2)]">
                        Explore Business OS <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </motion.div>

                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10"
                    initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}>
                    <button onClick={() => { setBuildMode("existing"); setActiveModule("salesforce"); }}
                        className={`flex items-start gap-4 p-4.5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group ${buildMode === "existing" ? "bg-brand-yellow/8 border-brand-yellow shadow-[0_0_24px_rgba(255,224,0,0.08)]" : "bg-white/[0.02] border-white/[0.05] hover:border-white/15 hover:bg-white/[0.04]"}`}>
                        <div className="w-10 h-10 rounded-xl bg-zinc-900/80 border border-white/[0.05] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"><Cloud className={`w-5 h-5 ${buildMode === "existing" ? "text-brand-yellow" : "text-zinc-400"}`} /></div>
                        <div className="min-w-0">
                            <p className={`text-[13px] font-black uppercase tracking-tight ${buildMode === "existing" ? "text-white" : "text-zinc-300"}`}>Build on Existing Apps</p>
                            <p className="text-[11px] text-zinc-500 leading-normal mt-1">Connect Salesforce, Tally, or SAP and layer AI-native automations directly on top.</p>
                        </div>
                    </button>
                    <button onClick={() => { setBuildMode("new"); setActiveSystem("overview"); setActiveModule("overview"); }}
                        className={`flex items-start gap-4 p-4.5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group ${buildMode === "new" ? "bg-brand-yellow/8 border-brand-yellow shadow-[0_0_24px_rgba(255,224,0,0.08)]" : "bg-white/[0.02] border-white/[0.05] hover:border-white/15 hover:bg-white/[0.04]"}`}>
                        <div className="w-10 h-10 rounded-xl bg-zinc-900/80 border border-white/[0.05] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"><Sparkles className={`w-5 h-5 ${buildMode === "new" ? "text-brand-yellow" : "text-zinc-400"}`} /></div>
                        <div className="min-w-0">
                            <p className={`text-[13px] font-black uppercase tracking-tight ${buildMode === "new" ? "text-white" : "text-zinc-300"}`}>New AI-Native OS</p>
                            <p className="text-[11px] text-zinc-500 leading-normal mt-1">Build an autonomous, unified operating system custom-engineered from scratch.</p>
                        </div>
                    </button>
                </motion.div>

                <motion.div ref={containerRef} style={{ scale, rotateX, y: yTransform, opacity, perspective: 1200 }} className="relative max-w-[1040px] mx-auto mb-10 origin-top">
                    <div className="absolute -inset-4 bg-brand-yellow/5 blur-3xl rounded-3xl pointer-events-none" />
                    <InteractiveDashboard activeModule={activeModule} setActiveModule={setActiveModule} buildMode={buildMode} setBuildMode={setBuildMode} activeSystem={activeSystem} setActiveSystem={setActiveSystem} />
                </motion.div>
            </div>
        </section>
    );
}
