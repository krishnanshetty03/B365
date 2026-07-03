"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, RotateCcw, MessageSquare, Bot, PhoneCall, Zap, Code, ShieldCheck, FileText, CheckCircle, Smartphone, Send, Mic, Activity } from "lucide-react";

// Dashboard Shell Wrapper
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

// 1. WORKFLOWS SIMULATOR
export function WorkflowsPreview() {
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
        <DashboardShell path="workflows.app.buziness365.com">
            <div className="p-5 flex flex-col flex-1 justify-between overflow-y-auto">
                <div>
                    <p className="text-[9px] font-black text-brand-yellow uppercase tracking-widest bg-brand-black px-2 py-0.5 rounded inline-block mb-3.5">AI Workflow Engine</p>
                    <div className="space-y-3">
                        {[
                            { title: "Trigger: Webhook - New Lead", desc: "Captures raw JSON payload from signup form", log: '{"name": "Sarah Connor", "email": "sarah@skynet.com"}' },
                            { title: "AI Node: Lead Scorer", desc: "Analyzes fit, firmographics, and interest", log: '{"intent": "High", "lead_score": 94, "fit": "Tier 1"}' },
                            { title: "CRM Node: Sync Contact", desc: "Upserts records and sets up workspace pipeline", log: '{"action": "Upsert Contact", "status": "Success"}' },
                            { title: "Action: Dispatch WhatsApp Intro", desc: "Triggers welcome flow conversation automatically", log: '{"recipient": "+1 (555) 0192", "sent": true}' }
                        ].map((s, idx) => {
                            const active = step > idx;
                            const current = step === idx + 1;
                            return (
                                <div key={idx} className={`relative pl-6 transition-all duration-300 ${active ? "opacity-100" : "opacity-25"}`}>
                                    {idx < 3 && <div className={`absolute left-1.5 top-4 w-px h-5 ${step > idx + 1 ? "bg-brand-yellow" : "bg-zinc-800"}`} />}
                                    <div className={`absolute left-0 top-0.5 w-3.5 h-3.5 rounded-full flex items-center justify-center border text-[8px] font-bold ${
                                        current ? "bg-brand-yellow border-brand-yellow text-black animate-pulse" :
                                        active ? "bg-brand-yellow/15 border-brand-yellow text-brand-yellow" : "bg-zinc-800 border-zinc-700 text-zinc-500"
                                    }`}>
                                        {idx + 1}
                                    </div>
                                    <h4 className={`text-[11px] font-black uppercase tracking-tight ${current ? "text-brand-yellow" : "text-zinc-200"}`}>{s.title}</h4>
                                    <p className="text-[9px] text-zinc-400 mt-0.5">{s.desc}</p>
                                    {current && (
                                        <pre className="mt-1.5 text-[8.5px] font-mono p-2 bg-black/60 rounded border border-white/[0.04] text-brand-yellow overflow-x-auto">
                                            {s.log}
                                        </pre>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
                
                <div className="flex gap-2 mt-4 pt-3 border-t border-white/[0.03] shrink-0">
                    {!running && step === 0 ? (
                        <button onClick={() => { setStep(1); setRunning(true); }} className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-brand-yellow text-black font-black text-[10px] uppercase tracking-wider hover:opacity-90 transition-opacity">
                            <Play className="w-3 h-3 fill-black" /> Run Workflow
                        </button>
                    ) : (
                        <button onClick={() => { setStep(0); setRunning(false); }} className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-black text-[10px] uppercase tracking-wider transition-colors">
                            <RotateCcw className="w-3 h-3" /> Reset Simulator
                        </button>
                    )}
                </div>
            </div>
        </DashboardShell>
    );
}

// 2. CHATBOT SIMULATOR
export function ChatbotPreview() {
    const [mode, setMode] = useState<"sales" | "support">("sales");
    const [messages, setMessages] = useState<any[]>([]);
    const [typing, setTyping] = useState(false);

    const salesConvo = [
        { r: "user", text: "Hey! What plans do you offer?" },
        { r: "ai", text: "Hello! We offer a Team Plan for $49/mo and a Custom Enterprise Plan. What is your team size?" },
        { r: "user", text: "We have 8 people." },
        { r: "ai", text: "Awesome! The Team Plan covers up to 10 users and includes all core AI features. Would you like a demo?" }
    ];

    const supportConvo = [
        { r: "user", text: "My Stripe connector is failing." },
        { r: "ai", text: "Checking logs... Stripe Auth token expired. Would you like me to renew it?" },
        { r: "user", text: "Yes, renew it please." },
        { r: "ai", text: "Stripe connection renewed. 8 pending payments synced successfully!" }
    ];

    useEffect(() => {
        setMessages([]);
        setTyping(true);
        const activeList = mode === "sales" ? salesConvo : supportConvo;
        let idx = 0;
        const chatFeed: any[] = [];

        const interval = setInterval(() => {
            if (idx < activeList.length) {
                chatFeed.push(activeList[idx]);
                setMessages([...chatFeed]);
                idx++;
            } else {
                setTyping(false);
                clearInterval(interval);
            }
        }, 1600);

        return () => clearInterval(interval);
    }, [mode]);

    return (
        <DashboardShell path="chatbot.app.buziness365.com">
            {/* Inner Chat App bar */}
            <div className="bg-zinc-900 px-4 py-2 border-b border-white/[0.03] flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center text-black font-black text-[10px]">
                        B3
                    </div>
                    <div>
                        <h4 className="text-[11px] font-black uppercase tracking-tight text-white">buziness365 Copilot</h4>
                        <span className="text-[8px] text-green-400 font-bold block leading-none">Online</span>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <button onClick={() => setMode("sales")} className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider transition-all ${mode === "sales" ? "bg-brand-yellow text-black" : "bg-white/10 text-white/70"}`}>
                        Sales
                    </button>
                    <button onClick={() => setMode("support")} className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider transition-all ${mode === "support" ? "bg-brand-yellow text-black" : "bg-white/10 text-white/70"}`}>
                        Support
                    </button>
                </div>
            </div>

            {/* Chat area */}
            <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-black/20">
                {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.r === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[85%] rounded-xl px-3 py-1.5 text-[11px] leading-relaxed shadow-sm ${
                            m.r === "user" 
                                ? "bg-brand-yellow text-black font-semibold rounded-br-none" 
                                : "bg-zinc-800 text-zinc-200 rounded-bl-none border border-white/[0.03]"
                        }`}>
                            {m.text}
                        </div>
                    </div>
                ))}
                {typing && (
                    <div className="flex justify-start">
                        <div className="bg-zinc-800 border border-white/[0.03] rounded-xl px-3 py-1.5 text-[10px] text-zinc-500 animate-pulse">
                            Copilot is typing...
                        </div>
                    </div>
                )}
            </div>

            {/* Input Footer */}
            <div className="p-2.5 border-t border-white/[0.04] bg-zinc-950 flex gap-2 shrink-0">
                <input disabled placeholder="Type a message..." className="flex-1 bg-zinc-900 border border-white/[0.04] rounded-lg px-3 py-1.5 text-[11px] text-zinc-500 focus:outline-none" />
                <button disabled className="w-7 h-7 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-600">
                    <Send className="w-3 h-3" />
                </button>
            </div>
        </DashboardShell>
    );
}

// 3. VOICE AGENT SIMULATOR
export function VoiceAgentPreview() {
    const [calling, setCalling] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [transcript, setTranscript] = useState<string[]>([]);

    const dialogue = [
        "AI: Hello, Sarah! Calling from Apex Group regarding your onboarding status. Do you have 2 minutes?",
        "Client: Oh, hi! Yes, I do. What's the status?",
        "AI: Your background check cleared, and we've initialized your setup. Can you verify your preferred email?",
        "Client: It's sarah@apex.com.",
        "AI: Perfect. I've updated the records and sent a welcome packet to that address. Will you need anything else?",
        "Client: No, that's perfect. Thanks for the quick update!"
    ];

    useEffect(() => {
        if (!calling) return;
        const timer = setInterval(() => setSeconds(s => s + 1), 1000);
        return () => clearInterval(timer);
    }, [calling]);

    useEffect(() => {
        if (!calling) {
            setTranscript([]);
            setSeconds(0);
            return;
        }
        let idx = 0;
        const temp: string[] = [];
        const transInterval = setInterval(() => {
            if (idx < dialogue.length) {
                temp.push(dialogue[idx]);
                setTranscript([...temp]);
                idx++;
            } else {
                clearInterval(transInterval);
            }
        }, 3000);

        return () => clearInterval(transInterval);
    }, [calling]);

    return (
        <DashboardShell path="voice.app.buziness365.com">
            <div className="p-5 flex flex-col flex-1 justify-between overflow-y-auto">
                <div>
                    <p className="text-[9px] font-black text-brand-yellow uppercase tracking-widest bg-brand-black px-2 py-0.5 rounded inline-block mb-3">AI Dialing Station</p>
                    <div className="bg-zinc-900/60 border border-white/[0.03] p-3 rounded-lg flex items-center justify-between mb-3">
                        <div>
                            <span className="text-[8px] text-zinc-500 font-bold uppercase">Target Number</span>
                            <h4 className="text-[12px] font-black text-white mt-0.5">+1 (555) 019-2834</h4>
                        </div>
                        <div className="text-right">
                            <span className="text-[8px] text-zinc-500 font-bold uppercase">Call Status</span>
                            <span className={`text-[11px] font-black uppercase block mt-0.5 ${calling ? "text-brand-yellow animate-pulse" : "text-zinc-500"}`}>
                                {calling ? `Active (${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')})` : "Idle"}
                            </span>
                        </div>
                    </div>

                    {calling && (
                        <div className="flex gap-0.5 justify-center items-center h-6 mb-3">
                            {[40,75,45,90,55,30,85,60,40,75,35,90,50].map((h, i) => (
                                <div key={i} className="w-0.5 bg-brand-yellow rounded-full animate-bounce" style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }} />
                            ))}
                        </div>
                    )}

                    <div className="space-y-1.5 max-h-[140px] overflow-y-auto bg-black/25 rounded-lg p-2.5 border border-white/[0.02]">
                        {transcript.length === 0 && (
                            <p className="text-[10px] text-zinc-550 text-center py-6">Click 'Start Call Campaign' to initiate dials</p>
                        )}
                        {transcript.map((line, idx) => {
                            const isAi = line.startsWith("AI:");
                            return (
                                <p key={idx} className={`text-[10.5px] leading-relaxed ${isAi ? "text-brand-yellow font-bold" : "text-zinc-300"}`}>
                                    {line}
                                </p>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-3 pt-3 border-t border-white/[0.03] shrink-0">
                    <button onClick={() => setCalling(!calling)} className={`w-full flex items-center justify-center gap-1.5 py-2 rounded-lg font-black text-[10px] uppercase tracking-wider transition-colors ${
                        calling ? "bg-red-500/10 border border-red-500/30 text-red-400" : "bg-brand-yellow text-black hover:opacity-90"
                    }`}>
                        <PhoneCall className="w-3 h-3" /> {calling ? "End Call Campaign" : "Start Call Campaign"}
                    </button>
                </div>
            </div>
        </DashboardShell>
    );
}

// 4. AR & VR SIMULATOR
export function ARVRPreview() {
    const [activeSection, setActiveSection] = useState("maintenance");

    return (
        <DashboardShell path="xr-hud.app.buziness365.com">
            <div className="p-5 flex flex-col flex-1 justify-between overflow-y-auto">
                <div>
                    <p className="text-[9px] font-black text-brand-yellow uppercase tracking-widest bg-brand-black px-2 py-0.5 rounded inline-block mb-3">XR Workspace HUD</p>
                    <div className="flex gap-1.5 mb-3">
                        {[
                            { id: "maintenance", label: "Inspect Engine" },
                            { id: "safety", label: "Evac Drill" }
                        ].map(tab => (
                            <button key={tab.id} onClick={() => setActiveSection(tab.id)} className={`flex-1 py-1.5 text-[9px] font-black uppercase tracking-wider border rounded-lg transition-colors ${
                                activeSection === tab.id ? "bg-brand-yellow border-brand-yellow text-black" : "bg-zinc-900 border-white/[0.04] text-zinc-400"
                            }`}>
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="relative h-[125px] rounded-lg bg-black overflow-hidden flex items-center justify-center border border-white/[0.08]">
                        <div className="absolute inset-0 bg-[radial-gradient(#FFE000_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                        
                        {activeSection === "maintenance" ? (
                            <div className="text-center relative z-10">
                                <div className="w-10 h-10 rounded-full border border-dashed border-brand-yellow/40 flex items-center justify-center animate-spin mb-1.5 mx-auto">
                                    <Code className="w-4 h-4 text-brand-yellow" />
                                </div>
                                <span className="text-[8px] font-mono text-brand-yellow font-bold uppercase tracking-widest">Hydraulic_Valve_Sync</span>
                            </div>
                        ) : (
                            <div className="text-center relative z-10">
                                <ShieldCheck className="w-8 h-8 text-brand-yellow mb-1.5 mx-auto animate-pulse" />
                                <span className="text-[8px] font-mono text-brand-yellow font-bold uppercase tracking-widest">Evacuation HUD // Active</span>
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-3">
                        <div className="bg-zinc-900/60 border border-white/[0.03] p-2 rounded-lg">
                            <span className="text-[7.5px] text-zinc-500 font-bold uppercase">Safety Score</span>
                            <h5 className="text-[11px] font-black text-white mt-0.5">99.8% Passed</h5>
                        </div>
                        <div className="bg-zinc-900/60 border border-white/[0.03] p-2 rounded-lg">
                            <span className="text-[7.5px] text-zinc-500 font-bold uppercase">Time Saved</span>
                            <h5 className="text-[11px] font-black text-brand-yellow mt-0.5">14 Hrs saved</h5>
                        </div>
                    </div>
                </div>
                
                <div className="text-[9px] text-zinc-500 text-center font-medium mt-3 pt-2.5 border-t border-white/[0.03]">
                    XR Engine ready // Meta Quest 3 & Apple Vision Pro compat
                </div>
            </div>
        </DashboardShell>
    );
}

// 5. LAW OS SIMULATOR
export function LawOSPreview() {
    const [reviewStatus, setReviewStatus] = useState<"pending" | "approved">("pending");

    return (
        <DashboardShell path="law-redline.app.buziness365.com">
            <div className="p-5 flex flex-col flex-1 justify-between overflow-y-auto">
                <div>
                    <p className="text-[9px] font-black text-brand-yellow uppercase tracking-widest bg-brand-black px-2 py-0.5 rounded inline-block mb-3.5">AI Contract Auditor</p>
                    <div className="grid grid-cols-2 gap-2.5 mb-3.5">
                        <div className="bg-zinc-900/60 border border-white/[0.03] p-2.5 rounded-lg">
                            <span className="text-[8px] text-zinc-500 font-bold uppercase">Contract clause</span>
                            <p className="text-[10px] leading-relaxed text-zinc-400 mt-1 line-through decoration-red-500/50">
                                The Vendor maintains unlimited liability for structural downtime.
                            </p>
                        </div>
                        <div className="bg-zinc-900/60 border border-white/[0.03] p-2.5 rounded-lg">
                            <span className="text-[8px] text-zinc-500 font-bold uppercase">AI Draft Suggestion</span>
                            <p className="text-[10px] leading-relaxed text-white mt-1">
                                {reviewStatus === "pending" 
                                    ? "The Vendor's liability is capped at $50,000 aggregate."
                                    : "The Vendor's liability is capped at $50,000 aggregate. [APPROVED]"}
                            </p>
                        </div>
                    </div>

                    <div className="bg-brand-yellow/5 border border-brand-yellow/30 p-2.5 rounded-lg mb-3">
                        <span className="text-[8px] text-brand-yellow font-black uppercase tracking-wider block mb-0.5">AI Redline Analysis</span>
                        <p className="text-[10px] leading-relaxed text-zinc-300">
                            Liability must be capped to mitigate claims. Capping at $50K limits risk while keeping contracts market-standard.
                        </p>
                    </div>
                </div>

                <div className="pt-3 border-t border-white/[0.03] shrink-0">
                    {reviewStatus === "pending" ? (
                        <button onClick={() => setReviewStatus("approved")} className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-brand-yellow text-black font-black text-[10px] uppercase tracking-wider hover:opacity-90">
                            Approve AI Redline
                        </button>
                    ) : (
                        <div className="w-full py-2.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 font-black text-[10px] uppercase tracking-wider text-center flex items-center justify-center gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5" /> Contract Draft Updated
                        </div>
                    )}
                </div>
            </div>
        </DashboardShell>
    );
}

// 6. WHATSAPP OS SIMULATOR
export function WhatsAppOSPreview() {
    const [messages, setMessages] = useState<string[]>([
        "System: Campaign initialized",
        "Meta API: Template approved",
        "System: Enrolled 148 contacts in 'Cart Recovery'"
    ]);
    const [campaignRunning, setCampaignRunning] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const runCampaign = () => {
        setCampaignRunning(true);
        setTimeout(() => {
            setMessages(prev => [...prev, "Sarah Connor: WhatsApp message received"]);
        }, 1200);
        setTimeout(() => {
            setMessages(prev => [...prev, "Sarah Connor: Clicked recovery checkout link"]);
        }, 2400);
        setTimeout(() => {
            setMessages(prev => [...prev, "Meta webhook: Invoice #D-9481 Paid via Stripe"]);
        }, 3600);
        setTimeout(() => {
            setMessages(prev => [...prev, "Campaign finished: 98% read rate, 35% converted"]);
        }, 4500);
    };

    return (
        <DashboardShell path="whatsapp-campaigns.app.buziness365.com">
            {/* WhatsApp Web Header */}
            <div className="bg-[#00a884] text-white px-3 py-2 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs font-mono shrink-0">
                        WA
                    </div>
                    <div>
                        <h4 className="text-[11px] font-black tracking-tight text-white leading-tight">WhatsApp OS Inbox</h4>
                        <span className="text-[7.5px] text-white/80 font-bold block leading-none">Meta Business Cloud API</span>
                    </div>
                </div>
            </div>

            {/* WhatsApp Chat Grid */}
            <div className="flex-1 flex overflow-hidden bg-[#efeae2] dark:bg-zinc-950/20 relative">
                <div className="absolute inset-0 bg-[radial-gradient(#00a884_0.75px,transparent_0.75px)] [background-size:16px_16px] opacity-[0.03]" />

                {/* Left Side: Active Contacts */}
                <div className="w-1/3 border-r border-white/[0.04] bg-white dark:bg-zinc-900 flex flex-col hidden sm:block relative z-10">
                    {[
                        { name: "Sarah Connor", text: "Paid Invoice #D-94...", time: "18:12" },
                        { name: "John Connor", text: "Cart Abandoned", time: "Yesterday" }
                    ].map((chat, idx) => (
                        <div key={idx} className={`p-2 border-b border-zinc-100 dark:border-zinc-800 flex flex-col cursor-pointer ${idx === 0 ? "bg-zinc-50 dark:bg-zinc-800/40" : ""}`}>
                            <h5 className="text-[9.5px] font-black text-brand-black dark:text-zinc-200 truncate">{chat.name}</h5>
                            <p className="text-[8px] text-zinc-400 truncate mt-0.5">{chat.text}</p>
                        </div>
                    ))}
                </div>

                {/* Right Side: Log Feed / Chat Stream */}
                <div className="flex-1 flex flex-col justify-between relative z-10 p-3 h-full overflow-hidden">
                    <div ref={scrollRef} className="flex-1 space-y-2 overflow-y-auto pr-1">
                        {messages.map((m, idx) => {
                            const isSystem = m.startsWith("System:") || m.startsWith("Meta ");
                            return (
                                <div key={idx} className={`flex ${isSystem ? "justify-start" : "justify-end"}`}>
                                    <div className={`max-w-[90%] rounded-xl px-2.5 py-1 text-[10px] leading-relaxed shadow-sm ${
                                        isSystem 
                                            ? "bg-white dark:bg-zinc-800 text-zinc-500 dark:text-zinc-450 rounded-tl-none border border-white/[0.02]" 
                                            : "bg-[#d9fdd3] dark:bg-[#005c4b] text-black dark:text-white rounded-tr-none font-semibold"
                                    }`}>
                                        {m}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-2.5 pt-2.5 border-t border-zinc-200 dark:border-white/[0.04] shrink-0">
                        {!campaignRunning ? (
                            <button onClick={runCampaign} className="w-full flex items-center justify-center gap-1 py-2 rounded-lg bg-[#00a884] text-white font-black text-[9.5px] uppercase tracking-wider hover:opacity-90 transition-opacity">
                                Dispatch Broadcast Flow
                            </button>
                        ) : (
                            <button onClick={() => { setCampaignRunning(false); setMessages(["System: Ready", "Meta API: Connected"]); }} className="w-full flex items-center justify-center gap-1 py-2 rounded-lg bg-zinc-800 text-white font-black text-[9.5px] uppercase tracking-wider hover:bg-zinc-700 transition-colors">
                                Reset Broadcast
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </DashboardShell>
    );
}
