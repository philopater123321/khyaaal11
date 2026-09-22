import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "ar";

const en = {
  brand: "KHYAAAL 11",
  currency: "EGP",
  nav: {
    home: "Home",
    experiences: "Horses & Packages",
    shop: "Gear Shop",
    locations: "Our Locations",
    gallery: "Gallery",
    contact: "Contact",
    cta: "Book Your Ride",
    menu: "Toggle menu",
    language: "Language",
  },
  hero: {
    eyebrow: "Giza Pyramids · Saqqara · Est. Egypt",
    titleA: "We'll Teach All of Egypt",
    titleB: "Horse Riding",
    copy: "Explore the Giza Pyramids and the Saqqara desert on purebred Arabian horses with Baraa El Khayal.",
    ctaPackages: "Explore Packages",
    ctaWhatsapp: "Instant WhatsApp Booking",
  },
  about: {
    eyebrow: "Our Story",
    titleA: "A stable built on",
    titleHighlight: "bloodline",
    titleB: "and hospitality",
    p1: "Khyaaal11 was founded by horsemen raised beside the pyramids, on the belief that a ride in Egypt should feel as considered as a five-star suite. Our Arabians descend from royal desert lines, light, willing and famously kind under saddle.",
    p2: "Every guest is matched to the right horse, briefed on safety, and looked after from the mounting block to the final photograph. Beginners are welcome; seasoned riders are genuinely challenged.",
    values: [
      {
        title: "Purebred Arabian Lineage",
        copy: "Our herd is bred and kept to show standard, sound, schooled and cared for daily by farriers, vets and grooms who know each horse by name.",
      },
      {
        title: "Breathtaking Iconic Routes",
        copy: "From the Giza plateau's pyramid skyline or the quiet dunes and palm groves of Saqqara, every trail is chosen for beauty and safe footing.",
      },
      {
        title: "VIP White-Glove Service",
        copy: "Private rides by default, premium tack, a clear safety briefing and photography support, all arranged before you arrive.",
      },
    ],
  },
  catalogSection: {
    eyebrow: "Horses & Packages",
    title: "Our horses, rides and training",
    copy: "Transparent pricing in Egyptian Pounds. Every ride is private by default and tailored to your level and your camera.",
    groups: {
      vip: "Premium VIP Rides",
      offers: "Ride Offers",
      training: "Equestrian Training",
      trips: "Cart, Camel & Buggy Trips",
    },
    bookNow: "Book Now",
    was: "Was",
    waMessage: (title: string, price: string) =>
      `Hello Khyaaal11, I would like to book: ${title} (${price}). Could you confirm availability?`,
  },
  shopSection: {
    eyebrow: "Gear Shop",
    title: "Saddles, boots and riding essentials",
    copy: "Hand-picked equestrian gear available directly from our stables. Order and collect on WhatsApp.",
    order: "Order on WhatsApp",
    was: "Was",
    waMessage: (title: string, price: string) =>
      `Hello Khyaaal11, I would like to order: ${title} (${price}). Is it available?`,
  },
  locationsSection: {
    eyebrow: "Our Locations",
    title: "Two stables, two very different horizons",
    copy: "",
    maps: "Open in Google Maps",
    items: {
      giza: {
        name: "Baraa El Khayal Pyramids Stable",
        address: "Baraa El Khayal Pyramids Stable, Al Haram, Giza Governorate 3514012",
        feature:
          "Pyramid vistas moments from the plateau, ideal for first-time riders, visitors and short golden-hour trails.",
      },
      saqqara: {
        name: "Saqqara Branch, Golden Hooves Stable",
        address: "Saqqara, Badrshein, Giza Governorate 3352533",
        feature:
          "Wide desert spans, tranquil palm groves and extended galloping tracks for experienced riders and long escapes.",
      },
    },
  },
  gallerySection: {
    eyebrow: "Gallery & Media Wall",
    title: "Moments from the plateau",
    copy: "Frames from our rides, our horses and our guests, shot on location at Giza and Saqqara.",
    tabs: {
      All: "All",
      "Pyramid Rides": "Pyramid Rides",
      "Saqqara Trails": "Saqqara Trails",
      Photoshoots: "Photoshoots",
    },
    followEyebrow: "Follow the herd",
    followTitle: "New rides, new horses and new sunsets, every week on our channels.",
  },
  testimonialsSection: {
    eyebrow: "Guest Reviews",
    title: "Told by those who rode",
    prev: "Previous review",
    next: "Next review",
    review: (n: number) => `Review ${n}`,
    items: [
      {
        quote: "A truly great place. The horses are very clean, and Captain Farouk and Captain Arafa teach us how to control the horse before we ride. A genuinely warm welcome.",
        name: "Omar Abdo22",
        country: "",
      },
      {
        quote: "An excellent place with truly wonderful service. I definitely have to visit you again.",
        name: "Ahmed Khaled",
        country: "",
      },
      {
        quote: "One of the best places in Saqqara. Everyone is kind and the service is excellent.",
        name: "Logain Wael",
        country: "",
      },
    ],
  },
  booking: {
    eyebrow: "Direct Booking",
    titleA: "Reserve your",
    titleHighlight: "ride",
    copy: "Send your details and we will confirm horses and timing on WhatsApp within minutes. Sunrise and sunset slots are limited and released daily.",
    name: "Full name",
    namePlaceholder: "Your name",
    phone: "Phone / WhatsApp",
    phonePlaceholder: "+00 000 000 000",
    date: "Day / date",
    time: "Preferred time",
    location: "Branch",
    giza: "Baraa El Khayal Pyramids Stable",
    saqqara: "Saqqara Branch (Golden Hooves)",
    riders: "Number of riders",
    rideType: "Ride type",
    selectRide: "Choose a ride",
    total: "Total price",
    experience: "Riding experience",
    experiencePlaceholder: "How many times has each person ridden? When was the last time? Is anyone afraid, or is everyone comfortable?",
    submit: "Send via WhatsApp",
    message: (f: {
      name: string;
      phone: string;
      date: string;
      location: string;
      riders: string;
      time: string;
      rideType: string;
      total: string;
      experience: string;
    }) => `Hello Khyaaal11, I would like to book a ride.
Name: ${f.name}
WhatsApp: ${f.phone}
Day / date: ${f.date}
Time: ${f.time}
Branch: ${f.location}
Number of riders: ${f.riders}
Ride type: ${f.rideType}
Total price: ${f.total}
Riding experience: ${f.experience}`,
  },
  footer: {
    copy: "Elite Arabian horse experiences at the Giza Pyramids and the Saqqara desert.",
    quickLinks: "Quick Links",
    contact: "Contact",
    booking: "Booking",
    rights: "© Khyaaal11 Equestrian Experience. All Rights Reserved.",
    youtubeNote: "Our YouTube channel answers many common questions.",
    youtubeCta: "Visit our YouTube channel",
  },
  whatsapp: "Chat with us on WhatsApp",
};

