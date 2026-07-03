"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
    Cpu, Database, Shield, Zap, TrendingUp, GraduationCap, Stethoscope, Sprout, Settings, ShoppingCart, 
    Play, RotateCcw, AlertTriangle, CheckCircle, BarChart2, Activity, Server, ArrowRight, ArrowLeft,
    GitBranch, UserCheck, Users, Flame, Plus, Trash, Settings2, FileText, Smartphone, Send, Eye, Gift, 
    BarChart, Sparkles, AlertCircle, Layout
} from "lucide-react";

// Dashboard Shell Wrapper for Solutions
export function DashboardShell({ path, children, className = "h-[460px]" }: { path: string, children: React.ReactNode, className?: string }) {
    return (
        <div className={`w-full bg-zinc-950 rounded-2xl border border-border-base dark:border-white/[0.08] shadow-2xl overflow-hidden flex flex-col ${className} text-left text-white`}>
            {/* Top Mac Bar */}
            <div className="bg-zinc-900 border-b border-white/[0.04] px-4 py-2.5 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 block" />
                </div>
                <div className="px-3 py-0.5 rounded bg-zinc-950 border border-white/[0.03] text-[9px] font-mono text-zinc-500 max-w-[220px] truncate leading-none">
                    {path}
                </div>
                <div className="text-[8px] font-black text-right text-brand-yellow uppercase tracking-widest leading-none">
                    B365
                </div>
            </div>
            
            {/* Main view with mock sidebar */}
            <div className="flex-1 flex overflow-hidden bg-zinc-950">
                {/* Left Mini Sidebar */}
                <div className="w-24 border-r border-white/[0.04] bg-zinc-950 p-2 space-y-1 hidden sm:block shrink-0">
                    <div className="text-[7.5px] font-black uppercase text-zinc-500 tracking-wider px-1.5 mb-1.5">WORKSPACE</div>
                    <div className="px-2 py-1.5 rounded bg-white/5 border border-white/[0.03] text-[9.5px] font-bold text-white leading-none">
                        Overview
                    </div>
                    <div className="px-2 py-1.5 rounded text-[9.5px] font-medium text-zinc-400 hover:text-white leading-none cursor-pointer">
                        Settings
                    </div>
                    <div className="px-2 py-1.5 rounded text-[9.5px] font-medium text-zinc-400 hover:text-white leading-none cursor-pointer">
                        Logs
                    </div>
                </div>
                
                {/* Content Viewport */}
                <div className="flex-1 bg-zinc-900/10 flex flex-col justify-between overflow-hidden">
                    {children}
                </div>
            </div>
        </div>
    );
}

// 1. AI AUTOMATION / ML SIMULATOR (CANVAS WORKFLOW VIEW)
export function AIMLPreview() {
    const [step, setStep] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if (!running) return;
        const interval = setInterval(() => {
            setStep(s => {
                if (s >= 4) {
                    setRunning(false);
                    return 4;
                }
                return s + 1;
            });
        }, 1400);
        return () => clearInterval(interval);
    }, [running]);

    return (
        <DashboardShell path="canvas.workflows.app.buziness365.com">
            <div className="p-5 flex flex-col flex-1 justify-between overflow-y-auto">
                <div>
                    <p className="text-[9px] font-black text-brand-yellow uppercase tracking-widest bg-brand-black px-2 py-0.5 rounded inline-block mb-3">AI Automation Canvas</p>
                    
                    {/* Interactive Canvas Nodes */}
                    <div className="grid grid-cols-4 gap-2 relative mt-1 mb-4 p-2 bg-black/40 rounded-xl border border-white/[0.03]">
                        {[
                            { name: "Trigger: Form Capture", type: "trigger" },
                            { name: "AI Agent: LLM Intent", type: "inference" },
                            { name: "Voice Agent: Call Campaign", type: "voice" },
                            { name: "Action: Log to CRM", type: "crm" }
                        ].map((n, idx) => {
                            const isCurrent = step === idx + 1;
                            const isDone = step > idx + 1;
                            return (
                                <div key={idx} className={`relative p-2 rounded-lg border text-center transition-all duration-300 ${
                                    isCurrent ? "border-brand-yellow bg-brand-yellow/15 shadow-lg shadow-brand-yellow/5" :
                                    isDone ? "border-green-500 bg-green-500/5" : "border-zinc-800 bg-zinc-900/50"
                                }`}>
                                    {idx < 3 && (
                                        <div className={`absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-px z-10 ${
                                            step > idx + 1 ? "bg-green-500" : "bg-zinc-800"
                                        }`} />
                                    )}
                                    <div className="text-[7px] font-black uppercase text-zinc-550 mb-1">{n.type}</div>
                                    <div className={`text-[8.5px] font-bold truncate ${isCurrent ? "text-brand-yellow" : isDone ? "text-green-400" : "text-zinc-400"}`}>
                                        {n.name}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Simulation Console Log */}
                    <div className="bg-black/60 rounded-xl p-3 border border-white/[0.04] font-mono text-[9px] text-zinc-400 space-y-1.5 min-h-[110px]">
                        <p className="text-zinc-600">{`// Canvas Execution logs`}</p>
                        {step === 0 && <p className="text-zinc-500">{`> Ready. Click 'Execute Canvas Flow' to start...`}</p>}
                        {step >= 1 && <p className="text-brand-yellow">{`> [Trigger] Caught new lead: {"name": "Aman G.", "intent": "inquiry"}`}</p>}
                        {step >= 2 && <p className="text-blue-400">{`> [AI Node] Running classification: High Intent (94% conf)`}</p>}
                        {step >= 3 && <p className="text-purple-400">{`> [Voice Agent] Dispatching outbound call queue to +91 9845...`}</p>}
                        {step >= 4 && <p className="text-green-500">{`> [CRM Sync] Call marked 'Interested'. Action logs synced.`}</p>}
                    </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.03] flex gap-2 shrink-0">
                    {!running && step === 0 ? (
                        <button onClick={() => { setStep(1); setRunning(true); }} className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-brand-yellow text-black font-black text-[10px] uppercase tracking-wider hover:opacity-90 transition-opacity">
                            <Play className="w-3 h-3 fill-black" /> Execute Canvas Flow
                        </button>
                    ) : (
                        <button onClick={() => { setStep(0); setRunning(false); }} className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-black text-[10px] uppercase tracking-wider transition-colors">
                            <RotateCcw className="w-3 h-3" /> Reset Flow
                        </button>
                    )}
                </div>
            </div>
        </DashboardShell>
    );
}

// 2. DATA ENGINEERING SIMULATOR (PIPELINE STREAM)
export function DataEngPreview() {
    const [running, setRunning] = useState(false);
    const [rate, setRate] = useState(12480);
    const [stage, setStage] = useState(0);

    useEffect(() => {
        if (!running) return;
        const interval = setInterval(() => {
            setRate(r => Math.floor(r + (Math.random() - 0.5) * 600));
            setStage(s => (s >= 3 ? 1 : s + 1));
        }, 1500);
        return () => clearInterval(interval);
    }, [running]);

    return (
        <DashboardShell path="airflow.pipelines.app.buziness365.com">
            <div className="p-5 flex flex-col flex-1 justify-between overflow-y-auto">
                <div>
                    <p className="text-[9px] font-black text-brand-yellow uppercase tracking-widest bg-brand-black px-2 py-0.5 rounded inline-block mb-3">Pipeline Orchestrator</p>
                    
                    {/* Flow Diagram */}
                    <div className="flex items-center justify-between bg-zinc-900/60 p-3 rounded-xl border border-white/[0.03] mb-3">
                        <div className="text-center">
                            <div className="text-[8px] text-zinc-500 font-bold uppercase mb-0.5">Ingest</div>
                            <span className={`text-[10px] font-black ${running && stage === 1 ? "text-brand-yellow" : "text-zinc-400"}`}>Sources</span>
                        </div>
                        <ArrowRight className="w-3 h-3 text-zinc-700" />
                        <div className="text-center">
                            <div className="text-[8px] text-zinc-500 font-bold uppercase mb-0.5">Transform</div>
                            <span className={`text-[10px] font-black ${running && stage === 2 ? "text-brand-yellow" : "text-zinc-400"}`}>dbt / Spark</span>
                        </div>
                        <ArrowRight className="w-3 h-3 text-zinc-700" />
                        <div className="text-center">
                            <div className="text-[8px] text-zinc-500 font-bold uppercase mb-0.5">Load</div>
                            <span className={`text-[10px] font-black ${running && stage === 3 ? "text-brand-yellow" : "text-zinc-400"}`}>Snowflake</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-3">
                        <div className="bg-zinc-900/60 p-2.5 rounded-xl border border-white/[0.03]">
                            <span className="text-[7.5px] text-zinc-500 font-bold uppercase block">Throughput Rate</span>
                            <h5 className="text-[14px] font-black text-white mt-0.5">
                                {running ? `${rate.toLocaleString()} rows/s` : "0 rows/s"}
                            </h5>
                        </div>
                        <div className="bg-zinc-900/60 p-2.5 rounded-xl border border-white/[0.03]">
                            <span className="text-[7.5px] text-zinc-500 font-bold uppercase block">Quality Integrity</span>
                            <h5 className="text-[14px] font-black text-green-500 mt-0.5">100% Passed</h5>
                        </div>
                    </div>

                    <div className="bg-black/60 rounded-xl p-2.5 border border-white/[0.04] font-mono text-[8px] text-zinc-500 space-y-1">
                        <p>{running ? `> [INFO] Streaming batch partitions synced` : `> [INFO] Pipeline idle`}</p>
                        {running && <p className="text-green-500">{`> [VALID] 0 null constraints violated. Schema clean.`}</p>}
                    </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.03] shrink-0">
                    <button onClick={() => setRunning(!running)} className={`w-full py-2 rounded-lg font-black text-[10px] uppercase tracking-wider transition-colors ${
                        running ? "bg-zinc-800 text-white hover:bg-zinc-700" : "bg-brand-yellow text-black hover:opacity-90"
                    }`}>
                        {running ? "Stop Ingestion Pipeline" : "Start Ingestion Pipeline"}
                    </button>
                </div>
            </div>
        </DashboardShell>
    );
}

