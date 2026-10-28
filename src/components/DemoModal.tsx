import React, { useState } from "react";
import { X, Send, CheckCircle2, ExternalLink, Sparkles } from "lucide-react";
import { Language, TRANSLATIONS } from "../data/translations";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, lang }) => {
  const t = TRANSLATIONS[lang];
  const isRtl = lang === "ar";
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "CTO / Lead Architect",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn ${
        isRtl ? "text-right" : "text-left"
      }`}
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rtl:right-auto rtl:left-5 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/10">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white">{t.modalSuccessTitle}</h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              {t.modalSuccessDesc}
            </p>

            {/* Direct Link to Live Platform */}
            <div className="pt-2">
              <a
                href="https://saoula.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.tryLiveBtn}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-3 px-6 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition"
            >
              {t.closeBtn}
            </button>
          </div>
        ) : (
          <div>
            <div className="space-y-1.5 mb-6 pr-8 rtl:pr-0 rtl:pl-8">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 text-[10px] font-mono font-semibold">
                <span>Direct Architect Contact</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">{t.modalTitle}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{t.modalDesc}</p>
            </div>

            {/* Quick Live Link Callout */}
            <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-800/40 mb-5 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-emerald-300">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{lang === "ar" ? "أو جرّب المنصة الحية مباشرة دون انتظار :" : lang === "fr" ? "Ou testez la plateforme directement en direct :" : "Or test live staging immediately:"}</span>
              </div>
              <a
                href="https://saoula.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] shrink-0 transition flex items-center gap-1.5"
              >
                <span>saoula.tech</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">{t.nameLabel}</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Yacine Brahimi (Staff Engineer)"
                  className="w-full px-3.5 py-2.5 bg-slate-950 rounded-xl text-xs text-white border border-slate-800 focus:outline-none focus:border-brand-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">{t.emailLabel}</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="yacine@company.com"
                  className="w-full px-3.5 py-2.5 bg-slate-950 rounded-xl text-xs text-white border border-slate-800 focus:outline-none focus:border-brand-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">{t.roleLabel}</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 rounded-xl text-xs text-white border border-slate-800 focus:outline-none focus:border-brand-500 transition"
                >
                  <option value="CTO / VP Engineering">CTO / VP Engineering</option>
                  <option value="Lead Software Architect">Lead Software Architect</option>
                  <option value="Technical Recruiter / Talent Lead">Technical Recruiter / Talent Lead</option>
                  <option value="Travel Agency Owner / Executive">Travel Agency Owner / Executive</option>
                  <option value="Corporate Committee (COS) Director">Corporate Committee (COS) Director</option>
                </select>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-medium transition"
                >
                  {t.closeBtn}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white rounded-xl text-xs font-bold shadow-lg shadow-brand-500/20 transition flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t.submitBtn}</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