export type Dict = typeof en;

const ar: Dict = {
  brand: "خيال 11",
  currency: "جنيه",
  nav: {
    home: "الرئيسية",
    experiences: "الخيول والباقات",
    shop: "متجر المستلزمات",
    locations: "الفروع والمواقع",
    gallery: "المعرض",
    contact: "تواصل معنا",
    cta: "احجز تجربتك الآن",
    menu: "القائمة",
    language: "اللغة",
  },
  hero: {
    eyebrow: "أهرامات الجيزة · سقارة · مصر",
    titleA: "هنعلم مصر كلها",
    titleB: "خيل",
    copy: "استكشف أهرامات الجيزة على ظهور أصايل الخيل العربية مع براء الخيال.",
    ctaPackages: "استكشف الباقات",
    ctaWhatsapp: "تواصل عبر الواتساب",
  },
  about: {
    eyebrow: "قصتنا",
    titleA: "إسطبل قائم على",
    titleHighlight: "الأصل العريق",
    titleB: "وكرم الضيافة",
    p1: "",
    p2:"",
    values: [
      {
        title: "خيول عربية أصيلة",
        copy: "خيولنا مربّاة على مستوى المعارض، سليمة ومدرّبة وتحت رعاية يومية من البياطرة والمدربين والعاملين الذين يعرفون كل حصان باسمه.",
      },
      {
        title: "مسارات أيقونية خلابة",
        copy: "يمكنك اختيار الذهاب أفق الأهرامات في هضبة الجيزة او الي كثبان وواحات النخيل الهادئة في سقارة، كل مسار مختار لجماله وأمان أرضه.",
      },
      {
        title: "خدمة VIP فائقة",
        copy: "طلعات خاصة بالكامل، أطقم سروج فاخرة، إحاطة واضحة بالسلامة ودعم تصوير احترافي، كل ذلك مُجهَّز قبل وصولك.",
      },
    ],
  },
  catalogSection: {
    eyebrow: "الخيول والباقات",
    title: "خيولنا وطلعاتنا وتدريباتنا",
    copy: "أسعار واضحة بالجنيه المصري. كل طلعة خاصة بالكامل ومصممة حسب مستواك وكاميرتك.",
    groups: {
      vip: "طلعات VIP الفاخرة",
      offers: "عروض الرايد",
      training: "تدريب الفروسية",
      trips: "رحلات الكارتة والجمال والبيتش باجي",
    },
    bookNow: "احجز الآن",
    was: "بدلاً من",
    waMessage: (title: string, price: string) =>
      `مرحبًا خيال 11، أرغب في حجز: ${title} (${price}). هل يمكنكم تأكيد التوفر؟`,
  },
  shopSection: {
    eyebrow: "متجر المستلزمات",
    title: "سروج وبوتات ومستلزمات الفروسية",
    copy: "مستلزمات فروسية مختارة بعناية متاحة مباشرة من إسطبلاتنا. اطلب واستلم عبر الواتساب.",
    order: "اطلب عبر الواتساب",
    was: "بدلاً من",
    waMessage: (title: string, price: string) =>
      `مرحبًا خيال 11، أرغب في طلب: ${title} (${price}). هل هو متاح؟`,
  },
  locationsSection: {
    eyebrow: "الفروع والمواقع",
    title: "إسطبلان، وأفقان مختلفان تمامًا",
    copy: "",
    maps: "افتح في خرائط جوجل",
    items: {
      giza: {
        name: "فرع أهرامات الجيزة (إسطبل الأهرامات براء الخيال)",
        address: "إسطبل الأهرامات براء الخيال، الهرم، محافظة الجيزة 3514012",
        feature:
          "إطلالات على الأهرامات على بعد خطوات من الهضبة، مثالية للمبتدئين والزوار وجولات الساعة الذهبية القصيرة.",
      },
      saqqara: {
        name: "فرع سقارة، إسطبل المهماز الذهبي",
        address: "سقارة، البدرشين، محافظة الجيزة 3352533",
        feature:
          "مساحات صحراوية واسعة وبساتين نخيل هادئة ومسارات جري ممتدة للفرسان المتمرسين والرحلات الطويلة.",
      },
    },
  },
  gallerySection: {
    eyebrow: "المعرض وحائط الصور",
    title: "لحظات من الهضبة",
    copy: "لقطات من طلعاتنا وخيولنا وضيوفنا، مصوّرة في الجيزة وسقارة.",
    tabs: {
      All: "الكل",
      "Pyramid Rides": "جولات الأهرامات",
      "Saqqara Trails": "مسارات سقارة",
      Photoshoots: "جلسات التصوير",
    },
    followEyebrow: "تابعنا",
    followTitle: "طلعات جديدة، خيول جديدة وغروب جديد، كل أسبوع على قنواتنا.",
  },
  testimonialsSection: {
    eyebrow: "آراء الضيوف",
    title: "بكلمات من امتطى الخيل معنا",
    prev: "التقييم السابق",
    next: "التقييم التالي",
    review: (n: number) => `التقييم ${n}`,
    items: [
      {
        quote: "مكان كويس جدا صراحة والخيل نضيفة جدا. وصراحة كابتن فاروق وكابتن عرفة قبل ما نركب بيعرفونا نتحكم في الحصان إزاي، وبجد استقبال جميل.",
        name: "Omar Abdo22",
        country: "",
      },
      {
        quote: "مكان ممتاز ومعاملة أكتر من رائعة، لازم أجيلكم تاني.",
        name: "Ahmed Khaled",
        country: "",
      },
      {
        quote: "من أحسن الأماكن في سقارة، وكلهم ذوق والمعاملة كويسة جدا.",
        name: "Logain Wael",
        country: "",
      },
    ],
  },
  booking: {
    eyebrow: "الحجز المباشر",
    titleA: "احجز",
    titleHighlight: "جولتك",
    copy: "أرسل بياناتك وسنؤكد الخيول والتوقيت عبر الواتساب في دقائق. مواعيد الشروق والغروب محدودة وتُتاح يوميًا.",
    name: "الاسم الكامل",
    namePlaceholder: "اسمك",
    phone: "الهاتف / الواتساب",
    phonePlaceholder: "+00 000 000 000",
    date: "اليوم / التاريخ",
    time: "الوقت",
    location: "الفرع",
    giza: "إسطبل الأهرامات براء الخيال",
    saqqara: "فرع سقارة (المهماز الذهبي)",
    riders: "عدد الفرسان",
    rideType: "نوع الطلعة",
    selectRide: "اختر نوع الطلعة",
    total: "إجمالي السعر",
    experience: "خبرة الركوب",
    experiencePlaceholder: "كل فرد ركب كام مرة؟ وآخر مرة إمتى؟ وفي حد بيخاف ولا كله تمام؟",
    submit: "أرسل عبر الواتساب",
    message: (f) => `مرحبًا خيال 11، أرغب في حجز جولة.
الاسم: ${f.name}
الواتساب: ${f.phone}
اليوم / التاريخ: ${f.date}
الوقت: ${f.time}
الفرع: ${f.location}
العدد: ${f.riders}
نوع الطلعة: ${f.rideType}
إجمالي السعر: ${f.total}
خبرة الركوب: ${f.experience}`,
  },
  footer: {
    copy: "تجارب فروسية راقية بخيول عربية أصيلة عند أهرامات الجيزة وصحراء سقارة.",
    quickLinks: "روابط سريعة",
    contact: "تواصل معنا",
    booking: "الحجز",
    rights: "© خيال 11 لتجارب الفروسية. جميع الحقوق محفوظة.",
    youtubeNote: "هتلاقي على قناتنا على يوتيوب إجابات لأسئلة كتير.",
    youtubeCta: "زور قناة اليوتيوب",
  },
  whatsapp: "تحدث معنا عبر الواتساب",
};

const dicts: Record<Lang, Dict> = { en, ar };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict; dir: "ltr" | "rtl" };

const I18nContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: en, dir: "ltr" });

const STORAGE_KEY = "khyaaal11-lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "ar" || saved === "en") setLangState(saved);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("lang", lang);
    root.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const value = useMemo<Ctx>(
    () => ({ lang, setLang, t: dicts[lang], dir: lang === "ar" ? "rtl" : "ltr" }),
    [lang, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}

export function usePrice() {
  const { t, lang } = useI18n();
  return useCallback(
    (n: number) => `${n.toLocaleString(lang === "ar" ? "ar-EG" : "en-US")} ${t.currency}`,
    [lang, t.currency],
  );
}
