# WAKALATASFAR (وكالات أسفار) — Enterprise Architecture Showcase
> **High-Concurrency White-Label Travel Booking Engine Engineered for Algerian Commerce**  
> Public Engineering Case Study & System Architecture Companion for LinkedIn

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com)
[![Tests Passing](https://img.shields.io/badge/PHPUnit%20MySQL%208-238%2F238%20Passing-brightgreen?logo=php)](https://saoula.tech)
[![Assertions](https://img.shields.io/badge/Assertions-3%2C558%20Verified-blue)](https://saoula.tech)
[![Banking Standard](https://img.shields.io/badge/Banking%20Standard-SATIM%203020%20Compliant-emerald)](https://saoula.tech)
[![Localization](https://img.shields.io/badge/Languages-AR%20%7C%20FR%20%7C%20EN-purple)](https://saoula.tech)

---

## 🏛️ Executive Summary

**WAKALATASFAR** is a proprietary high-concurrency white-label travel platform engineered to solve the four historical frictions in Algerian tourism digitization:
1. **Multi-Rail Payment Fragmentation:** Seamless handling of CIB, Edahabia, CCP / BaridiMob postal transfers, and in-agency cash deposits under the **SATIM 3020** legal standard.
2. **Flash-Sale Inventory Contention:** Elimination of double-booking during Sahara (Djanet / Tamanrasset) and Omra peak campaigns under sustained **5,000 req/s** through an atomic Redis Lua booking gate and MySQL 8 hierarchical InnoDB locks.
3. **Decoupled Edge Performance:** Same-origin rewrite edge proxying between Next.js 14 and Laravel 11 with HttpOnly session isolation and sub-800ms LCP.
4. **Zero Cloud Tax Architecture:** Fully containerized on bare-metal / sovereign cloud environments with zero per-seat SaaS overhead or foreign-currency dependencies.

---

## 👤 Architect & Author Profile

- **Author:** **A.Y. Saoula** (Principal Systems Architect & Staff Frontend Engineer)
- **Live Platform Testing:** [saoula.tech](https://saoula.tech)
- **LinkedIn Profile:** [linkedin.com/in/a-y-saoula-12968827b](https://www.linkedin.com/in/a-y-saoula-12968827b/)
- **Direct Email:** [a.y.saoula@gmail.com](mailto:a.y.saoula@gmail.com)

---

## 🚀 The 4 Architectural Pillars

### 1. High-Concurrency Inventory Locking & Capacity Invariants
- Atomic sub-millisecond check-and-decrement in Redis (`HOLD_LUA`) with a 900s TTL.
- Formal capacity conservation formula:
  $$\text{Available Seats} = \text{Total Capacity} - \sum(\text{Held Bookings}) - \sum(\text{Active Redis Holds})$$
- Hierarchical InnoDB transactions: `SELECT ... FOR UPDATE` on `package_dates` strictly before child rows, eliminating deadlock risk.

### 2. Hexagonal Multi-Channel Payment & SATIM 3020 Quittance
- Unified polymorphic payment state machine with automated 30% statutory legal deposit (*Acompte Légal*).
- 24-hour idempotent quarantine window for BaridiMob / CCP payment proofs before releasing held seats.
- Official Ministry of Tourism (MCTA) refund schedule adherence (>15 days: 100%, 7-15 days: 50%, <7 days: 0%).

### 3. Perimeter Security, Rate Limiting & Defense-in-Depth
- Account-bound SHA-1 lockout keys preventing multi-IP distributed dictionary attacks without causing collateral denial of service for corporate shared IPs.
- Private receipts and identity documents kept on isolated non-public disks with time-limited signed URLs.
- Granular Role-Based Access Control (RBAC): `super_admin`, `bookings_manager`, `content_editor`, `corporate`, `client`.

### 4. Bounded LRU Client State & Multi-Tier Caching Propagation
- Strict 10-page ring buffer client LRU cache bounded to $< 2\text{ MB}$ RAM heap to safeguard low-end Android mobile browsers on 3G networks.
- Two-tier cache invalidation tags: granular catalog tag purging on admin inventory edits with automated background cache re-warming.

---

## 📸 Multi-Role Visual Verification Harness (17 Captures)

The showcase includes Playwright-automated, full-resolution evidence across **all 5 system personas**:
- **Public Visitor (B2C):** Hero Slider (`1440x900` + Mobile `390x844`), Catalog Grid, Package Details, 3-step SATIM 3020 Checkout.
- **Client Traveler (`amina@example.com`):** User Portal, Booking Dossier breakdown, KYC Algerian Identity verification, Support Messaging.
- **Corporate B2B / Works Council (`contact@atlascorp.dz`):** 3-Proposal Comparator (*Éco, Confort, Prestige ⭐*), Corporate Dossiers & Tax attributes (NIF/RC).
- **Executive & Super Admin (`admin@wakalatasfar.dz`):** KPI Telemetry Dashboard, Manifest Inspector, Financial Reconciliation Ledger, Inventory Studio, White-Label Brand Settings, RBAC ACL.
- **Bookings Manager (`manager@wakalatasfar.dz`):** Operational approvals desk for BaridiMob & In-Agency cash deposits.

Includes an interactive Lightbox with **Next / Previous navigation**, keyboard shortcuts (`←`, `→`, `Esc`), and role filtering.

---

## 🛠️ Stack & Technology

- **Framework:** React 18 + Vite 6
- **Styling & Tokens:** Tailwind CSS v3.4 + Custom Obsidian & Sahara Desert Design Tokens
- **Typography:** `Plus Jakarta Sans`, `Cairo`, `Amiri`, `JetBrains Mono`
- **Diagrams:** Native compiled [Archify](https://github.com/tt-a1i/archify) interactive canvases (zero SVG degradation)
- **Testing & Verification:** Playwright Headless Automation Harness
- **Deployment:** Vercel Static Edge CDN (zero backend runtime dependencies)

---

## ⚡ Local Development

```bash
# Clone the repository
git clone git@github.com:saoula2026/wakala_ARCHITECTURE.git
cd wakala_ARCHITECTURE

# Install dependencies
npm install

# Run dev server
npm run dev
# Server running on http://localhost:3001
```

---

## 🚢 Deploy to Vercel

This repository is pre-configured with `vercel.json` for 1-click deployment on Vercel:

```bash
vercel deploy --prod
```

Or connect the repository `saoula2026/wakala_ARCHITECTURE` directly in the Vercel Dashboard:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

---

## 📜 Compliance & OPSEC Statement

All production API tokens, cryptographic credentials, and internal hostnames in this public showcase have been anonymized in accordance with strict OPSEC guidelines. Verified against Algerian Law 18-07 on Personal Data Protection and GIE Monétique e-payment standards.

© 2026 WAKALATASFAR • Architected by [A.Y. Saoula](https://saoula.tech)
