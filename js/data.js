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
    subtitle: "1 Card holder Cantelin+ 1 Keychain",
    badgePrice: "35k",
    badgeSub: "",
    secondaryBadge: "Paket Hemat",
    secondaryBadgeFirst: true,
    hideModalSubtitleBadge: true,
    mainImage: "assets/images/paket-main.png",
    description:
      "Bundle lengkap Cardholder + Carabiner warna pastel/neon + Keychain Charm Cantelin. Lebih hemat dan langsung siap gantung!",
    variants: [
      { id: "main", image: "assets/images/paket-main.png" },
      { id: "v1", image: "assets/images/paket-v1.JPG" },
      { id: "v2", image: "assets/images/paket-v2.JPG" }
    ]
  },
  {
    id: "card holder cantelin",
    name: "Card holder Cantelin",
    subtitle: "Without keychain",
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
        image: "assets/images/cardholder-v4.png",
        description: "Cardholder varian merah berkesan bold dan mencolok."
      },
      {
        id: "v5",
        shortLabel: "V5",
        name: "Black",
        color: "#26242c",
        image: "assets/images/cardholder-v5.png",
        description: "Cardholder varian hitam elegan dengan tampilan minimalis."
      },
      {
        id: "v6",
        shortLabel: "V6",
        name: "Orange",
        color: "#ff8a34",
        image: "assets/images/cardholder-v6.png",
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
      { id: "v1", shortLabel: "V1", name: "zzhang!", color: "#f48fb1", image: "assets/images/keychain-v1.png", description: "Keychain karakter monyet kuning dengan outline merah muda yang bold dan ekspresif. Playful, colorful, a little character to brighten up your everyday!" },
      { id: "v2", shortLabel: "V2", name: "yihaa!", color: "#ec407a", image: "assets/images/keychain-v2.png", description: "Keychain karakter monyet hijau bermata kuning dengan outline oranye yang kontras. A unique color combination with a character of its own!" },
      { id: "v3", shortLabel: "V3", name: "helow!", color: "#66d9b9", image: "assets/images/keychain-v3.png", description: "Keychain karakter monyet merah muda dengan outline biru yang calming. A playful little character to tag along wherever you go!" },
      { id: "v4", shortLabel: "V4", name: "woops!", color: "#4facfe", image: "assets/images/keychain-v4.png", description: "Keychain karakter monyet biru dengan outline kuning dan detail mata hijau. A fun little addition to your everyday essentials!" },
      { id: "v5", shortLabel: "V5", name: "ur da real art", color: "#ffd54f", image: "assets/images/keychain-v5.png", description: "Keychain berbentuk speech bubble bertuliskan \"Ur Da Real Art Babe\" dilengkapi dengan outline hitam. Simpel, artsy. A little reminder that you're a work of art!" },
      { id: "v6", shortLabel: "V6", name: "bunny", color: "#ff765c", image: "assets/images/keychain-v6.png", description: "Keychain karakter kelinci mungil yang sedang mengedipkan mata, lengkap dengan pipi merona dan aksen semanggi. What a sweet, adorable, and a little lucky charm to carry around!" },
      { id: "v7", shortLabel: "V7", name: "apple", color: "#ef4444", image: "assets/images/keychain-v7.png", description: "Keychain ilustrasi potongan apel merah disertai dengan tulisan \"Yappy\" yang menggemaskan di atasnya. A little slice of happiness for you everyday!" },
      { id: "v8", shortLabel: "V8", name: "fish", color: "#4facfe", image: "assets/images/keychain-v8.png", description: "Keychain ilustrasi ikan merah bermotif bintik-bintik kuning di dalam air. Add some splash of color to your day!" },
      { id: "v9", shortLabel: "V9", name: "orang keren", color: "#26242c", image: "assets/images/keychain-v9.png", description: "Keychain dengan desain menyerupai kartu identitas bertuliskan \"Hello, Aku GWH Orang Keren #WeTrust\". A little reminder of who you are, because being cool is an identity!" },
      { id: "v10", shortLabel: "V10", name: "baby bangs", color: "#f7a8c4", image: "assets/images/keychain-v10.png", description: "Keychain ilustrasi wajah bermata besar dengan ekspresi datar khas dan poni rambut sebagai latar tulisan \"Baby Bangs Club\". Bold, quirky, and serving a whole lot of attitude!" },
      { id: "v11", shortLabel: "V11", name: "blue monster", color: "#4169e1", image: "assets/images/keychain-v11.png", description: "Keychain dengan ilustrasi monster bermata merah dengan latar biru gelap yang kontras. A little mysterious, a little spooky!" },
      { id: "v12", shortLabel: "V12", name: "tomato", color: "#ff4d4d", image: "assets/images/keychain-v12.png", description: "Keychain dengan ilustrasi tomat tampak dari atas, lengkap dengan daun hijau dan tulisan Korea sebagai detailnya. Fresh, quirky, and a little tomato to spice up your collection!" }
    ]
  },
  {
    id: "pin kece",
    name: "Pin Kece",
    subtitle: "",
    badgePrice: "5k",
    badgeSub: "Get 1",
    secondaryBadge: "",
    mainImage: "assets/images/pin-main.JPG",
    description:
      "Pin peniti ilustrasi estetik berukuran pas untuk menghias totebag, tas sekolah, atau pouch harian kamu.",
    variants: [
      { id: "v1", shortLabel: "V1", name: "zzhang!", color: "#ec407a", image: "assets/images/pin-v1.jpeg", description: "Pin dengan ilustrasi monyet kuning ber-outline pink yang dikelilingi dekorasi bintang warna-warni." },
      { id: "v2", shortLabel: "V2", name: "yihaa!", color: "#ffd54f", image: "assets/images/pin-v2.jpeg", description: "Pin dengan ilustrasi monyet hijau dengan outline oranye, dilengkapi taburan bintang warna-warni." },
      { id: "v3", shortLabel: "V3", name: "helow!", color: "#66d9b9", image: "assets/images/pin-v3.jpeg", description: "Pin dengan ilustrasi monyet pink dengan outline biru serta dekorasi bintang warna-warni." },
      { id: "v4", shortLabel: "V4", name: "woops!", color: "#4facfe", image: "assets/images/pin-v4.jpeg", description: "Pin dengan ilustrasi monyet biru dengan detail mata hijau serta dekorasi bintang warna-warni." },
      { id: "v5", shortLabel: "V5", name: "#MenHaters", color: "#26242c", image: "assets/images/pin-v5.jpeg", description: "Pin dengan kombinasi warna merah dan biru muda dengan bertuliskan hashtag Men Haters yang bold." },
      { id: "v6", shortLabel: "V6", name: "Help Me", color: "#ff765c", image: "assets/images/pin-v6.jpeg", description: "Pin berlatar kuning dengan permainan tipografi warna-warni." },
      { id: "v7", shortLabel: "V7", name: "Eyeball", color: "#9b8cff", image: "assets/images/pin-v7.jpeg", description: "Pin dengan ilustrasi bola mata berwarna putih, lengkap dengan detail garis merah menyerupai urat mata di atas latar biru gelap." }
    ]
  },
  {
    id: "sticker keren",
    name: "Sticker Keren",
    subtitle: "",
    badgePrice: "6k",
    badgeSub: "Get 2",
    secondaryBadge: "",
    mainImage: "assets/images/stiker-main.jpeg",
    description:
      "Stiker dengan beragam ilustrasi karakter, tipografi, dan desain colorful yang unik. Cocok untuk menghias casing HP, laptop, tumbler, notebook, hingga jurnal!",
    variants: [
      { id: "main", image: "assets/images/stiker-main.jpeg" },
      { id: "v1", image: "assets/images/stiker-v1.JPG" },
      { id: "v2", image: "assets/images/stiker-v2.jpeg" }
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
    image: "assets/images/home-slide2.png",
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
    image: "assets/images/home-slide-4.JPG",
    priceLabel: "6k Get 1",
    subtitle: "Button Pin Koleksi"
  },
  {
    productId: "paket",
    title: "Paket Hemat Cantelin",
    image: "assets/images/home-slide-5.png",
    priceLabel: "35k Paket Hemat",
    subtitle: "Cardholder + Carabiner + Keychain"
  },
  {
    productId: "koleksi",
    title: "Koleksi Cantelin",
    image: "assets/images/home-slide-6.png",
    priceLabel: "Koleksi Lengkap",
    subtitle: "Perintilan Cantelin"
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
