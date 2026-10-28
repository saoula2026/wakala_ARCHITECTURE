import { Language } from "./translations";

export interface PillarData {
  id: string;
  badge: string;
  title: string;
  headline: string;
  description: string;
  diagramPath: string;
  diagramTitle: string;
  keyMetrics: { label: string; value: string; desc: string }[];
  technicalPillars: { title: string; points: string[] }[];
  codeSnippetTitle: string;
  codeSnippet: string;
  screenshots: {
    title: string;
    description: string;
    desktopSrc: string;
    mobileSrc?: string;
  }[];
}

export const GET_PILLARS_DATA = (lang: Language): PillarData[] => {
  if (lang === "ar") {
    return [
      {
        id: "concurrency",
        badge: "الركيزة 1 • سلسلة لينكد إن - الجزء الأول",
        title: "إدارة المخزون عالي التزامن وهيكلية الإقفال المالي الموحد",
        headline: "القضاء على الحجز المزدوج تحت ضغط 5,000 طلب حجز متزامن في الثانية",
        description:
          "تشهد مواسم رحلات جانت الصحراوية ومواسم العمرة في رمضان تدفقات حجوزات هائلة في دقائق معدودة. إن محاولة قفل الصفوف مباشرة في قاعدة البيانات تسبب شلل خوادم MySQL واستنزاف حوض الاتصالات. قمنا بتصميم بوابة حجز ذرية في الذاكرة عبر Redis Lua مقرونة بهرمية أقفال InnoDB صارمة.",
        diagramPath: "/diagrams/diagram-1-inventory-locks.html",
        diagramTitle: "بوابة Redis Lua الذرية وهرمية أقفال MySQL الموحدة",
        keyMetrics: [
          { label: "معدل التدفق", value: "5,000 طلب/ثانية", desc: "تحمل مستمر لطلبات الحجز المتزامنة" },
          { label: "زمن استجابة الحجز", value: "< 1.2 ميلي ثانية", desc: "تنفيذ ذري فوري عبر برمجية Lua في Redis" },
          { label: "صلاحية الحجز المؤقت", value: "900 ثانية (15 دقيقة)", desc: "استرجاع آلي للمقاعد غير المسددة" },
          { label: "معدل التعارض الميت", value: "0.00%", desc: "ترتيب تسلسلي محكم لأقفال المعاملات" },
        ],
        technicalPillars: [
          {
            title: "المعادلة الرياضية المحكمة للحفاظ على الطاقة الاستيعابية",
            points: [
              "المقاعد المتاحة = الطاقة الإجمالية − مجموع الحجوزات المؤكدة − مجموع الحجوزات المؤقتة النشطة في Redis",
              "ضمان حتمي للعدالة التنافسية وعدم تسجيل أي مقعد بالسالب مهما بلغ ضغط الطلبات",
              "تم التحقق البرمجي التام عبر 238 فحصاً في PHPUnit وسيناريوهات محاكاة سباق الحجوزات",
            ],
          },
          {
            title: "بوابة Redis Lua الذرية (HOLD_LUA)",
            points: [
              "فحص وتخفيض المقاعد الذري في خيط معالجة واحد دون تجميد قواعد البيانات",
              "توليد مفتاح حجز مؤقت ذي صلاحية 15 دقيقة صارمة لمنع احتكار المقاعد",
              "استرجاع تلقائي للمقاعد عبر سكربت RELEASE_LUA فور الإلغاء أو انتهاء الصلاحية",
            ],
          },
          {
            title: "الهيكلية الموحدة للأقفال المتراتبة",
            points: [
              "ترتيب الحصول على الأقفال: PackageDate (الجذر) ➔ Booking (الفرع) ➔ Payment (المحاسبة)",
              "منع حدوث أي تعليق دائري (Deadlock) بين العمال المعالجين للمعاملات المالية",
              "توافق تام مع معايير ACID للأمان المالي تحت أقصى مستويات التزامن",
            ],
          },
        ],
        codeSnippetTitle: "بوابة الحجز الذرية في الذاكرة (HOLD_LUA)",
        codeSnippet: `-- Atomic Redis Lua Seat Reservation Script
local available = tonumber(redis.call('GET', KEYS[1]) or '-1')
local requested = tonumber(ARGV[1])

if available < requested then
    return 0 -- Insufficient seats available
end

-- Atomically decrement in-memory inventory
redis.call('DECRBY', KEYS[1], requested)

-- Anchor ephemeral seat hold with 900s TTL
redis.call('SETEX', KEYS[2], tonumber(ARGV[2]), ARGV[3])
return 1 -- Hold successfully granted`,
        screenshots: [
          {
            title: "عارض الوجهات الديناميكي وشريط البحث الذكي",
            description:
              "سلايدر وجهات ديناميكي مستند إلى قاعدة البيانات (جانت، مكة المكرمة، المدينة المنورة) مع شريط تصفية لـ 58 ولاية.",
            desktopSrc: "/screenshots/01-hero-slider.png",
            mobileSrc: "/screenshots/01-hero-slider-mobile.png",
          },
          {
            title: "شبكة حزم الرحلات السياحية التفاعلية",
            description:
              "تصميم مريح مع روابط متمددة كاملة، إبراز الأسعار بالدينار الجزائري، وحساب فوري للمقاعد المتبقية.",
            desktopSrc: "/screenshots/02-package-cards.png",
            mobileSrc: "/screenshots/02-package-cards-mobile.png",
          },
        ],
      },
      {
        id: "payment",
        badge: "الركيزة 2 • سلسلة لينكد إن - الجزء الثاني",
        title: "المعمارية السداسية لقنوات الدفع وسياسة العزل (ADR-011)",
        headline: "توحيد شبكة SATIM، بريدي موب، والدفع نقداً دون أي هدر مالي",
        description:
          "أكثر من 60% من الحجوزات الرقمية في الجزائر تفشل عند إلزام المسافرين بالبطاقات الدولية فقط. توفر منصة وكالات أسفار الربط المباشر مع شبكة SATIM (بطاقات CIB والذهبية)، والدفع عبر بريد الجزائر (BaridiMob/CCP) مع حماية المقاعد لمدة 24 ساعة، ونقداً بالوكالة.",
        diagramPath: "/diagrams/diagram-2-payment-quarantine.html",
        diagramTitle: "المخطط السداسي لحالات الدفع والعزل الوقائي (ADR-011)",
        keyMetrics: [
          { label: "قنوات الدفع", value: "3 قنوات رئيسية", desc: "شبكة SATIM الوطنية، بريد الجزائر، والدفع بالوكالة" },
          { label: "منع الفقد المالي", value: "100%", desc: "عزل العمليات المتباينة دون إلغاء تلقائي" },
          { label: "العربون القانوني", value: "30% إلزامي", desc: "احتساب آلي لنسبة العربون القانوني للرحلات" },
          { label: "التحقق الأمني", value: "HMAC-SHA256", desc: "توقيع رقمي مشفر لجميع إشعارات الدفع" },
        ],
        technicalPillars: [
          {
            title: "سياسة عزل إشعارات الدفع (ADR-011)",
            points: [
              "عزل أي إشعار دفع مصرفي وارد بمبلغ غير مطابق أو وارد بعد انتهاء المهلة في حالة requires_review",
              "منع التراجع التلقائي (Rollback) لحماية أموال العميل المسحوبة فعلياً من الحساب البنكي",
              "إتاحة واجهة تدقيق مخصصة ومحصنة بالصلاحيات لتمكين مسؤولي المحاسبة من تسوية الفروقات",
            ],
          },
          {
            title: "الجدول القانوني للإلغاء والاسترجاع (وزارة السياحة)",
            points: [
              "أكثر من 15 يوماً قبل الرحلة: 100% استرجاع كامل للمبلغ",
              "بين 7 إلى 15 يوماً قبل الرحلة: 50% استرجاع جزئي مع الاحتفاظ بـ 50% لتكاليف الطيران",
              "أقل من 7 أيام قبل الرحلة: 0% سقوط الحق المالي قانونياً وفق اللوائح الوطنية",
              "محاكي مالي تفاعلي في بوابة المسافر يعرض المبلغ الدقيق قبل تأكيد الإلغاء",
            ],
          },
          {
            title: "مسار التحقق البشري من وصولات بريدي موب",
            points: [
              "منح مهلة حجز مؤكدة لمدة 24 ساعة لراغبي التحويل البريدي عبر بريدي موب أو CCP",
              "عارض تدقيق منقسم يتيح فحص الصورة والتأكد من رقم المعاملة قبل إصدار التذكرة",
              "إعادة المقاعد فورياً إلى المخزون في حال رفض الوصل لعدم صحة العملية",
            ],
          },
        ],
        codeSnippetTitle: "معالج الحجر الوقائي ومطابقة المبالغ (ADR-011)",
        codeSnippet: `// Discrepancy Quarantine Logic (ADR-011)
if ($paidAmountDzd !== $booking->due_amount_dzd || $booking->isHoldExpired()) {
    $booking->update([
        'status' => 'requires_review',
        'quarantine_reason' => $paidAmountDzd !== $booking->due_amount_dzd 
            ? 'AMOUNT_MISMATCH' 
            : 'HOLD_EXPIRED_AFTER_SETTLEMENT',
        'raw_webhook_payload' => encrypt($payload)
    ]);
    
    // Alert financial reconciliation ledger (never rollback captured funds)
    event(new PaymentRequiresReviewEvent($booking));
    return response()->json(['status' => 'quarantined_for_review'], 202);
}`,
        screenshots: [
          {
            title: "معالج إتمام الحجز ثلاثي الخطوات",
            description:
              "حلقات التحقق اللحظي، خيار تسديد العربون 30%، شعارات CIB والذهبية، وتذييل الامتثال لمعيار SATIM 3020.",
            desktopSrc: "/screenshots/03-checkout-satim.png",
          },
        ],
      },
      {
        id: "security",
        badge: "الركيزة 3 • سلسلة لينكد إن - الجزء الثالث",
        title: "الأمن السيبراني منعدم الثقة (Zero-Trust) والحماية المتقدمة",
        headline: "تحصين المنصة ضد ثغرات ملفات الويب الخبيثة واستنزاف الهويات",
        description:
          "حماية وثائق هوية المسافرين (رقم التعريف الوطني NIN وجواز السفر) ووصولات التحويلات المصرفية وفقاً للقانون الجزائري 18-07 لحماية البيانات الشخصية، مع حماية شاملة من هجمات الحقن دون الاعتماد على خدمات تخزين أجنبية مكلفة.",
        diagramPath: "/diagrams/diagram-3-security-defense.html",
        diagramTitle: "محيط الحماية متعدد الطبقات منعدم الثقة وعزل الوثائق",
        keyMetrics: [
          { label: "تشفير الهويات", value: "AES-256-CBC", desc: "تشفير كامل لوثائق الركاب وفق القانون 18-07" },
          { label: "فحص البايتات", value: "finfo ثنائي", desc: "مصفوفة حظر مكونة من 8 أطياف لملفات الويب الخبيثة" },
          { label: "أمان الجلسات", value: "HttpOnly + Lax", desc: "عزل ملفات الارتباط ومنع استخراجها عبر XSS" },
          { label: "معمارية التخزين", value: "0 $ تكاليف سحابية", desc: "بث آمن للوصولات عبر قرص معزول تماماً" },
        ],
        technicalPillars: [
          {
            title: "مصفوفة فحص البايتات السحرية (Magic-Byte Inspection)",
            points: [
              "استخدام مكتبة finfo للتحقق من البصمة الثنائية للصور ورفض ملفات PHP المتخفية كصور",
              "حظر الامتدادات المزدوجة مثل (.php.jpg) وملفات SVG التي تحوي أكواد خبيثة",
              "إعادة تسمية الملفات بسلاسل UUID مشفرة وتخزينها خارج المجلد العام المتاح للويب",
            ],
          },
          {
            title: "حماية وصولات التحويل ومنع ثغرات IDOR",
            points: [
              "تخزين الوصولات في قرص محمي ومعزول تماماً عن النطاق العام",
              "الوصول مقيد بروابط مؤقتة وموقعة إلكترونياً تخضع لسياسات أذونات صارمة",
              "منع استعراض ملفات المسافرين الآخرين أو محاولة تخمين أرقام الوصولات",
            ],
          },
          {
            title: "إقفال الحسابات المرتبط بالمفتاح المشفر",
            points: [
              "ربط عدادات الإقفال ضد التخمين بالمفتاح المشفر للحساب بدلاً من عنوان IP المجرد",
              "حماية شبكات الشركات ومقاهي الإنترنت في الجزائر من الحظر الجماعي الخاطئ",
              "توفير مسار آمن ومنفصل لاستعادة الحسابات عبر البريد المعتمد",
            ],
          },
        ],
        codeSnippetTitle: "فحص البايتات الثنائية ومكافحة ملفات Polyglot",
        codeSnippet: `// Zero-Trust Upload Validation (finfo Magic-Byte)
$finfo = new finfo(FILEINFO_MIME_TYPE);
$mimeType = $finfo->file($uploadedFile->getPathname());

$allowedMimes = ['image/jpeg', 'image/png', 'application/pdf'];
if (!in_array($mimeType, $allowedMimes, true)) {
    throw new SecurityException("Invalid binary signature: suspicious payload rejected.");
}

// Ensure file contains valid image dimensions (blocks embedded PHP polyglots)
if (str_starts_with($mimeType, 'image/') && @getimagesize($uploadedFile->getPathname()) === false) {
    throw new SecurityException("Polyglot shell detected in image headers.");
}`,
        screenshots: [
          {
            title: "استوديو إعدادات الوكالة بيضاء التسمية",
            description:
              "لوحة تحكم مشددة لإدارة الاعتمادات الرسمية (رقم الاعتماد MCTA، السجل التجاري، NIF) والحسابات البنكية.",
            desktopSrc: "/screenshots/05-admin-studio.png",
          },
        ],
      },
      {
        id: "caching",
        badge: "الركيزة 4 • سلسلة لينكد إن - الجزء الرابع",
        title: "التخزين المؤقت ثنائي الطبقات والتحديث اللحظي في 60 ثانية",
        headline: "سرعة تحميل LCP أقل من 800 ميلي ثانية وتحديث فوري للعلامة التجارية",
        description:
          "تحتاج الوكالات السياحية الشريكة إلى تحديثات فورية لأسعارها وهويتها البصرية، بينما يتطلب المسافرون عبر شبكات الهواتف سرعة تصفح لحظية. قمنا بتطوير بنية تخزين مؤقت ثنائية الطبقات تجمع بين ذاكرة Bounded LRU في المتصفح وكاش Redis في الخادم.",
        diagramPath: "/diagrams/diagram-4-caching-propagation.html",
        diagramTitle: "بنية الذاكرة ثنائية الطبقات ونشر التحديثات خلال 60 ثانية",
        keyMetrics: [
          { label: "ذاكرة المتصفح", value: "أقل من 2 ميغابايت", desc: "ذاكرة حلقية محدودة بـ 10 صفحات لمنع التسرب" },
          { label: "سرعة LCP", value: "أقل من 800 ميلي ثانية", desc: "تحميل أسرع العناصر البصرية على شبكات الجوال" },
          { label: "كاش الخادم", value: "300 ثانية TTL", desc: "طبقة كاش Redis فائقة السرعة للكتالوج" },
          { label: "مزامنة التعديلات", value: "أقل من 60 ثانية", desc: "إفراغ تفاعلي للكاش فور تعديل الإدارة" },
        ],
        technicalPillars: [
          {
            title: "ذاكرة BoundedLRUCache في TypeScript",
            points: [
              "مخزن حلقي محدد بدقة بـ 10 صفحات مع صلاحية 180 ثانية في ذاكرة RAM للمتصفح",
              "يضمن استهلاكاً أقل من 2 ميغابايت، مانعاً أي تراجع في أداء هواتف المسافرين",
              "استجابة فورية 0 ميلي ثانية عند الرجوع والتقدم بين صفحات الرحلات",
            ],
          },
          {
            title: "كاش Redis لكتالوج الرحلات في الخادم",
            points: [
              "يمتص 98.4% من استعلامات القراءة أثناء الحملات الترويجية ومواسم الذروة",
              "استخدام وسوم الكاش (catalog:packages) للإفراغ الجراحي الذكي دون التأثير على العمليات الأخرى",
              "عزل حركة قراءة الكتالوج عن استعلامات الدفع في قاعدة بيانات MySQL",
            ],
          },
          {
            title: "نشر تعديلات الوكالة بيضاء التسمية في 60 ثانية",
            points: [
              "أي تعديل لبيانات الوكالة أو أرقام الاعتماد أو الأسعار يطلق حدث إفراغ الكاش",
              "نشر التعديلات عبر كل خوادم المنصة وصفحات الويب ووصولات الحجز في أقل من دقيقة",
              "صفر انقطاع وصفر تعارض بين ما يراه الزائر وما تسجله لوحة الإدارة",
            ],
          },
        ],
        codeSnippetTitle: "فئة BoundedLRUCache في TypeScript للعميل",
        codeSnippet: `// TypeScript Client-Side BoundedLRUCache (< 2 MB Heap)
export class BoundedLRUCache<K, V> {
  private readonly capacity: number = 10;
  private readonly ttlMs: number = 180_000; // 3 minutes
  private cache = new Map<K, { value: V; expiresAt: number }>();

  get(key: K): V | null {
    const entry = this.cache.get(key);
    if (!entry) return null;
    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      return null;
    }
    // Refresh LRU order (delete & re-insert)
    this.cache.delete(key);
    this.cache.set(key, entry);
    return entry.value;
  }
}`,
        screenshots: [
          {
            title: "بوابة الشركات ولجان المشاركة (B2B / COS)",
            description:
              "مقارن عروض متعدد للشركات (اقتصادي، مريح، وسفاري برستيج ⭐) مع احتساب مالي فوري وتوليد فواتير شكلية.",
            desktopSrc: "/screenshots/04-b2b-portal.png",
          },
        ],
      },
    ];
  }

  if (lang === "en") {
    return [
      {
        id: "concurrency",
        badge: "Pillar 1 • LinkedIn Series Part 1",
        title: "High-Concurrency Inventory & Global Lock Topology",
        headline: "Eliminating Double-Bookings Under 5,000 Flash-Sale Requests per Second",
        description:
          "Seasonal desert expeditions in Djanet and Ramadan Umrah charters generate massive traffic spikes. Directly acquiring row-level database locks exhausts connection pools and causes thread starvation. We designed an in-memory atomic Lua reservation gate paired with strict hierarchical InnoDB lock ordering.",
        diagramPath: "/diagrams/diagram-1-inventory-locks.html",
        diagramTitle: "Sub-Millisecond Redis Lua Gate & Unified Global Lock Hierarchy",
        keyMetrics: [
          { label: "Throughput", value: "5,000 req/s", desc: "Sustained simultaneous hold requests" },
          { label: "Hold Latency", value: "< 1.2 ms", desc: "Atomic Lua execution time in Redis" },
          { label: "Hold TTL", value: "900s (15 min)", desc: "Automatic ephemeral seat reclamation" },
          { label: "Deadlock Rate", value: "0.00%", desc: "Strict parent-child lock sequencing" },
        ],
        technicalPillars: [
          {
            title: "Mathematical Accounting Invariant",
            points: [
              "Available Seats = Total Capacity − ∑(Held Bookings) − ∑(Active Unbooked Redis Holds)",
              "Enforces deterministic capacity conservation across concurrent reservation sessions",
              "Formally verified across 238 PHPUnit tests and high-concurrency race condition simulations",
            ],
          },
          {
            title: "Redis Atomic Lua Gate (HOLD_LUA)",
            points: [
              "Sub-millisecond inventory check and decrement executed in single atomic Redis thread",
              "Generates ephemeral hold key with strict 900-second TTL (15 minutes)",
              "Automatic seat restitution via RELEASE_LUA on hold timeout or explicit cancellation",
            ],
          },
          {
            title: "Unified Global Lock Sequencing",
            points: [
              "Order of acquisition: PackageDate (Parent Root) ➔ Booking (Child) ➔ Payment (Ledger)",
              "Eliminates circular lock wait conditions across concurrent multi-tenant workers",
              "ACID compliance guaranteed without long-lived row lock contention",
            ],
          },
        ],
        codeSnippetTitle: "Atomic Lua Reservation Gate (HOLD_LUA)",
        codeSnippet: `-- Atomic Redis Lua Seat Reservation Script
local available = tonumber(redis.call('GET', KEYS[1]) or '-1')
local requested = tonumber(ARGV[1])

if available < requested then
    return 0 -- Insufficient seats available
end

-- Atomically decrement in-memory inventory
redis.call('DECRBY', KEYS[1], requested)

-- Anchor ephemeral seat hold with 900s TTL
redis.call('SETEX', KEYS[2], tonumber(ARGV[2]), ARGV[3])
return 1 -- Hold successfully granted`,
        screenshots: [
          {
            title: "Database-Driven Hero Slider & Live Search Bar",
            description:
              "Dynamic destination carousel featuring Djanet Sahara, Makkah, and Madinah with sticky 58-Wilaya filter navigation.",
            desktopSrc: "/screenshots/01-hero-slider.png",
            mobileSrc: "/screenshots/01-hero-slider-mobile.png",
          },
          {
            title: "Destination & Package Catalog Grid",
            description:
              "Full-card stretched-link UX with live pricing badges in DZD, flight inclusions, and departure seat counters.",
            desktopSrc: "/screenshots/02-package-cards.png",
            mobileSrc: "/screenshots/02-package-cards-mobile.png",
          },
        ],
      },
      {
        id: "payment",
        badge: "Pillar 2 • LinkedIn Series Part 2",
        title: "Hexagonal Multi-Canal Payment & ADR-011 Quarantine Policy",
        headline: "Unifying SATIM CIB, Edahabia, BaridiMob & Cash With Zero Financial Leakage",
        description:
          "Over 60% of Algerian digital bookings fail when foreign credit cards are required. Wakalatasfar unifies instant GIE SATIM cards, postal CCP/BaridiMob bank transfers with 24-hour hold protection, and agency cash desks under a resilient Hexagonal Core.",
        diagramPath: "/diagrams/diagram-2-payment-quarantine.html",
        diagramTitle: "Hexagonal State Machine & Discrepancy Quarantine (ADR-011)",
        keyMetrics: [
          { label: "Payment Channels", value: "3 Core Canals", desc: "SATIM (CIB/Edahabia), BaridiMob/CCP, Guichet Cash" },
          { label: "Data Loss Prevention", value: "100%", desc: "ADR-011 quarantine prevents blind rollback" },
          { label: "Statutory Deposit", value: "30% Legal", desc: "Acompte Légal automated calculation" },
          { label: "Audit Verification", value: "HMAC-SHA256", desc: "Signed gateway webhook authentication" },
        ],
        technicalPillars: [
          {
            title: "ADR-011 Webhook Quarantine Policy",
            points: [
              "Webhooks arriving with amount/currency mismatches or after hold expiration enter requires_review",
              "Transactions are NEVER rolled back blindly, preventing loss of customer funds captured at bank switches",
              "Role-Gated discrepancy resolution tool enables authorized finance managers to reconcile edge cases",
            ],
          },
          {
            title: "MCTA Statutory Cancellation Schedule",
            points: [
              "> 15 Days Before Departure: 100% Full Statutory Refund",
              "7 to 15 Days Before Departure: 50% Partial Statutory Refund",
              "< 7 Days Before Departure: 0% Non-Refundable (Legal Forfeiture)",
              "Traveler self-service portal includes interactive refund simulator modal before cancellation",
            ],
          },
          {
            title: "Postal Slip Inspection Queue",
            points: [
              "BaridiMob & CCP transfers grant a 24-hour protected hold window",
              "Uploaded receipts stream through an authenticated dual-pane audit inspector",
              "Automatic seat restoration on slip rejection via scheduled inventory reconciliation",
            ],
          },
        ],
        codeSnippetTitle: "ADR-011 Quarantine & Discrepancy Handler",
        codeSnippet: `// Discrepancy Quarantine Logic (ADR-011)
if ($paidAmountDzd !== $booking->due_amount_dzd || $booking->isHoldExpired()) {
    $booking->update([
        'status' => 'requires_review',
        'quarantine_reason' => $paidAmountDzd !== $booking->due_amount_dzd 
            ? 'AMOUNT_MISMATCH' 
            : 'HOLD_EXPIRED_AFTER_SETTLEMENT',
        'raw_webhook_payload' => encrypt($payload)
    ]);
    
    // Alert financial reconciliation ledger (never rollback captured funds)
    event(new PaymentRequiresReviewEvent($booking));
    return response()->json(['status' => 'quarantined_for_review'], 202);
}`,
        screenshots: [
          {
            title: "3-Step High-Concurrency Checkout Wizard",
            description:
              "Red peer-validation state triggers, 30% legal deposit toggle, certified CIB/Edahabia badges, and mandatory SATIM 3020 footer.",
            desktopSrc: "/screenshots/03-checkout-satim.png",
          },
        ],
      },
      {
        id: "security",
        badge: "Pillar 3 • LinkedIn Series Part 3",
        title: "Zero-Trust Security & Anti-IDOR Defense-in-Depth Matrix",
        headline: "Hardening Algerian E-Commerce Against Polyglot Web Shells & Data Harvesting",
        description:
          "Handling sensitive passenger identity documents (NIN / Passport) and financial postal receipts requires strict adherence to Algerian Law 18-07 on personal data protection and comprehensive perimeter defense without recurring cloud storage expenses.",
        diagramPath: "/diagrams/diagram-3-security-defense.html",
        diagramTitle: "Multi-Layer Zero-Trust Hardening & Isolation Perimeter",
        keyMetrics: [
          { label: "PII Encryption", value: "AES-256-CBC", desc: "Law 18-07 passenger document encryption" },
          { label: "MIME Inspection", value: "finfo Binary", desc: "8-vector polyglot shell rejection matrix" },
          { label: "Session Security", value: "HttpOnly + Lax", desc: "Same-origin cookie token isolation" },
          { label: "Storage Architecture", value: "$0 Cloud Tax", desc: "Isolated non-public disk streaming" },
        ],
        technicalPillars: [
          {
            title: "MIME Magic-Byte Rejection Matrix",
            points: [
              "finfo inspection validates file binary signatures against PHP/Perl/ASP polyglot web shells",
              "Rejects double extensions (.php.jpg), SVG embedded scripts, and null-byte bypass attacks",
              "Stored files are renamed with cryptographic UUIDs on isolated non-public storage disks",
            ],
          },
          {
            title: "Anti-IDOR Financial Document Streaming",
            points: [
              "Receipts stored outside the public document root (isolated non-public storage disk)",
              "Accessible exclusively through signed, temporary, role-gated streaming endpoints",
              "Prevents enumeration and unauthorized access to other travelers' banking records",
            ],
          },
          {
            title: "Account-Bound Brute-Force Lockout",
            points: [
              "Rate limits keyed by Account-Bound SHA-1 Keys rather than raw IP addresses",
              "Prevents denial-of-service across Algerian corporate NAT networks and cybercafés",
              "Dedicated out-of-band credential recovery channel preserves user availability",
            ],
          },
        ],
        codeSnippetTitle: "Binary finfo Magic-Byte & Anti-Polyglot Validator",
        codeSnippet: `// Zero-Trust Upload Validation (finfo Magic-Byte)
$finfo = new finfo(FILEINFO_MIME_TYPE);
$mimeType = $finfo->file($uploadedFile->getPathname());

$allowedMimes = ['image/jpeg', 'image/png', 'application/pdf'];
if (!in_array($mimeType, $allowedMimes, true)) {
    throw new SecurityException("Invalid binary signature: suspicious payload rejected.");
}

// Ensure file contains valid image dimensions (blocks embedded PHP polyglots)
if (str_starts_with($mimeType, 'image/') && @getimagesize($uploadedFile->getPathname()) === false) {
    throw new SecurityException("Polyglot shell detected in image headers.");
}`,
        screenshots: [
          {
            title: "Back-Office White-Label Settings Studio",
            description:
              "Role-gated management of official Algerian legal numbers (Agrément MCTA, RC, NIF, NIS) and banking coordinates.",
            desktopSrc: "/screenshots/05-admin-studio.png",
          },
        ],
      },
      {
        id: "caching",
        badge: "Pillar 4 • LinkedIn Series Part 4",
        title: "Two-Tier RAM-Bounded Caching & 60s White-Label Reactive Propagation",
        headline: "Achieving < 800ms LCP on 4G Mobile Networks with Cluster-Wide Invalidation",
        description:
          "White-label travel agencies require instant branding and pricing updates while travelers on mobile networks demand instantaneous page loads. We implemented a two-tier caching architecture with a client-side memory-bounded LRU ring buffer and server-side Redis catalog caching.",
        diagramPath: "/diagrams/diagram-4-caching-propagation.html",
        diagramTitle: "Two-Tier Memory Topology & 60-Second Cluster Invalidation",
        keyMetrics: [
          { label: "Client Heap", value: "< 2 MB Bounded", desc: "Strict 10-page LRU ring buffer" },
          { label: "LCP Latency", value: "< 800 ms", desc: "Measured mobile Largest Contentful Paint" },
          { label: "Server Cache TTL", value: "300s (5 min)", desc: "Redis catalog caching layer" },
          { label: "Cluster Sync", value: "< 60 seconds", desc: "Reactive invalidation on admin mutation" },
        ],
        technicalPillars: [
          {
            title: "Client TypeScript BoundedLRUCache",
            points: [
              "Fixed ring buffer strictly capped at 10 pages with 180s TTL in browser RAM",
              "Guarantees < 2 MB heap footprint, preventing memory leaks on mobile devices",
              "Delivers 0ms instantaneous back/forward history navigation for catalog browsing",
            ],
          },
          {
            title: "Server-Side Redis Catalog Caching",
            points: [
              "Absorbs 98.4% of catalog reads during flash marketing campaigns and seasonal spikes",
              "Tags cache keys (catalog:packages, agency_settings:public) for surgical invalidation",
              "Decouples read heavy traffic from MySQL transaction pools",
            ],
          },
          {
            title: "60-Second Reactive White-Label Propagation",
            points: [
              "Admin updates to agency branding, MCTA accreditation, or pricing emit invalidation events",
              "Propagates changes across all public pages, vouchers, and proformas in < 60 seconds",
              "Zero downtime, zero stale data discrepancies between back office and public storefront",
            ],
          },
        ],
        codeSnippetTitle: "TypeScript Client-Side BoundedLRUCache",
        codeSnippet: `// TypeScript Client-Side BoundedLRUCache (< 2 MB Heap)
export class BoundedLRUCache<K, V> {
  private readonly capacity: number = 10;
  private readonly ttlMs: number = 180_000; // 3 minutes
  private cache = new Map<K, { value: V; expiresAt: number }>();

  get(key: K): V | null {
    const entry = this.cache.get(key);
    if (!entry) return null;
    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      return null;
    }
    // Refresh LRU order (delete & re-insert)
    this.cache.delete(key);
    this.cache.set(key, entry);
    return entry.value;
  }
}`,
        screenshots: [
          {
            title: "B2B Corporate Quotes & Multi-Proposal Comparator",
            description:
              "Side-by-side comparison for corporate committees (Éco, Confort, Prestige ⭐) with RFP parameter recalculation.",
            desktopSrc: "/screenshots/04-b2b-portal.png",
          },
        ],
      },
    ];
  }

  // Default: French (FR)
  return [
    {
      id: "concurrency",
      badge: "Pilier 1 • Série LinkedIn Partie 1",
      title: "Haute Concurrence & Topologie de Verrouillage Global",
      headline: "Élimination des Surréservations sous 5 000 Requêtes Vente-Flash par Seconde",
      description:
        "Les expéditions sahariennes à Djanet et les charters Omra génèrent des pics de trafic violents. Verrouiller directement les lignes de base de données sature les connexions MySQL et provoque la famine des threads. Nous avons conçu une porte d'inventaire atomique en Redis Lua couplée à un ordonnancement hiérarchique strict des verrous InnoDB.",
      diagramPath: "/diagrams/diagram-1-inventory-locks.html",
      diagramTitle: "Porte Atomique Redis Lua & Hiérarchie de Verrouillage Global InnoDB",
      keyMetrics: [
        { label: "Débit de Pointe", value: "5 000 req/s", desc: "Requêtes simultanées de hold absorbées" },
        { label: "Latence du Hold", value: "< 1,2 ms", desc: "Temps d'exécution du script Lua atomique" },
        { label: "TTL Rétention", value: "900s (15 min)", desc: "Restitution éphémère automatique des places" },
        { label: "Taux de Deadlock", value: "0,00%", desc: "Séquençage strict parent ➔ enfant" },
      ],
      technicalPillars: [
        {
          title: "Invariant Mathématique de Conservation",
          points: [
            "Places Disponibles = Capacité Totale − ∑(Réservations Confirmées) − ∑(Holds Redis Actifs)",
            "Garantit la conservation déterministe de la capacité d'accueil à travers les sessions",
            "Vérifié formellement par 238 tests PHPUnit et simulations de concurrence sans anomalie",
          ],
        },
        {
          title: "Porte Atomique Redis Lua (HOLD_LUA)",
          points: [
            "Vérification et décrémentation atomique exécutées en sous-milliseconde dans le thread Redis",
            "Génère une clé de hold éphémère avec un TTL strict de 900 secondes (15 minutes)",
            "Restitution automatique des places via RELEASE_LUA en cas d'expiration ou d'abandon",
          ],
        },
        {
          title: "Ordonnancement Hiérarchique des Verrous",
          points: [
            "Ordre d'acquisition : PackageDate (Racine) ➔ Booking (Enfant) ➔ Payment (Journal)",
            "Supprime toute attente circulaire entre workers multi-tenants concurrents",
            "Conformité ACID intégrale sans contention prolongée de verrous de lignes",
          ],
        },
      ],
      codeSnippetTitle: "Porte de Réservation Atomique Redis Lua (HOLD_LUA)",
      codeSnippet: `-- Script Lua Atomique de Réservation en Mémoire
local available = tonumber(redis.call('GET', KEYS[1]) or '-1')
local requested = tonumber(ARGV[1])

if available < requested then
    return 0 -- Places insuffisantes
end

-- Décrémentation atomique de l'inventaire
redis.call('DECRBY', KEYS[1], requested)

-- Ancrage du hold éphémère avec TTL 900s
redis.call('SETEX', KEYS[2], tonumber(ARGV[2]), ARGV[3])
return 1 -- Verrouillage validé avec succès`,
      screenshots: [
        {
          title: "Hero Slider Dynamique & Barre de Recherche par Wilaya",
          description:
            "Carrousel piloté par base de données (Djanet, La Mecque, Médine) avec barre de filtres 58 Wilayas.",
          desktopSrc: "/screenshots/01-hero-slider.png",
          mobileSrc: "/screenshots/01-hero-slider-mobile.png",
        },
        {
          title: "Grille Catalogue & Fiches Circuits Étendues",
          description:
            "Design full-card stretched-link avec badges de prix en Dinars, inclusions vols Air Algérie et jauges de places.",
          desktopSrc: "/screenshots/02-package-cards.png",
          mobileSrc: "/screenshots/02-package-cards-mobile.png",
        },
      ],
    },
    {
      id: "payment",
      badge: "Pilier 2 • Série LinkedIn Partie 2",
      title: "Paiement Hexagonal Multi-Canal & Quarantaine (ADR-011)",
      headline: "Unification SATIM CIB, Edahabia, BaridiMob & Espèces sans Aucune Perte Financière",
      description:
        "Plus de 60% des réservations touristiques en Algérie échouent lorsque la carte bancaire internationale est exigée. Wakalatasfar unifie les cartes GIE SATIM (CIB/Edahabia), les virements CCP/BaridiMob avec protection 24h et les règlements en agence au sein d'un cœur hexagonal résilient.",
      diagramPath: "/diagrams/diagram-2-payment-quarantine.html",
      diagramTitle: "Machine à États Hexagonale & Quarantaine d'Écart (ADR-011)",
      keyMetrics: [
        { label: "Canaux Nationaux", value: "3 Canaux Clés", desc: "SATIM (CIB/Edahabia), BaridiMob/CCP, Espèces Agence" },
        { label: "Anti-Perte Financière", value: "100%", desc: "Quarantaine ADR-011 interdisant les rollbacks aveugles" },
        { label: "Acompte Légal", value: "30% Automatisé", desc: "Calcul automatique de l'échéancier réglementaire" },
        { label: "Audit Cryptographique", value: "HMAC-SHA256", desc: "Authentification signée des webhooks bancaires" },
      ],
      technicalPillars: [
        {
          title: "Politique de Quarantaine des Webhooks (ADR-011)",
          points: [
            "Les webhooks avec divergence de montant ou arrivant après expiration du hold entrent en requires_review",
            "Aucun rollback aveugle n'est exécuté afin de sécuriser les fonds clients capturés par la banque",
            "Une interface de réconciliation réservée aux gestionnaires financiers permet de régulariser les dossiers",
          ],
        },
        {
          title: "Barème Légal des Annulations (Ministère du Tourisme)",
          points: [
            "> 15 jours avant départ : 100% de remboursement intégral",
            "7 à 15 jours avant départ : 50% de remboursement partiel (retenue charters)",
            "< 7 jours avant départ : 0% non-remboursable (forfait légal acquis)",
            "Simulateur de remboursement interactif intégré dans l'espace voyageur avant confirmation",
          ],
        },
        {
          title: "File d'Inspection des Reçus Postaux",
          points: [
            "Les virements BaridiMob et CCP ouvrent une fenêtre de réservation protégée de 24 heures",
            "Les bordereaux importés sont examinés dans un inspecteur d'audit à double panneau",
            "Restitution automatique des places en inventaire en cas de rejet motivé du reçu",
          ],
        },
      ],
      codeSnippetTitle: "Gestionnaire de Quarantaine d'Écart Bancaire (ADR-011)",
      codeSnippet: `// Discrepancy Quarantine Logic (ADR-011)
if ($paidAmountDzd !== $booking->due_amount_dzd || $booking->isHoldExpired()) {
    $booking->update([
        'status' => 'requires_review',
        'quarantine_reason' => $paidAmountDzd !== $booking->due_amount_dzd 
            ? 'AMOUNT_MISMATCH' 
            : 'HOLD_EXPIRED_AFTER_SETTLEMENT',
        'raw_webhook_payload' => encrypt($payload)
    ]);
    
    // Alerte du grand livre de réconciliation (aucun rollback de fonds capturés)
    event(new PaymentRequiresReviewEvent($booking));
    return response()->json(['status' => 'quarantined_for_review'], 202);
}`,
      screenshots: [
        {
          title: "Tunnel de Checkout Haute-Concurrence en 3 Étapes",
          description:
            "Déclenchement des anneaux de validation des passagers, bascule acompte 30%, logos CIB/Edahabia et footer SATIM 3020.",
          desktopSrc: "/screenshots/03-checkout-satim.png",
        },
      ],
    },
    {
      id: "security",
      badge: "Pilier 3 • Série LinkedIn Partie 3",
      title: "Sécurité Zero-Trust & Matrice Anti-IDOR en Profondeur",
      headline: "Blindage du E-Commerce Algérien contre les Web Shells Polyglottes et les Fuites IDOR",
      description:
        "La manipulation de documents d'identité (NIN / Passeport) et de bordereaux bancaires postaux impose une conformité stricte avec la Loi 18-07 sur la protection des données personnelles et une défense en profondeur hermétique sans recourir à des abonnements cloud coûteux.",
      diagramPath: "/diagrams/diagram-3-security-defense.html",
      diagramTitle: "Périmètre de Hardening Zero-Trust & Isolation des Pièces Jointes",
      keyMetrics: [
        { label: "Chiffrement PII", value: "AES-256-CBC", desc: "Chiffrement au repos des pièces d'identité (Loi 18-07)" },
        { label: "Inspection MIME", value: "finfo Binaire", desc: "Matrice de rejet 8 vecteurs contre les shells polyglottes" },
        { label: "Sécurité Session", value: "HttpOnly + Lax", desc: "Isolation stricte des cookies de session et rôles" },
        { label: "Architecture Disque", value: "0 $ Taxe Cloud", desc: "Diffusion sécurisée hors document-root public" },
      ],
      technicalPillars: [
        {
          title: "Matrice de Rejet Magic-Byte (finfo)",
          points: [
            "Validation binaire des signatures de fichiers bloquant les web shells PHP déguisés en JPG/PNG",
            "Rejet des doubles extensions (.php.jpg), des scripts SVG incorporés et des injections null-byte",
            "Fichiers renommés par UUIDs cryptographiques sur un disque non public isolé du serveur web",
          ],
        },
        {
          title: "Streaming Anti-IDOR des Documents Financiers",
          points: [
            "Reçus hébergés hors de la racine web publique (disque isolé)",
            "Accès restreint à des flux temporaires signés soumis au contrôle des politiques de rôles",
            "Empêche l'énumération d'identifiants et l'accès aux bordereaux d'autres voyageurs",
          ],
        },
        {
          title: "Verrouillage de Compte par Clé Dédiée",
          points: [
            "Limitation de débit indexée sur la clé SHA-1 du compte et non sur l'adresse IP publique",
            "Évite le déni de service accidentel des réseaux d'entreprises et cybercafés algériens",
            "Canal de récupération d'accès séparé et sécurisé préservant la continuité de service",
          ],
        },
      ],
      codeSnippetTitle: "Validateur Binaire finfo & Anti-Polyglot",
      codeSnippet: `// Zero-Trust Upload Validation (finfo Magic-Byte)
$finfo = new finfo(FILEINFO_MIME_TYPE);
$mimeType = $finfo->file($uploadedFile->getPathname());

$allowedMimes = ['image/jpeg', 'image/png', 'application/pdf'];
if (!in_array($mimeType, $allowedMimes, true)) {
    throw new SecurityException("Invalid binary signature: suspicious payload rejected.");
}

// Vérification des dimensions de l'image (bloque les polyglottes PHP intégrés)
if (str_starts_with($mimeType, 'image/') && @getimagesize($uploadedFile->getPathname()) === false) {
    throw new SecurityException("Polyglot shell detected in image headers.");
}`,
      screenshots: [
        {
          title: "Studio Back-Office des Paramètres White-Label",
          description:
            "Gestion sécurisée des numéros réglementaires algériens (Agrément MCTA, RC, NIF, NIS) et coordonnées bancaires.",
          desktopSrc: "/screenshots/05-admin-studio.png",
        },
      ],
    },
    {
      id: "caching",
      badge: "Pilier 4 • Série LinkedIn Partie 4",
      title: "Cache à Deux Niveaux Borné en RAM & Propagation White-Label en 60s",
      headline: "LCP Inférieur à 800 ms sur Réseau 4G Mobile avec Invalidation Réactive en Cluster",
      description:
        "Les agences de voyage partenaires exigent des mises à jour immédiates de leurs grilles tarifaires et de leur identité, tandis que les voyageurs sur mobile attendent des chargements instantanés. Nous avons mis en place une architecture de cache à deux niveaux combinant un buffer LRU borné en mémoire navigateur et un cache catalogue Redis côté serveur.",
      diagramPath: "/diagrams/diagram-4-caching-propagation.html",
      diagramTitle: "Topologie Mémoire à Deux Niveaux & Invalidation en Cluster en 60s",
      keyMetrics: [
        { label: "Mémoire Client", value: "< 2 Mo Borné", desc: "Buffer annulaire LRU de 10 pages strict" },
        { label: "Latence LCP", value: "< 800 ms", desc: "Largest Contentful Paint mesuré sur mobile" },
        { label: "TTL Cache Serveur", value: "300s (5 min)", desc: "Couche de cache catalogue in-memory Redis" },
        { label: "Synchro Cluster", value: "< 60 secondes", desc: "Invalidation réactive dès modification admin" },
      ],
      technicalPillars: [
        {
          title: "BoundedLRUCache TypeScript Côté Client",
          points: [
            "Buffer annulaire plafonné à 10 pages avec TTL de 180s en mémoire vive du navigateur",
            "Garantit une empreinte inférieure à 2 Mo, évitant les fuites de mémoire sur smartphone",
            "Délivre une navigation historique retour/suivant instantanée à 0 ms",
          ],
        },
        {
          title: "Cache Catalogue Redis Côté Serveur",
          points: [
            "Absorbe 98,4% des requêtes de consultation du catalogue lors des campagnes marketing",
            "Tagging granulaire des clés de cache pour une invalidation chirurgicale ciblée",
            "Décharge totalement les pools de transactions MySQL des requêtes de lecture intensives",
          ],
        },
        {
          title: "Propagation White-Label Réactive en 60 Secondes",
          points: [
            "Toute mise à jour admin de la marque, des coordonnées ou des prix émet un événement d'invalidation",
            "Propagation sur l'ensemble des pages publiques, vouchers et factures proforma en < 60s",
            "Zéro indisponibilité, zéro divergence entre le back-office et la boutique publique",
          ],
        },
      ],
      codeSnippetTitle: "BoundedLRUCache TypeScript Côté Client",
      codeSnippet: `// TypeScript Client-Side BoundedLRUCache (< 2 MB Heap)
export class BoundedLRUCache<K, V> {
  private readonly capacity: number = 10;
  private readonly ttlMs: number = 180_000; // 3 minutes
  private cache = new Map<K, { value: V; expiresAt: number }>();

  get(key: K): V | null {
    const entry = this.cache.get(key);
    if (!entry) return null;
    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      return null;
    }
    // Refresh LRU order (delete & re-insert)
    this.cache.delete(key);
    this.cache.set(key, entry);
    return entry.value;
  }
}`,
      screenshots: [
        {
          title: "Portail B2B Devis Entreprises & Comparateur Multi-Propositions",
          description:
            "Comparateur côte-à-côte pour comités d'entreprise (Éco, Confort, Prestige ⭐) avec recalcul des effectifs.",
          desktopSrc: "/screenshots/04-b2b-portal.png",
        },
      ],
    },
  ];
};

export const PILLARS_DATA = GET_PILLARS_DATA("fr");
