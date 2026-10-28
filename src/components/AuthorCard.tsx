import React from "react";
import { Language, TRANSLATIONS } from "../data/translations";
import { ExternalLink, Mail, ShieldCheck, Terminal, Award, Sparkles } from "lucide-react";
import { LinkedinIcon } from "./icons";

interface AuthorCardProps {
  currentLang: Language;
}

export const AuthorCard: React.FC<AuthorCardProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const isRtl = currentLang === "ar";

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/90 via-[#0d1424]/90 to-slate-950/90 border border-slate-800 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
      {/* Decorative ambient lights */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sahara-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        {/* Author Bio & Identity */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-500/15 text-brand-300 border border-brand-500/30">
              <Award className="w-3.5 h-3.5" />
              <span>{t.architectBadge}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Consulting / Architecture Review</span>
            </span>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <span>{t.authorName}</span>
            </h3>
            <p className="text-sm sm:text-base font-semibold text-brand-400 mt-1">
              {t.authorRole}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
            {t.authorBio}
          </p>

          {/* Key Invariant Credential Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px]">
            <span className="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300">
              ⚡ 238/238 PHPUnit MySQL 8
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300">
              🛡️ 3,558 Assertions
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300">
              🚀 5,000 req/s Redis Lua
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300">
              💳 SATIM 3020 Compliant
            </span>
          </div>
        </div>

        {/* Action Connect Buttons */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0 pt-2 lg:pt-0">
          {/* Live Platform Link */}
          <a
            href="https://saoula.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] group"
          >
            <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span>{t.tryLiveBtn}</span>
            <ExternalLink className="w-4 h-4 ml-0.5 opacity-80" />
          </a>

          {/* LinkedIn Profile Link */}
          <a
            href="https://www.linkedin.com/in/a-y-saoula-12968827b/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-2xl bg-slate-900/90 hover:bg-blue-600/20 text-slate-200 hover:text-blue-300 border border-slate-700/80 hover:border-blue-500/50 font-semibold text-xs sm:text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <LinkedinIcon className="w-4 h-4 text-blue-400" />
            <span>{t.connectLinkedinLabel}</span>
          </a>

          {/* Email Mailto Link */}
          <a
            href="mailto:a.y.saoula@gmail.com"
            className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-2xl bg-slate-900/90 hover:bg-sahara-500/20 text-slate-200 hover:text-sahara-300 border border-slate-700/80 hover:border-sahara-500/50 font-semibold text-xs sm:text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Mail className="w-4 h-4 text-sahara-400" />
            <span>{t.sendEmailLabel}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
