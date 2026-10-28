import React, { useState } from "react";
import { Maximize2, ExternalLink, RefreshCw, Sparkles } from "lucide-react";

interface DiagramViewerProps {
  diagramUrl: string;
  title: string;
}

export const DiagramViewer: React.FC<DiagramViewerProps> = ({ diagramUrl, title }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  return (
    <div className="relative rounded-2xl border border-slate-800 bg-slate-950/90 overflow-hidden shadow-2xl">
      {/* Viewer Chrome Header */}
      <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          <span className="text-xs font-mono font-semibold text-white">{title}</span>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-brand-500/10 text-brand-400 border border-brand-500/20 flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5" />
            <span>Compiled via Archify</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setReloadKey((k) => k + 1)}
            title="Reset Diagram View"
            className="p-1.5 rounded-lg bg-slate-850 hover:bg-slate-800 text-slate-400 hover:text-white transition text-xs flex items-center gap-1"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
          <a
            href={diagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Open in Standalone Tab"
            className="p-1.5 rounded-lg bg-slate-850 hover:bg-slate-800 text-slate-400 hover:text-white transition text-xs flex items-center gap-1"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 rounded-lg bg-slate-850 hover:bg-slate-800 text-slate-400 hover:text-white transition text-xs flex items-center gap-1"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Embedded Archify Interactive HTML */}
      <div className={`w-full transition-all duration-300 ${isFullscreen ? "fixed inset-0 z-50 bg-slate-950 p-4" : "h-[540px] sm:h-[620px]"}`}>
        {isFullscreen && (
          <div className="flex justify-between items-center mb-2 pb-2 border-b border-slate-800">
            <span className="text-xs font-mono text-brand-400 font-semibold">{title}</span>
            <button
              onClick={() => setIsFullscreen(false)}
              className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded text-xs font-mono"
            >
              Close Fullscreen (Esc)
            </button>
          </div>
        )}
        <iframe
          key={reloadKey}
          src={diagramUrl}
          title={title}
          className="w-full h-full border-0 rounded-b-xl"
          loading="lazy"
        />
      </div>

      {/* Footer Controls Tip */}
      <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
        <span>💡 Interactive Archify canvas: drag to pan, scroll to zoom, click cards to inspect connected nodes.</span>
        <span className="font-mono text-[10px] text-slate-400">Zero SVG degradation</span>
      </div>
    </div>
  );
};
