'use client';

import React from 'react';
import {
  Activity,
  HeartPulse,
  Globe,
  AlertTriangle,
  ShieldCheck,
  Zap,
  Users,
  BarChart3,
  ChevronRight,
} from 'lucide-react';

export default function LandingPage() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* ================= HEADER ================= */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-900/95 backdrop-blur border-b border-slate-800'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <HeartPulse className="h-8 w-8 text-rose-500 animate-pulse" />
              <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-slate-900" />
            </div>
            <span className="text-2xl font-black tracking-tight text-white">CuraSignal AI</span>
          </div>
          <a
            href="/app"
            className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-sm font-semibold transition"
          >
            Launch App
          </a>
        </div>
      </header>

      {/* ================= VISION & MISSION HERO ================= */}
      <section className="px-4 py-8 md:py-12 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">CuraSignal AI</h1>
          <p className="text-rose-400 font-semibold text-sm mt-2">Companion Persona: CuraMitra</p>
          <p className="text-slate-300 text-base md:text-lg font-medium mt-3">
            Continuous Oncology Vigilance & Clinical Trial Triage
          </p>

          <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 hover:border-cyan-700/50 transition text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Globe className="h-3.5 w-3.5" /> Our Vision
              </span>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                To eliminate preventable oncology treatment dropouts and toxicities by connecting every patient to
                real-time clinical trial intelligence.
              </p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 hover:border-rose-700/50 transition text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5" /> Our Mission
              </span>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                To empower clinical trial sites and rural oncology patients with vernacular AI triage, automated adverse
                event intercept, and continuous pharmacovigilance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HERO ================= */}
      <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Clinical Trial Triage,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600">
              Reimagined
            </span>
          </h2>
          <p className="text-slate-300 text-lg md:text-xl font-medium mt-6 leading-relaxed">
            Continuous oncology vigilance with AI-powered symptom detection, multilingual patient engagement,
            and real-time adverse event interception for clinical trial sites worldwide.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/app"
              className="px-8 py-3 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-semibold flex items-center gap-2 transition shadow-lg"
            >
              Enter App <ChevronRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="px-8 py-3 rounded-lg border border-slate-700 hover:border-slate-600 text-white font-semibold transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="px-4 py-16 md:py-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white text-center mb-4">Core Capabilities</h2>
          <p className="text-slate-400 text-center mb-12 text-lg">
            Designed for oncology, built for scale
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: HeartPulse,
                title: 'Real-Time Symptom Monitoring',
                desc: 'Voice-enabled symptom logging with multilingual support (English, हिंदी, मराठी)',
              },
              {
                icon: AlertTriangle,
                title: 'Automated Adverse Event Intercept',
                desc: 'CTCAE v5.0 grading with emergency triage triggers (e.g., Febrile Neutropenia detection)',
              },
              {
                icon: ShieldCheck,
                title: 'Pharmacovigilance Engine',
                desc: 'Real-time drug-drug interaction checks, herbal/AYUSH concomitant medication tracking',
              },
              {
                icon: Activity,
                title: 'Patient Telemetry Dashboard',
                desc: 'ECOG status, vitals, pain scales, fall risk, biomarker tracking at a glance',
              },
              {
                icon: Users,
                title: 'Site Investigator Command Center',
                desc: 'KPI metrics, patient roster, SAE dossiers, rural ASHA compliance sync',
              },
              {
                icon: BarChart3,
                title: 'Trial Intelligence Analytics',
                desc: 'Enrollment tracking, AE trends, protocol adherence, real-time safety reporting',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-rose-600/30 hover:bg-slate-800/70 transition"
                >
                  <Icon className="h-8 w-8 text-rose-500 mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= PERSONAS ================= */}
      <section className="px-4 py-16 md:py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white text-center mb-4">Designed for Two Personas</h2>
          <p className="text-slate-400 text-center mb-12 text-lg">One platform, two powerful perspectives</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Patient Companion */}
            <div className="bg-gradient-to-br from-rose-950/40 to-slate-900/40 border border-rose-700/40 rounded-2xl p-8 hover:border-rose-600/60 transition">
              <div className="h-12 w-12 rounded-lg bg-rose-600/20 border border-rose-600/50 flex items-center justify-center mb-4">
                <HeartPulse className="h-6 w-6 text-rose-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">CuraMitra</h3>
              <p className="text-sm text-rose-300 mb-4 font-semibold">Patient Companion</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                An AI friend for every patient in the trial. Speak or type symptoms in your language. Get real-time
                severity assessment and instant guidance when things go wrong.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500" /> Multilingual voice input
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500" /> Photo-based lesion assessment
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500" /> Emergency alert routing
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500" /> Daily symptom quick-chips
                </li>
              </ul>
            </div>

            {/* Investigator Dashboard */}
            <div className="bg-gradient-to-br from-cyan-950/40 to-slate-900/40 border border-cyan-700/40 rounded-2xl p-8 hover:border-cyan-600/60 transition">
              <div className="h-12 w-12 rounded-lg bg-cyan-600/20 border border-cyan-600/50 flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-cyan-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Command Center</h3>
              <p className="text-sm text-cyan-300 mb-4 font-semibold">Site Investigator & CRC Dashboard</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Full visibility into your trial at a glance. Monitor all enrolled subjects, triage by CTCAE severity,
                flag drug interactions, and generate SAE reports instantly.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" /> Live trial KPI metrics
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" /> CTCAE-sorted patient roster
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" /> Pharmacovigilance alerts
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" /> SAE dossier generation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="px-4 py-16 md:py-24 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-4">Enterprise-Grade</h2>
          <p className="text-slate-400 mb-8 text-lg">Built with modern tech, ready for scale</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Next.js 14', desc: 'React framework' },
              { name: 'TypeScript', desc: 'Type safety' },
              { name: 'Tailwind CSS', desc: 'Styling' },
              { name: 'Lucide Icons', desc: 'UI icons' },
            ].map((tech, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-slate-600 transition">
                <p className="font-bold text-white text-sm">{tech.name}</p>
                <p className="text-xs text-slate-400 mt-1">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-4">Ready to Transform Trial Care?</h2>
          <p className="text-slate-400 mb-8 text-lg">
            Experience the future of oncology clinical trial monitoring.
          </p>
          <a
            href="/app"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white font-bold text-lg transition shadow-lg"
          >
            Launch CuraSignal AI <ChevronRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="px-4 py-8 border-t border-slate-800 bg-slate-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-sm">
          <div>
            <p className="font-bold text-white mb-2">Product</p>
            <ul className="space-y-1 text-slate-400 text-xs">
              <li>
                <a href="/app" className="hover:text-white transition">
                  App
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Docs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white mb-2">Company</p>
            <ul className="space-y-1 text-slate-400 text-xs">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white mb-2">Legal</p>
            <ul className="space-y-1 text-slate-400 text-xs">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white mb-2">Support</p>
            <ul className="space-y-1 text-slate-400 text-xs">
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Status
                </a>
              </li>
              <li>
                <a href="tel:112" className="hover:text-white transition">
                  Emergency: 112
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400">
          <p>&copy; 2024 CuraSignal AI. All rights reserved.</p>
          <p>
            <strong className="text-white">CuraSignal AI</strong> — Continuous Oncology Vigilance & Clinical Trial
            Triage
          </p>
        </div>
      </footer>
    </div>
  );
}