// 3. CYBERSECURITY SIMULATOR (CVSS SCORE SCANNER)
export function CybersecurityPreview() {
    const [scanning, setScanning] = useState(false);
    const [progress, setProgress] = useState(0);
    const [reportReady, setReportReady] = useState(false);

    useEffect(() => {
        if (!scanning) return;
        setReportReady(false);
        setProgress(0);
        const interval = setInterval(() => {
            setProgress(p => {
                if (p >= 100) {
                    setScanning(false);
                    setReportReady(true);
                    return 100;
                }
                return p + 10;
            });
        }, 300);
        return () => clearInterval(interval);
    }, [scanning]);

    return (
        <DashboardShell path="vapt.security.app.buziness365.com">
            <div className="p-5 flex flex-col flex-1 justify-between overflow-y-auto">
                <div>
                    <p className="text-[9px] font-black text-brand-yellow uppercase tracking-widest bg-brand-black px-2 py-0.5 rounded inline-block mb-3">VAPT Score Card</p>
                    
                    {scanning ? (
                        <div className="bg-zinc-900/60 p-4 rounded-xl border border-white/[0.03] text-center py-8">
                            <Activity className="w-6 h-6 text-brand-yellow animate-spin mx-auto mb-2" />
                            <span className="text-[10px] font-bold text-zinc-400 block uppercase">Analyzing Vulnerabilities... {progress}%</span>
                        </div>
                    ) : reportReady ? (
                        <div className="space-y-2.5">
                            <div className="bg-zinc-900/65 p-3 rounded-xl border border-white/[0.03] flex items-center justify-between">
                                <div>
                                    <span className="text-[7px] text-zinc-500 font-bold uppercase tracking-wider block">CVSS v3.1 Base Score</span>
                                    <h4 className="text-[16px] font-black text-red-500 mt-0.5">9.8 - CRITICAL IMPACT</h4>
                                </div>
                                <div className="px-2 py-1 bg-red-500/10 border border-red-500/30 text-red-400 font-black text-[9px] rounded-lg uppercase tracking-wider">
                                    Exploitable
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <span className="text-[8px] text-zinc-500 font-bold uppercase block">Discovered Findings</span>
                                <div className="bg-zinc-900/30 border border-white/[0.02] p-2 rounded-lg text-[9.5px] space-y-1">
                                    <p className="text-red-400 font-semibold">• [Auth Bypass] SQLi exploit on endpoint /api/auth</p>
                                    <p className="text-yellow-500 font-semibold">• [CSRF] Session token hijack in checkout cookies</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-zinc-900/40 p-4 rounded-xl border border-white/[0.03] text-center py-6 text-zinc-500">
                            <AlertCircle className="w-5 h-5 text-zinc-550 mx-auto mb-1.5" />
                            <p className="text-[10.5px]">Initiate Penetration Testing to generate CVSS score report.</p>
                        </div>
                    )}
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.03] shrink-0">
                    <button onClick={() => setScanning(true)} className="w-full py-2.5 bg-brand-yellow text-black font-black text-[10px] uppercase tracking-wider rounded-lg hover:opacity-90">
                        Generate CVSS Score Report
                    </button>
                </div>
            </div>
        </DashboardShell>
    );
}

