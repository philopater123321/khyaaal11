export const WHATSAPP = "https://wa.me/201055599648";
export const PHONE = "+20 10 55599648";

export const waLink = (message: string) =>
  `${WHATSAPP}?text=${encodeURIComponent(message)}`;

export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/khyaaal11/" },
  { name: "TikTok", href: "https://www.tiktok.com/@khyaaal11" },
  { name: "Facebook", href: "https://www.facebook.com/khyaaal11/?locale=it_IT" },
  { name: "YouTube", href: "https://www.youtube.com/@khyaaal11" },
];

export const img = {
  pyramidsWalk: "/images/IMG_3525_11zon.jpg",
  rearing: "/images/IMG_3528_11zon.jpg",
  duo: "/images/IMG_2997_11zon.jpg",
  groom: "/images/IMG_3004_11zon.jpg",
  greyRider: "/images/IMG_3023_11zon.jpg",
  chestnut: "/images/IMG_3046_11zon.jpg",
  sunsetBlack: "/images/IMG_3134_11zon.jpg",
  bayPyramid: "/images/IMG_3203_11zon.jpg",
  sunsetGuest: "/images/IMG_3219_11zon.jpg",
  goldenHooves: "/images/IMG_3233_1_11zon.jpg",
  vipRide: "/images/vip-private-ride.png",
  magicWater: "/images/magic-water-ride.png",
  espresso: "/images/espresso.jpeg",
  training: "/images/train.jpeg",
  home: "/images/home_image.jpeg",
};

export type Category = "Pyramid Rides" | "Saqqara Trails" | "Photoshoots";

export const gallery: { src: string; alt: string; category: Category }[] = [
  {
    src: img.pyramidsWalk,
    alt: "Guest leading a grey Arabian horse with the Giza Pyramids behind",
    category: "Pyramid Rides",
  },
  {
    src: img.rearing,
    alt: "Grey Arabian stallion rearing in the desert with a rider",
    category: "Photoshoots",
  },
  {
    src: img.bayPyramid,
    alt: "Rider on a bay Arabian horse in front of a Saqqara pyramid",
    category: "Saqqara Trails",
  },
  {
    src: img.sunsetBlack,
    alt: "Rider on a black Arabian horse at desert sunset",
    category: "Saqqara Trails",
  },
  {
    src: img.greyRider,
    alt: "Rider patting a white Arabian horse in the desert",
    category: "Pyramid Rides",
  },
  {
    src: img.sunsetGuest,
    alt: "Smiling guest on a white Arabian horse against a golden sunset",
    category: "Photoshoots",
  },
  {
    src: img.chestnut,
    alt: "Guest seated on a chestnut Arabian horse in open desert",
    category: "Photoshoots",
  },
  {
    src: img.goldenHooves,
    alt: "Rider in a hat leaning over a bay horse at Golden Hooves stable",
    category: "Saqqara Trails",
  },
  {
    src: img.duo,
    alt: "Two riders standing with a grey and a bay Arabian horse",
    category: "Pyramid Rides",
  },
  {
    src: img.groom,
    alt: "Saddled white Arabian horse walked near the stable",
    category: "Pyramid Rides",
  },
];

export type CatalogGroup = "vip" | "offers" | "training" | "trips";
export type Branch = "giza" | "saqqara";

export type CatalogItem = {
  id: string;
  group: CatalogGroup;
  image: string;
  price: number;
  oldPrice?: number;
  priceMax?: number;
  slots?: string[];
  branches: Branch[];
  perGroup?: boolean;
  maxRiders?: number;
  en: { title: string; copy: string };
  ar: { title: string; copy: string };
};

