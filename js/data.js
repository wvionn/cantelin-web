/* =========================================================
   Cantelin — Product, Carousel, Variant & DM Link Data
   Ganti gambar dummy di folder assets/images/ dengan file .png asli
   tanpa perlu mengubah HTML/JS (cukup pakai nama file yang sama).
   ========================================================= */

const CANTELIN_CONFIG = {
  // Ganti link DM Instagram / WhatsApp tujuan tombol "Chat kami via DM ya!" & "Order Now":
  dmLink: "https://www.instagram.com/cantel__in/"
};

const CATALOGUE_PRODUCTS = [
  {
    id: "Bundle Lengkap",
    name: "Bundle Lengkap",
    subtitle: "1 Card holder + 1 Carabiner + 1 Keychain",
    badgePrice: "35k",
    badgeSub: "",
    secondaryBadge: "Paket Hemat",
    mainImage: "assets/images/paket-main.png",
    description:
      "Bundle lengkap Cardholder + Carabiner warna pastel/neon + Keychain Charm Cantelin. Lebih hemat dan langsung siap gantung!",
    variants: [
      { id: "v1", image: "assets/images/paket-v1.png" },
      { id: "v2", image: "assets/images/paket-v2.png" }
    ]
  },
  {
    id: "card holder cantelin",
    name: "Card holder Cantelin",
    subtitle: "Card holder + Carabiner only",
    badgePrice: "30k",
    badgeSub: "",
    secondaryBadge: "",
    mainImage: "assets/images/cardholder-main.png",
    description:
      "Card holder mika tebal dengan insert desain ilustrasi original Cantelin. Bikin kartu e-money, KRL, atau ID card kamu makin kece!",
    variants: [
      {
        id: "v1",
        shortLabel: "V1",
        name: "Acrylic",
        color: "#d9eff0",
        image: "assets/images/cardholder-v1.png",
        description: "Cardholder acrylic transparan bening dengan tampilan simpel dan estetik."
      },
      {
        id: "v2",
        shortLabel: "V2",
        name: "Blue",
        color: "#4facfe",
        image: "assets/images/cardholder-v2.png",
        description: "Cardholder varian biru cerah dengan nuansa playful."
      },
      {
        id: "v3",
        shortLabel: "V3",
        name: "Pink",
        color: "#ec407a",
        image: "assets/images/cardholder-v3.png",
        description: "Cardholder varian pink ceria dengan tampilan manis dan gemas."
      },
      {
        id: "v4",
        shortLabel: "V4",
        name: "Red",
        color: "#ef4444",
        image: "assets/images/cardholder-v1.png",
        description: "Cardholder varian merah berkesan bold dan mencolok."
      },
      {
        id: "v5",
        shortLabel: "V5",
        name: "Black",
        color: "#26242c",
        image: "assets/images/cardholder-v2.png",
        description: "Cardholder varian hitam elegan dengan tampilan minimalis."
      },
      {
        id: "v6",
        shortLabel: "V6",
        name: "Orange",
        color: "#ff8a34",
        image: "assets/images/cardholder-v3.png",
        description: "Cardholder varian oranye cerah dengan nuansa hangat dan fun."
      }
    ]
  },
  {
    id: "keychain keren",
    name: "Keychain Keren",
    subtitle: "",
    badgePrice: "6k",
    badgeSub: "Get 1",
    secondaryBadge: "",
    mainImage: "assets/images/keychain-main.png",
    description:
      "Keychain akrilik gemas yang siap digantung ke cardholder, tas, atau dompet. Bisa beli satuan sesuai variant favoritmu!",
    variants: [
      { id: "v1", shortLabel: "V1", name: "zzhang!", color: "#f48fb1", image: "assets/images/keychain-v1.png", description: "Keychain acrylic varian zzhang!" },
      { id: "v2", shortLabel: "V2", name: "yihaa!", color: "#ec407a", image: "assets/images/keychain-v2.png", description: "Keychain acrylic varian yihaa!" },
      { id: "v3", shortLabel: "V3", name: "helow!", color: "#66d9b9", image: "assets/images/keychain-v3.png", description: "Keychain acrylic varian helow!" },
      { id: "v4", shortLabel: "V4", name: "woops!", color: "#4facfe", image: "assets/images/keychain-v4.png", description: "Keychain acrylic varian woops!" },
      { id: "v5", shortLabel: "V5", name: "ur da real art", color: "#ffd54f", image: "assets/images/keychain-v5.png", description: "Keychain acrylic varian ur da real art." },
      { id: "v6", shortLabel: "V6", name: "bunny", color: "#ff765c", image: "assets/images/keychain-v6.png", description: "Keychain acrylic varian bunny." },
      { id: "v7", shortLabel: "V7", name: "apple", color: "#ef4444", image: "assets/images/keychain-v7.png", description: "Keychain acrylic varian apple." },
      { id: "v8", shortLabel: "V8", name: "fish", color: "#4facfe", image: "assets/images/keychain-v8.png", description: "Keychain acrylic varian fish." },
      { id: "v9", shortLabel: "V9", name: "orang keren", color: "#26242c", image: "assets/images/keychain-v9.png", description: "Keychain acrylic varian orang keren." },
      { id: "v10", shortLabel: "V10", name: "baby bangs", color: "#f7a8c4", image: "assets/images/keychain-v10.png", description: "Keychain acrylic varian baby bangs." },
      { id: "v11", shortLabel: "V11", name: "blue monster", color: "#4169e1", image: "assets/images/keychain-v11.png", description: "Keychain acrylic varian blue monster." },
      { id: "v12", shortLabel: "V12", name: "tomato", color: "#ff4d4d", image: "assets/images/keychain-v12.png", description: "Keychain acrylic varian tomato." }
    ]
  },
  {
    id: "pin kece",
    name: "Pin Kece",
    subtitle: "",
    badgePrice: "6k",
    badgeSub: "Get 1",
    secondaryBadge: "",
    mainImage: "assets/images/pin-main.png",
    description:
      "Pin peniti ilustrasi estetik berukuran pas untuk menghias totebag, tas sekolah, atau pouch harian kamu.",
    variants: [
      { id: "v1", shortLabel: "V1", name: "zzhang!", color: "#ec407a", image: "assets/images/pin-v1.png", description: "Pin varian zzhang!" },
      { id: "v2", shortLabel: "V2", name: "yihaa!", color: "#ffd54f", image: "assets/images/pin-v2.png", description: "Pin varian yihaa!" },
      { id: "v3", shortLabel: "V3", name: "helow!", color: "#66d9b9", image: "assets/images/pin-v3.png", description: "Pin varian helow!" },
      { id: "v4", shortLabel: "V4", name: "woops!", color: "#4facfe", image: "assets/images/pin-v4.png", description: "Pin varian woops!" },
      { id: "v5", shortLabel: "V5", name: "#MenHaters", color: "#26242c", image: "assets/images/pin-v1.png", description: "Pin varian #MenHaters." },
      { id: "v6", shortLabel: "V6", name: "Help Me", color: "#ff765c", image: "assets/images/pin-v2.png", description: "Pin varian Help Me." },
      { id: "v7", shortLabel: "V7", name: "Eye ball", color: "#9b8cff", image: "assets/images/pin-v3.png", description: "Pin varian Eye ball." }
    ]
  },
  {
    id: "sticker keren",
    name: "Sticker Keren",
    subtitle: "",
    badgePrice: "6k",
    badgeSub: "Get 2",
    secondaryBadge: "",
    mainImage: "assets/images/stiker-main.png",
    description:
      "Stiker die-cut karakter & tipografi seru Cantelin. Cocok ditempel di casing HP, laptop, tumbler, dan jurnal.",
    variants: [
      { id: "v1", image: "assets/images/stiker-v1.png" },
      { id: "v2", image: "assets/images/stiker-v2.png" },
    ]
  },
];

