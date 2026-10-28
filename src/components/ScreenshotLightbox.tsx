import React, { useState, useMemo, useEffect, useCallback } from "react";
import {
  Monitor,
  Smartphone,
  Maximize2,
  X,
  ZoomIn,
  Users,
  Shield,
  Building2,
  User,
  UserCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Language, TRANSLATIONS } from "../data/translations";
import { GET_ALL_ROLE_SCREENSHOTS, MultiRoleScreenshot } from "../data/allScreenshots";

interface ScreenshotItem {
  title: string;
  description: string;
  desktopSrc: string;
  mobileSrc?: string;
  role?: "guest" | "client" | "corporate" | "admin" | "manager";
  roleLabel?: string;
}

interface ScreenshotLightboxProps {
  screenshots?: ScreenshotItem[];
  lang?: Language;
}

export const ScreenshotLightbox: React.FC<ScreenshotLightboxProps> = ({
  screenshots,
  lang = "fr",
}) => {
  const [deviceMode, setDeviceMode] = useState<"desktop" | "mobile">("desktop");
  const [selectedRole, setSelectedRole] = useState<string>("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const t = TRANSLATIONS[lang];
  const allRoleScreenshots = useMemo(() => GET_ALL_ROLE_SCREENSHOTS(lang), [lang]);

  // Filtered items based on role selection
  const itemsToDisplay: MultiRoleScreenshot[] = useMemo(() => {
    if (selectedRole === "all") {
      return allRoleScreenshots;
    }
    return allRoleScreenshots.filter((item) => item.role === selectedRole);
  }, [allRoleScreenshots, selectedRole]);

  const rolesFilter = [
    { key: "all", label: t.allRoles, count: allRoleScreenshots.length, icon: Users },
    { key: "guest", label: t.roleGuest, count: 4, icon: User },
    { key: "client", label: t.roleClient, count: 3, icon: UserCheck },
    { key: "corporate", label: t.roleCorporate, count: 2, icon: Building2 },
    { key: "admin", label: t.roleAdmin, count: 7, icon: Shield },
    { key: "manager", label: t.roleManager, count: 1, icon: UserCheck },
  ];

  // Next / Previous Navigation Handlers
  const goToNext = useCallback(() => {
    if (itemsToDisplay.length === 0) return;
    setActiveIndex((prev) => {
      if (prev === null) return 0;
      return (prev + 1) % itemsToDisplay.length;
    });
  }, [itemsToDisplay.length]);

  const goToPrev = useCallback(() => {
    if (itemsToDisplay.length === 0) return;
    setActiveIndex((prev) => {
      if (prev === null) return 0;
      return (prev - 1 + itemsToDisplay.length) % itemsToDisplay.length;
    });
  }, [itemsToDisplay.length]);

  // Keyboard navigation (ArrowLeft, ArrowRight, Escape)
  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrev();
      } else if (e.key === "Escape") {
        e.preventDefault();
        setActiveIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, goToNext, goToPrev]);

  const activeItem = activeIndex !== null && itemsToDisplay[activeIndex] ? itemsToDisplay[activeIndex] : null;
  const activeSrc =
    activeItem && deviceMode === "mobile" && activeItem.mobileSrc
      ? activeItem.mobileSrc
      : activeItem?.desktopSrc || "";

  return (
    <div className="space-y-6">
      {/* 1. Header Toolbar: Role Filter & Device Mode Switcher */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
            <h4 className="text-sm font-bold text-white">
              {t.screenshotSectionHeading}
            </h4>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-brand-500/10 text-brand-400 border border-brand-500/20 font-bold">
              17 Verified Captures across 5 System Roles
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {t.screenshotSectionSubheading}
          </p>
        </div>

        {/* Device Switcher (Desktop 1440x900 vs Mobile 390x844) */}
        <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-xl p-1 text-xs shrink-0 self-start lg:self-auto shadow-inner">
          <button
            onClick={() => setDeviceMode("desktop")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition ${
              deviceMode === "desktop"
                ? "bg-brand-500 text-white shadow-md shadow-brand-500/25"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>{t.desktopView}</span>
          </button>
          <button
            onClick={() => setDeviceMode("mobile")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition ${
              deviceMode === "mobile"
                ? "bg-brand-500 text-white shadow-md shadow-brand-500/25"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>{t.mobileView}</span>
          </button>
        </div>
      </div>

      {/* 2. Persona Role Tabs */}
      <div className="flex items-center gap-2 flex-wrap bg-slate-900/60 p-3 rounded-2xl border border-slate-800">
        <span className="text-xs text-slate-400 font-mono flex items-center gap-1 mr-1">
          <Users className="w-3.5 h-3.5 text-brand-400" />
          <span className="hidden sm:inline">{t.roleFilterLabel}</span>
        </span>
        {rolesFilter.map((r) => {
          const Icon = r.icon;
          const isActive = selectedRole === r.key;
          return (
            <button
              key={r.key}
              onClick={() => {
                setSelectedRole(r.key);
                setActiveIndex(null);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                isActive
                  ? "bg-brand-500 text-white shadow-md shadow-brand-500/25 ring-1 ring-brand-400"
                  : "bg-slate-950/80 text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-900"
              }`}
            >
              <Icon className="w-3 h-3" />
              <span>{r.label}</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                  isActive ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400"
                }`}
              >
                {r.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3. Grid of Multi-Role Screenshots */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {itemsToDisplay.map((item, idx) => {
          const currentSrc = deviceMode === "mobile" && item.mobileSrc ? item.mobileSrc : item.desktopSrc;

          return (
            <div
              key={item.id}
              className="bg-slate-900/80 border border-slate-800/90 rounded-2xl overflow-hidden hover:border-slate-700 hover:shadow-2xl hover:shadow-brand-500/5 transition flex flex-col justify-between group shadow-xl"
            >
              {/* Browser Chrome Header */}
              <div className="px-4 py-2.5 bg-slate-950/90 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border ${item.roleBadgeColor}`}>
                    {item.roleLabel}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
                    {deviceMode === "desktop" ? "1440×900 • 2x DPI" : "390×844 • Mobile Touch"}
                  </span>
                </div>

                <button
                  onClick={() => setActiveIndex(idx)}
                  className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-brand-400 transition"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>{t.inspectScreenshot}</span>
                </button>
              </div>

              {/* Image Preview Container */}
              <div
                onClick={() => setActiveIndex(idx)}
                className={`cursor-pointer overflow-hidden relative flex items-center justify-center bg-black/50 group-hover:opacity-95 transition ${
                  deviceMode === "mobile" ? "py-4 max-h-[460px]" : "max-h-[380px]"
                }`}
              >
                <img
                  src={currentSrc}
                  alt={item.title}
                  className={`object-cover object-top transition duration-300 group-hover:scale-[1.01] ${
                    deviceMode === "mobile"
                      ? "max-h-[420px] rounded-xl border border-slate-700 shadow-2xl"
                      : "w-full"
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/10 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="px-3.5 py-1.5 rounded-xl bg-black/80 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg border border-slate-700 backdrop-blur-sm">
                    <ZoomIn className="w-3.5 h-3.5 text-brand-400" />
                    <span>{t.clickToZoom}</span>
                  </div>
                </div>
              </div>

              {/* Caption & Technical Invariant Description */}
              <div className="p-4 bg-slate-900 border-t border-slate-800">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h5 className="text-sm font-bold text-white group-hover:text-brand-300 transition">
                    {item.title}
                  </h5>
                  <span className="text-[10px] font-mono text-slate-400">
                    #{idx + 1} / {itemsToDisplay.length}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. Fullscreen Zoom Modal with Next / Prev Navigation */}
      {activeItem && activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col p-3 sm:p-6 animate-fadeIn select-none"
          onClick={() => setActiveIndex(null)}
        >
          {/* Modal Header */}
          <div
            className="flex items-center justify-between pb-3 border-b border-slate-800/90 text-white gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border shrink-0 ${activeItem.roleBadgeColor}`}>
                {activeItem.roleLabel}
              </span>
              <span className="font-bold text-xs sm:text-sm font-mono text-brand-300 truncate">
                {activeItem.title}
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {/* Image Counter */}
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-slate-800 text-slate-300 border border-slate-700">
                {activeIndex + 1} / {itemsToDisplay.length}
              </span>

              {/* Close Button */}
              <button
                onClick={() => setActiveIndex(null)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                title={t.closeLightbox}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Main Stage with Floating Navigation Buttons */}
          <div
            className="flex-1 relative overflow-hidden flex items-center justify-center p-2 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Floating Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              title="Previous Screenshot (Arrow Left)"
              className="absolute left-2 sm:left-4 z-20 p-3 sm:p-4 rounded-2xl bg-black/75 hover:bg-brand-500/90 text-white border border-slate-700/80 hover:border-brand-400 shadow-2xl transition hover:scale-110 active:scale-95 backdrop-blur-md group"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Active Image */}
            <div className="w-full h-full flex items-center justify-center overflow-auto">
              <img
                key={activeSrc}
                src={activeSrc}
                alt={activeItem.title}
                className={`rounded-2xl border border-slate-800 shadow-2xl object-contain transition-all duration-200 animate-fadeIn ${
                  deviceMode === "mobile"
                    ? "max-h-[80vh] max-w-[390px]"
                    : "max-h-[82vh] max-w-full"
                }`}
              />
            </div>

            {/* Next Floating Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              title="Next Screenshot (Arrow Right)"
              className="absolute right-2 sm:right-4 z-20 p-3 sm:p-4 rounded-2xl bg-black/75 hover:bg-brand-500/90 text-white border border-slate-700/80 hover:border-brand-400 shadow-2xl transition hover:scale-110 active:scale-95 backdrop-blur-md group"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Modal Footer Description & Keyboard Shortcuts Tip */}
          <div
            className="pt-3 border-t border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-300"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="line-clamp-2 max-w-3xl leading-relaxed text-slate-300">
              {activeItem.description}
            </p>

            <div className="flex items-center gap-3 font-mono text-[11px] text-slate-400 shrink-0">
              <span className="hidden sm:inline">Navigate:</span>
              <kbd className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">← Prev</kbd>
              <kbd className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">Next →</kbd>
              <kbd className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">Esc Close</kbd>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
