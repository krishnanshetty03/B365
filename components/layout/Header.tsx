"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Sun, Moon, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isDark, setIsDark] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Audio Player State & Setup
    const [isMuted, setIsMuted] = useState(true);
    const welcomeRef = useRef<HTMLAudioElement | null>(null);
    const welcomePlayedRef = useRef(false);

    // Ambient Audio Refs
    const ambientRef = useRef<HTMLAudioElement | null>(null);
    const ambientFadeIntervalRef = useRef<any>(null);
    const fadeTimeoutRef = useRef<any>(null);

    // Play beautiful downloaded ambient soundscape for 10 seconds with fade in and fade out
    const playAmbientAudio = () => {
        if (typeof window === "undefined") return;
        try {
            if (!ambientRef.current) {
                const audio = new Audio("/ambient.mp3");
                audio.loop = true;
                ambientRef.current = audio;
            }
            const audio = ambientRef.current;
            audio.volume = 0;
            
            // Clear any active fade intervals/timeouts
            if (ambientFadeIntervalRef.current) clearInterval(ambientFadeIntervalRef.current);
            if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);

            audio.play().catch(err => console.log("Ambient audio autoplay failed:", err));

            // Fade in: from 0 to 0.35 over 1.5 seconds
            const start = Date.now();
            const duration = 1500;
            const targetVolume = 0.35;
            
            ambientFadeIntervalRef.current = setInterval(() => {
                const elapsed = Date.now() - start;
                if (elapsed >= duration) {
                    audio.volume = targetVolume;
                    clearInterval(ambientFadeIntervalRef.current);
                } else {
                    audio.volume = (elapsed / duration) * targetVolume;
                }
            }, 50);

            // Schedule fade out to start after 8 seconds (8000ms)
            fadeTimeoutRef.current = setTimeout(() => {
                const fadeStart = Date.now();
                const fadeDuration = 1800; // 1.8 seconds fade out
                if (ambientFadeIntervalRef.current) clearInterval(ambientFadeIntervalRef.current);
                
                ambientFadeIntervalRef.current = setInterval(() => {
                    const elapsed = Date.now() - fadeStart;
                    if (elapsed >= fadeDuration) {
                        audio.volume = 0;
                        audio.pause();
                        clearInterval(ambientFadeIntervalRef.current);
                    } else {
                        audio.volume = targetVolume * (1 - elapsed / fadeDuration);
                    }
                }, 50);
            }, 8000);

        } catch (e) {
            console.log("Failed to play ambient sound:", e);
        }
    };

    const stopAmbientAudio = () => {
        try {
            if (ambientFadeIntervalRef.current) clearInterval(ambientFadeIntervalRef.current);
            if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);

            const audio = ambientRef.current;
            if (audio) {
                // Quick fade out over 300ms
                const fadeStart = Date.now();
                const fadeDuration = 300;
                const currentVol = audio.volume;
                
                ambientFadeIntervalRef.current = setInterval(() => {
                    const elapsed = Date.now() - fadeStart;
                    if (elapsed >= fadeDuration) {
                        audio.volume = 0;
                        audio.pause();
                        clearInterval(ambientFadeIntervalRef.current);
                    } else {
                        audio.volume = currentVol * (1 - elapsed / fadeDuration);
                    }
                }, 50);
            }
        } catch (e) {}
    };

    useEffect(() => {
        // 2. Custom Welcome Audio (optional fallback)
        const welcomeAudio = new Audio("/welcome.mp3");
        welcomeAudio.volume = 0.35; // Soft welcome greeting volume
        welcomeRef.current = welcomeAudio;

        const savedMuted = localStorage.getItem("b365-muted");
        const muted = savedMuted ? savedMuted === "true" : true;
        setIsMuted(muted);

        // Interaction helper to start playing instantly on ANY mouse/scroll/touch movement
        const handleInteraction = () => {
            const currentMuted = localStorage.getItem("b365-muted") === "true";
            if (!currentMuted) {
                triggerGreetingSequence();
            }
            removeListeners();
        };

        const removeListeners = () => {
            window.removeEventListener("click", handleInteraction);
            window.removeEventListener("scroll", handleInteraction);
            window.removeEventListener("mousemove", handleInteraction);
            window.removeEventListener("touchstart", handleInteraction);
            window.removeEventListener("mousedown", handleInteraction);
            window.removeEventListener("keydown", handleInteraction);
        };

        window.addEventListener("click", handleInteraction);
        window.addEventListener("scroll", handleInteraction);
        window.addEventListener("mousemove", handleInteraction, { passive: true });
        window.addEventListener("touchstart", handleInteraction, { passive: true });
        window.addEventListener("mousedown", handleInteraction);
        window.addEventListener("keydown", handleInteraction);

        return () => {
            welcomeAudio.pause();
            stopAmbientAudio();
            removeListeners();
        };
    }, []);

    const triggerGreetingSequence = () => {
        if (welcomePlayedRef.current) {
            return; // Only play introduction sequence once per visit
        }

        welcomePlayedRef.current = true;

        // Start high-quality ambient background sound immediately
        playAmbientAudio();

        // Speak the voice greeting at the same time
        if (welcomeRef.current) {
            welcomeRef.current.play()
                .catch(() => {
                    // If file welcome.mp3 does not exist, use Web Speech Synthesis fallback
                    playBrowserTTS();
                });
        } else {
            playBrowserTTS();
        }
    };

    const playBrowserTTS = () => {
        if (typeof window === "undefined" || !("speechSynthesis" in window)) {
            return;
        }

        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance("Welcome to Business three sixty five.");
        utterance.rate = 0.90; // Premium calm pace
        utterance.pitch = 1.08; // Higher pitch for a clear, soft female voice
        utterance.volume = 0.35; // Soft volume, not too loud

        const speak = () => {
            const voices = window.speechSynthesis.getVoices();
            const femaleNames = ["samantha", "zira", "google us english", "hazel", "susan", "victoria", "karen", "female"];
            let preferredVoice = null;
            
            for (const name of femaleNames) {
                const found = voices.find(v => v.name.toLowerCase().includes(name) && v.lang.startsWith("en"));
                if (found) {
                    preferredVoice = found;
                    break;
                }
            }

            if (!preferredVoice) {
                preferredVoice = voices.find(v => v.lang.startsWith("en"));
            }
            
            if (preferredVoice) {
                utterance.voice = preferredVoice;
            }
            window.speechSynthesis.speak(utterance);
        };

        // If voices list is not loaded yet (common in Chrome/Safari), wait for voiceschanged
        if (window.speechSynthesis.getVoices().length === 0) {
            window.speechSynthesis.onvoiceschanged = () => {
                speak();
            };
        } else {
            speak();
        }
    };

    const toggleMute = () => {
        const nextMuted = !isMuted;
        setIsMuted(nextMuted);
        localStorage.setItem("b365-muted", String(nextMuted));

        if (nextMuted) {
            stopAmbientAudio();
            if (welcomeRef.current) welcomeRef.current.pause();
            if (typeof window !== "undefined" && "speechSynthesis" in window) {
                window.speechSynthesis.cancel();
            }
        } else {
            triggerGreetingSequence();
        }
    };

    useEffect(() => {
        const saved = localStorage.getItem("b365-dark");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const dark = saved ? saved === "true" : prefersDark;
        setIsDark(dark);
        document.documentElement.classList.toggle("dark", dark);
    }, []);

    const toggleDark = () => {
        const next = !isDark;
        setIsDark(next);
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("b365-dark", String(next));
    };

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
            setScrollProgress(progress);
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Solutions", href: "/#solutions" },
        { label: "Products", href: "/#products" },
        { label: "Business OS", href: "/business-os", highlight: true },
        { label: "Business Audit", href: "/business-audit" },
        { label: "Pricing", href: "/#pricing" },
        { label: "Contact", href: "/#contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-border-base shadow-sm"
                    : "bg-white dark:bg-zinc-950 border-b border-border-base"
            }`}
        >
            {/* Scroll Progress Bar */}
            <div
                className="absolute bottom-0 left-0 h-0.5 bg-brand-yellow transition-all duration-75 z-10"
                style={{ width: `${scrollProgress}%` }}
            />

            <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 group shrink-0">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl overflow-hidden border border-border-base dark:border-white/10 p-0.5 bg-white flex items-center justify-center shrink-0 shadow-sm">
                        <img src="/logo.png" alt="buziness365 Logo" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-lg font-black tracking-tighter text-brand-black dark:text-white uppercase hidden sm:inline-block group-hover:text-brand-yellow transition-colors">
                        buziness<span className="text-brand-yellow">365</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-0.5">
                    {navLinks.map(link => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={`px-3 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                                link.highlight
                                    ? "text-black bg-brand-yellow border border-brand-yellow hover:opacity-95 shadow-sm px-3.5 rounded-xl"
                                    : "text-brand-black/60 dark:text-white/50 hover:text-brand-black dark:hover:text-white hover:bg-surface dark:hover:bg-white/5"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Right: Dark toggle + CTA + Mobile */}
                <div className="flex items-center gap-2 shrink-0">
                    <button
                        onClick={toggleMute}
                        aria-label={isMuted ? "Unmute ambient sound" : "Mute ambient sound"}
                        className="w-9 h-9 flex items-center justify-center rounded-lg border border-border-base text-brand-black/60 dark:text-white/50 hover:bg-surface dark:hover:bg-white/5 hover:text-brand-black dark:hover:text-white transition-all relative overflow-hidden group"
                    >
                        {isMuted ? (
                            <VolumeX className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                        ) : (
                            <Volume2 className="w-4 h-4 text-brand-yellow animate-bounce" style={{ animationDuration: "1.2s" }} />
                        )}
                        {!isMuted && (
                            <span className="absolute inset-0 bg-brand-yellow/5 animate-ping pointer-events-none rounded-lg" />
                        )}
                    </button>
                    <button
                        onClick={toggleDark}
                        aria-label="Toggle dark mode"
                        className="w-9 h-9 flex items-center justify-center rounded-lg border border-border-base text-brand-black/60 dark:text-white/50 hover:bg-surface dark:hover:bg-white/5 hover:text-brand-black dark:hover:text-white transition-all"
                    >
                        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>
                    <a
                        href="/#pricing"
                        className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-black dark:bg-brand-yellow text-brand-yellow dark:text-brand-black font-black uppercase tracking-widest text-xs rounded-xl hover:opacity-90 transition-opacity"
                    >
                        Get Started
                    </a>
                    <button
                        className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-border-base text-brand-black dark:text-white hover:bg-surface dark:hover:bg-white/5 transition-all"
                        onClick={() => setIsMobileMenuOpen(prev => !prev)}
                        aria-label="Toggle Menu"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {isMobileMenuOpen ? (
                                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                    <X className="w-5 h-5" />
                                </motion.span>
                            ) : (
                                <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                    <Menu className="w-5 h-5" />
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.nav
                        key="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden lg:hidden bg-white dark:bg-zinc-950 border-t border-border-base"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.label}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.04 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${
                                            link.highlight
                                                ? "text-brand-black dark:text-white bg-brand-yellow/10 border border-brand-yellow/30"
                                                : "text-brand-black dark:text-white hover:bg-surface dark:hover:bg-white/5 hover:text-brand-yellow"
                                        }`}
                                    >
                                        <span className={`w-1.5 h-1.5 rounded-full ${link.highlight ? "bg-brand-yellow" : "bg-brand-black/30 dark:bg-white/30"}`} />
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <div className="pt-3 mt-2 border-t border-border-base">
                                <a
                                    href="/#pricing"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-center w-full py-3.5 bg-brand-black dark:bg-brand-yellow text-brand-yellow dark:text-brand-black font-black uppercase tracking-widest text-sm rounded-xl"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
