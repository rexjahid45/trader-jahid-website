"use client";
import React, { useState } from "react";
import {
  Upload,
  BarChart3,
  Brain,
  ShieldCheck,
  Zap,
  Camera,
  Send,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Lock,
  Crown,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Camera,
    title: "Chart Screenshot Upload",
    text: "Phone বা PC থেকে chart screenshot upload করো।",
  },
  {
    icon: Brain,
    title: "AI Chart Analysis",
    text: "AI trend, support/resistance এবং candle pattern detect করবে।",
  },
  {
    icon: Zap,
    title: "CALL / PUT Signal",
    text: "Confidence score সহ smart signal দেখাবে।",
  },
  {
    icon: Send,
    title: "Telegram Alert",
    text: "Premium user দের জন্য Telegram alert support।",
  },
];

const results = [
  {
    label: "Trend",
    value: "Bullish 📈",
    icon: TrendingUp,
  },
  {
    label: "Signal",
    value: "CALL ✅",
    icon: CheckCircle2,
  },
  {
    label: "Confidence",
    value: "82%",
    icon: Brain,
  },
  {
    label: "Risk",
    value: "Medium",
    icon: AlertTriangle,
  },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    text: "Daily 5 scans",
    perks: ["5 scans/day", "Basic AI", "Signal result"],
  },
  {
    name: "Pro",
    price: "$9",
    text: "Unlimited chart analysis",
    perks: ["Unlimited scans", "Confidence score", "Pattern detection"],
    popular: true,
  },
  {
    name: "VIP",
    price: "$29",
    text: "Advanced AI trading system",
    perks: ["Telegram alerts", "Priority scans", "VIP dashboard"],
  },
];

