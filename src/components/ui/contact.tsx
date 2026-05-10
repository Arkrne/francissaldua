"use client";

import React, { useState, useEffect, useRef } from "react";
import { Mail, MapPin, Phone, ShieldCheck, ShieldAlert, Cpu, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const contactCards = [
  {
    title: "Email",
    value: "francissaldua99@gmail.com",
    href: "mailto:francissaldua99@gmail.com",
    icon: Mail,
  },
  {
    title: "Phone",
    value: "09514342858",
    href: "tel:09514342858",
    icon: Phone,
  },
  {
    title: "Location",
    value: "Virac, Catanduanes",
    href: "https://maps.google.com/?q=Virac,+Catanduanes",
    icon: MapPin,
  },
];

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [result, setResult] = useState("");
  const [challenge, setChallenge] = useState({ a: 0, b: 0 });
  const [userAnswer, setUserAnswer] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const generateChallenge = () => {
    setChallenge({
      a: Math.floor(Math.random() * 9) + 1,
      b: Math.floor(Math.random() * 9) + 1,
    });
    setUserAnswer("");
    setIsVerified(false);
  };

  // Generate a new challenge on mount
  useEffect(() => {
    generateChallenge();
  }, []);

  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setUserAnswer(val);
    if (parseInt(val) === challenge.a + challenge.b) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Bot protection: Honeypot check
    if (honeypot !== "") {
      console.log("Bot detected via honeypot.");
      return;
    }

    // Bot protection: Captcha check
    if (!isVerified) return;

    setStatus("loading");
    setResult("INITIATING_SECURE_LINK...");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "721d8463-85a5-4ad7-83ff-f4e59173faf6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("ENCRYPTION_COMPLETE // PACKET_SENT");
        if (formRef.current) formRef.current.reset();
      } else {
        setStatus("error");
        setResult("SIGNAL_LOST // UPLOAD_FAILED");
      }
    } catch (err) {
      setStatus("error");
      setResult("CONNECTION_CRITICAL_ERROR");
    }
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8 md:py-20 lg:px-16 lg:py-24 relative overflow-hidden">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-[#1d6b6b]/30 bg-[#080d12]/80 p-6 shadow-[0_0_50px_rgba(29,107,107,0.1)] backdrop-blur-xl md:p-10 lg:p-16">
        
        {/* Animated Background Accents */}
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Cpu size={200} className="text-[#39ff14]" />
        </div>

        <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          
          {/* Left Column: The Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#39ff14]/30 bg-[#39ff14]/5 px-4 py-1.5 text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-[#39ff14] shadow-[0_0_15px_rgba(57,255,20,0.1)]">
                <motion.div 
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-1.5 h-1.5 rounded-full bg-[#39ff14]"
                />
                Establish Secure Link
              </div>
              <h1 className="text-4xl font-black leading-[1.1] text-[#f2f2f2] md:text-6xl uppercase tracking-tighter">
                Direct <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39ff14] to-[#00FFFF]">Transmission.</span>
              </h1>
              <p className="text-base leading-relaxed text-[#c9c9c9] md:text-lg max-w-xl">
                Ready to digitize your workflow? Send an encrypted packet below. 
                I respond within 24 hours of signal receipt.
              </p>
            </div>

            <form ref={formRef} onSubmit={onSubmit} className="space-y-6 relative">
              <AnimatePresence>
                {status === "success" && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 z-50 bg-[#080d12]/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 rounded-3xl border border-[#39ff14]/50"
                  >
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", bounce: 0.5 }}
                    >
                      <CheckCircle2 size={80} className="text-[#39ff14] mb-6 drop-shadow-[0_0_20px_rgba(57,255,20,0.5)]" />
                    </motion.div>
                    <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-widest mb-2">Transmission Successful</h2>
                    <p className="text-[#c9c9c9] font-mono text-sm tracking-wider uppercase mb-8">Packet delivered to secure node. Stand by for response.</p>
                    <button 
                      type="button"
                      onClick={() => { setStatus("idle"); generateChallenge(); }}
                      className="px-8 py-3 rounded-full border border-[#1d6b6b] text-[#39ff14] font-bold uppercase tracking-widest text-xs hover:bg-[#39ff14]/10 transition-all"
                    >
                      New Transmission
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Honeypot Field (Invisible to humans) */}
              <input 
                type="text" 
                style={{ display: "none" }} 
                value={honeypot} 
                onChange={(e) => setHoneypot(e.target.value)} 
                tabIndex={-1} 
                autoComplete="off"
              />

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2 group relative">
                  <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#39ff14]/60 ml-2">Sender_ID</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-[#0a1a1a]/80 border border-[#1d6b6b]/40 rounded-2xl px-5 py-4 text-[#f2f2f2] font-mono text-sm placeholder:text-zinc-700 focus:outline-none focus:border-[#39ff14]/60 focus:ring-1 focus:ring-[#39ff14]/30 transition-all"
                  />
                </div>
                <div className="space-y-2 group relative">
                  <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#39ff14]/60 ml-2">Protocol_Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@server.com"
                    className="w-full bg-[#0a1a1a]/80 border border-[#1d6b6b]/40 rounded-2xl px-5 py-4 text-[#f2f2f2] font-mono text-sm placeholder:text-zinc-700 focus:outline-none focus:border-[#39ff14]/60 focus:ring-1 focus:ring-[#39ff14]/30 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#39ff14]/60 ml-2">Payload_Data</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Describe your project goals..."
                  className="w-full bg-[#0a1a1a]/80 border border-[#1d6b6b]/40 rounded-3xl px-5 py-4 text-[#f2f2f2] font-mono text-sm placeholder:text-zinc-700 focus:outline-none focus:border-[#39ff14]/60 focus:ring-1 focus:ring-[#39ff14]/30 transition-all resize-none"
                />
              </div>

              {/* Neural Link Challenge (Anti-Bot) */}
              <div className="rounded-3xl border border-[#1d6b6b]/20 bg-[#0a1a1a]/40 p-6 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#00FFFF]">
                    <ShieldCheck size={14} /> Neural Link Challenge
                  </div>
                  <p className="text-xs text-[#c9c9c9] font-mono italic opacity-60">Solve to verify human biometric signature:</p>
                  <div className="text-xl font-black text-white font-mono tracking-[0.2em]">
                    {challenge.a} + {challenge.b} = ?
                  </div>
                </div>
                <div className="w-full md:w-32 relative group">
                  <input
                    type="number"
                    value={userAnswer}
                    onChange={handleCaptchaChange}
                    placeholder="Sum"
                    className={cn(
                      "w-full bg-black/50 border border-[#1d6b6b]/40 rounded-xl px-4 py-3 text-center text-lg font-mono text-white focus:outline-none transition-all",
                      isVerified ? "border-[#39ff14] text-[#39ff14] shadow-[0_0_15px_rgba(57,255,20,0.2)]" : userAnswer !== "" ? "border-red-500/50" : ""
                    )}
                  />
                  {isVerified && (
                    <motion.div 
                      initial={{ scale: 0 }} 
                      animate={{ scale: 1 }} 
                      className="absolute -top-2 -right-2 bg-[#39ff14] text-black rounded-full p-1 shadow-[0_0_10px_#39ff14]"
                    >
                      <CheckCircle2 size={12} strokeWidth={3} />
                    </motion.div>
                  )}
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6 pt-4">
                <button
                  type="submit"
                  disabled={!isVerified || status === "loading"}
                  className={cn(
                    "relative w-full md:w-auto overflow-hidden group px-10 py-4 rounded-full font-black uppercase tracking-[0.2em] text-sm transition-all duration-500",
                    isVerified && status !== "loading"
                      ? "bg-[#1d6b6b] text-white shadow-[0_0_30px_rgba(29,107,107,0.4)] hover:bg-[#1d8b6b] hover:shadow-[0_0_40px_rgba(57,255,20,0.3)] active:scale-95"
                      : "bg-[#252525] text-zinc-600 border border-zinc-800 cursor-not-allowed opacity-50"
                  )}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {status === "loading" ? (
                      <>
                        <Cpu className="animate-spin" size={18} />
                        TRANSMITTING...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Transmit Data
                      </>
                    )}
                  </span>
                  {isVerified && (
                    <motion.div 
                      className="absolute inset-0 bg-[#39ff14]/10 z-0"
                      animate={{ opacity: [0.1, 0.3, 0.1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    />
                  )}
                </button>

                {/* Status HUD */}
                <div className="flex-1 flex items-center gap-4 px-4 py-2 border-l border-[#39ff14]/10 overflow-hidden">
                  <div className="flex flex-col font-mono text-[9px] uppercase tracking-widest whitespace-nowrap">
                    <div className="text-[#39ff14]/40">Status_Report</div>
                    <div className={cn(
                      "transition-colors",
                      status === "error" ? "text-red-500" : "text-[#39ff14]"
                    )}>
                      {result || (isVerified ? "SECURE_LINK_STABLE" : "WAITING_FOR_SIGNATURE...")}
                    </div>
                  </div>
                  {status === "loading" && (
                    <div className="flex-1 h-1 bg-[#1d6b6b]/20 rounded-full overflow-hidden min-w-[60px]">
                      <motion.div 
                        className="h-full bg-[#39ff14]"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>

          {/* Right Column: Contact Cards */}
          <div className="grid gap-4 md:gap-6 self-start lg:sticky lg:top-32">
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#39ff14]/40 ml-1 mb-2">Alternative_Nodes</div>
            {contactCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                target={card.title === "Location" ? "_blank" : undefined}
                rel={card.title === "Location" ? "noreferrer" : undefined}
                className="group relative rounded-3xl border border-[#1d6b6b]/20 bg-[#0a1a1a]/40 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#39ff14]/40 hover:bg-[#39ff14]/5 overflow-hidden"
              >
                <div className="flex items-center gap-5 relative z-10">
                  <div className="rounded-2xl bg-[#1d6b6b]/20 p-4 text-[#1d6b6b] group-hover:text-[#39ff14] group-hover:scale-110 transition-all duration-500 shadow-[0_0_15px_rgba(29,107,107,0.1)]">
                    <card.icon className="size-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#39ff14]/40">{card.title}</p>
                    <p className="mt-1 text-sm font-bold text-[#f2f2f2] md:text-base tracking-tight">{card.value}</p>
                  </div>
                </div>
                {/* Subtle scanner sweep on hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#39ff14]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"
                />
              </a>
            ))}

            <div className="mt-8 rounded-3xl border border-red-500/20 bg-red-500/5 p-6 space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-red-500 font-bold">
                <ShieldAlert size={14} /> Security Advisory
              </div>
              <p className="text-xs leading-relaxed text-[#c9c9c9] opacity-70 italic">
                All transmissions are log-monitored. Unauthorized intrusion attempts or spam packets will trigger immediate node-level IP blacklisting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