const HOME_SLIDES = [
  {
    productId: "cardholder",
    title: "Cardholder Cantelin",
    image: "assets/images/home-slide-1.png",
    priceLabel: "30k (atau 35k Paket)",
    subtitle: "Desain Original & Gemas"
  },
  {
    productId: "keychain",
    title: "Keychain Cantelin",
    image: "assets/images/home-slide-2.png",
    priceLabel: "6k Get 1",
    subtitle: "Akrilik Charm Mungil"
  },
  {
    productId: "stiker",
    title: "Stiker Cantelin",
    image: "assets/images/home-slide-3.png",
    priceLabel: "6k Get 2",
    subtitle: "Stiker Die-Cut Aesthetic"
  },
  {
    productId: "pin",
    title: "Pin Cantelin",
    image: "assets/images/home-slide-4.png",
    priceLabel: "6k Get 1",
    subtitle: "Button Pin Koleksi"
  },
  {
    productId: "paket",
    title: "Paket Hemat Cantelin",
    image: "assets/images/home-slide-5.png",
    priceLabel: "35k Paket Hemat",
    subtitle: "Cardholder + Carabiner + Keychain"
  }
];

const ABOUT_SHOWCASE = {
  title: "Koleksi Perintilan Cantelin",
  image: "assets/images/about-showcase.png",
  priceLabel: "Mulai 6k - 35k",
  subtitle: "Packaging Estetik & Siap Hadiah",
  description:
    "Semua produk Cantelin dikemas rapi dan estetik dengan ilustrasi original. Cocok dipakai harian atau dijadikan kado buat sahabat!"
};
