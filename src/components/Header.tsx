import React from "react";
import { Language, TRANSLATIONS } from "../data/translations";
import { Terminal, Globe, ExternalLink, Mail } from "lucide-react";
import { LinkedinIcon } from "./icons";

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onRequestDemo: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  onRequestDemo,
}) => {
  const t = TRANSLATIONS[currentLang];
  const isRtl = currentLang === "ar";

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#070a11]/90 border-b border-slate-800/80 transition-all shadow-xl shadow-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <div className="flex items-center gap-3.5 min-w-0">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-500 via-brand-600 to-sahara-600 flex items-center justify-center shadow-lg shadow-brand-500/25 text-white font-extrabold text-lg tracking-wider shrink-0 ring-1 ring-white/20">
            WKL
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-extrabold text-base sm:text-lg text-white tracking-tight">
                WAKALATASFAR
              </span>
              <span className="font-arabic text-sm text-sahara-400 font-bold" dir="rtl">
                وكالات أسفار
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                v2.1 Enterprise
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-400 font-medium truncate hidden md:block">
              {currentLang === "ar"
                ? "دراسة معمارية تقنية • محرك الحجز السياحي الجزائري عالي التزامن"
                : currentLang === "fr"
                ? "Architecture Showcase • Moteur de Réservation Touristique Haute-Concurrence"
                : "Architecture Showcase • High-Concurrency Algerian Travel Booking Engine"}
            </p>
          </div>
        </div>

        {/* Center / Right Links & Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
          {/* Live Platform Badge Link */}
          <a
            href="https://saoula.tech"
            target="_blank"
            rel="noopener noreferrer"
            title="Try Live Production on saoula.tech"
            className="hidden lg:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold transition hover:scale-[1.02] shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono">saoula.tech</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* LinkedIn Icon Link */}
          <a
            href="https://www.linkedin.com/in/a-y-saoula-12968827b/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile: A.Y. Saoula"
            className="w-9 h-9 rounded-xl bg-slate-900/80 hover:bg-blue-600/20 border border-slate-800 hover:border-blue-500/50 text-slate-300 hover:text-blue-400 flex items-center justify-center transition"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          {/* Email Mailto Link */}
          <a
            href="mailto:a.y.saoula@gmail.com"
            title="Direct Email: a.y.saoula@gmail.com"
            className="w-9 h-9 rounded-xl bg-slate-900/80 hover:bg-sahara-500/20 border border-slate-800 hover:border-sahara-500/50 text-slate-300 hover:text-sahara-400 flex items-center justify-center transition"
          >
            <Mail className="w-4 h-4" />
          </a>

          {/* Language Switcher Segmented Control */}
          <div className="flex items-center bg-slate-900/90 border border-slate-800 rounded-xl p-1 text-xs shadow-inner">
            <Globe className="w-3.5 h-3.5 text-slate-400 ml-1.5 mr-1 hidden sm:inline" />
            <button
              onClick={() => onLanguageChange("fr")}
              className={`px-2.5 py-1 rounded-lg font-medium transition text-xs ${
                currentLang === "fr"
                  ? "bg-brand-500 text-white shadow-md shadow-brand-500/25 font-bold"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => onLanguageChange("en")}
              className={`px-2.5 py-1 rounded-lg font-medium transition text-xs ${
                currentLang === "en"
                  ? "bg-brand-500 text-white shadow-md shadow-brand-500/25 font-bold"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange("ar")}
              className={`px-2.5 py-1 rounded-lg font-medium transition text-xs font-arabic ${
                currentLang === "ar"
                  ? "bg-brand-500 text-white shadow-md shadow-brand-500/25 font-bold"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              العربية
            </button>
          </div>

          {/* Request Demo / Contact Modal Button */}
          <button
            onClick={onRequestDemo}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white text-xs font-bold rounded-xl shadow-lg shadow-brand-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>{t.contactCtaBtn}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