export default function TraderJahidOfficialAI() {
  const [uploaded, setUploaded] = useState(false);

  return (
    <div className="min-h-screen bg-[#070A12] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1e7cff33,transparent_35%),radial-gradient(circle_at_top_left,#00ffae22,transparent_30%)]" />

      <nav className="relative z-10 max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-cyan-400/15 border border-cyan-300/20 flex items-center justify-center">
            <BarChart3 className="text-cyan-300" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Trader Jahid Official AI</h1>
            <p className="text-xs text-slate-400">AI trading chart screenshot analyzer</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#features">Features</a>
          <a href="#demo">Demo</a>
          <a href="#pricing">Pricing</a>
        </div>
        <button className="px-5 py-3 rounded-2xl bg-white text-black font-semibold shadow-lg shadow-cyan-500/10">Start Scan</button>
      </nav>

      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-cyan-200 mb-6">
            <ShieldCheck size={16} /> Binary & forex chart assistant
          </div>
          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            Upload Chart. <br /> Get AI Signal.
          </h2>
          <p className="text-slate-300 text-lg mt-6 max-w-xl">
            Phone থেকে chart screenshot upload করো। AI trend, support/resistance, candle pattern দেখে বাংলায় clear analysis দিবে।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="px-7 py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:bg-cyan-300 transition">Analyze Screenshot</button>
            <button className="px-7 py-4 rounded-2xl bg-white/5 border border-white/10 font-bold hover:bg-white/10 transition">Watch Demo</button>
          </div>
          <p className="text-xs text-slate-500 mt-5">Educational analysis only. No guaranteed profit.</p>
        </motion.div>

        <motion.div id="demo" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/5 border border-white/10 rounded-[2rem] p-5 shadow-2xl shadow-cyan-900/20 backdrop-blur">
          <div className="rounded-[1.5rem] bg-[#0B1020] border border-white/10 p-5">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-xl">AI Scanner</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-300">Live Demo</span>
            </div>

            <label className="h-56 border-2 border-dashed border-cyan-300/30 rounded-3xl bg-cyan-300/5 flex flex-col items-center justify-center cursor-pointer hover:bg-cyan-300/10 transition">
              <Upload className="text-cyan-300 mb-3" size={42} />
              <p className="font-semibold">Drop chart screenshot here</p>
              <p className="text-sm text-slate-400">PNG, JPG, JPEG supported</p>
              <input type="file" className="hidden" onChange={() => setUploaded(true)} />
            </label>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {results.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                    <Icon className="text-cyan-300 mb-3" size={20} />
                    <p className="text-xs text-slate-400">{item.label}</p>
                    <p className="font-bold text-lg">{uploaded ? item.value : "Waiting..."}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 rounded-2xl bg-black/30 border border-white/10 p-4">
              <p className="text-sm text-slate-400 mb-2">AI Reason</p>
              <p className="text-sm leading-6 text-slate-200">
                {uploaded ? "Price support zone থেকে bounce করছে। EMA momentum bullish এবং last candle strong close দিয়েছে। Entry নেওয়ার আগে next candle confirmation দেখো।" : "Upload দিলে এখানে Bangla analysis show করবে।"}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="features" className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black">Powerful Features</h2>
          <p className="text-slate-400 mt-3">Trading content creator + signal community এর জন্য perfect SaaS idea.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="rounded-3xl bg-white/5 border border-white/10 p-6 hover:bg-white/[0.08] transition">
                <Icon className="text-cyan-300 mb-5" size={30} />
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-6">{f.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-8 items-center">
        <div className="rounded-[2rem] bg-gradient-to-br from-cyan-400/15 to-emerald-400/10 border border-cyan-300/20 p-8">
          <h2 className="text-4xl font-black mb-5">Result Dashboard</h2>
          <div className="space-y-4">
            {[
              ["Entry Zone", "1.0840 - 1.0843"],
              ["Support", "1.0828"],
              ["Resistance", "1.0875"],
              ["Best Expiry", "1-3 minutes"],
            ].map(([a, b]) => (
              <div key={a} className="flex justify-between rounded-2xl bg-black/25 border border-white/10 p-4">
                <span className="text-slate-400">{a}</span>
                <span className="font-bold">{b}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-8">
          <h2 className="text-4xl font-black">Why people will use it?</h2>
          <p className="text-slate-300 mt-5 leading-7">
            New trader chart বুঝে না। Screenshot upload দিলে instant explanation পাবে। তোর YouTube/TikTok audience easily free scan try করবে, পরে premium plan নিতে পারে।
          </p>
          <div className="mt-6 flex gap-3 flex-wrap">
            {['Bangla analysis', 'Fast scan', 'Premium signal', 'Mobile friendly'].map(x => <span key={x} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">{x}</span>)}
          </div>
        </div>
      </section>

      <section id="pricing" className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black">Pricing</h2>
          <p className="text-slate-400 mt-3">Free থেকে শুরু, premium দিয়ে revenue.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-[2rem] p-7 border ${p.popular ? 'bg-cyan-400 text-black border-cyan-300 shadow-2xl shadow-cyan-500/20' : 'bg-white/5 border-white/10'}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black">{p.name}</h3>
                {p.popular && <Crown />}
              </div>
              <p className="text-5xl font-black mt-5">{p.price}<span className="text-base font-semibold">/mo</span></p>
              <p className={`mt-3 ${p.popular ? 'text-black/70' : 'text-slate-400'}`}>{p.text}</p>
              <div className="mt-6 space-y-3">
                {p.perks.map((perk) => (
                  <div key={perk} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 size={17} /> {perk}
                  </div>
                ))}
              </div>
              <button className={`w-full mt-7 py-4 rounded-2xl font-bold ${p.popular ? 'bg-black text-white' : 'bg-white text-black'}`}>Choose Plan</button>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 max-w-7xl mx-auto px-6 py-10 border-t border-white/10 text-center text-slate-500 text-sm">
        <Lock className="mx-auto mb-3" size={18} />
        © 2026 Trader Jahid Official AI. Educational chart analysis platform.
      </footer>
    </div>
  );
}