// 4. STARTUP INCUBATION SIMULATOR
export function StartupPreview() {
    return (
        <DashboardShell path="incubator.app.buziness365.com">
            <div className="p-5 flex flex-col flex-1 justify-between overflow-y-auto">
                <div>
                    <p className="text-[9px] font-black text-brand-yellow uppercase tracking-widest bg-brand-black px-2 py-0.5 rounded inline-block mb-3.5">Startup Funding tracker</p>
                    <div className="space-y-3.5">
                        <div className="bg-zinc-900/60 p-3.5 rounded-xl border border-white/[0.03] grid grid-cols-2 gap-2 text-center">
                            <div>
                                <span className="text-[8px] text-zinc-500 font-bold uppercase">Funding Secured</span>
                                <h5 className="text-[13px] font-black text-white mt-0.5">$1.4M</h5>
                            </div>
                            <div>
                                <span className="text-[8px] text-zinc-500 font-bold uppercase">Success Rate</span>
                                <h5 className="text-[13px] font-black text-brand-yellow mt-0.5">78%</h5>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <span className="text-[8px] text-zinc-500 font-bold uppercase block">Portfolio Milestones</span>
                            {[
                                { startup: "FinTech Hub", status: "Seed stage", funding: "$600k" },
                                { startup: "SaaS Automate", status: "Pre-seed", funding: "$450k" }
                            ].map((p, i) => (
                                <div key={i} className="flex justify-between items-center bg-zinc-900/40 p-2 rounded border border-white/[0.02] text-[10.5px]">
                                    <div>
                                        <span className="font-bold text-zinc-300 block">{p.startup}</span>
                                        <span className="text-[8px] text-zinc-500">{p.status}</span>
                                    </div>
                                    <span className="text-[10.5px] font-black text-brand-yellow">{p.funding}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="text-[9px] text-zinc-500 text-center font-medium mt-4 pt-3 border-t border-white/[0.03]">
                    Capital Access Pool: Connected
                </div>
            </div>
        </DashboardShell>
    );
}

// 5. EDTECH SIMULATOR
export function EdtechPreview() {
    return (
        <DashboardShell path="lms-classes.app.buziness365.com">
            <div className="p-5 flex flex-col flex-1 justify-between overflow-y-auto">
                <div>
                    <p className="text-[9px] font-black text-brand-yellow uppercase tracking-widest bg-brand-black px-2 py-0.5 rounded inline-block mb-3.5">LMS Classroom Hub</p>
                    <div className="space-y-3.5">
                        <div className="bg-zinc-900/60 p-3.5 rounded-xl border border-white/[0.03] grid grid-cols-2 gap-2 text-center">
                            <div>
                                <span className="text-[8px] text-zinc-500 font-bold uppercase">Active Students</span>
                                <h5 className="text-[13px] font-black text-white mt-0.5">1,480</h5>
                            </div>
                            <div>
                                <span className="text-[8px] text-zinc-500 font-bold uppercase">Engagement</span>
                                <h5 className="text-[13px] font-black text-brand-yellow mt-0.5">85.4%</h5>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <span className="text-[8px] text-zinc-500 font-bold uppercase block">Active Course Rooms</span>
                            {[
                                { course: "Full-Stack Development Boot", students: "48 Students", rate: "92%" },
                                { course: "Data Analytics Essentials", students: "124 Students", rate: "78%" }
                            ].map((c, i) => (
                                <div key={i} className="flex justify-between items-center bg-zinc-900/40 p-2 rounded border border-white/[0.02] text-[10.5px]">
                                    <div>
                                        <span className="font-bold text-zinc-300 block">{c.course}</span>
                                        <span className="text-[8px] text-zinc-500">{c.students}</span>
                                    </div>
                                    <span className="text-[10.5px] font-black text-brand-yellow">{c.rate}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="text-[9px] text-zinc-500 text-center font-medium mt-4 pt-3 border-t border-white/[0.03]">
                    LMS Sync Status: Active
                </div>
            </div>
        </DashboardShell>
    );
}

// 6. HEALTHCARE SIMULATOR
export function HealthcarePreview() {
    return (
        <DashboardShell path="patients.app.buziness365.com">
            <div className="p-5 flex flex-col flex-1 justify-between overflow-y-auto">
                <div>
                    <p className="text-[9px] font-black text-brand-yellow uppercase tracking-widest bg-brand-black px-2 py-0.5 rounded inline-block mb-3.5">Patient Portal Sync</p>
                    <div className="space-y-3.5">
                        <div className="bg-zinc-900/60 p-3.5 rounded-xl border border-white/[0.03] grid grid-cols-2 gap-2 text-center">
                            <div>
                                <span className="text-[8px] text-zinc-500 font-bold uppercase">Admissions Today</span>
                                <h5 className="text-[13px] font-black text-white mt-0.5">42</h5>
                            </div>
                            <div>
                                <span className="text-[8px] text-zinc-500 font-bold uppercase">Resolved Queries</span>
                                <h5 className="text-[13px] font-black text-brand-yellow mt-0.5">100%</h5>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <span className="text-[8px] text-zinc-500 font-bold uppercase block">Doctor Schedules</span>
                            {[
                                { doctor: "Dr. Priya Sen (Cardio)", time: "10:30 AM", status: "Consulting" },
                                { doctor: "Dr. Amir Khan (Neuro)", time: "11:15 AM", status: "Available" }
                            ].map((d, i) => (
                                <div key={i} className="flex justify-between items-center bg-zinc-900/40 p-2 rounded border border-white/[0.02] text-[10.5px]">
                                    <div>
                                        <span className="font-bold text-zinc-300 block">{d.doctor}</span>
                                        <span className="text-[8px] text-zinc-500">{d.time}</span>
                                    </div>
                                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-green-500/10 border border-green-500/20 text-green-400 font-bold">{d.status}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="text-[9px] text-zinc-500 text-center font-medium mt-4 pt-3 border-t border-white/[0.03]">
                    HIPAA compliance locks active
                </div>
            </div>
        </DashboardShell>
    );
}

// 7. AGRO-TECH SIMULATOR
export function AgroPreview() {
    return (
        <DashboardShell path="iot-telemetry.app.buziness365.com">
            <div className="p-5 flex flex-col flex-1 justify-between overflow-y-auto">
                <div>
                    <p className="text-[9px] font-black text-brand-yellow uppercase tracking-widest bg-brand-black px-2 py-0.5 rounded inline-block mb-3.5">IoT Crop Telemetry</p>
                    <div className="space-y-3.5">
                        <div className="bg-zinc-900/60 p-3.5 rounded-xl border border-white/[0.03] grid grid-cols-2 gap-2 text-center">
                            <div>
                                <span className="text-[8px] text-zinc-500 font-bold uppercase">Soil Moisture</span>
                                <h5 className="text-[13px] font-black text-white mt-0.5">42%</h5>
                            </div>
                            <div>
                                <span className="text-[8px] text-zinc-500 font-bold uppercase">Irrigation Status</span>
                                <h5 className="text-[13px] font-black text-brand-yellow mt-0.5">Standby</h5>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <span className="text-[8px] text-zinc-500 font-bold uppercase block">IoT Field Stations</span>
                            {[
                                { station: "Field Sensor Unit Alpha", humidity: "64% Humid", status: "Active" },
                                { station: "Field Sensor Unit Beta", humidity: "60% Humid", status: "Active" }
                            ].map((s, i) => (
                                <div key={i} className="flex justify-between items-center bg-zinc-900/40 p-2 rounded border border-white/[0.02] text-[10.5px]">
                                    <div>
                                        <span className="font-bold text-zinc-300 block">{s.station}</span>
                                        <span className="text-[8px] text-zinc-500">{s.humidity}</span>
                                    </div>
                                    <span className="text-green-405 font-bold">{s.status}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="text-[9px] text-zinc-500 text-center font-medium mt-4 pt-3 border-t border-white/[0.03]">
                    Field IoT gateway connected
                </div>
            </div>
        </DashboardShell>
    );
}

// 8. BUSINESS OPERATIONS SIMULATOR
export function BizOpsPreview() {
    return (
        <DashboardShell path="sop-flows.app.buziness365.com">
            <div className="p-5 flex flex-col flex-1 justify-between overflow-y-auto">
                <div>
                    <p className="text-[9px] font-black text-brand-yellow uppercase tracking-widest bg-brand-black px-2 py-0.5 rounded inline-block mb-3.5">Operations SOP Monitor</p>
                    <div className="space-y-3.5">
                        <div className="bg-zinc-900/60 p-3.5 rounded-xl border border-white/[0.03] grid grid-cols-2 gap-2 text-center">
                            <div>
                                <span className="text-[8px] text-zinc-500 font-bold uppercase">Process Uplift</span>
                                <h5 className="text-[13px] font-black text-white mt-0.5">+40%</h5>
                            </div>
                            <div>
                                <span className="text-[8px] text-zinc-500 font-bold uppercase">Task resolution</span>
                                <h5 className="text-[16px] font-black text-brand-yellow mt-0.5">99.7%</h5>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <span className="text-[8px] text-zinc-500 font-bold uppercase block">Active Workflow Logs</span>
                            {[
                                { workflow: "Vendor contract signoff", duration: "Active", step: "Reviewing clause" },
                                { workflow: "Monthly payroll batching", duration: "Finished", step: "W-2 verified" }
                            ].map((w, i) => (
                                <div key={i} className="flex justify-between items-center bg-zinc-900/40 p-2 rounded border border-white/[0.02] text-[10.5px]">
                                    <div>
                                        <span className="font-bold text-zinc-300 block">{w.workflow}</span>
                                        <span className="text-[8px] text-zinc-500">{w.step}</span>
                                    </div>
                                    <span className={`text-[9.5px] font-bold ${w.duration === "Finished" ? "text-green-500" : "text-brand-yellow animate-pulse"}`}>{w.duration}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="text-[9px] text-zinc-500 text-center font-medium mt-4 pt-3 border-t border-white/[0.03]">
                    Total processes optimized: 148 runs
                </div>
            </div>
        </DashboardShell>
    );
}

// 9. E-COMMERCE SIMULATOR
export function EcommercePreview() {
    return (
        <DashboardShell path="store-orders.app.buziness365.com">
            <div className="p-5 flex flex-col flex-1 justify-between overflow-y-auto">
                <div>
                    <p className="text-[9px] font-black text-brand-yellow uppercase tracking-widest bg-brand-black px-2 py-0.5 rounded inline-block mb-3.5">E-Commerce sales</p>
                    <div className="space-y-3.5">
                        <div className="bg-zinc-900/60 p-3.5 rounded-xl border border-white/[0.03] grid grid-cols-2 gap-2 text-center">
                            <div>
                                <span className="text-[8px] text-zinc-500 font-bold uppercase">Store Sales (Today)</span>
                                <h5 className="text-[13px] font-black text-white mt-0.5">$48,920</h5>
                            </div>
                            <div>
                                <span className="text-[8px] text-zinc-500 font-bold uppercase">Conversion Rate</span>
                                <h5 className="text-[13px] font-black text-brand-yellow mt-0.5">3.4%</h5>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <span className="text-[8px] text-zinc-500 font-bold uppercase block">Live Checkout Stream</span>
                            {[
                                { item: "Organic cotton hoodie", total: "$84.00", status: "Paid" },
                                { item: "Premium leather jacket", total: "$240.00", status: "Recovered" }
                            ].map((c, i) => (
                                <div key={i} className="flex justify-between items-center bg-zinc-900/40 p-2 rounded border border-white/[0.02] text-[10.5px]">
                                    <div>
                                        <span className="font-bold text-zinc-300 block">{c.item}</span>
                                        <span className="text-[8px] text-zinc-500">{c.total}</span>
                                    </div>
                                    <span className="text-[9.5px] px-1.5 py-0.5 rounded bg-green-500/10 border border-green-500/20 text-green-400 font-bold">{c.status}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="text-[9px] text-zinc-500 text-center font-medium mt-4 pt-3 border-t border-white/[0.03]">
                    Shopify & Stripe webhooks active
                </div>
            </div>
        </DashboardShell>
    );
}

// 10. TEXTILE SIMULATOR (WITH sleeker contrast box background)
export function TextilePreview() {
    const [productType, setProductType] = useState<"tshirt" | "cap">("tshirt");
    const [fabricColor, setFabricColor] = useState<"White" | "Black" | "Navy" | "Charcoal">("White");
    const [printColor, setPrintColor] = useState<"Gold" | "Black" | "White">("Gold");
    const [gsm, setGsm] = useState<"180 GSM" | "200 GSM" | "220 GSM" | "240 GSM">("180 GSM");

    // Get color Hex for product mockup SVG
    const fabricHex = {
        White: "#FFFFFF",
        Black: "#141416",
        Navy: "#1D2D50",
        Charcoal: "#3A3D40"
    }[fabricColor];

    const printHex = {
        Gold: "#FFE000",
        Black: "#000000",
        White: "#FFFFFF"
    }[printColor];

    return (
        <DashboardShell path="print-customizer.app.buziness365.com" className="min-h-[520px]">
            <div className="p-5 flex flex-col flex-1 justify-between overflow-y-auto">
                <div>
                    <p className="text-[9px] font-black text-brand-yellow uppercase tracking-widest bg-brand-black px-2 py-0.5 rounded inline-block mb-3">Print Shop Configurator</p>
                    
                    {/* Product Select Toggle */}
                    <div className="flex gap-1.5 bg-zinc-50 dark:bg-zinc-950/40 p-1 border border-border-base dark:border-white/[0.04] rounded-lg mb-3">
                        <button onClick={() => setProductType("tshirt")} className={`flex-1 py-1.5 rounded text-[10px] font-black uppercase tracking-wider transition-all ${productType === "tshirt" ? "bg-brand-yellow text-black shadow-sm" : "text-zinc-500 hover:text-zinc-200"}`}>
                            Custom T-Shirt
                        </button>
                        <button onClick={() => setProductType("cap")} className={`flex-1 py-1.5 rounded text-[10px] font-black uppercase tracking-wider transition-all ${productType === "cap" ? "bg-brand-yellow text-black shadow-sm" : "text-zinc-500 hover:text-zinc-200"}`}>
                            Branded Cap
                        </button>
                    </div>

                    {/* Simulated Real-Time Graphic Mockup - Locked to Dark Charcoal Background for high-contrast visibility */}
                    <div className="h-[180px] bg-[#0c0c0e] rounded-xl border border-white/[0.06] flex items-center justify-center relative overflow-hidden mb-3">
                        <div className="absolute inset-0 bg-[radial-gradient(#FFE000_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                        
                        {productType === "tshirt" ? (
                            <div className="relative flex flex-col items-center justify-center">
                                {/* Realistic SVG T-Shirt Shape */}
                                <svg viewBox="0 0 100 100" className="w-36 h-36 transition-colors duration-300 drop-shadow-md" style={{ color: fabricHex }}>
                                    <path 
                                        fill="currentColor" 
                                        stroke="rgba(255,255,255,0.15)" 
                                        strokeWidth="1.0" 
                                        d="M30,12 L44,12 C46,17 54,17 56,12 L70,12 L85,25 L75,35 L70,30 L70,88 L30,88 L30,30 L25,35 L15,25 Z" 
                                />
                                </svg>
                                {/* Customizable Logo Overlay */}
                                <div className="absolute top-[42%] flex flex-col items-center pointer-events-none">
                                    <span 
                                        className="text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded bg-black/85 shadow-md transition-colors duration-350"
                                        style={{ color: printHex, border: `1px solid ${printHex}40` }}
                                    >
                                        BUZINESS365
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div className="relative flex flex-col items-center justify-center">
                                {/* Realistic SVG Cap Shape */}
                                <svg viewBox="0 0 100 100" className="w-36 h-36 transition-colors duration-300 drop-shadow-md" style={{ color: fabricHex }}>
                                    {/* Cap crown */}
                                    <path 
                                        fill="currentColor" 
                                        stroke="rgba(255,255,255,0.15)" 
                                        strokeWidth="1.0" 
                                        d="M 20 60 C 20 22, 80 22, 80 60 Z" 
                                    />
                                    {/* Cap visor/brim */}
                                    <path 
                                        fill="currentColor" 
                                        stroke="rgba(255,255,255,0.22)" 
                                        strokeWidth="1.0" 
                                        d="M 15 60 C 30 74, 70 74, 85 60 C 70 58, 30 58, 15 60 Z" 
                                    />
                                    {/* Button on top */}
                                    <circle cx="50" cy="24" r="3" fill="rgba(255,255,255,0.25)" />
                                </svg>
                                {/* Customizable Logo Overlay */}
                                <div className="absolute top-[40%] flex flex-col items-center pointer-events-none">
                                    <span 
                                        className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-black/85 shadow-md transition-colors duration-350"
                                        style={{ color: printHex, border: `1px solid ${printHex}40` }}
                                    >
                                        B365
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="space-y-2">
                        {/* Fabric Color Select Row */}
                        <div className="flex justify-between items-center text-[11px] border-b border-white/[0.04] pb-1.5">
                            <span className="text-zinc-400 font-bold uppercase">Fabric Color</span>
                            <div className="flex gap-1.5">
                                {["White", "Black", "Navy", "Charcoal"].map((c: any) => (
                                    <button 
                                        key={c} 
                                        onClick={() => setFabricColor(c)} 
                                        className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider transition-all ${
                                            fabricColor === c 
                                                ? "bg-brand-yellow text-black" 
                                                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                                        }`}
                                    >
                                        {c}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {/* Ink Print Color Select Row */}
                        <div className="flex justify-between items-center text-[11px] border-b border-white/[0.04] pb-1.5">
                            <span className="text-zinc-400 font-bold uppercase">Print Color</span>
                            <div className="flex gap-1.5">
                                {["Gold", "Black", "White"].map((c: any) => (
                                    <button 
                                        key={c} 
                                        onClick={() => setPrintColor(c)} 
                                        className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider transition-all ${
                                            printColor === c 
                                                ? "bg-brand-yellow text-black" 
                                                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                                        }`}
                                    >
                                        {c}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {/* GSM Select Row */}
                        <div className="flex justify-between items-center text-[11px]">
                            <span className="text-zinc-400 font-bold uppercase">Fabric Weight</span>
                            <div className="flex gap-1.5">
                                {["180 GSM", "200 GSM", "220 GSM", "240 GSM"].map((g: any) => (
                                    <button 
                                        key={g} 
                                        onClick={() => setGsm(g)} 
                                        className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider transition-all ${
                                            gsm === g 
                                                ? "bg-brand-yellow text-black" 
                                                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                                        }`}
                                    >
                                        {g}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.03] flex justify-end shrink-0">
                    <a 
                        href="#contact" 
                        className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-brand-yellow text-black font-black uppercase text-[10px] tracking-wider rounded-lg hover:opacity-90 transition-opacity shadow-md shadow-brand-yellow/15"
                    >
                        Get Custom Quote <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                </div>
            </div>
        </DashboardShell>
    );
}

// 11. MEDIA SIMULATOR
export function MediaPreview() {
    const [progress, setProgress] = useState(72);
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(p => {
                if (p >= 100) return 40;
                return p + 4;
            });
        }, 1200);
        return () => clearInterval(interval);
    }, []);

    return (
        <DashboardShell path="render-pipeline.app.buziness365.com">
            <div className="p-5 flex flex-col flex-1 justify-between overflow-y-auto">
                <div>
                    <p className="text-[9px] font-black text-brand-yellow uppercase tracking-widest bg-brand-black px-2 py-0.5 rounded inline-block mb-3.5">Video Render Pipeline</p>
                    <div className="space-y-3.5">
                        <div className="bg-zinc-900/60 p-3.5 rounded-xl border border-white/[0.03]">
                            <div className="flex justify-between items-center text-[11px] mb-1.5">
                                <span className="font-bold text-zinc-300">Brand_Promo_1080p.mp4</span>
                                <span className="text-brand-yellow font-black">{progress}%</span>
                            </div>
                            <div className="w-full h-1.5 bg-zinc-850 rounded-full overflow-hidden">
                                <div className="h-full bg-brand-yellow transition-all duration-300" style={{ width: `${progress}%` }} />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <span className="text-[8px] text-zinc-500 font-bold uppercase block">Render Job Queue</span>
                            {[
                                { name: "TikTok_Ads_Promo.mp4", status: "Finished", time: "2 min ago" },
                                { name: "Hero_Loop_Cinematic.mov", status: "Queued", time: "Pending" }
                            ].map((j, i) => (
                                <div key={i} className="flex justify-between items-center bg-zinc-900/40 p-2 rounded border border-white/[0.02] text-[10.5px]">
                                    <span className="font-semibold text-zinc-350">{j.name}</span>
                                    <span className={`text-[9.5px] font-bold ${j.status === "Finished" ? "text-green-500" : "text-zinc-500 animate-pulse"}`}>{j.status}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="text-[9px] text-zinc-500 text-center font-medium mt-4 pt-3 border-t border-white/[0.03]">
                    GPU rendering active at 60fps
                </div>
            </div>
        </DashboardShell>
    );
}

// 12. XR - MR/VR/AR SIMULATOR (META QUEST MR HUD)
export function ARVRPreview() {
    const [activeSection, setActiveSection] = useState("maintenance");

    return (
        <DashboardShell path="quest-hud.app.buziness365.com">
            <div className="p-5 flex flex-col flex-1 justify-between overflow-y-auto">
                <div>
                    <p className="text-[9px] font-black text-brand-yellow uppercase tracking-widest bg-brand-black px-2 py-0.5 rounded inline-block mb-2.5">Quest MR Passthrough HUD</p>
                    <div className="flex gap-1.5 mb-2.5">
                        {[
                            { id: "maintenance", label: "Inspect Valve" },
                            { id: "safety", label: "Evac Route" }
                        ].map(tab => (
                            <button key={tab.id} onClick={() => setActiveSection(tab.id)} className={`flex-1 py-1.5 text-[9px] font-black uppercase tracking-wider border rounded-lg transition-colors ${
                                activeSection === tab.id ? "bg-brand-yellow border-brand-yellow text-black shadow-sm" : "bg-zinc-800 border-white/[0.04] text-zinc-400"
                            }`}>
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Quest MR Passthrough Simulator Viewport */}
                    <div className="relative h-[135px] rounded-lg bg-black overflow-hidden flex items-center justify-center border border-white/[0.08]">
                        {/* Grid lines to represent 3D spatial mapping */}
                        <div className="absolute inset-0 bg-[radial-gradient(#FFE000_1px,transparent_1px)] [background-size:20px_20px] opacity-15" />
                        
                        <div className="absolute top-2 left-2 flex gap-1 items-center bg-black/60 px-1.5 py-0.5 rounded border border-white/[0.05] text-[7.5px] font-mono text-zinc-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> MR PASSTHROUGH ON
                        </div>

                        {activeSection === "maintenance" ? (
                            <div className="text-center relative z-10 p-2 bg-black/40 rounded border border-white/[0.03]">
                                <Sparkles className="w-5 h-5 text-brand-yellow mx-auto mb-1 animate-pulse" />
                                <span className="text-[8px] font-mono text-brand-yellow font-bold uppercase tracking-widest">AI Overlay: Valve Align Target</span>
                                <div className="text-[7.5px] font-mono text-zinc-400 mt-0.5">[L_HAND: Tracking OK] [R_HAND: OK]</div>
                            </div>
                        ) : (
                            <div className="text-center relative z-10 p-2 bg-black/40 rounded border border-white/[0.03]">
                                <AlertTriangle className="w-5 h-5 text-red-500 mx-auto mb-1 animate-bounce" />
                                <span className="text-[8px] font-mono text-red-400 font-bold uppercase tracking-widest">Safety Hazard Route Map</span>
                                <div className="text-[7.5px] font-mono text-zinc-400 mt-0.5">AI assistant recalculating path...</div>
                            </div>
                        )}
                    </div>

                    {/* AI Assistant Spatial Interface */}
                    <div className="mt-2.5 p-2 bg-brand-yellow/5 border border-brand-yellow/20 rounded-lg flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                        <div>
                            <span className="text-[7.5px] text-brand-yellow font-black uppercase tracking-wider block">AI Assistant Integrated</span>
                            <p className="text-[9.5px] leading-snug text-zinc-300">
                                "Safety bounds checked. Guide overlay locked on machine joint. Hand grips stable."
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="text-[9px] text-zinc-500 text-center font-medium mt-3 pt-2 border-t border-white/[0.03] shrink-0">
                    Spatials synced // Hand Tracking & Voice ready
                </div>
            </div>
        </DashboardShell>
    );
}

// 13. BUSINESS CONSULTING SIMULATOR
export function ConsultingPreview() {
    return (
        <DashboardShell path="consulting.app.buziness365.com">
            <div className="p-5 flex flex-col flex-1 justify-between overflow-y-auto">
                <div>
                    <p className="text-[9px] font-black text-brand-yellow uppercase tracking-widest bg-brand-black px-2 py-0.5 rounded inline-block mb-3.5">Strategic ROI Planner</p>
                    <div className="space-y-3.5">
                        <div className="bg-zinc-900/60 p-3.5 rounded-xl border border-white/[0.03] grid grid-cols-2 gap-2 text-center">
                            <div>
                                <span className="text-[8px] text-zinc-500 font-bold uppercase">Process Cost Cut</span>
                                <h5 className="text-[13px] font-black text-white mt-0.5">-24%</h5>
                            </div>
                            <div>
                                <span className="text-[8px] text-zinc-500 font-bold uppercase">Annualized ROI</span>
                                <h5 className="text-[13px] font-black text-brand-yellow mt-0.5">310%</h5>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <span className="text-[8px] text-zinc-500 font-bold uppercase block">Efficiency Roadmaps</span>
                            {[
                                { area: "Supply Chain Logistics Optimization", impact: "+35% speed" },
                                { area: "Consolidated Tools Stack Strategy", impact: "$120k saved" }
                              ].map((m, i) => (
                                  <div key={i} className="flex justify-between items-center bg-zinc-900/40 p-2 rounded border border-white/[0.02] text-[10.5px]">
                                      <span className="font-semibold text-zinc-350 truncate max-w-[150px]">{m.area}</span>
                                      <span className="text-[10.5px] font-black text-brand-yellow shrink-0">{m.impact}</span>
                                  </div>
                              ))}
                        </div>
                    </div>
                </div>
                <div className="text-[9px] text-zinc-500 text-center font-medium mt-4 pt-3 border-t border-white/[0.03] shrink-0">
                    Strategic Audit completed // Roadmap active
                </div>
            </div>
        </DashboardShell>
    );
}

// 14. WORKFORCE SUPPORT SIMULATOR (VERIFIED DEVELOPERS ROSTER ALLOCATOR)
export function WorkforcePreview() {
    const [selectedDev, setSelectedDev] = useState<string>("ai");
    const [assigned, setAssigned] = useState(false);

    const pool = [
        { id: "ai", name: "Rohan S.", role: "AI & LLM Specialist", status: "Available", skills: "NLP, Fine-tuning, Agentic AI" },
        { id: "fullstack", name: "Siddharth J.", role: "Senior Full-Stack Dev", status: "Assigned", skills: "Next.js, Node, Stripe" },
        { id: "devops", name: "Vikram M.", role: "Senior DevOps Lead", status: "Available", skills: "AWS, Kubernetes, Terraform" },
        { id: "security", name: "Ananya P.", role: "Verified Security Lead", status: "Available", skills: "VAPT, CVSS, Code Audits" }
    ];

    const currentDev = pool.find(d => d.id === selectedDev) || pool[0];

    const handleAssign = () => {
        setAssigned(true);
        setTimeout(() => setAssigned(false), 3000);
    };

    return (
        <DashboardShell path="roster.workforce.app.buziness365.com">
            <div className="p-5 flex flex-col flex-1 justify-between overflow-y-auto">
                <div>
                    <p className="text-[9px] font-black text-brand-yellow uppercase tracking-widest bg-brand-black px-2 py-0.5 rounded inline-block mb-3">Verified Engineering Roster</p>
                    
                    {/* Dev Grid Picker */}
                    <div className="grid grid-cols-4 gap-1.5 mb-3 bg-black/40 p-1.5 border border-white/[0.03] rounded-lg">
                        {pool.map(d => (
                            <button 
                                key={d.id} 
                                onClick={() => setSelectedDev(d.id)}
                                className={`p-1.5 rounded text-[8px] font-black uppercase tracking-wider transition-all ${
                                    selectedDev === d.id ? "bg-brand-yellow text-black" : "bg-zinc-900 text-zinc-400 hover:text-white"
                                }`}
                            >
                                {d.name.split(" ")[0]}
                            </button>
                        ))}
                    </div>

                    {/* Developer Info Card */}
                    <div className="bg-zinc-900/60 border border-white/[0.04] p-3 rounded-xl mb-3 flex items-start justify-between">
                        <div>
                            <span className="text-[7.5px] text-zinc-500 font-bold uppercase tracking-wider">Expert Profile</span>
                            <h4 className="text-[12px] font-black text-white mt-0.5">{currentDev.name}</h4>
                            <p className="text-[9.5px] text-brand-yellow font-bold mt-0.5">{currentDev.role}</p>
                            <p className="text-[8.5px] text-zinc-400 mt-1">Skills: {currentDev.skills}</p>
                        </div>
                        <span className={`text-[8px] font-black uppercase px-1.5 py-0.5 rounded-lg border ${
                            currentDev.status === "Available" 
                                ? "bg-green-500/10 border-green-500/20 text-green-400" 
                                : "bg-zinc-800 border-zinc-700 text-zinc-500"
                        }`}>
                            {currentDev.status}
                        </span>
                    </div>
                </div>

                <div className="pt-3 border-t border-white/[0.03] shrink-0">
                    <button 
                        onClick={handleAssign}
                        className={`w-full py-2.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                            assigned ? "bg-green-500/10 border border-green-500/25 text-green-400" : "bg-brand-yellow text-black hover:opacity-90"
                        }`}
                    >
                        <UserCheck className="w-3.5 h-3.5" /> {assigned ? "Staff Allocated to Sprint!" : `Allocate ${currentDev.name.split(" ")[0]} to Team`}
                    </button>
                </div>
            </div>
        </DashboardShell>
    );
}

// 15. CORPORATE GIFTS SIMULATOR [NEW]
export function GiftsPreview() {
    const [kitItem, setKitItem] = useState<"welcome_kit" | "flask" | "mug" | "notebook">("welcome_kit");
    const [companyName, setCompanyName] = useState("Acme Corp");
    const [themeColor, setThemeColor] = useState<"Gold" | "Black" | "White">("Gold");

    const printHex = {
        Gold: "#FFE000",
        Black: "#000000",
        White: "#FFFFFF"
    }[themeColor];

    return (
        <DashboardShell path="gifts.customizer.app.buziness365.com" className="min-h-[520px]">
            <div className="p-5 flex flex-col flex-1 justify-between overflow-y-auto">
                <div>
                    <p className="text-[9px] font-black text-brand-yellow uppercase tracking-widest bg-brand-black px-2 py-0.5 rounded inline-block mb-3">Corporate Welcome Kit customizer</p>
                    
                    {/* Item selector grid */}
                    <div className="grid grid-cols-4 gap-1.5 mb-3 bg-black/40 p-1 border border-white/[0.03] rounded-lg">
                        {[
                            { id: "welcome_kit", label: "Gift Set" },
                            { id: "flask", label: "Flask" },
                            { id: "mug", label: "Mug" },
                            { id: "notebook", label: "Notebook" }
                        ].map(item => (
                            <button 
                                key={item.id} 
                                onClick={() => setKitItem(item.id as any)}
                                className={`py-1.5 rounded text-[8px] font-black uppercase tracking-wider transition-all ${
                                    kitItem === item.id ? "bg-brand-yellow text-black shadow-sm" : "text-zinc-500 hover:text-zinc-200"
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Realistic SVG Vector Mockups (Locked to solid dark background to show White/Gold custom branding) */}
                    <div className="h-[160px] bg-[#0c0c0e] rounded-xl border border-white/[0.06] flex items-center justify-center relative overflow-hidden mb-3">
                        <div className="absolute inset-0 bg-[radial-gradient(#FFE000_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                        
                        {kitItem === "flask" ? (
                            <div className="relative flex flex-col items-center justify-center">
                                {/* Water Bottle SVG */}
                                <svg viewBox="0 0 100 100" className="w-28 h-28 text-zinc-700 drop-shadow-md">
                                    {/* Cap */}
                                    <path fill="#27272A" d="M42 12 h16 v6 h-16 Z" />
                                    {/* Neck */}
                                    <path fill="#3F3F46" d="M45 18 h10 v8 h-10 Z" />
                                    {/* Body */}
                                    <path fill="currentColor" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" d="M36 26 h28 c4 0, 4 4, 4 8 v50 c0 4, -4 4, -4 4 h-28 c-4 0, -4 -4, -4 -4 v-50 c0 -4, 4 -4, 4 -8 Z" />
                                </svg>
                                <div className="absolute top-[48%] flex flex-col items-center pointer-events-none">
                                    <span className="text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-black/85 shadow-md border border-white/5" style={{ color: printHex }}>
                                        {companyName || "B365"}
                                    </span>
                                </div>
                            </div>
                        ) : kitItem === "mug" ? (
                            <div className="relative flex flex-col items-center justify-center">
                                {/* Welcome Mug SVG */}
                                <svg viewBox="0 0 100 100" className="w-28 h-28 text-zinc-400 drop-shadow-md">
                                    {/* Handle */}
                                    <path fill="none" stroke="currentColor" strokeWidth="6" d="M30 35 c -15 0, -15 30, 0 30" transform="translate(42, 0) scale(-1, 1)" />
                                    {/* Body */}
                                    <path fill="currentColor" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" d="M32 26 h36 c2 0, 2 2, 2 4 v44 c0 4, -2 6, -6 6 h-28 c-4 0, -6 -2, -6 -6 v-44 c0 -2, 0 -4, 2 -4 Z" />
                                </svg>
                                <div className="absolute top-[48%] flex flex-col items-center pointer-events-none">
                                    <span className="text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-black/85 shadow-md border border-white/5" style={{ color: printHex }}>
                                        {companyName || "B365"}
                                    </span>
                                </div>
                            </div>
                        ) : kitItem === "notebook" ? (
                            <div className="relative flex flex-col items-center justify-center">
                                {/* Notebook SVG */}
                                <svg viewBox="0 0 100 100" className="w-28 h-28 text-[#3F3F46] drop-shadow-md">
                                    <path fill="currentColor" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" d="M28 20 h44 c2 0, 4 2, 4 4 v52 c0 2, -2 4, -4 4 h-44 c-2 0, -4 -2, -4 -4 v-52 c0 -2, 2 -4, 4 -4 Z" />
                                    {/* Spine */}
                                    <path fill="#27272A" d="M24 20 h4 v60 h-4 Z" />
                                </svg>
                                <div className="absolute top-[45%] flex flex-col items-center pointer-events-none">
                                    <span className="text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-black/85 shadow-md border border-white/5" style={{ color: printHex }}>
                                        {companyName || "B365"}
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div className="relative flex items-center justify-center gap-1.5">
                                {/* Hamper Kit set overview */}
                                <div className="flex flex-col items-center">
                                    <svg viewBox="0 0 100 100" className="w-16 h-16 text-zinc-700">
                                        <path fill="currentColor" d="M30 26 h40 v48 h-40 Z" />
                                    </svg>
                                    <span className="text-[6.5px] font-black text-zinc-500 uppercase mt-0.5">Hamper Box</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <svg viewBox="0 0 100 100" className="w-14 h-14 text-zinc-400">
                                        <path fill="currentColor" d="M32 26 h36 c2 0, 2 2, 2 4 v44 c0 4, -2 6, -6 6 h-28 c-4 0, -6 -2, -6 -6 v-44 Z" />
                                    </svg>
                                    <span className="text-[6.5px] font-black text-zinc-500 uppercase mt-0.5">Mug</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <svg viewBox="0 0 100 100" className="w-14 h-14 text-zinc-500">
                                        <path fill="currentColor" d="M28 20 h44 v52 h-44 Z" />
                                    </svg>
                                    <span className="text-[6.5px] font-black text-zinc-500 uppercase mt-0.5">Notebook</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="space-y-2">
                        {/* Custom Brand Name Text Input */}
                        <div className="flex justify-between items-center text-[11px] border-b border-white/[0.04] pb-1.5">
                            <span className="text-zinc-400 font-bold uppercase">Branding Text</span>
                            <input 
                                type="text"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                className="bg-zinc-900 border border-white/[0.05] rounded px-2.5 py-0.5 text-[9.5px] text-white focus:outline-none focus:border-brand-yellow max-w-[160px] text-right font-black"
                            />
                        </div>

                        {/* Print theme Color Select Row */}
                        <div className="flex justify-between items-center text-[11px]">
                            <span className="text-zinc-400 font-bold uppercase">Branding Print Color</span>
                            <div className="flex gap-1.5">
                                {["Gold", "Black", "White"].map((c: any) => (
                                    <button 
                                        key={c} 
                                        onClick={() => setThemeColor(c)} 
                                        className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider transition-all ${
                                            themeColor === c 
                                                ? "bg-brand-yellow text-black" 
                                                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                                        }`}
                                    >
                                        {c}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.03] flex justify-end shrink-0">
                    <a 
                        href="#contact" 
                        className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-brand-yellow text-black font-black uppercase text-[10px] tracking-wider rounded-lg hover:opacity-90 transition-opacity shadow-md"
                    >
                        Get Custom Hamper Quote <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                </div>
            </div>
        </DashboardShell>
    );
}

// 16. ADVERTISING & BRANDING SIMULATOR [NEW]
export function AdvertisingPreview() {
    const [running, setRunning] = useState(true);
    const [roas, setRoas] = useState(4.2);

    useEffect(() => {
        if (!running) return;
        const interval = setInterval(() => {
            setRoas(r => Math.max(2.4, Math.min(6.5, r + (Math.random() - 0.5) * 0.4)));
        }, 1500);
        return () => clearInterval(interval);
    }, [running]);

    return (
        <DashboardShell path="ads.monitor.app.buziness365.com">
            <div className="p-5 flex flex-col flex-1 justify-between overflow-y-auto">
                <div>
                    <p className="text-[9px] font-black text-brand-yellow uppercase tracking-widest bg-brand-black px-2 py-0.5 rounded inline-block mb-3.5">Ad Campaigns dashboard</p>
                    
                    <div className="grid grid-cols-3 gap-1.5 mb-3 text-center">
                        <div className="bg-zinc-900/60 p-2 rounded-lg border border-white/[0.03]">
                            <span className="text-[7.5px] text-zinc-500 font-bold uppercase block">Ad Spends</span>
                            <h5 className="text-[12px] font-black text-white mt-0.5">$1,240</h5>
                        </div>
                        <div className="bg-zinc-900/60 p-2 rounded-lg border border-white/[0.03]">
                            <span className="text-[7.5px] text-zinc-500 font-bold uppercase block">CTR (Avg)</span>
                            <h5 className="text-[12px] font-black text-brand-yellow mt-0.5">3.8%</h5>
                        </div>
                        <div className="bg-zinc-900/60 p-2 rounded-lg border border-white/[0.03]">
                            <span className="text-[7.5px] text-zinc-500 font-bold uppercase block">Campaign ROAS</span>
                            <h5 className="text-[12px] font-black text-green-500 mt-0.5">{roas.toFixed(2)}x</h5>
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <span className="text-[8px] text-zinc-500 font-bold uppercase block">Active ad Channels</span>
                        {[
                            { channel: "Google search ads (High Intent)", conversions: "84 leads", spend: "$640" },
                            { channel: "Meta Instagram video ads", conversions: "148 leads", spend: "$600" }
                        ].map((ad, idx) => (
                            <div key={idx} className="flex justify-between items-center bg-zinc-900/40 p-2 rounded border border-white/[0.02] text-[10.5px]">
                                <div>
                                    <span className="font-bold text-zinc-300 block">{ad.channel}</span>
                                    <span className="text-[8px] text-zinc-500">Spend: {ad.spend}</span>
                                </div>
                                <span className="text-[10.5px] font-black text-brand-yellow">{ad.conversions}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-[9px] text-zinc-500 text-center font-medium mt-4 pt-3 border-t border-white/[0.03] shrink-0">
                    Full funnel analytics connected
                </div>
            </div>
        </DashboardShell>
    );
}
