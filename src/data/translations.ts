export type Language = "fr" | "en" | "ar";

export interface Translations {
  authorName: string;
  authorRole: string;
  authorWebsite: string;
  authorWebsiteLabel: string;
  authorLinkedin: string;
  authorEmail: string;
  tryLiveLabel: string;
  connectLinkedinLabel: string;
  sendEmailLabel: string;

  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  executiveSummary: string;
  tryLiveBtn: string;
  explorePillarsBtn: string;
  exploreAdrsBtn: string;

  telemetryHeading: string;
  telemetryStatus: string;

  pillarsHeading: string;
  pillarsSubheading: string;
  diagramTab: string;
  specsTab: string;
  screenshotsTab: string;
  codeTab: string;
  openDiagramExternal: string;
  resetDiagram: string;
  fullscreenDiagram: string;
  closeFullscreen: string;

  formulaHeading: string;
  formulaDesc: string;

  mctaHeading: string;
  timelineCol: string;
  refundCol: string;
  legalCol: string;
  systemCol: string;
  tier1Timeline: string;
  tier1Refund: string;
  tier1Legal: string;
  tier1System: string;
  tier2Timeline: string;
  tier2Refund: string;
  tier2Legal: string;
  tier2System: string;
  tier3Timeline: string;
  tier3Refund: string;
  tier3Legal: string;
  tier3System: string;

  screenshotSectionHeading: string;
  screenshotSectionSubheading: string;
  desktopView: string;
  mobileView: string;
  inspectScreenshot: string;
  clickToZoom: string;
  closeLightbox: string;
  allRoles: string;
  roleGuest: string;
  roleClient: string;
  roleCorporate: string;
  roleAdmin: string;
  roleManager: string;
  roleFilterLabel: string;

  implementationTitle: string;
  verifiedPattern: string;

  adrHeading: string;
  adrSubheading: string;
  allCategory: string;
  recordsCount: string;
  contextLabel: string;
  decisionLabel: string;
  consequencesLabel: string;

  authorSectionHeading: string;
  authorSectionSubheading: string;
  authorBio: string;
  architectBadge: string;

  ctaBannerTitle: string;
  ctaBannerSubtitle: string;
  ctaBannerAction: string;

  contactCtaBtn: string;
  contactCtaTitle: string;
  contactCtaSubtitle: string;
  sanitizedNotice: string;
  explorePillars: string;
  adrSectionTitle: string;
  adrSectionSubtitle: string;
  tableTab: string;
  screenshotTab: string;

  modalTitle: string;
  modalDesc: string;
  nameLabel: string;
  emailLabel: string;
  roleLabel: string;
  submitBtn: string;
  closeBtn: string;
  modalSuccessTitle: string;
  modalSuccessDesc: string;