export const catalog: CatalogItem[] = [
  {
    id: "vip-private",
    group: "vip",
    branches: ["giza"],
    image: img.vipRide,
    price: 1000,
    en: {
      title: "VIP Private Ride",
      copy: "A tailored private experience: sunrise or sunset ride, a professional photo session at the pyramids, your choice of pace, desert and pyramid exploration, then a rest with an Arabic drink at the stable. From 1,000 EGP, up to 4,000 EGP depending on the horse.",
    },
    ar: {
      title: "طلعة VIP برايفت",
      copy: "تجربة خاصة تناسبك: طلعة شروق أو غروب، سيشن تصوير احترافي عند الأهرامات، خيارات السرعة على مزاجك، استكشاف الصحراء والأهرامات، وبعدها استراحة ومشروب في القعدة العربي. تبدأ من 1000 جنيه وقد تصل إلى 4000 جنيه حسب نوع ومستوى الحصان.",
    },
  },
  {
    id: "saqqara",
    group: "vip",
    branches: ["saqqara"],
    image: img.bayPyramid,
    price: 1000,
    priceMax: 3000,
    slots: ["06:00", "08:00", "15:00", "16:30"],
    en: {
      title: "Saqqara Ride",
      copy: "Saqqara ride for beginners and strong horses. From 1,000 up to 3,000 EGP depending on the horse.",
    },
    ar: {
      title: "رايد سقارة",
      copy: "رايد سقارة (مبتدئ وخيل جامدة). من 1000 إلى 3000 جنيه حسب الفئة والحصان.",
    },
  },
  {
    id: "daily",
    group: "offers",
    branches: ["giza"],
    image: img.groom,
    price: 350,
    oldPrice: 500,
    en: {
      title: "Daily Stable Ride",
      copy: "Our everyday ride offer straight from the stable, a full riding session at a special daily price.",
    },
    ar: {
      title: "عرض الرايد اليومي في الاسطبل",
      copy: "عرض الركوب اليومي من الإسطبل، جلسة ركوب كاملة بسعر خاص كل يوم.",
    },
  },
  {
    id: "friday",
    group: "offers",
    branches: ["giza"],
    image: img.duo,
    price: 350,
    oldPrice: 500,
    en: {
      title: "Friday Friends Offer",
      copy: "Ride with your friends every Friday, with group pricing per rider for the whole crew.",
    },
    ar: {
      title: "عرض الصحاب يوم الجمعة",
      copy: "اركب مع أصحابك كل جمعة، بسعر خاص للمجموعة لكل فارس.",
    },
  },
  {
    id: "magic",
    group: "offers",
    branches: ["giza"],
    image: img.magicWater,
    price: 700,
    oldPrice: 1000,
    en: {
      title: "Magic Long-Distance Desert Ride",
      copy: "Our longest route across the Samman desert, with wide open sand, big distances and endless horizons.",
    },
    ar: {
      title: "طلعة ماجيك أطول مسافة في السمان",
      copy: "أطول مسار لدينا في صحراء السمان، مع رمال مفتوحة ومسافات طويلة وأفق لا ينتهي.",
    },
  },
  {
    id: "training",
    group: "training",
    branches: ["giza"],
    image: img.training,
    price: 2800,
    oldPrice: 3000,
    en: {
      title: "Professional Equestrian Training Course",
      copy: "A full training course from seat and balance to collected canter and jumping basics, with horses matched to your level.",
    },
    ar: {
      title: "تدريب فروسية",
      copy: "كورس تدريب متكامل من الجلسة والتوازن حتى الجري المنضبط وأساسيات الحجز، مع خيول مناسبة لمستواك.",
    },
  },
  {
    id: "saqqara-beginner",
    group: "vip",
    branches: ["saqqara"],
    image: img.goldenHooves,
    price: 500,
    slots: ["06:00", "08:00", "15:00", "16:30"],
    en: { title: "Saqqara Beginner Ride", copy: "A calm Saqqara ride made for beginners, on gentle horses." },
    ar: { title: "رايد سقارة للمبتدئين", copy: "رايد هادي في سقارة مخصوص للمبتدئين على خيل هادية." },
  },
  {
    id: "cart",
    group: "trips",
    branches: ["giza", "saqqara"],
    image: "/images/cart.jpeg",
    price: 1000,
    perGroup: true,
    maxRiders: 5,
    en: { title: "Horse Cart Ride", copy: "A safe royal carriage ride, great for kids and elders, up the hill for a stunning pyramids view and photos. 1 to 5 people, 1,000 EGP per trip, daily." },
    ar: { title: "ركوب الكارتة", copy: "جولة ملكية آمنة بعربة حصان، مناسبة للأطفال وكبار السن، لحد التبة لإطلالة وصور رائعة للأهرامات. من 1 إلى 5 أفراد، 1000 جنيه للرحلة، متاح يوميًا." },
  },
  {
    id: "camel",
    group: "trips",
    branches: ["giza"],
    image: "/images/camel.jpeg",
    price: 1000,
    maxRiders: 10,
    en: { title: "Camel Ride by the Pyramids", copy: "Ride a camel through the desert facing the Giza Pyramids, with photo stops and a rest break. 1 to 10 people, each on their own camel, 1,000 EGP per person." },
    ar: { title: "طلعة الجمال بجوار الأهرامات", copy: "ركوب جمال وسط الصحراء بإطلالة على أهرامات الجيزة، مع وقفات تصوير واستراحة. من 1 إلى 10 أفراد، كل شخص بجمل منفرد، 1000 جنيه للفرد." },
  },
  {
    id: "buggy",
    group: "trips",
    branches: ["giza", "saqqara"],
    image: "/images/beach_buggy.jpeg",
    price: 1000,
    perGroup: true,
    maxRiders: 15,
    en: { title: "Beach Buggy Trip", copy: "Race into the desert to a spot overlooking the pyramids, stop for photos and a drink, then ride back. 1 to 15 people, 1,000 EGP per trip, daily." },
    ar: { title: "رحلة البيتش باجي", copy: "انطلاقة في قلب الصحراء لمكان مطل على الأهرامات، وقفة للصور ومشروب، والرجوع بنفس الإثارة. من 1 إلى 15 فرد، 1000 جنيه للرحلة، متاح يوميًا." },
  },
];

export type GearItem = {
  id: string;
  price: number;
  oldPrice?: number;
  image: string;
  en: string;
  ar: string;
};

export const gear: GearItem[] = [
  {
    id: "saddle",
    image: "/images/saddle.jpeg",
    price: 9000,
    en: "Statue-Style Horn Saddle",
    ar: "سرج بقرون شبيه للستاتيوس",
  },
  {
    id: "leather-boots",
    image: "/images/natural_halfboot.jpeg",
    price: 1100,
    oldPrice: 1500,
    en: "Natural Leather Boots",
    ar: "هاف بوت جلد طبيعي",
  },
  {
    id: "synthetic-boots",
    image: "/images/unnatural_halfboot.jpeg",
    price: 850,
    en: "Imported Synthetic Boots",
    ar: "هاف بوت جلد صناعي مستورد",
  },
  {
    id: "crop",
    image: "/images/whip.jpeg",
    price: 150,
    en: "Riding Crop",
    ar: "كرباج ركوب",
  },
];

export const locations = [
  {
    id: "giza",
    image: img.pyramidsWalk,
    maps: "https://maps.app.goo.gl/nwYeheqWmCzkDozD9?g_st=ic",
  },
  {
    id: "saqqara",
    image: img.goldenHooves,
    maps:
      "https://www.google.com/maps?q=V6W6+PG2+Golden+Hooves+Stable,+Abusir,+Badrshein,+Giza+Governorate+3352533",
  },
];

export const testimonials = [
  { flag: "" },
  { flag: "" },
  { flag: "" },
];
