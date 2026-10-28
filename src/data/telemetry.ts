import { Language } from "./translations";

export interface TelemetryMetric {
  label: string;
  value: string;
  status: "verified" | "benchmark" | "compliant";
  detail: string;
}

export const GET_TELEMETRY_METRICS = (lang: Language): TelemetryMetric[] => {
  switch (lang) {
    case "ar":
      return [
        {
          label: "فحوصات PHPUnit",
          value: "238 / 238",
          status: "verified",
          detail: "اجتياز كامل بنسبة 100% على محرك MySQL 8 InnoDB",
        },
        {
          label: "التأكيدات البرمجية",
          value: "3,558",
          status: "verified",
          detail: "صفر أخطاء عبر 12 حزمة اختبارات تكاملية",
        },
        {
          label: "المسارات المترجمة",
          value: "28 مساراً",
          status: "verified",
          detail: "مترجمة عبر Next.js 14 App Router",
        },
        {
          label: "شبكة النقد الآلي",
          value: "معيار SATIM 3020",
          status: "compliant",
          detail: "معتمد لبطاقات CIB والذهبية وبريدي موب",
        },
        {
          label: "ذروة الحجز المتزامن",
          value: "5,000 طلب/ثانية",
          status: "benchmark",
          detail: "زمن استجابة Redis Lua أقل من 1.2 ميلي ثانية",
        },
        {
          label: "سقف ذاكرة العميل",
          value: "أقل من 2 ميغابايت",
          status: "benchmark",
          detail: "ذاكرة Bounded LRU محددة بـ 10 صفحات",
        },
      ];
    case "en":
      return [
        {
          label: "PHPUnit Test Suite",
          value: "238 / 238",
          status: "verified",
          detail: "100% Passing on MySQL 8 InnoDB Engine",
        },
        {
          label: "Assertions Verified",
          value: "3,558",
          status: "verified",
          detail: "Zero regressions across 12 domain test suites",
        },
        {
          label: "Compiled App Routes",
          value: "28 Routes",
          status: "verified",
          detail: "Next.js 14 App Router (B2C, B2B, Back-Office)",
        },
        {
          label: "GIE Monétique SATIM",
          value: "SATIM 3020",
          status: "compliant",
          detail: "Certified Interbank & Algérie Poste Workflows",
        },
        {
          label: "Peak Hold Concurrency",
          value: "5,000 req/s",
          status: "benchmark",
          detail: "Redis Lua < 1.2ms atomic lock latency",
        },
        {
          label: "Client Memory Ceiling",
          value: "< 2 MB Heap",
          status: "benchmark",
          detail: "10-Page Bounded LRU ring buffer in RAM",
        },
      ];
    case "fr":
    default:
      return [
        {
          label: "Suite de Tests PHPUnit",
          value: "238 / 238",
          status: "verified",
          detail: "100% Validé sur moteur MySQL 8 InnoDB",
        },
        {
          label: "Assertions Vérifiées",
          value: "3,558",
          status: "verified",
          detail: "Zéro régression sur 12 suites de domaine",
        },
        {
          label: "Routes Applicatives",
          value: "28 Routes",
          status: "verified",
          detail: "Next.js 14 App Router (B2C, B2B, Back-Office)",
        },
        {
          label: "GIE Monétique SATIM",
          value: "Norme SATIM 3020",
          status: "compliant",
          detail: "Flux certifiés CIB, Edahabia et Algérie Poste",
        },
        {
          label: "Concurrence de Pointe",
          value: "5 000 req/s",
          status: "benchmark",
          detail: "Latence atomique Redis Lua < 1,2 ms",
        },
        {
          label: "Plafond Mémoire Client",
          value: "< 2 Mo Heap",
          status: "benchmark",
          detail: "Buffer annulaire Bounded LRU de 10 pages en RAM",
        },
      ];
  }
};

export const TELEMETRY_METRICS = GET_TELEMETRY_METRICS("fr");
