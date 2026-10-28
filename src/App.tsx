import React, { useState } from "react";
import { Header } from "./components/Header";
import { AuthorCard } from "./components/AuthorCard";
import { TelemetryBar } from "./components/TelemetryBar";
import { DiagramViewer } from "./components/DiagramViewer";
import { ScreenshotLightbox } from "./components/ScreenshotLightbox";
import { AdrAccordion } from "./components/AdrAccordion";
import { DemoModal } from "./components/DemoModal";
import { Footer } from "./components/Footer";
import { GET_PILLARS_DATA, PillarData } from "./data/pillars";
import { Language, TRANSLATIONS } from "./data/translations";
import {
  Layers,
  Sparkles,
  CheckCircle,
  Image as ImageIcon,
  Code2,
  ChevronRight,
  ExternalLink,
  FileCode,
  ShieldAlert,
} from "lucide-react";

export function App() {
  const [currentLang, setCurrentLang] = useState<Language>("fr");
  const [activePillarId, setActivePillarId] = useState<string>("concurrency");
  const [activeSubTab, setActiveSubTab] = useState<"diagram" | "specs" | "screenshots" | "code">("diagram");
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const t = TRANSLATIONS[currentLang];
  const isRtl = currentLang === "ar";

  const pillarsList = GET_PILLARS_DATA(currentLang);
  const activePillar: PillarData =
    pillarsList.find((p: PillarData) => p.id === activePillarId) || pillarsList[0];

  return (
    <div
      className={`min-h-screen bg-[#070a12] text-slate-100 flex flex-col ${
        isRtl ? "font-arabic text-right" : "font-sans text-left"
      }`}
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* 1. Executive Telemetry Header */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onRequestDemo={() => setDemoModalOpen(true)}
      />

      {/* 2. Hero Section & Technical Positioning */}
      <section className="relative pt-16 pb-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 overflow-hidden">
        {/* Glow ambient background lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/10 blur-[140px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-sahara-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-8">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-brand-300 shadow-md">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-ping"></span>
            <span>{t.heroBadge}</span>
          </div>

          {/* Hero Titles */}
          <div className="space-y-4 max-w-5xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {t.heroTitle}
            </h1>
            <p className="text-lg sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-slate-200 to-sahara-300 font-bold leading-snug">
              {t.heroSubtitle}
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2 max-w-4xl">
              {t.executiveSummary}
            </p>
          </div>

          {/* Hero Action CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* Live Testing on saoula.tech */}
            <a
              href="https://saoula.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 shadow-xl shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.tryLiveBtn}</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>

            {/* Explore Pillars */}
            <button
              onClick={() => {
                const el = document.getElementById("pillars-section");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-5 py-3 bg-brand-600 hover:bg-brand-500 text-white rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 shadow-lg shadow-brand-500/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{t.explorePillarsBtn}</span>
              <ChevronRight className="w-4 h-4 rtl:rotate-180" />
            </button>

            {/* ADR Records */}
            <button
              onClick={() => {
                const el = document.getElementById("adr-section");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-5 py-3 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 rounded-2xl text-xs sm:text-sm font-semibold transition hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{t.exploreAdrsBtn}</span>
            </button>
          </div>

          {/* Author Card Spotlight */}
          <div className="pt-6">
            <AuthorCard currentLang={currentLang} />
          </div>
        </div>
      </section>

      {/* 3. Production Telemetry Bar */}
      <TelemetryBar lang={currentLang} />

      {/* 4. Core Pillars Deep-Dive (LinkedIn Series Companion) */}
      <section id="pillars-section" className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 flex-1">
        {/* Section Heading */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-400">
            <Layers className="w-4 h-4" />
            <span>LinkedIn Engineering Deep-Dive Series</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.pillarsHeading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-3xl leading-relaxed">
            {t.pillarsSubheading}
          </p>
        </div>

        {/* 4 Pillars Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {pillarsList.map((pillar: PillarData) => {
            const isActive = pillar.id === activePillarId;
            return (
              <button
                key={pillar.id}
                onClick={() => {
                  setActivePillarId(pillar.id);
                  setActiveSubTab("diagram");
                }}
                className={`p-4 rounded-2xl border transition-all text-left rtl:text-right flex flex-col justify-between ${
                  isActive
                    ? "bg-slate-900 border-brand-500 shadow-xl shadow-brand-500/10 ring-1 ring-brand-500"
                    : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40"
                }`}
              >
                <div>
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider font-bold block mb-1.5 ${
                      isActive ? "text-brand-400" : "text-slate-400"
                    }`}
                  >
                    {pillar.badge}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-white mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                </div>
                <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-800/80">
                  <span className="text-[11px] text-slate-400 font-mono">
                    {pillar.keyMetrics[0]?.value}
                  </span>
                  <span
                    className={`text-xs font-semibold flex items-center gap-1 ${
                      isActive ? "text-brand-400" : "text-slate-400"
                    }`}
                  >
                    <span>{isRtl ? "استعراض" : "Explorer"}</span>
                    <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Card Container */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-8 shadow-2xl backdrop-blur-sm">
          {/* Pillar Header & Key Metrics */}
          <div className="space-y-6 pb-6 border-b border-slate-800">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/30 inline-block">
                {activePillar.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {activePillar.headline}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
                {activePillar.description}
              </p>
            </div>

            {/* Pillar Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
              {activePillar.keyMetrics.map((km, idx: number) => (
                <div key={idx} className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-2xl">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">{km.label}</span>
                  <span className="text-base sm:text-lg font-bold font-mono text-white block mt-0.5">{km.value}</span>
                  <span className="text-[10px] text-slate-400 block mt-1 leading-normal">{km.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sub-Tabs: Interactive Diagram / Specs & Invariant / UI Evidence / Code */}
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3 flex-wrap">
            <button
              onClick={() => setActiveSubTab("diagram")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition ${
                activeSubTab === "diagram"
                  ? "bg-brand-500 text-white shadow-md shadow-brand-500/20"
                  : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.diagramTab}</span>
            </button>

            <button
              onClick={() => setActiveSubTab("specs")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition ${
                activeSubTab === "specs"
                  ? "bg-brand-500 text-white shadow-md shadow-brand-500/20"
                  : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              <CheckCircle className="w-3.5 h-3.5" />
              <span>{t.specsTab}</span>
            </button>

            <button
              onClick={() => setActiveSubTab("screenshots")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition ${
                activeSubTab === "screenshots"
                  ? "bg-brand-500 text-white shadow-md shadow-brand-500/20"
                  : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>
                {t.screenshotsTab} (17)
              </span>
            </button>

            <button
              onClick={() => setActiveSubTab("code")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition ${
                activeSubTab === "code"
                  ? "bg-brand-500 text-white shadow-md shadow-brand-500/20"
                  : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>{t.codeTab}</span>
            </button>
          </div>

          {/* Sub-Tab 1: Interactive Archify Diagram */}
          {activeSubTab === "diagram" && (
            <div className="space-y-4 animate-fadeIn">
              <DiagramViewer diagramUrl={activePillar.diagramPath} title={activePillar.diagramTitle} />
            </div>
          )}

          {/* Sub-Tab 2: Technical Specifications & Invariant Table */}
          {activeSubTab === "specs" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {activePillar.technicalPillars.map((tp, idx: number) => (
                  <div key={idx} className="bg-slate-950/80 border border-slate-800 p-5 rounded-2xl space-y-3">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-400"></span>
                      <span>{tp.title}</span>
                    </h4>
                    <ul className="space-y-2">
                      {tp.points.map((pt: string, pIdx: number) => (
                        <li key={pIdx} className="text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                          <span className="text-brand-400 font-bold">›</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Special Mathematical Formula Box for Pillar 1 */}
              {activePillar.id === "concurrency" && (
                <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-950 to-slate-900 border border-brand-500/40 space-y-3 shadow-xl">
                  <span className="text-[11px] font-mono text-brand-300 uppercase tracking-wider block font-bold">
                    {t.formulaHeading}
                  </span>
                  <div className="font-mono text-xs sm:text-sm text-white font-bold bg-black/60 p-4 rounded-xl border border-slate-800 overflow-x-auto text-left" dir="ltr">
                    Available Seats = Total Capacity − ∑(Held Bookings) − ∑(Active Unbooked Redis Holds)
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {t.formulaDesc}
                  </p>
                </div>
              )}

              {/* Special Statutory Table for Pillar 2 */}
              {activePillar.id === "payment" && (
                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 shadow-xl">
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block font-bold">
                    {t.mctaHeading}
                  </span>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left rtl:text-right text-xs border border-slate-800 rounded-xl overflow-hidden">
                      <thead className="bg-slate-900 font-mono text-slate-400 uppercase text-[10px]">
                        <tr>
                          <th className="p-3 border-b border-slate-800">{t.timelineCol}</th>
                          <th className="p-3 border-b border-slate-800">{t.refundCol}</th>
                          <th className="p-3 border-b border-slate-800">{t.legalCol}</th>
                          <th className="p-3 border-b border-slate-800">{t.systemCol}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800 text-slate-300">
                        <tr>
                          <td className="p-3 font-semibold text-white">{t.tier1Timeline}</td>
                          <td className="p-3 font-mono font-bold text-emerald-400">{t.tier1Refund}</td>
                          <td className="p-3 text-slate-400">{t.tier1Legal}</td>
                          <td className="p-3">{t.tier1System}</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-white">{t.tier2Timeline}</td>
                          <td className="p-3 font-mono font-bold text-amber-400">{t.tier2Refund}</td>
                          <td className="p-3 text-slate-400">{t.tier2Legal}</td>
                          <td className="p-3">{t.tier2System}</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-white">{t.tier3Timeline}</td>
                          <td className="p-3 font-mono font-bold text-rose-400">{t.tier3Refund}</td>
                          <td className="p-3 text-slate-400">{t.tier3Legal}</td>
                          <td className="p-3">{t.tier3System}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Sub-Tab 3: Playwright UI Visual Evidence */}
          {activeSubTab === "screenshots" && (
            <div className="space-y-4 animate-fadeIn">
              <ScreenshotLightbox screenshots={activePillar.screenshots} lang={currentLang} />
            </div>
          )}

          {/* Sub-Tab 4: Implementation Pattern */}
          {activeSubTab === "code" && (
            <div className="space-y-3 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">{activePillar.codeSnippetTitle}</span>
                <span className="text-[10px] font-mono text-brand-400">
                  {t.verifiedPattern}
                </span>
              </div>
              <pre className="p-5 rounded-2xl bg-black/80 border border-slate-800 font-mono text-xs text-brand-300 overflow-x-auto leading-relaxed shadow-inner text-left" dir="ltr">
                <code>{activePillar.codeSnippet}</code>
              </pre>
            </div>
          )}
        </div>
      </section>

      {/* 5. Architectural Decision Records (ADR) Section */}
      <section id="adr-section" className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 border-t border-slate-800/80">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sahara-400">
            <FileCode className="w-4 h-4" />
            <span>Architecture Governance &amp; Decision Ledger</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.adrHeading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-3xl leading-relaxed">
            {t.adrSubheading}
          </p>
        </div>

        <AdrAccordion lang={currentLang} />
      </section>

      {/* 6. Footer & CTA */}
      <Footer lang={currentLang} onRequestDemo={() => setDemoModalOpen(true)} />

      {/* 7. Demo Request Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        lang={currentLang}
      />
    </div>
  );
}

export default App;
