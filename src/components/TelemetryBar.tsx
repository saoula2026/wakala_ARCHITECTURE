import React from "react";
import { Language, TRANSLATIONS } from "../data/translations";
import { GET_TELEMETRY_METRICS } from "../data/telemetry";
import { CheckCircle2, Zap, ShieldCheck, Activity } from "lucide-react";

interface TelemetryBarProps {
  lang?: Language;
}

export const TelemetryBar: React.FC<TelemetryBarProps> = ({ lang = "fr" }) => {
  const t = TRANSLATIONS[lang];
  const metrics = GET_TELEMETRY_METRICS(lang);

  return (
    <section className="w-full bg-[#0a0f1d]/80 border-y border-slate-800/80 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
            <Activity className="w-3.5 h-3.5 text-brand-400 animate-pulse" />
            <span className="font-bold text-slate-300">{t.telemetryHeading}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-semibold">{t.telemetryStatus}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between hover:border-slate-700 hover:shadow-lg hover:shadow-brand-500/5 transition group"
            >
              <div className="flex items-center justify-between gap-1 mb-2">
                <span className="text-[11px] font-semibold text-slate-400 truncate">
                  {metric.label}
                </span>
                {metric.status === "verified" ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                ) : metric.status === "compliant" ? (
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                ) : (
                  <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                )}
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold font-mono text-white tracking-tight group-hover:text-brand-300 transition">
                  {metric.value}
                </div>
                <div className="text-[10px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {metric.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
