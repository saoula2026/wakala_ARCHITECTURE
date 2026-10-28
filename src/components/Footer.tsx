import React from "react";
import { Language, TRANSLATIONS } from "../data/translations";
import { ShieldCheck, Lock, ExternalLink, Mail, Sparkles, Terminal } from "lucide-react";
import { LinkedinIcon } from "./icons";

interface FooterProps {
  lang: Language;
  onRequestDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onRequestDemo }) => {
  const t = TRANSLATIONS[lang];
  const isRtl = lang === "ar";

  return (
    <footer className="w-full bg-[#050810] border-t border-slate-800/80 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Call to Action Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-[#0d1527] to-slate-900 border border-slate-800/90 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-brand-500/15 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-sahara-500/10 blur-3xl pointer-events-none"></div>

          <div className="space-y-2 max-w-xl text-center md:text-left rtl:md:text-right relative z-10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-brand-400 font-bold px-2.5 py-1 rounded bg-brand-500/10 border border-brand-500/20 inline-block">
              {lang === "ar" ? "جاهزية الإنتاج والتجربة الحية" : lang === "fr" ? "Environnement Staging Live" : "Live Production Staging"}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {t.contactCtaTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.contactCtaSubtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10">
            <a
              href="https://saoula.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-500/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.ctaBannerAction}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onRequestDemo}
              className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-bold text-xs rounded-xl shadow-md transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Terminal className="w-3.5 h-3.5 text-brand-400" />
              <span>{t.contactCtaBtn}</span>
            </button>
          </div>
        </div>

        {/* Middle Architecture Stack & Accreditations */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs text-slate-400 pt-4">
          {/* Creator & Agency Column */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-500 to-sahara-600 flex items-center justify-center font-bold text-white text-xs shadow-md">
                WKL
              </div>
              <div>
                <span className="font-extrabold text-white text-sm">WAKALATASFAR</span>
                <span className="text-[10px] text-sahara-400 block font-arabic" dir="rtl">وكالات أسفار</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              {t.footerTagline}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://saoula.tech"
                target="_blank"
                rel="noopener noreferrer"
                title="saoula.tech"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 hover:text-emerald-300 hover:border-emerald-500/40 transition"
              >
                <Sparkles className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/a-y-saoula-12968827b/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-blue-400 hover:text-blue-300 hover:border-blue-500/40 transition"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:a.y.saoula@gmail.com"
                title="Email"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 hover:text-amber-300 hover:border-amber-500/40 transition"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Stack Column */}
          <div className="space-y-2">
            <span className="font-mono text-white text-[11px] uppercase tracking-wider block font-bold">
              {t.footerStackHeading}
            </span>
            <ul className="space-y-1.5 text-[11px] text-slate-300">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
                <span>Next.js 14 App Router (Edge SSR)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
                <span>Laravel 11 (Hexagonal Core)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
                <span>Redis 7 (Atomic Lua Ephemeral Holds)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
                <span>MySQL 8 (Hierarchical InnoDB Locks)</span>
              </li>
            </ul>
          </div>

          {/* Algerian Compliance Column */}
          <div className="space-y-2">
            <span className="font-mono text-white text-[11px] uppercase tracking-wider block font-bold">
              {t.footerRegulationsHeading}
            </span>
            <ul className="space-y-1.5 text-[11px] text-slate-300">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>MCTA Accreditation N° 2024/0842</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>SATIM 3020 Banking Standard</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Law 18-07 Personal Data Protection</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>GIE Monétique Card Brand Rules</span>
              </li>
            </ul>
          </div>

          {/* OPSEC Column */}
          <div className="space-y-2">
            <span className="font-mono text-white text-[11px] uppercase tracking-wider block font-bold flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.footerOpsecHeading}</span>
            </span>
            <p className="text-[11px] leading-relaxed text-slate-400 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
              {t.sanitizedNotice}
            </p>
          </div>
        </div>

        {/* Bottom Copyright & Telemetry Seal */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="font-mono">{t.copyrightText}</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 font-mono text-[11px]">
            <a href="https://saoula.tech" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
              saoula.tech
            </a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/a-y-saoula-12968827b/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              LinkedIn
            </a>
            <span>•</span>
            <a href="mailto:a.y.saoula@gmail.com" className="hover:text-amber-400 transition">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
