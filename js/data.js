/* =========================================================
   Cantelin — Product, Carousel, Variant & DM Link Data
   Ganti gambar dummy di folder assets/images/ dengan file .png asli
   tanpa perlu mengubah HTML/JS (cukup pakai nama file yang sama).
   ========================================================= */

const CANTELIN_CONFIG = {
  // Ganti link DM Instagram / WhatsApp tujuan tombol "Chat kami via DM ya!" & "Order Now":
  dmLink: "https://ig.me/m/cantelin.id"
};

const CATALOGUE_PRODUCTS = [
  {
    id: "paket",
    name: "Paket",
    subtitle: "(Cardholder + Keychain)",
    badgePrice: "35k",
    badgeSub: "",
    secondaryBadge: "Paket Hemat",
    mainImage: "assets/images/paket-main.png",
    description:
      "Bundle lengkap Cardholder + Carabiner warna pastel/neon + Keychain Charm Cantelin. Lebih hemat dan langsung siap gantung!",
    variants: [
      {
        id: "v1",
        shortLabel: "V1",
        name: "Mint Teal Set",
        color: "#66d9b9",
        image: "assets/images/paket-v1.png",
        description: "Paket lengkap dengan carabiner mint & charm serasi."
      },
      {
        id: "v2",
        shortLabel: "V2",
        name: "Hot Pink Set",
        color: "#ec407a",
        image: "assets/images/paket-v2.png",
        description: "Paket lengkap dengan carabiner hot pink & charm ikonik."
      },
      {
        id: "v3",
        shortLabel: "V3",
        name: "Sky Blue Set",
        color: "#4facfe",
        image: "assets/images/paket-v3.png",
        description: "Paket lengkap dengan carabiner sky blue & charm gemas."
      },
      {
        id: "v4",
        shortLabel: "V4",
        name: "Coral Rose Set",
        color: "#ff765c",
        image: "assets/images/paket-v4.png",
        description: "Paket lengkap dengan carabiner coral rose & charm manis."
      }
    ]
  },
  {
    id: "cardholder",
    name: "Cardholder",
    subtitle: "(Tanpa Keychain)",
    badgePrice: "30k",
    badgeSub: "",
    secondaryBadge: "",
    mainImage: "assets/images/cardholder-main.png",
    description:
      "Cardholder mika tebal dengan insert desain ilustrasi original Cantelin. Bikin kartu e-money, KRL, atau ID card kamu makin kece!",
    variants: [
      {
        id: "v1",
        shortLabel: "V1",
        name: "Berry Pop",
        color: "#ec407a",
        image: "assets/images/cardholder-v1.png",
        description: "Cardholder varian Berry Pop bernuansa pink ceria dengan aksen bintang."
      },
      {
        id: "v2",
        shortLabel: "V2",
        name: "Midnight Star",
        color: "#26242c",
        image: "assets/images/cardholder-v2.png",
        description: "Cardholder varian Midnight Star gelap kontras dengan strip bintang neon."
      },
      {
        id: "v3",
        shortLabel: "V3",
        name: "Sunny Arcade",
        color: "#ffd54f",
        image: "assets/images/cardholder-v3.png",
        description: "Cardholder varian Sunny Arcade kuning cerah dengan sentuhan biru playful."
      }
    ]
  },
  {
    id: "keychain",
    name: "Keychain",
    subtitle: "",
    badgePrice: "6k",
    badgeSub: "Get 1",
    secondaryBadge: "",
    mainImage: "assets/images/keychain-main.png",
    description:
      "Keychain akrilik gemas yang siap digantung ke cardholder, tas, atau dompet. Bisa beli satuan sesuai karakter favoritmu!",
    variants: [
      {
        id: "v1",
        shortLabel: "V1",
        name: "Mascot Round",
        color: "#f48fb1",
        image: "assets/images/keychain-v1.png",
        description: "Keychain bundar bergambar maskot ikonik Cantelin."
      },
      {
        id: "v2",
        shortLabel: "V2",
        name: "Midnight Mini",
        color: "#26242c",
        image: "assets/images/keychain-v2.png",
        description: "Mini acrylic charm desain kartu Midnight Star."
      },
      {
        id: "v3",
        shortLabel: "V3",
        name: "Sunny Mini",
        color: "#ffd54f",
        image: "assets/images/keychain-v3.png",
        description: "Mini acrylic charm desain kartu Sunny Arcade."
      }
    ]
  },
  {
    id: "stiker",
    name: "Stiker",
    subtitle: "",
    badgePrice: "6k",
    badgeSub: "Get 2",
    secondaryBadge: "",
    mainImage: "assets/images/stiker-main.png",
    description:
      "Stiker die-cut karakter & tipografi seru Cantelin. Cocok ditempel di casing HP, laptop, tumbler, dan jurnal.",
    variants: [
      {
        id: "v1",
        shortLabel: "V1",
        name: "Pink Mascot",
        color: "#ec407a",
        image: "assets/images/stiker-v1.png",
        description: "Paket stiker seri Pink Mascot (dapat 2 pcs)."
      },
      {
        id: "v2",
        shortLabel: "V2",
        name: "Blue Ribbon",
        color: "#4facfe",
        image: "assets/images/stiker-v2.png",
        description: "Paket stiker seri Blue Ribbon (dapat 2 pcs)."
      },
      {
        id: "v3",
        shortLabel: "V3",
        name: "Sunny Doodle",
        color: "#ffd54f",
        image: "assets/images/stiker-v3.png",
        description: "Paket stiker seri Sunny Doodle (dapat 2 pcs)."
      }
    ]
  },
  {
    id: "pin",
    name: "Pin",
    subtitle: "",
    badgePrice: "6k",
    badgeSub: "Get 1",
    secondaryBadge: "",
    mainImage: "assets/images/pin-main.png",
    description:
      "Pin peniti ilustrasi estetik berukuran pas untuk menghias totebag, tas sekolah, atau pouch harian kamu.",
    variants: [
      {
        id: "v1",
        shortLabel: "V1",
        name: "Mascot Pink",
        color: "#ec407a",
        image: "assets/images/pin-v1.png",
        description: "Pin desain karakter utama Mascot Pink."
      },
      {
        id: "v2",
        shortLabel: "V2",
        name: "Blue Ribbon",
        color: "#4facfe",
        image: "assets/images/pin-v2.png",
        description: "Pin desain karakter gemas Blue Ribbon."
      },
      {
        id: "v3",
        shortLabel: "V3",
        name: "Sunny Retro",
        color: "#ffd54f",
        image: "assets/images/pin-v3.png",
        description: "Pin grafis retro warna kuning cerah."
      },
      {
        id: "v4",
        shortLabel: "V4",
        name: "Mint Pop",
        color: "#66d9b9",
        image: "assets/images/pin-v4.png",
        description: "Pin pastel mint dengan detail coral pop."
      }
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