  footerTagline: string;
  footerStackHeading: string;
  footerRegulationsHeading: string;
  footerOpsecHeading: string;
  opsecNotice: string;
  copyrightText: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  fr: {
    authorName: "A.Y. Saoula",
    authorRole: "Principal Systems Architect & Staff Frontend Engineer",
    authorWebsite: "https://saoula.tech",
    authorWebsiteLabel: "saoula.tech",
    authorLinkedin: "https://www.linkedin.com/in/a-y-saoula-12968827b/",
    authorEmail: "a.y.saoula@gmail.com",
    tryLiveLabel: "Tester la Plateforme en Direct sur saoula.tech",
    connectLinkedinLabel: "Profil LinkedIn",
    sendEmailLabel: "Me Contacter par Email",

    heroBadge: "Étude de Cas Technique d'Ingénierie & Architecture Système",
    heroTitle: "WAKALATASFAR (وكالات أسفار)",
    heroSubtitle: "Moteur de Réservation Touristique White-Label Haute-Concurrence Conçu pour l'Écosystème Économique Algérien",
    executiveSummary:
      "WAKALATASFAR est une plateforme commerciale propriétaire conçue pour éliminer les 4 frictions historiques du voyage en Algérie : la fragmentation des canaux de paiement (Cartes CIB, Edahabia, Virements CCP / BaridiMob, Espèces en Agence), la contention de stock lors des ventes flash sahariennes, les taxes cloud récurrentes en devises et la rigidité des CMS monolithiques. Architecture hexagonale découplée validée par 238 tests PHPUnit et 3 558 assertions sous MySQL 8.",
    tryLiveBtn: "Tester la Démo Live sur saoula.tech",
    explorePillarsBtn: "Explorer les 4 Piliers d'Ingénierie",
    exploreAdrsBtn: "Consulter les 11 ADRs",

    telemetryHeading: "Télémétrie de Production Validée",
    telemetryStatus: "100% Validé en Production",

    pillarsHeading: "Les 4 Piliers d'Ingénierie de WAKALATASFAR",
    pillarsSubheading:
      "Compagnon technique complet de notre série LinkedIn. Chaque onglet expose la topologie interactive native Archify, les invariants mathématiques et les preuves visuelles Playwright.",
    diagramTab: "Topologie Interactive (Archify)",
    specsTab: "Spécifications & Invariants",
    screenshotsTab: "Preuves Visuelles UI Live",
    codeTab: "Pattern d'Implémentation",
    openDiagramExternal: "Ouvrir dans un nouvel onglet",
    resetDiagram: "Réinitialiser la vue",
    fullscreenDiagram: "Plein écran",
    closeFullscreen: "Quitter le plein écran",

    formulaHeading: "Formule d'Invariant de Conservation des Capacités :",
    formulaDesc:
      "Invariant formellement garanti : Si un client abandonne son panier, la clé TTL Redis de 900 secondes expire naturellement et restitue les sièges au contingent sans aucune écriture en base de données.",

    mctaHeading: "Barème Légal des Annulations & Remboursements (Ministère du Tourisme - MCTA) :",
    timelineCol: "Préavis d'Annulation",
    refundCol: "Remboursement Légal",
    legalCol: "Quittance & Retenue Agence",
    systemCol: "Traitement Automatisé",
    tier1Timeline: "> 15 Jours Avant Départ",
    tier1Refund: "100% Intégral",
    tier1Legal: "Zéro Pénalité Agence",
    tier1System: "Remboursement automatique ou avoir bancaire",
    tier2Timeline: "7 à 15 Jours Avant Départ",
    tier2Refund: "50% Partiel",
    tier2Legal: "50% Retenus (Frais charters aériens)",
    tier2System: "Mise à jour du solde et réémission du voucher",
    tier3Timeline: "< 7 Jours Avant Départ",
    tier3Refund: "0% Non-Remboursable",
    tier3Legal: "Forfait Légal Acquis à 100%",
    tier3System: "Annulation du dossier, siège remis en vente",

    screenshotSectionHeading: "Vérification Visuelle Live (Playwright Headless)",
    screenshotSectionSubheading: "Captures réelles 1440x900 (Bureau) et 390x844 (Mobile) générées sans altération graphique.",
    desktopView: "Bureau 1440x900",
    mobileView: "Mobile 390x844",
    inspectScreenshot: "Agrandir",
    clickToZoom: "Cliquer pour zoomer",
    closeLightbox: "Fermer (Échap)",
    allRoles: "Tous les Rôles",
    roleGuest: "Visiteur Public (B2C)",
    roleClient: "Client Voyageur",
    roleCorporate: "Entreprise B2B / COS",
    roleAdmin: "Direction & Super Admin",
    roleManager: "Gestionnaire Réservations",
    roleFilterLabel: "Filtrer par Rôle :",

    implementationTitle: "Pattern d'Architecture & Code Source",
    verifiedPattern: "Code Validé en Production • Zéro Hallucination",

    adrHeading: "Dossier Décisionnel d'Architecture (ADR)",
    adrSubheading: "Registre exhaustif des arbitrages techniques et choix de conception (ADR-001 à ADR-013)",
    allCategory: "Tous les Domaines",
    recordsCount: "Décisions Répertoriées",
    contextLabel: "Contexte & Friction Métier :",
    decisionLabel: "Décision Architecturale :",
    consequencesLabel: "Conséquences Vérifiées :",

    authorSectionHeading: "Conçu & Développé par A.Y. Saoula",
    authorSectionSubheading: "Principal Systems Architect & Staff Frontend Engineer",
    authorBio:
      "Spécialiste de la conception de systèmes distribués à haute concurrence, architectures découplées Next.js/Laravel, résilience financière SATIM et conformité aux réalités du marché algérien. Démonstrateur accessible sur saoula.tech.",
    architectBadge: "Architecte Logiciel Senior",

    ctaBannerTitle: "Envie d'échanger sur l'Architecture ou de Tester la Solution ?",
    ctaBannerSubtitle:
      "Accédez directement au démonstrateur en direct sur saoula.tech ou échangeons sur LinkedIn ou par email.",
    ctaBannerAction: "Tester sur saoula.tech",

    contactCtaBtn: "Demander une Démo",
    contactCtaTitle: "Planifier une Revue d'Architecture ou Tester la Démo Live",
    contactCtaSubtitle: "Échangez directement avec le concepteur de la plateforme ou testez la staging sur saoula.tech.",
    sanitizedNotice: "Tous les identifiants, clés de chiffrement et chemins internes sont anonymisés conformément au protocole OPSEC.",
    explorePillars: "Explorer les 4 Piliers d'Ingénierie",
    adrSectionTitle: "Séquence des 11 Décisions d'Architecture (ADRs)",
    adrSectionSubtitle: "Historique formel des choix techniques, compromis de conception et invariants imposés sur la plateforme.",
    tableTab: "Spécifications & Invariants",
    screenshotTab: "Preuves Visuelles UI",

    modalTitle: "Demande d'Échange Technique & Accès Staging",
    modalDesc: "Renseignez vos coordonnées professionnelles pour échanger avec A.Y. Saoula ou planifier une revue d'architecture.",
    nameLabel: "Nom Complet & Titre",
    emailLabel: "Adresse Email Professionnelle",
    roleLabel: "Votre Profil (CTO, Lead Architect, Recruteur, Fondateur)",
    submitBtn: "Transmettre ma Demande",
    closeBtn: "Fermer",
    modalSuccessTitle: "Demande Transmise avec Succès",
    modalSuccessDesc: "Merci pour votre intérêt. Un message de confirmation vous a été adressé à votre adresse email.",

    footerTagline: "Moteur de réservation haute-concurrence pour le tourisme algérien.",
    footerStackHeading: "Stack Technique",
    footerRegulationsHeading: "Conformité Algérienne",
    footerOpsecHeading: "Sécurité & OPSEC",
    opsecNotice: "Les identifiants et clés de chiffrement de production sont anonymisés conformément au protocole OPSEC.",
    copyrightText: "WAKALATASFAR • Conçu par A.Y. Saoula (saoula.tech) • 238/238 Tests Validés",
  },
  en: {
    authorName: "A.Y. Saoula",
    authorRole: "Principal Systems Architect & Staff Frontend Engineer",
    authorWebsite: "https://saoula.tech",
    authorWebsiteLabel: "saoula.tech",
    authorLinkedin: "https://www.linkedin.com/in/a-y-saoula-12968827b/",
    authorEmail: "a.y.saoula@gmail.com",
    tryLiveLabel: "Try the Live Platform on saoula.tech",
    connectLinkedinLabel: "LinkedIn Profile",
    sendEmailLabel: "Direct Email Contact",

    heroBadge: "Engineering Technical Case Study & System Architecture",
    heroTitle: "WAKALATASFAR (وكالات أسفار)",
    heroSubtitle: "High-Concurrency White-Label Travel Booking Engine Engineered for Algerian Commerce",
    executiveSummary:
      "WAKALATASFAR is a proprietary commercial platform architected to eliminate the 4 historical bottlenecks of travel booking in Algeria: fragmented payment rails (CIB cards, Edahabia, CCP / BaridiMob postal transfers, Agency Cash), severe inventory contention during Sahara flash sales, recurring foreign currency cloud taxes, and rigid CMS monoliths. Built on a decoupled Hexagonal Core verified by 238/238 PHPUnit tests and 3,558 assertions on MySQL 8.",
    tryLiveBtn: "Try Live Staging on saoula.tech",
    explorePillarsBtn: "Explore 4 Engineering Pillars",
    exploreAdrsBtn: "Browse 11 ADRs",

    telemetryHeading: "Verified Production Telemetry",
    telemetryStatus: "100% Production Ready",

    pillarsHeading: "The 4 Architectural Pillars of WAKALATASFAR",
    pillarsSubheading:
      "Comprehensive companion to our LinkedIn engineering series. Each tab provides the exact interactive Archify topology, verified mathematical invariants, and Playwright UI evidence.",
    diagramTab: "Interactive Topology (Archify)",
    specsTab: "Specs & Invariants",
    screenshotsTab: "Live UI Evidence",
    codeTab: "Implementation Pattern",
    openDiagramExternal: "Open in New Tab",
    resetDiagram: "Reset View",
    fullscreenDiagram: "Fullscreen",
    closeFullscreen: "Exit Fullscreen",

    formulaHeading: "Formal Capacity Conservation Formula:",
    formulaDesc:
      "Formally proven invariant: If a traveler abandons checkout, the 900s Redis TTL key naturally expires, releasing capacity back to the available pool with 0 database writes.",

    mctaHeading: "Official Algerian Ministry of Tourism (MCTA) Cancellation Penalty Schedule:",
    timelineCol: "Cancellation Notice",
    refundCol: "Statutory Refund",
    legalCol: "Agency Quittance & Retention",
    systemCol: "Automated Workflow",
    tier1Timeline: "> 15 Days Before Departure",
    tier1Refund: "100% Full Refund",
    tier1Legal: "Zero Agency Penalty",
    tier1System: "Automated bank/CCP credit reversal",
    tier2Timeline: "7 to 15 Days Before Departure",
    tier2Refund: "50% Partial Refund",
    tier2Legal: "50% Retained for Airline Charters",
    tier2System: "Dossier balance adjustment & updated voucher",
    tier3Timeline: "< 7 Days Before Departure",
    tier3Refund: "0% Non-Refundable",
    tier3Legal: "100% Legal Forfeiture",
    tier3System: "Dossier cancelled, seats released to standby",

    screenshotSectionHeading: "Visual Verification Harness (Playwright Headless)",
    screenshotSectionSubheading: "Crisp 1440x900 (Desktop) and 390x844 (Mobile) screenshots captured directly from the live stack.",
    desktopView: "Desktop 1440x900",
    mobileView: "Mobile 390x844",
    inspectScreenshot: "Enlarge",
    clickToZoom: "Click to zoom",
    closeLightbox: "Close (Esc)",
    allRoles: "All Roles",
    roleGuest: "Public Traveler (B2C)",
    roleClient: "Registered Client",
    roleCorporate: "Corporate B2B / COS",
    roleAdmin: "Super Admin & Director",
    roleManager: "Bookings Manager",
    roleFilterLabel: "Filter by Persona / Role:",

    implementationTitle: "Architecture & Implementation Code Pattern",
    verifiedPattern: "Verified Production Code • Zero Hallucinations",

    adrHeading: "Architectural Decision Records (ADRs)",
    adrSubheading: "Exhaustive ledger of engineering trade-offs and structural choices (ADR-001 to ADR-013)",
    allCategory: "All Categories",
    recordsCount: "Decisions Documented",
    contextLabel: "Context & Friction:",
    decisionLabel: "Architectural Decision:",
    consequencesLabel: "Verified Consequences:",

    authorSectionHeading: "Architected & Engineered by A.Y. Saoula",
    authorSectionSubheading: "Principal Systems Architect & Staff Frontend Engineer",
    authorBio:
      "Specialist in high-concurrency distributed systems, decoupled Next.js/Laravel architectures, SATIM banking resilience, and Algerian regulatory compliance. Live demo hosted on saoula.tech.",
    architectBadge: "Senior Software Architect",

    ctaBannerTitle: "Interested in the Architecture or Testing the Live Solution?",
    ctaBannerSubtitle:
      "Try the live demonstration directly on saoula.tech or connect on LinkedIn / email for technical discussions.",
    ctaBannerAction: "Try Live on saoula.tech",

    contactCtaBtn: "Request Technical Demo",
    contactCtaTitle: "Schedule an Architecture Review or Test Live Staging",
    contactCtaSubtitle: "Connect directly with the platform architect or test live staging on saoula.tech.",
    sanitizedNotice: "All production credentials, internal paths, and encryption tokens are sanitized under OPSEC protocols.",
    explorePillars: "Explore 4 Engineering Pillars",
    adrSectionTitle: "Architectural Decision Records (11 ADRs)",
    adrSectionSubtitle: "Formal historical ledger of system trade-offs, architecture choices, and mathematical invariants.",
    tableTab: "Specifications & Invariants",
    screenshotTab: "Live UI Evidence",

    modalTitle: "Request Technical Discussion & Staging Access",
    modalDesc: "Provide your professional details to connect with A.Y. Saoula or schedule an architecture deep dive.",
    nameLabel: "Full Name & Title",
    emailLabel: "Work Email Address",
    roleLabel: "Your Role (CTO, Lead Architect, Recruteur, Founder)",
    submitBtn: "Send Request",
    closeBtn: "Close",
    modalSuccessTitle: "Request Successfully Dispatched",
    modalSuccessDesc: "Thank you for reaching out. A confirmation has been recorded and you will be contacted shortly.",

    footerTagline: "High-concurrency travel booking engine tailored for Algerian commerce.",
    footerStackHeading: "Technical Stack",
    footerRegulationsHeading: "Algerian Compliance",
    footerOpsecHeading: "Security & OPSEC",
    opsecNotice: "Production credentials and private encryption keys are sanitized under strict OPSEC protocol.",
    copyrightText: "WAKALATASFAR • Built by A.Y. Saoula (saoula.tech) • 238/238 Tests Passing",
  },
  ar: {
    authorName: "ع. ي. صاولة (A.Y. Saoula)",
    authorRole: "كبير مهندسي النظم المعمارية ومطور واجهات متقدم (Principal Systems Architect & Staff Frontend Engineer)",
    authorWebsite: "https://saoula.tech",
    authorWebsiteLabel: "saoula.tech",
    authorLinkedin: "https://www.linkedin.com/in/a-y-saoula-12968827b/",
    authorEmail: "a.y.saoula@gmail.com",
    tryLiveLabel: "تجربة المنصة مباشرة على saoula.tech",
    connectLinkedinLabel: "الملف الشخصي على LinkedIn",
    sendEmailLabel: "التواصل المباشر عبر البريد الإلكتروني",

    heroBadge: "دراسة حالة تقنية ومعمارية برمجية متقدمة",
    heroTitle: "منصة وكالات أسفار (WAKALATASFAR)",
    heroSubtitle: "محرك حجز سياحي أبيض التسمية عالي التزامن ومصمم خصيصاً للتجارة والمدفوعات الجزائرية",
    executiveSummary:
      "وكالات أسفار هي منصة تجارية متكاملة صُممت للقضاء على 4 عقبات تاريخية في رقمنة السياحة بالجزائر: تعدد قنوات الدفع (بطاقات CIB، الذهبية، بريدي موب، والدفع نقداً بالوكالة)، تعارض الحجوزات أثناء ذروة رحلات الجنوب والعمرة، أعباء الاشتراكات السحابية بالعملة الصعبة، والجمود البرمجي للمنصات التقليدية. بنية سداسية مفككة تم التحقق منها عبر 238 فحصاً و 3558 تأكيداً برمجياً على MySQL 8.",
    tryLiveBtn: "تجربة المنصة الحية على saoula.tech",
    explorePillarsBtn: "استعراض الركائز الهندسية الأربعة",
    exploreAdrsBtn: "استعراض 11 قراراً معمارياً (ADR)",

    telemetryHeading: "مؤشرات الأداء والجودة الموثقة",
    telemetryStatus: "جاهز للإنتاج 100%",

    pillarsHeading: "الركائز الهندسية الأربعة لمنصة وكالات أسفار",
    pillarsSubheading:
      "الدليل الهندسي الشامل الموازي لسلسلة لينكد إن. يوفر كل تبويب مخطط Archify التفاعلي، والمعادلات الرياضية، والأدلة المرئية الملتقطة آلياً.",
    diagramTab: "المخطط التفاعلي (Archify)",
    specsTab: "المعادلات والخصائص",
    screenshotsTab: "الأدلة المرئية للواجهات",
    codeTab: "نموذج الشيفرة المصدرية",
    openDiagramExternal: "فتح في تبويب مستقل",
    resetDiagram: "إعادة ضبط العرض",
    fullscreenDiagram: "ملء الشاشة",
    closeFullscreen: "خروج من ملء الشاشة",

    formulaHeading: "المعادلة الرياضية المحكمة للحفاظ على الطاقة الاستيعابية :",
    formulaDesc:
      "قاعدة مثبتة رياضياً: في حال تراجع العميل عن إكمال الحجز، تنتهي صلاحية مفتاح Redis المؤقت (900 ثانية) تلقائياً وتُعاد المقاعد إلى المخزون المتاح دون استهلاك أي اتصال بقاعدة البيانات.",

    mctaHeading: "الجدول القانوني للإلغاء والاسترجاع المالي (وزارة السياحة والصناعة التقليدية - MCTA) :",
    timelineCol: "فترة الإخطار بالإلغاء",
    refundCol: "نسبة التعويض المالي",
    legalCol: "المخالصة وحق الوكالة",
    systemCol: "المعالجة الآلية في النظام",
    tier1Timeline: "أكثر من 15 يوماً قبل الرحلة",
    tier1Refund: "100% استرجاع كامل",
    tier1Legal: "بدون أي اقتطاع",
    tier1System: "إرجاع تلقائي لحساب العميل أو رصيد بنكي",
    tier2Timeline: "بين 7 إلى 15 يوماً قبل الرحلة",
    tier2Refund: "50% استرجاع جزئي",
    tier2Legal: "اقتطاع 50% (تكاليف الطيران العارض)",
    tier2System: "تعديل رصيد الملف وإعادة إصدار الوصل",
    tier3Timeline: "أقل من 7 أيام قبل موعد الرحلة",
    tier3Refund: "0% غير قابل للاسترجاع",
    tier3Legal: "سقوط الحق المالي قانونياً",
    tier3System: "إلغاء الملف وطرح المقعد لقائمة الانتظار",

    screenshotSectionHeading: "التدقيق المرئي الفعلي (محرك Playwright)",
    screenshotSectionSubheading: "لقطات شاشة حقيقية بدقة 1440x900 (كمبيوتر) و 390x844 (هاتف) ملتقطة من النظام المباشر.",
    desktopView: "حاسوب 1440x900",
    mobileView: "هاتف محمول 390x844",
    inspectScreenshot: "تكبير",
    clickToZoom: "انقر للتكبير والتكبير التفاعلي",
    closeLightbox: "إغلاق (Esc)",
    allRoles: "جميع الأدوار",
    roleGuest: "الزائر والمسافر (B2C)",
    roleClient: "العميل المسجل",
    roleCorporate: "الشركات ولجان المؤسسات (COS)",
    roleAdmin: "الإدارة والمدير العام",
    roleManager: "مدير الحجوزات والعمليات",
    roleFilterLabel: "تصفية حسب الدور في النظام :",

    implementationTitle: "نموذج المعمارية والشيفرة المصدرية",
    verifiedPattern: "كود إنتاجي مثبت • خالٍ تماماً من التخمين",

    adrHeading: "سجل القرارات المعمارية الهندسية (ADRs)",
    adrSubheading: "توثيق شامل للمفاضلات التقنية والقرارات الاستراتيجية الحاكمة (ADR-001 إلى ADR-013)",
    allCategory: "جميع المجالات",
    recordsCount: "قراراً معمارياً موثقاً",
    contextLabel: "السياق والعقبة التشغيلية :",
    decisionLabel: "القرار الهندسي :",
    consequencesLabel: "النتائج المثبتة :",

    authorSectionHeading: "تصميم وتطوير: ع. ي. صاولة (A.Y. Saoula)",
    authorSectionSubheading: "كبير مهندسي النظم المعمارية ومطور واجهات متقدم (Principal Systems Architect)",
    authorBio:
      "خبير في تصميم النظم الموزعة عالية التزامن، المعماريات المفككة بين Next.js و Laravel، آليات الدفع عبر شبكة SATIM الوطنية، والامتثال للقوانين واللوائح الجزائرية. التجربة الحية متاحة على saoula.tech.",
    architectBadge: "كبير مهندسي البرمجيات",

    ctaBannerTitle: "هل ترغب في مناقشة البنية المعمارية أو تجربة المنصة ؟",
    ctaBannerSubtitle:
      "يمكنك تجربة المنصة الحية مباشرة عبر saoula.tech أو التواصل معي على LinkedIn والبريد الإلكتروني لمناقشة التفاصيل الهندسية.",
    ctaBannerAction: "تجربة المنصة على saoula.tech",

    contactCtaBtn: "طلب تجربة تقنية",
    contactCtaTitle: "جدولة جلسة مراجعة معمارية أو تجربة المنصة الحية",
    contactCtaSubtitle: "تواصل مباشرة مع مهندس المنصة أو قم بتجربة البيئة الحية عبر saoula.tech.",
    sanitizedNotice: "تم حجب وتعميم مفاتيح الإنتاج وأوامر الإدارة الحساسة وفقاً لقواعد السرية التشغيلية (OPSEC).",
    explorePillars: "استعراض الركائز الهندسية الأربعة",
    adrSectionTitle: "سجل القرارات المعمارية الهندسية (11 قراراً ADR)",
    adrSectionSubtitle: "توثيق رسمي للاختيارات التقنية والمفاضلات المعمارية وقواعد الأمان الحاكمة في النظام.",
    tableTab: "المعادلات والخصائص",
    screenshotTab: "الأدلة المرئية للواجهات",

    modalTitle: "طلب نقاش تقني وصلاحية دخول البيئة التجريبية",
    modalDesc: "أدخل معلوماتك المهنية للتواصل مع المهندس A.Y. Saoula أو لترتيب جلسة مراجعة معمارية.",
    nameLabel: "الاسم الكامل والمنصب",
    emailLabel: "البريد الإلكتروني المهني",
    roleLabel: "صفتك (مدير تقني، مهندس رئيسي، مسؤول توظيف، صاحب وكالة)",
    submitBtn: "إرسال طلب التواصل",
    closeBtn: "إغلاق",
    modalSuccessTitle: "تم استلام طلبك بنجاح",
    modalSuccessDesc: "شكراً لاهتمامك. تم تسجيل بياناتك وسيتم التواصل معك في أقرب وقت عبر البريد الإلكتروني.",

    footerTagline: "محرك حجز سياحي عالي التزامن مخصص لبيئة التجارة الجزائرية.",
    footerStackHeading: "التقنيات المستخدمة",
    footerRegulationsHeading: "الامتثال الجزائري",
    footerOpsecHeading: "الأمن والسرية (OPSEC)",
    opsecNotice: "تم حجب وتعميم مفاتيح الإنتاج وأوامر الإدارة الحساسة وفقاً لقواعد السرية التشغيلية (OPSEC).",
    copyrightText: "وكالات أسفار • تطوير A.Y. Saoula (saoula.tech) • اجتياز 238/238 فحصاً بنجاح",
  },
};
