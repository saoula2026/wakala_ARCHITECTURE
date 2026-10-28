import React, { useState, useMemo } from "react";
import { Language, TRANSLATIONS } from "../data/translations";
import { GET_ADR_RECORDS, ADRItem } from "../data/adrs";
import { ChevronDown, CheckCircle2, Filter, Search, Layers } from "lucide-react";

interface AdrAccordionProps {
  lang?: Language;
}

export const AdrAccordion: React.FC<AdrAccordionProps> = ({ lang = "fr" }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedId, setExpandedId] = useState<string | null>("ADR-003");

  const t = TRANSLATIONS[lang];
  const isRtl = lang === "ar";
  const adrList = useMemo(() => GET_ADR_RECORDS(lang), [lang]);

  const categories = [
    { key: "All", label: t.allCategory },
    { key: "Concurrency", label: lang === "ar" ? "التزامن والتسعير" : lang === "fr" ? "Concurrence" : "Concurrency" },
    { key: "Payment", label: lang === "ar" ? "المدفوعات والبنوك" : lang === "fr" ? "Paiement" : "Payment" },
    { key: "Security", label: lang === "ar" ? "الأمن والسرية" : lang === "fr" ? "Sécurité" : "Security" },
    { key: "Performance", label: lang === "ar" ? "الأداء والذاكرة" : lang === "fr" ? "Performance" : "Performance" },
    { key: "White-Label", label: lang === "ar" ? "التخصيص والـ B2B" : lang === "fr" ? "White-Label" : "White-Label" },
  ];

  const filteredADRs = useMemo(() => {
    return adrList.filter((item: ADRItem) => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.decision.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.context.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [adrList, selectedCategory, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Category Filter Pills & Search Input */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
        {/* Categories */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
            <Filter className="w-3.5 h-3.5 text-brand-400" />
            <span className="hidden sm:inline">Category:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                selectedCategory === cat.key
                  ? "bg-brand-500 text-white shadow-md shadow-brand-500/20"
                  : "bg-slate-950/80 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[220px]">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none rtl:left-auto rtl:right-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={lang === "ar" ? "ابحث في ADRs..." : lang === "fr" ? "Rechercher un ADR..." : "Search ADRs..."}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 rtl:pl-3 rtl:pr-9 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-500 transition"
          />
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 font-mono px-1">
        <span>
          {filteredADRs.length} {t.recordsCount}
        </span>
        <span className="text-[11px] text-emerald-400">
          ✓ {lang === "ar" ? "جميع القرارات معتمدة ومطبقة في الكود" : lang === "fr" ? "Tous les ADRs sont appliqués et testés" : "All ADRs verified in code"}
        </span>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredADRs.map((adr: ADRItem) => {
          const isExpanded = expandedId === adr.id;

          return (
            <div
              key={adr.id}
              className={`rounded-2xl border transition-all overflow-hidden ${
                isExpanded
                  ? "bg-slate-900/90 border-brand-500/40 shadow-xl shadow-brand-500/5 ring-1 ring-brand-500/20"
                  : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40"
              }`}
            >
              <button
                onClick={() => setExpandedId(isExpanded ? null : adr.id)}
                className="w-full px-5 py-4 flex items-center justify-between text-left rtl:text-right gap-4 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-brand-500/10 text-brand-400 border border-brand-500/25 shrink-0">
                    {adr.id}
                  </span>
                  <span className="font-bold text-xs sm:text-sm text-white group-hover:text-brand-300 transition truncate">
                    {adr.title}
                  </span>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 hidden md:inline-block">
                    {adr.categoryLabel || adr.category}
                  </span>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{adr.status}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      isExpanded ? "rotate-180 text-brand-400" : ""
                    }`}
                  />
                </div>
              </button>

              {isExpanded && (
                <div className="px-5 pb-5 pt-2 border-t border-slate-800/80 space-y-4 text-xs leading-relaxed animate-fadeIn">
                  <div>
                    <span className="font-bold text-slate-400 block mb-1 uppercase tracking-wider text-[10px] font-mono">
                      {t.contextLabel}
                    </span>
                    <p className="text-slate-300 bg-slate-950/40 p-3 rounded-xl border border-slate-800/60">
                      {adr.context}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-brand-400 block mb-1 uppercase tracking-wider text-[10px] font-mono">
                      {t.decisionLabel}
                    </span>
                    <p className="text-white font-medium bg-brand-950/30 p-3.5 rounded-xl border border-brand-500/30 font-mono text-[11px] leading-relaxed">
                      {adr.decision}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-emerald-400 block mb-1 uppercase tracking-wider text-[10px] font-mono">
                      {t.consequencesLabel}
                    </span>
                    <p className="text-emerald-300/90 bg-emerald-950/20 p-3 rounded-xl border border-emerald-800/40">
                      {adr.consequences}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
