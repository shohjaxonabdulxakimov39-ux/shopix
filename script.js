/**
 * SHOPIX — Online Marketplace Main Script
 * Vanilla JavaScript (ES6+)
 * 
 * Includes:
 * - Product dataset (24+ items across electronics, laptops, phones, fashion, home, gaming)
 * - Hero carousel with autoplay, touch, dots & navigation
 * - Real-time flash sale countdown timer (Hours : Mins : Secs : Millis)
 * - Live search with suggestions & instant filtering
 * - Multi-criteria filter & sort engine (Category, Price, Rating, Brand)
 * - Shopping cart drawer with persistent localStorage & quantity controls
 * - Wishlist system with heart animations & localStorage
 * - Product quick view & full details modal with specifications
 * - Authentication modal (Login / Register / Demo Account)
 * - Checkout modal with payment options (Card, Cash, Online) & Order confirmation
 * - Location selector for Uzbekistan regions
 * - Dark / Light mode toggle with persistent state
 * - Toast notification feedback system
 * - Mobile bottom navigation & responsive drawer handlers
 */

// ==========================================================================
// 1. DATASET: 24+ DETAILED DEMO PRODUCTS
// ==========================================================================
const PRODUCTS_DATA = [
  {
    id: 1,
    title: "Samsung Galaxy S25 Ultra 12/512GB Titanium Gray",
    brand: "Samsung",
    category: "phones",
    categoryName: "Telefonlar",
    price: 13990000,
    oldPrice: 15800000,
    discount: 11,
    rating: 4.9,
    reviews: 248,
    soldCount: 520,
    stock: 18,
    badge: "Top sotuv",
    isFlashSale: true,
    isRecommended: true,
    deliveryInfo: "Ertaga bepul yetkazib berish",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&auto=format&fit=crop&q=80",
    description: "Samsung flagmani — eng kuchli Snapdragon 8 Elite protsessori, 200 MP ultra-tiniq kamera, sun'iy intellekt (Galaxy AI) funksiyalari va mustahkam titan korpus bilan jihozlangan.",
    specs: {
      "Ekran": "6.8\" Dynamic AMOLED 2X, 120Hz",
      "Protsessor": "Snapdragon 8 Elite (3 nm)",
      "Tezkor xotira (RAM)": "12 GB",
      "Doimiy xotira": "512 GB",
      "Asosiy kamera": "200 MP + 50 MP + 50 MP + 10 MP",
      "Akkumulyator": "5000 mA/soat, 45W tezkor quvvatlash",
      "Kafolat": "1 yil rasmiy kafolat"
    }
  },
  {
    id: 2,
    title: "Apple iPhone 16 Pro Max 256GB Desert Titanium",
    brand: "Apple",
    category: "phones",
    categoryName: "Telefonlar",
    price: 15450000,
    oldPrice: 17200000,
    discount: 10,
    rating: 5.0,
    reviews: 380,
    soldCount: 890,
    stock: 12,
    badge: "Yangi",
    isFlashSale: false,
    isRecommended: true,
    deliveryInfo: "Ertaga bepul yetkazib berish",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop&q=80",
    description: "Yangi A18 Pro chipi, Camera Control sensori, mukammal 48 MP kameralar tizimi va uzoq vaqtga yetuvchi batareya bilan Apple'ning eng ilg‘or smartfoni.",
    specs: {
      "Ekran": "6.9\" Super Retina XDR OLED, ProMotion 120Hz",
      "Protsessor": "Apple A18 Pro (3 nm)",
      "Doimiy xotira": "256 GB",
      "Kamera": "48 MP asosiy + 48 MP ultra-keng + 12 MP telephoto 5x",
      "Material": "Titanium korpus va Ceramic Shield",
      "Kafolat": "1 yil rasmiy Apple kafolati"
    }
  },
  {
    id: 3,
    title: "Xiaomi 14 Pro 16/512GB Black Leica Optics",
    brand: "Xiaomi",
    category: "phones",
    categoryName: "Telefonlar",
    price: 9450000,
    oldPrice: 10900000,
    discount: 13,
    rating: 4.8,
    reviews: 132,
    soldCount: 310,
    stock: 25,
    badge: "Chegirma",
    isFlashSale: true,
    isRecommended: false,
    deliveryInfo: "Ertaga bepul yetkazib berish",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80",
    description: "Leica Summilux linzalari, Snapdragon 8 Gen 3 va HyperOS bilan birlashtirilgan Xiaomi'ning eng nufuzli modeli. 120W giper quvvatlash tizimi.",
    specs: {
      "Ekran": "6.73\" LTPO AMOLED 120Hz, 3000 nit",
      "Protsessor": "Snapdragon 8 Gen 3",
      "Xotira": "16 GB RAM / 512 GB ROM",
      "Kamera": "50 MP Leica o'zgaruvchan diafragma f/1.42 - f/4.0",
      "Zaryadlash": "120W (18 daqiqada 100%)",
      "Kafolat": "1 yil rasmiy"
    }
  },
  {
    id: 4,
    title: "Apple MacBook Pro 16\" M3 Pro 18GB/512GB Space Black",
    brand: "Apple",
    category: "laptops",
    categoryName: "Kompyuterlar",
    price: 27900000,
    oldPrice: 30500000,
    discount: 9,
    rating: 4.9,
    reviews: 115,
    soldCount: 140,
    stock: 8,
    badge: "Premium",
    isFlashSale: false,
    isRecommended: true,
    deliveryInfo: "Ertaga bepul yetkazib berish",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80",
    description: "Dasturchilar, dizaynerlar va video montaj ustalari uchun qudratli Apple Silicon M3 Pro protsessorli noutbuk. 22 soatlik batareya quvvati.",
    specs: {
      "Ekran": "16.2\" Liquid Retina XDR (3456x2234), 120Hz ProMotion",
      "Chip": "Apple M3 Pro (12 yadroli CPU, 18 yadroli GPU)",
      "Birlashgan xotira": "18 GB Unified Memory",
      "SSD": "512 GB yuqori tezlikdagi SSD",
      "Portlar": "3x Thunderbolt 4, HDMI, SDXC, MagSafe 3",
      "Kafolat": "1 yil rasmiy"
    }
  },
  {
    id: 5,
    title: "Lenovo Legion 5 Pro 16\" Ryzen 7 / RTX 4070 / 32GB / 1TB",
    brand: "Lenovo",
    category: "laptops",
    categoryName: "Kompyuterlar",
    price: 17200000,
    oldPrice: 19800000,
    discount: 13,
    rating: 4.9,
    reviews: 168,
    soldCount: 220,
    stock: 14,
    badge: "Top sotuv",
    isFlashSale: true,
    isRecommended: true,
    deliveryInfo: "Ertaga bepul yetkazib berish",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&auto=format&fit=crop&q=80",
    description: "Eng so'nggi o'yinlar va og'ir 3D loyihalar uchun maxsus ishlab chiqilgan geymerlar noutbuki. Coldfront 5.0 sovutish tizimi va WQXGA 240Hz ekran.",
    specs: {
      "Ekran": "16\" WQXGA (2560x1600) IPS, 240Hz, 100% sRGB",
      "Protsessor": "AMD Ryzen 7 7745HX (8 yadro, 16 oqim)",
      "Videokarta": "NVIDIA GeForce RTX 4070 8GB GDDR6 (140W)",
      "RAM": "32 GB DDR5 5200MHz",
      "SSD": "1 TB NVMe PCIe 4.0",
      "Kafolat": "2 yil kafolat"
    }
  },
  {
    id: 6,
    title: "HP Spectre x360 2-in-1 14\" OLED Touch Intel Core Ultra 7",
    brand: "HP",
    category: "laptops",
    categoryName: "Kompyuterlar",
    price: 16800000,
    oldPrice: 18500000,
    discount: 9,
    rating: 4.7,
    reviews: 64,
    soldCount: 95,
    stock: 10,
    badge: "Yangi",
    isFlashSale: false,
    isRecommended: false,
    deliveryInfo: "Ertaga bepul yetkazib berish",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop&q=80",
    description: "360 darajaga aylanuvchi sensorli 2.8K OLED ekran, yengil alyuminiy korpus va sun'iy intellekt qo'llab-quvvatlovchi yangi Intel Core Ultra chipi.",
    specs: {
      "Ekran": "14\" 2.8K (2880 x 1800) OLED Sensorli, 120Hz",
      "Protsessor": "Intel Core Ultra 7 155H (16 yadro)",
      "Xotira": "16 GB LPDDR5x / 1 TB PCIe Gen4 NVMe",
      "Vazni": "1.44 kg o'ta ixcham",
      "Kafolat": "1 yil rasmiy"
    }
  },
  {
    id: 7,
    title: "Sony WH-1000XM5 Wireless Noise-Canceling Headphones Black",
    brand: "Sony",
    category: "audio",
    categoryName: "Quloqchinlar",
    price: 4350000,
    oldPrice: 4990000,
    discount: 12,
    rating: 4.9,
    reviews: 312,
    soldCount: 650,
    stock: 30,
    badge: "Top sotuv",
    isFlashSale: true,
    isRecommended: true,
    deliveryInfo: "Ertaga bepul yetkazib berish",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
    description: "Dunyoning eng yaxshi shovqinni to'suvchi (Active Noise Canceling) simsiz quloqchini. 30 soat batareya, LDAC yuqori sifatli audio va qulay ergonomika.",
    specs: {
      "Shovqin so'ndirish": "Auto NC Optimizer bilan ikkita protsessor",
      "Batareya": "30 soatgacha uzluksiz musiqa",
      "Tez quvvatlash": "3 daqiqa zaryad = 3 soat ishlash",
      "Bluetooth": "5.2, Multipoint (2 ta qurilma)",
      "Mikrofon": "8 ta shovqinni kamaytiruvchi mikrofon",
      "Kafolat": "1 yil rasmiy"
    }
  },
  {
    id: 8,
    title: "Apple AirPods Pro 2 (USB-C) MagSafe Case",
    brand: "Apple",
    category: "audio",
    categoryName: "Quloqchinlar",
    price: 2850000,
    oldPrice: 3200000,
    discount: 11,
    rating: 4.9,
    reviews: 540,
    soldCount: 1200,
    stock: 45,
    badge: "Top sotuv",
    isFlashSale: false,
    isRecommended: true,
    deliveryInfo: "Ertaga bepul yetkazib berish",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&auto=format&fit=crop&q=80",
    description: "H2 chipi tufayli 2 barobar kuchliroq faol shovqin bekor qilish, moslashuvchan audio va yangilangan USB-C zaryadlash g'ilofi.",
    specs: {
      "Chip": "Apple H2 quloqchinlarda, U1 g'ilofda",
      "Audio": "Spatial Audio (Fazoviy ovoz)",
      "Himoya": "IP54 chang va suvdan himoya",
      "Batareya": "G'ilof bilan 30 soatgacha",
      "Kafolat": "1 yil rasmiy"
    }
  },
  {
    id: 9,
    title: "JBL Charge 5 Portativ Simsiz Kolonka Suv O'tkazmaydigan",
    brand: "JBL",
    category: "audio",
    categoryName: "Quloqchinlar",
    price: 1890000,
    oldPrice: 2200000,
    discount: 14,
    rating: 4.8,
    reviews: 210,
    soldCount: 430,
    stock: 22,
    badge: "Chegirma",
    isFlashSale: true,
    isRecommended: false,
    deliveryInfo: "Ertaga bepul yetkazib berish",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&auto=format&fit=crop&q=80",
    description: "Boy original JBL Pro ovozi, chuqur baslar va smartfonlarni quvvatlash uchun o'rnatilgan Powerbank funksiyasi. IP67 suv va chang himoyasi.",
    specs: {
      "Quvvat": "40W RMS",
      "Batareya": "20 soatgacha ijro",
      "Himoya darajasi": "IP67 to'liq suv o'tkazmaslik",
      "Powerbank": "Ha, USB orqali telefonni quvvatlaydi",
      "Kafolat": "1 yil rasmiy"
    }
  },
  {
    id: 10,
    title: "Nike Air Force 1 '07 Original Oq Krossovka",
    brand: "Nike",
    category: "shoes",
    categoryName: "Poyabzal",
    price: 1350000,
    oldPrice: 1650000,
    discount: 18,
    rating: 4.9,
    reviews: 420,
    soldCount: 980,
    stock: 35,
    badge: "Top sotuv",
    isFlashSale: true,
    isRecommended: true,
    deliveryInfo: "Ertaga bepul yetkazib berish",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=80",
    description: "Klassik afsonaviy krossovka. Tabiiy teridan tikilgan, qulay amortizatsiyali Nike Air tagligi bilan uzoq kiyishga mo'ljallangan.",
    specs: {
      "Material": "100% Tabiiy teri va kauchuk taglik",
      "Amortizatsiya": "Nike Air havo yostig'i",
      "Mavsum": "Barcha fasllar uchun qulay",
      "O'lchamlar": "40, 41, 42, 43, 44, 45",
      "Kafolat": "100% Original mahsulot"
    }
  },
  {
    id: 11,
    title: "Adidas Ultraboost Light Qulay Yugurish Krossovkasi",
    brand: "Adidas",
    category: "shoes",
    categoryName: "Poyabzal",
    price: 1750000,
    oldPrice: 2100000,
    discount: 16,
    rating: 4.8,
    reviews: 185,
    soldCount: 340,
    stock: 20,
    badge: "Chegirma",
    isFlashSale: false,
    isRecommended: true,
    deliveryInfo: "Ertaga bepul yetkazib berish",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&auto=format&fit=crop&q=80",
    description: "Eng yengil Light BOOST tagligi har bir qadamingizga maksimal energiya qaytaradi. Primeknit+ nafas oluvchi yuqori qism.",
    specs: {
      "Taglik texnologiyasi": "30% yengilroq Light BOOST",
      "Yuqori qism": "Primeknit+ nafas oluvchi to'qima",
      "Ushlash": "Continental kauchuk tashqi taglik",
      "O'lchamlar": "39 dan 45 gacha",
      "Kafolat": "Asl sifat kafolati"
    }
  },
  {
    id: 12,
    title: "Nike Sportswear Club Fleece Kaputkali Xudi (Qora)",
    brand: "Nike",
    category: "clothing",
    categoryName: "Kiyim-kechak",
    price: 680000,
    oldPrice: 850000,
    discount: 20,
    rating: 4.7,
    reviews: 190,
    soldCount: 510,
    stock: 40,
    badge: "Top sotuv",
    isFlashSale: false,
    isRecommended: false,
    deliveryInfo: "Ertaga bepul yetkazib berish",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=80",
    description: "Klassik uslub va yumshoq jun astarli qulaylik. Har kungi sayrlar va sport uchun ideal issiq va nafis xudi.",
    specs: {
      "Tarkibi": "80% Paxta, 20% Poliester",
      "Xususiyati": "Yumshoq flis ichki qatlam",
      "Cho'ntak": "Old qismida keng kenguru cho'ntak",
      "O'lchamlar": "S, M, L, XL, XXL"
    }
  },
  {
    id: 13,
    title: "Adidas Originals Firebird Klassik Sport Kurtkasi",
    brand: "Adidas",
    category: "clothing",
    categoryName: "Kiyim-kechak",
    price: 820000,
    oldPrice: 990000,
    discount: 17,
    rating: 4.8,
    reviews: 140,
    soldCount: 290,
    stock: 18,
    badge: "Chegirma",
    isFlashSale: true,
    isRecommended: false,
    deliveryInfo: "Ertaga bepul yetkazib berish",
    image: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=600&auto=format&fit=crop&q=80",
    description: "Afsonaviy 3 chiziqli klassik trikotaj kurtka. Harakat erkinligi va shahar ko'cha uslubi uchun ajoyib tanlov.",
    specs: {
      "Material": "100% qayta ishlangan poliester trikotaj",
      "Uslub": "Erkin regular fit",
      "Detallar": "Tik yoqa va to'liq uzunlikdagi fermuar"
    }
  },
  {
    id: 14,
    title: "Philips Airfryer XXL Smart Sensing Issiq Havo Pechi",
    brand: "Philips",
    category: "home",
    categoryName: "Uy va maishiy texnika",
    price: 3100000,
    oldPrice: 3600000,
    discount: 14,
    rating: 4.9,
    reviews: 178,
    soldCount: 390,
    stock: 15,
    badge: "Top sotuv",
    isFlashSale: true,
    isRecommended: true,
    deliveryInfo: "Ertaga bepul yetkazib berish",
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&auto=format&fit=crop&q=80",
    description: "90% gacha kamroq yog' bilan qarsildoq va mazali taomlar tayyorlash. Butun tovuq yoki 1.4 kg fri kartoshka sig'imi.",
    specs: {
      "Hajmi": "7.2 litr (XXL oilaviy hajm)",
      "Quvvati": "2225 Watt",
      "Dasturlar": "Smart Sensing — harorat va vaqtni avto sozlash",
      "Tozalash": "QuickClean olinadigan savat, idish yuvish mashinasiga mos",
      "Kafolat": "2 yil rasmiy kafolat"
    }
  },
  {
    id: 15,
    title: "Xiaomi Robot Vacuum X10+ Aqlli Changyutgich Stansiyali",
    brand: "Xiaomi",
    category: "home",
    categoryName: "Uy va maishiy texnika",
    price: 6850000,
    oldPrice: 7900000,
    discount: 13,
    rating: 4.8,
    reviews: 95,
    soldCount: 160,
    stock: 11,
    badge: "Yangi",
    isFlashSale: false,
    isRecommended: true,
    deliveryInfo: "Ertaga bepul yetkazib berish",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80",
    description: "Avtomatik changni tozalash, lattalarni yuvish va issiq havo bilan quritish stansiyasiga ega flagman aqlli robot changyutgich.",
    specs: {
      "Tortish kuchi": "4000 Pa kuchli assimilyatsiya",
      "Navigatsiya": "LDS lazer + AI to'siqlarni tanish kamerasi",
      "Stansiya": "Avtomatik axlat bo'shatish va toza suv almashtirish",
      "Ilova": "Mi Home / Google Home / Alexa",
      "Kafolat": "1 yil rasmiy"
    }
  },
  {
    id: 16,
    title: "Sony PlayStation 5 Slim 1TB Disk Edition Konsol",
    brand: "Sony",
    category: "gaming",
    categoryName: "Gaming & Gadjetlar",
    price: 6450000,
    oldPrice: 7200000,
    discount: 10,
    rating: 5.0,
    reviews: 620,
    soldCount: 1450,
    stock: 24,
    badge: "Top sotuv",
    isFlashSale: true,
    isRecommended: true,
    deliveryInfo: "Ertaga bepul yetkazib berish",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&auto=format&fit=crop&q=80",
    description: "Yangi ingichka dizayndagi PS5 Slim. Ultra tezkor 1TB SSD, DualSense gaptik aloqali kontroller va 4K 120fps gacha o'yinlar quvvati.",
    specs: {
      "Xotira": "1 TB maxsus yuqori tezlikdagi SSD",
      "Optik disk": "Ultra HD Blu-ray disk drayveri o'rnatilgan",
      "Grafika": "Ray Tracing nurlarni kuzatish, 4K-TV o'yinlar",
      "To'plamda": "DualSense simsiz geympad, HDMI kabel, taglik",
      "Kafolat": "1 yil rasmiy kafolat"
    }
  },
  {
    id: 17,
    title: "Logitech MX Master 3S Ergonomik Simsiz Sifatli Sichqoncha",
    brand: "Logitech",
    category: "gaming",
    categoryName: "Gaming & Gadjetlar",
    price: 1350000,
    oldPrice: 1550000,
    discount: 13,
    rating: 4.9,
    reviews: 280,
    soldCount: 710,
    stock: 35,
    badge: "Top sotuv",
    isFlashSale: false,
    isRecommended: true,
    deliveryInfo: "Ertaga bepul yetkazib berish",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=80",
    description: "Dasturchilar va ofis ustalari uchun eng qulay sichqoncha. 8000 DPI Darkfield sensori har qanday sirtda (hatto oynada) ishlaydi.",
    specs: {
      "Sensori": "8000 DPI gacha Darkfield",
      "G'ildirak": "MagSpeed elektromagnit tezkor aylantirish",
      "Shovqin": "Quiet Clicks 90% jim tugmalar",
      "Ulanish": "Bluetooth va Logi Bolt USB, 3 ta qurilma",
      "Batareya": "70 kungacha, USB-C tezkor quvvatlash"
    }
  },
  {
    id: 18,
    title: "Samsung Galaxy Watch 6 Classic 47mm LTE Black",
    brand: "Samsung",
    category: "accessories",
    categoryName: "Aksessuarlar",
    price: 3650000,
    oldPrice: 4200000,
    discount: 13,
    rating: 4.8,
    reviews: 130,
    soldCount: 280,
    stock: 19,
    badge: "Chegirma",
    isFlashSale: true,
    isRecommended: false,
    deliveryInfo: "Ertaga bepul yetkazib berish",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80",
    description: "Aylanuvchi mexanik bezel, sapfir oynali himoya va sog'liqni to'liq monitoring qiluvchi EKG, qon bosimi va uyqu tahlil datchiklari.",
    specs: {
      "Ekran": "1.5\" Super AMOLED (480x480), Sapphire Crystal",
      "Korpus": "Zanglamaydigan po'lat, aylanuvchi bezel",
      "Salomatlik": "BioActive sensor (EKG, qon bosimi, BIA)",
      "Himoya": "5ATM + IP68 / MIL-STD-810H",
      "Kafolat": "1 yil rasmiy"
    }
  },
  {
    id: 19,
    title: "Apple Watch Ultra 2 GPS + Cellular 49mm Titanium",
    brand: "Apple",
    category: "accessories",
    categoryName: "Aksessuarlar",
    price: 10800000,
    oldPrice: 11900000,
    discount: 9,
    rating: 5.0,
    reviews: 195,
    soldCount: 310,
    stock: 14,
    badge: "Premium",
    isFlashSale: false,
    isRecommended: true,
    deliveryInfo: "Ertaga bepul yetkazib berish",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
    description: "Ekstremal sport va sarguzashtlar uchun maxsus Apple soati. 3000 nit eng yorqin ekran, S9 chipi va 72 soatgacha tejamkor rejim.",
    specs: {
      "Korpus": "49 mm aerokosmik titan, safir kristalli old oyna",
      "Yorqinlik": "3000 nitgacha",
      "Sho'ng'ish": "100 metr suvga chidamli va EN13319 sertifikati",
      "Batareya": "Odatdagi rejimda 36 soat, tejamkor rejimda 72 soat",
      "Kafolat": "1 yil rasmiy Apple kafolati"
    }
  },
  {
    id: 20,
    title: "Logitech G Pro X Superlight 2 Wireless Gaming Mouse",
    brand: "Logitech",
    category: "gaming",
    categoryName: "Gaming & Gadjetlar",
    price: 1950000,
    oldPrice: 2300000,
    discount: 15,
    rating: 4.9,
    reviews: 230,
    soldCount: 520,
    stock: 16,
    badge: "Chegirma",
    isFlashSale: true,
    isRecommended: false,
    deliveryInfo: "Ertaga bepul yetkazib berish",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop&q=80",
    description: "Kiber-sportchilar tanlovi: atigi 60 gramm vazn, LIGHTFORCE gibrid optik kalitlar va HERO 2 sensori bilan 32000 DPI aniqlik.",
    specs: {
      "Og'irligi": "Atigi 60 g o'ta yengil",
      "Sensori": "HERO 2 (32000 DPI, 500+ IPS)",
      "So'rov tezligi": "4000 Hz gacha Lightspeed",
      "Batareya": "95 soat doimiy harakat",
      "Kafolat": "2 yil rasmiy"
    }
  },
  {
    id: 21,
    title: "Samsung Galaxy A55 5G 8/256GB Awesome Navy",
    brand: "Samsung",
    category: "phones",
    categoryName: "Telefonlar",
    price: 4650000,
    oldPrice: 5200000,
    discount: 11,
    rating: 4.7,
    reviews: 310,
    soldCount: 890,
    stock: 30,
    badge: "Top sotuv",
    isFlashSale: false,
    isRecommended: false,
    deliveryInfo: "Ertaga bepul yetkazib berish",
    image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&auto=format&fit=crop&q=80",
    description: "Metall ramka va shisha korpusli hamyonbop o'rta toifali qirol. OIS stabilizatsiyali 50 MP kamera va IP67 suv himoyasi.",
    specs: {
      "Ekran": "6.6\" Super AMOLED, 120Hz, FHD+",
      "Protsessor": "Exynos 1480 (4 nm)",
      "Xotira": "8 GB RAM / 256 GB ROM",
      "Kamera": "50 MP OIS + 12 MP ultra-keng + 5 MP makro",
      "Batareya": "5000 mA/soat, 25W tez zaryad",
      "Kafolat": "1 yil rasmiy"
    }
  },
  {
    id: 22,
    title: "Philips Sonicare DiamondClean 9000 Elektr Tish Cho'tkasi",
    brand: "Philips",
    category: "home",
    categoryName: "Uy va maishiy texnika",
    price: 2450000,
    oldPrice: 2900000,
    discount: 16,
    rating: 4.9,
    reviews: 145,
    soldCount: 310,
    stock: 20,
    badge: "Chegirma",
    isFlashSale: false,
    isRecommended: false,
    deliveryInfo: "Ertaga bepul yetkazib berish",
    image: "https://images.unsplash.com/photo-1559591937-e160e156e540?w=600&auto=format&fit=crop&q=80",
    description: "Ovozli texnologiya (daqiqasiga 62 000 harakat), Bluetooth ilovasi bilan tish tozalash sifatini nazorat qilish va nafis stakan-zaryadlash moslamasi.",
    specs: {
      "Tezlik": "Daqiqasiga 62 000 ta tozalash harakati",
      "Rejimlar": "4 rejim (Clean, White+, Gum Health, Deep Clean+)",
      "Qo'shimchalar": "Zaryadlovchi shisha stakan va sayohat g'ilofi",
      "Kafolat": "2 yil rasmiy kafolat"
    }
  },
  {
    id: 23,
    title: "ASUS ROG Zephyrus G16 OLED 240Hz Intel Ultra 9 / RTX 4080",
    brand: "Lenovo",
    category: "laptops",
    categoryName: "Kompyuterlar",
    price: 31500000,
    oldPrice: 34900000,
    discount: 10,
    rating: 5.0,
    reviews: 82,
    soldCount: 95,
    stock: 6,
    badge: "Premium",
    isFlashSale: false,
    isRecommended: true,
    deliveryInfo: "Ertaga bepul yetkazib berish",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&auto=format&fit=crop&q=80",
    description: "Ultra yupqa alyuminiy korpus, 2.5K 240Hz ROG Nebula OLED displey va sun'iy intellektga ega Intel Core Ultra 9 eng yuqori darajadagi texnika.",
    specs: {
      "Ekran": "16\" 2.5K (2560x1600) ROG Nebula OLED 240Hz 0.2ms",
      "Protsessor": "Intel Core Ultra 9 185H",
      "Videokarta": "NVIDIA RTX 4080 12GB GDDR6",
      "RAM / SSD": "32 GB LPDDR5X / 2 TB PCIe 4.0 NVMe",
      "Kafolat": "2 yil rasmiy"
    }
  },
  {
    id: 24,
    title: "Marshall Major IV Simsiz Quloqchin Brown",
    brand: "Sony",
    category: "audio",
    categoryName: "Quloqchinlar",
    price: 1890000,
    oldPrice: 2250000,
    discount: 16,
    rating: 4.8,
    reviews: 290,
    soldCount: 670,
    stock: 28,
    badge: "Top sotuv",
    isFlashSale: true,
    isRecommended: false,
    deliveryInfo: "Ertaga bepul yetkazib berish",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&auto=format&fit=crop&q=80",
    description: "Klassik retro Marshall uslubi, 80 dan ortiq soat simsiz tinglash, simsiz induksion quvvatlash va qulay bukiluvchi konstruksiya.",
    specs: {
      "Batareya": "80+ soat uzluksiz ijro",
      "Zaryadlash": "Simsiz Qi quvvatlash + USB-C tezkor zaryad",
      "Dizayn": "Bukiluvchi ixcham retro korpus",
      "Kafolat": "1 yil rasmiy"
    }
  }
];

// ==========================================================================
// 2. APPLICATION STATE & PERSISTENCE
// ==========================================================================
const AppState = {
  // Cart: Array of { id, quantity }
  cart: JSON.parse(localStorage.getItem('shopix_cart')) || [
    { id: 1, quantity: 1 },
    { id: 10, quantity: 1 }
  ],
  // Wishlist: Array of product IDs
  wishlist: JSON.parse(localStorage.getItem('shopix_wishlist')) || [1, 2, 7],
  // User Authentication
  user: JSON.parse(localStorage.getItem('shopix_user')) || null,
  // City
  city: localStorage.getItem('shopix_city') || "Toshkent",
  // Theme
  theme: localStorage.getItem('shopix_theme') || "light",
  // Filters & Search
  filters: {
    category: 'all',
    minPrice: null,
    maxPrice: null,
    rating: 0,
    brands: [],
    searchQuery: '',
    sort: 'popular'
  }
};

// Currency Formatter Helper
function formatPrice(amount) {
  return new Intl.NumberFormat('uz-UZ').format(amount) + " so‘m";
}

// Save helpers
function saveCart() {
  localStorage.setItem('shopix_cart', JSON.stringify(AppState.cart));
  updateCartBadges();
  renderCartDrawer();
}

function saveWishlist() {
  localStorage.setItem('shopix_wishlist', JSON.stringify(AppState.wishlist));
  updateWishlistBadges();
  renderWishlistDrawer();
}

function saveUser(user) {
  AppState.user = user;
  if (user) {
    localStorage.setItem('shopix_user', JSON.stringify(user));
  } else {
    localStorage.removeItem('shopix_user');
  }
  updateUserUI();
}

function saveCity(city) {
  AppState.city = city;
  localStorage.setItem('shopix_city', city);
  const cityEl = document.getElementById('currentCityText');
  if (cityEl) cityEl.textContent = city;
}

// ==========================================================================
// 3. TOAST NOTIFICATIONS
// ==========================================================================
function showToast(message, type = 'success', icon = null) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let defaultIcon = 'fa-solid fa-circle-check';
  if (type === 'heart') defaultIcon = 'fa-solid fa-heart';
  if (type === 'info') defaultIcon = 'fa-solid fa-circle-info';
  if (type === 'remove') defaultIcon = 'fa-solid fa-trash-can';

  toast.innerHTML = `
    <i class="${icon || defaultIcon} toast-icon"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Auto remove after 3.5s
  setTimeout(() => {
    toast.remove();
  }, 3500);
}

// ==========================================================================
// 4. THEME (DARK / LIGHT MODE)
// ==========================================================================
function initTheme() {
  document.documentElement.setAttribute('data-theme', AppState.theme);
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      AppState.theme = AppState.theme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', AppState.theme);
      localStorage.setItem('shopix_theme', AppState.theme);
      showToast(AppState.theme === 'dark' ? "Tungi rejim yoqildi" : "Kunduzgi rejim yoqildi", "info");
    });
  }
}

// ==========================================================================
// 5. HERO SLIDER LOGIC
// ==========================================================================
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dots .dot');
  const prevBtn = document.getElementById('sliderPrevBtn');
  const nextBtn = document.getElementById('sliderNextBtn');
  const slider = document.getElementById('heroSlider');

  if (!slides.length) return;

  let currentSlide = 0;
  let slideInterval = null;

  function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentSlide);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function startAutoplay() {
    stopAutoplay();
    slideInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoplay() {
    if (slideInterval) clearInterval(slideInterval);
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); startAutoplay(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); startAutoplay(); });

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const idx = parseInt(e.target.dataset.index, 10);
      showSlide(idx);
      startAutoplay();
    });
  });

  if (slider) {
    slider.addEventListener('mouseenter', stopAutoplay);
    slider.addEventListener('mouseleave', startAutoplay);
  }

  startAutoplay();
}

// ==========================================================================
// 6. FLASH SALE COUNTDOWN TIMER
// ==========================================================================
function initFlashCountdown() {
  const hoursEl = document.getElementById('timerHours');
  const minsEl = document.getElementById('timerMinutes');
  const secsEl = document.getElementById('timerSeconds');
  const millisEl = document.getElementById('timerMillis');

  if (!hoursEl || !minsEl || !secsEl || !millisEl) return;

  // Set target to end of today plus 8 hours (or fixed 24h cycle)
  let targetTime = new Date().getTime() + (2 * 3600 + 45 * 60 + 30) * 1000;

  function updateTimer() {
    const now = new Date().getTime();
    let difference = targetTime - now;

    if (difference <= 0) {
      // Reset cycle
      targetTime = new Date().getTime() + 24 * 3600 * 1000;
      difference = targetTime - now;
    }

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    const millis = Math.floor((difference % 1000) / 10);

    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(minutes).padStart(2, '0');
    secsEl.textContent = String(seconds).padStart(2, '0');
    millisEl.textContent = String(millis).padStart(2, '0');

    requestAnimationFrame(updateTimer);
  }

  requestAnimationFrame(updateTimer);
}

// ==========================================================================
// 7. RENDER PRODUCT CARDS (HTML GENERATOR)
// ==========================================================================
function createProductCardHTML(product, isFlash = false) {
  const isWishlisted = AppState.wishlist.includes(product.id);
  const badgeHTML = product.badge ? `
    <div class="card-badges">
      <span class="card-badge ${product.badge === 'Top sotuv' ? 'badge-hot' : product.badge === 'Yangi' ? 'badge-new' : 'badge-discount'}">
        ${product.badge}
      </span>
      ${product.discount ? `<span class="card-badge badge-discount">-${product.discount}%</span>` : ''}
    </div>
  ` : '';

  const soldProgressHTML = isFlash ? `
    <div class="sold-progress-box">
      <div class="sold-progress-label">
        <span>Sotildi: ${product.soldCount} ta</span>
        <span>Qoldi: ${product.stock} ta</span>
      </div>
      <div class="sold-progress-track">
        <div class="sold-progress-fill" style="width: ${Math.min(95, Math.round((product.soldCount / (product.soldCount + product.stock)) * 100))}%;"></div>
      </div>
    </div>
  ` : '';

  return `
    <div class="product-card ${isFlash ? 'flash-sale-card' : ''}" data-id="${product.id}">
      <div class="product-media">
        ${badgeHTML}
        <button class="card-wishlist-btn ${isWishlisted ? 'active' : ''}" data-id="${product.id}" aria-label="Sevimlilarga qo'shish">
          <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>
        <img src="${product.image}" alt="${product.title}" loading="lazy">
      </div>

      <div class="product-info">
        <span class="product-brand">${product.brand}</span>
        <h3 class="product-title" title="${product.title}">${product.title}</h3>

        <div class="product-rating-row">
          <span class="rating-score"><i class="fa-solid fa-star star-filled"></i> ${product.rating.toFixed(1)}</span>
          <span class="review-count">(${product.reviews} sharh)</span>
        </div>

        <div class="product-delivery-badge">
          <i class="fa-solid fa-truck-fast"></i> ${product.deliveryInfo}
        </div>

        ${soldProgressHTML}

        <div class="product-pricing">
          <div class="price-current">${formatPrice(product.price)}</div>
          ${product.oldPrice ? `
            <div class="price-old-wrap">
              <span class="price-old">${formatPrice(product.oldPrice)}</span>
              ${product.discount ? `<span class="price-discount-pill">-${product.discount}%</span>` : ''}
            </div>
          ` : ''}
        </div>

        <button class="card-add-cart-btn" data-id="${product.id}">
          <i class="fa-solid fa-cart-shopping"></i> Savatga qo‘shish
        </button>
      </div>
    </div>
  `;
}

// ==========================================================================
// 8. RENDER SECTIONS: FLASH SALE & RECOMMENDED
// ==========================================================================
function renderFlashSaleProducts() {
  const container = document.getElementById('flashProductsGrid');
  if (!container) return;

  const flashItems = PRODUCTS_DATA.filter(p => p.isFlashSale).slice(0, 4);
  container.innerHTML = flashItems.map(p => createProductCardHTML(p, true)).join('');
}

function renderRecommendedProducts() {
  const container = document.getElementById('recommendedProductsGrid');
  if (!container) return;

  const recItems = PRODUCTS_DATA.filter(p => p.isRecommended).slice(0, 4);
  container.innerHTML = recItems.map(p => createProductCardHTML(p, false)).join('');
}

// ==========================================================================
// 9. CATALOG FILTER & SORT LOGIC
// ==========================================================================
function getFilteredAndSortedProducts() {
  let list = [...PRODUCTS_DATA];

  // 1. Search Query
  if (AppState.filters.searchQuery.trim() !== '') {
    const q = AppState.filters.searchQuery.toLowerCase().trim();
    list = list.filter(p => 
      p.title.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.categoryName.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  // 2. Category Filter
  if (AppState.filters.category && AppState.filters.category !== 'all') {
    list = list.filter(p => p.category === AppState.filters.category);
  }

  // 3. Price Filter
  if (AppState.filters.minPrice !== null && !isNaN(AppState.filters.minPrice)) {
    list = list.filter(p => p.price >= AppState.filters.minPrice);
  }
  if (AppState.filters.maxPrice !== null && !isNaN(AppState.filters.maxPrice)) {
    list = list.filter(p => p.price <= AppState.filters.maxPrice);
  }

  // 4. Rating Filter
  if (AppState.filters.rating > 0) {
    list = list.filter(p => p.rating >= AppState.filters.rating);
  }

  // 5. Brand Filter
  if (AppState.filters.brands.length > 0) {
    list = list.filter(p => AppState.filters.brands.includes(p.brand));
  }

  // 6. Sorting
  switch (AppState.filters.sort) {
    case 'price-asc':
      list.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      list.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      list.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
      list.sort((a, b) => b.id - a.id);
      break;
    case 'popular':
    default:
      list.sort((a, b) => b.soldCount - a.soldCount);
      break;
  }

  return list;
}

function renderMainCatalog() {
  const container = document.getElementById('mainProductsGrid');
  const emptyState = document.getElementById('emptyState');
  const countEl = document.getElementById('resultsCount');
  const headingEl = document.getElementById('catalogHeading');
  const activeChipsContainer = document.getElementById('activeFilterChips');

  if (!container) return;

  const filtered = getFilteredAndSortedProducts();

  // Results count
  if (countEl) {
    countEl.textContent = `${filtered.length} ta mahsulot topildi`;
  }

  // Heading text
  if (headingEl) {
    if (AppState.filters.searchQuery) {
      headingEl.textContent = `Qidiruv natijalari: "${AppState.filters.searchQuery}"`;
    } else if (AppState.filters.category !== 'all') {
      const catLabels = {
        phones: "Telefonlar va Gadjetlar",
        laptops: "Kompyuterlar va Noutbuklar",
        audio: "Quloqchin va Audio tizimlar",
        clothing: "Kiyim-kechak",
        shoes: "Poyabzallar",
        home: "Uy va maishiy texnika",
        gaming: "Gaming & O‘yin konsollari",
        accessories: "Aksessuarlar"
      };
      headingEl.textContent = catLabels[AppState.filters.category] || "Mahsulotlar";
    } else {
      headingEl.textContent = "Barcha mahsulotlar";
    }
  }

  // Active filter chips
  renderActiveFilterChips(activeChipsContainer);

  if (filtered.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
  } else {
    if (emptyState) emptyState.style.display = 'none';
    container.innerHTML = filtered.map(p => createProductCardHTML(p, false)).join('');
  }

  // Update filter dot in mobile
  const activeDot = document.getElementById('filterActiveDot');
  const hasFilters = AppState.filters.category !== 'all' || 
                     AppState.filters.minPrice !== null || 
                     AppState.filters.maxPrice !== null || 
                     AppState.filters.rating > 0 || 
                     AppState.filters.brands.length > 0;
  if (activeDot) {
    activeDot.style.display = hasFilters ? 'block' : 'none';
  }
}

function renderActiveFilterChips(container) {
  if (!container) return;
  const chips = [];

  if (AppState.filters.category !== 'all') {
    chips.push({
      label: `Kategoriya: ${AppState.filters.category}`,
      clear: () => setCategoryFilter('all')
    });
  }

  if (AppState.filters.minPrice !== null || AppState.filters.maxPrice !== null) {
    const minTxt = AppState.filters.minPrice ? formatPrice(AppState.filters.minPrice) : '0';
    const maxTxt = AppState.filters.maxPrice ? formatPrice(AppState.filters.maxPrice) : '∞';
    chips.push({
      label: `Narx: ${minTxt} — ${maxTxt}`,
      clear: () => {
        AppState.filters.minPrice = null;
        AppState.filters.maxPrice = null;
        document.getElementById('minPriceInput').value = '';
        document.getElementById('maxPriceInput').value = '';
        renderMainCatalog();
      }
    });
  }

  if (AppState.filters.rating > 0) {
    chips.push({
      label: `⭐ ${AppState.filters.rating}+`,
      clear: () => {
        AppState.filters.rating = 0;
        const allRatingRadio = document.querySelector('input[name="ratingFilter"][value="0"]');
        if (allRatingRadio) allRatingRadio.checked = true;
        renderMainCatalog();
      }
    });
  }

  if (AppState.filters.brands.length > 0) {
    AppState.filters.brands.forEach(b => {
      chips.push({
        label: `Brend: ${b}`,
        clear: () => {
          AppState.filters.brands = AppState.filters.brands.filter(brand => brand !== b);
          const cb = document.querySelector(`.brand-checkbox[value="${b}"]`);
          if (cb) cb.checked = false;
          renderMainCatalog();
        }
      });
    });
  }

  if (AppState.filters.searchQuery) {
    chips.push({
      label: `Qidiruv: "${AppState.filters.searchQuery}"`,
      clear: () => {
        AppState.filters.searchQuery = '';
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.value = '';
        const clearBtn = document.getElementById('searchClearBtn');
        if (clearBtn) clearBtn.style.display = 'none';
        renderMainCatalog();
      }
    });
  }

  container.innerHTML = chips.map((c, i) => `
    <span class="filter-chip-tag" data-chip-index="${i}">
      ${c.label}
      <i class="fa-solid fa-xmark"></i>
    </span>
  `).join('');

  // Attach clear handlers
  container.querySelectorAll('.filter-chip-tag').forEach((el, i) => {
    el.querySelector('i').addEventListener('click', () => {
      chips[i].clear();
    });
  });
}

function setCategoryFilter(category) {
  AppState.filters.category = category;

  // Sync subnav active state
  document.querySelectorAll('#navCategoryList .nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.category === category);
  });

  // Sync sidebar radio
  const radio = document.querySelector(`input[name="categoryFilter"][value="${category}"]`);
  if (radio) radio.checked = true;

  // Scroll to catalog smoothly
  const catalogSection = document.getElementById('productsCatalog');
  if (catalogSection) {
    catalogSection.scrollIntoView({ behavior: 'smooth' });
  }

  renderMainCatalog();
}

function resetAllFilters() {
  AppState.filters = {
    category: 'all',
    minPrice: null,
    maxPrice: null,
    rating: 0,
    brands: [],
    searchQuery: '',
    sort: 'popular'
  };

  // Reset UI inputs
  const allCatRadio = document.querySelector('input[name="categoryFilter"][value="all"]');
  if (allCatRadio) allCatRadio.checked = true;

  const minPriceInput = document.getElementById('minPriceInput');
  const maxPriceInput = document.getElementById('maxPriceInput');
  if (minPriceInput) minPriceInput.value = '';
  if (maxPriceInput) maxPriceInput.value = '';

  const allRatingRadio = document.querySelector('input[name="ratingFilter"][value="0"]');
  if (allRatingRadio) allRatingRadio.checked = true;

  document.querySelectorAll('.brand-checkbox').forEach(cb => cb.checked = false);

  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  const searchClearBtn = document.getElementById('searchClearBtn');
  if (searchClearBtn) searchClearBtn.style.display = 'none';

  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) sortSelect.value = 'popular';

  document.querySelectorAll('#navCategoryList .nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.category === 'all');
  });

  renderMainCatalog();
  showToast("Barcha filtrlar tozalandi", "info");
}

// ==========================================================================
// 10. SEARCH FUNCTIONALITY & LIVE SUGGESTIONS
// ==========================================================================
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const searchSuggestions = document.getElementById('searchSuggestions');
  const searchResultsPreview = document.getElementById('searchResultsPreview');
  const popularTags = document.getElementById('popularTags');
  const searchForm = document.getElementById('searchForm');

  if (!searchInput) return;

  // Debounced input handler
  let debounceTimeout = null;

  searchInput.addEventListener('input', (e) => {
    const val = e.target.value;
    if (searchClearBtn) {
      searchClearBtn.style.display = val.length > 0 ? 'flex' : 'none';
    }

    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      AppState.filters.searchQuery = val;
      renderMainCatalog();
      updateSearchPreview(val);
    }, 250);
  });

  // Focus & Click: Show suggestions
  searchInput.addEventListener('focus', () => {
    if (searchSuggestions) {
      searchSuggestions.style.display = 'block';
      updateSearchPreview(searchInput.value);
    }
  });

  // Clear button click
  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchClearBtn.style.display = 'none';
      AppState.filters.searchQuery = '';
      renderMainCatalog();
      searchInput.focus();
    });
  }

  // Popular search tags click
  if (popularTags) {
    popularTags.addEventListener('click', (e) => {
      const tag = e.target.closest('.quick-tag');
      if (tag) {
        const query = tag.dataset.search;
        searchInput.value = query;
        if (searchClearBtn) searchClearBtn.style.display = 'flex';
        AppState.filters.searchQuery = query;
        if (searchSuggestions) searchSuggestions.style.display = 'none';
        renderMainCatalog();
        document.getElementById('productsCatalog').scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Submit form
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      AppState.filters.searchQuery = searchInput.value;
      if (searchSuggestions) searchSuggestions.style.display = 'none';
      renderMainCatalog();
      document.getElementById('productsCatalog').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Hide suggestions when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#searchWrapper')) {
      if (searchSuggestions) searchSuggestions.style.display = 'none';
    }
  });

  function updateSearchPreview(query) {
    if (!searchResultsPreview) return;
    if (!query || query.trim() === '') {
      searchResultsPreview.innerHTML = '';
      return;
    }

    const matches = PRODUCTS_DATA.filter(p => 
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.brand.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 4);

    if (matches.length === 0) {
      searchResultsPreview.innerHTML = `
        <div style="padding: 10px; font-size: 0.85rem; color: var(--text-muted); text-align: center;">
          Mos mahsulotlar topilmadi
        </div>
      `;
    } else {
      searchResultsPreview.innerHTML = matches.map(p => `
        <div class="search-preview-item" data-id="${p.id}">
          <img src="${p.image}" class="search-preview-img" alt="${p.title}">
          <div class="search-preview-info">
            <div class="search-preview-title">${p.title}</div>
            <div class="search-preview-price">${formatPrice(p.price)}</div>
          </div>
        </div>
      `).join('');

      searchResultsPreview.querySelectorAll('.search-preview-item').forEach(item => {
        item.addEventListener('click', () => {
          const id = parseInt(item.dataset.id, 10);
          openProductModal(id);
          if (searchSuggestions) searchSuggestions.style.display = 'none';
        });
      });
    }
  }
}

// ==========================================================================
// 11. SHOPPING CART LOGIC
// ==========================================================================
function addToCart(productId, quantity = 1) {
  const existing = AppState.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    AppState.cart.push({ id: productId, quantity });
  }

  saveCart();
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  showToast(`✓ ${product ? product.title.substring(0, 24) + '...' : 'Mahsulot'} savatga qo‘shildi`, 'success');
}

function updateCartQuantity(productId, delta) {
  const item = AppState.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    saveCart();
  }
}

function removeFromCart(productId) {
  AppState.cart = AppState.cart.filter(item => item.id !== productId);
  saveCart();
  showToast("Mahsulot savatdan olib tashlandi", "remove");
}

function getCartCalculations() {
  let count = 0;
  let total = 0;

  AppState.cart.forEach(item => {
    const p = PRODUCTS_DATA.find(prod => prod.id === item.id);
    if (p) {
      count += item.quantity;
      total += p.price * item.quantity;
    }
  });

  return { count, total };
}

function updateCartBadges() {
  const { count, total } = getCartCalculations();

  const badges = [document.getElementById('cartBadge'), document.getElementById('mobCartBadge')];
  badges.forEach(b => {
    if (b) {
      b.textContent = count;
      b.style.display = count > 0 ? 'flex' : 'none';
    }
  });

  const headerTotal = document.getElementById('cartHeaderTotal');
  if (headerTotal) {
    headerTotal.textContent = formatPrice(total);
  }

  const drawerCount = document.getElementById('drawerCartCount');
  if (drawerCount) {
    drawerCount.textContent = `${count} ta`;
  }
}

function renderCartDrawer() {
  const listEl = document.getElementById('cartItemsList');
  const emptyEl = document.getElementById('cartEmptyState');
  const footerEl = document.getElementById('cartDrawerFooter');
  const summaryCountEl = document.getElementById('cartSummaryCount');
  const summaryTotalEl = document.getElementById('cartSummaryTotal');

  if (!listEl) return;

  const { count, total } = getCartCalculations();

  if (AppState.cart.length === 0) {
    listEl.innerHTML = '';
    if (emptyEl) emptyEl.style.display = 'block';
    if (footerEl) footerEl.style.display = 'none';
  } else {
    if (emptyEl) emptyEl.style.display = 'none';
    if (footerEl) footerEl.style.display = 'block';

    listEl.innerHTML = AppState.cart.map(cartItem => {
      const product = PRODUCTS_DATA.find(p => p.id === cartItem.id);
      if (!product) return '';

      return `
        <div class="cart-item" data-id="${product.id}">
          <img src="${product.image}" alt="${product.title}" class="cart-item-img">
          <div class="cart-item-info">
            <h4 class="cart-item-title">${product.title}</h4>
            <div class="cart-item-price">${formatPrice(product.price)}</div>
            <div class="cart-item-controls">
              <div class="qty-counter">
                <button class="qty-btn cart-qty-minus" data-id="${product.id}">-</button>
                <input type="text" class="qty-input" value="${cartItem.quantity}" readonly>
                <button class="qty-btn cart-qty-plus" data-id="${product.id}">+</button>
              </div>
              <button class="cart-item-remove-btn" data-id="${product.id}" aria-label="O'chirish">
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach quantity & remove listeners
    listEl.querySelectorAll('.cart-qty-minus').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id, 10);
        updateCartQuantity(id, -1);
      });
    });

    listEl.querySelectorAll('.cart-qty-plus').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id, 10);
        updateCartQuantity(id, 1);
      });
    });

    listEl.querySelectorAll('.cart-item-remove-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id, 10);
        removeFromCart(id);
      });
    });
  }

  if (summaryCountEl) summaryCountEl.textContent = `${count} ta`;
  if (summaryTotalEl) summaryTotalEl.textContent = formatPrice(total);
}

function openCartDrawer() {
  renderCartDrawer();
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (drawer && backdrop) {
    drawer.classList.add('open');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('open');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ==========================================================================
// 12. WISHLIST SYSTEM
// ==========================================================================
function toggleWishlist(productId) {
  const index = AppState.wishlist.indexOf(productId);
  const product = PRODUCTS_DATA.find(p => p.id === productId);

  if (index >= 0) {
    AppState.wishlist.splice(index, 1);
    showToast(`💔 ${product ? product.title.substring(0, 20) + '...' : ''} sevimlilardan olib tashlandi`, 'heart');
  } else {
    AppState.wishlist.push(productId);
    showToast(`♡ ${product ? product.title.substring(0, 20) + '...' : ''} sevimlilarga qo‘shildi`, 'heart');
  }

  saveWishlist();
  syncWishlistButtons();
}

function updateWishlistBadges() {
  const count = AppState.wishlist.length;
  const badges = [document.getElementById('wishlistBadge'), document.getElementById('mobWishlistBadge')];
  badges.forEach(b => {
    if (b) {
      b.textContent = count;
      b.style.display = count > 0 ? 'flex' : 'none';
    }
  });

  const drawerCount = document.getElementById('drawerWishlistCount');
  if (drawerCount) drawerCount.textContent = `${count} ta`;
}

function syncWishlistButtons() {
  document.querySelectorAll('.card-wishlist-btn').forEach(btn => {
    const id = parseInt(btn.dataset.id, 10);
    const active = AppState.wishlist.includes(id);
    btn.classList.toggle('active', active);
    const icon = btn.querySelector('i');
    if (icon) {
      icon.className = active ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
    }
  });
}

function renderWishlistDrawer() {
  const listEl = document.getElementById('wishlistItemsList');
  const emptyEl = document.getElementById('wishlistEmptyState');
  if (!listEl) return;

  if (AppState.wishlist.length === 0) {
    listEl.innerHTML = '';
    if (emptyEl) emptyEl.style.display = 'block';
  } else {
    if (emptyEl) emptyEl.style.display = 'none';

    listEl.innerHTML = AppState.wishlist.map(id => {
      const p = PRODUCTS_DATA.find(prod => prod.id === id);
      if (!p) return '';

      return `
        <div class="cart-item" data-id="${p.id}">
          <img src="${p.image}" alt="${p.title}" class="cart-item-img">
          <div class="cart-item-info">
            <h4 class="cart-item-title">${p.title}</h4>
            <div class="cart-item-price">${formatPrice(p.price)}</div>
            <div class="cart-item-controls">
              <button class="btn btn-primary" style="padding: 6px 12px; font-size: 0.8rem;" onclick="addToCart(${p.id});">
                <i class="fa-solid fa-cart-shopping"></i> Savatga
              </button>
              <button class="cart-item-remove-btn" onclick="toggleWishlist(${p.id});" aria-label="O'chirish">
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
}

function openWishlistDrawer() {
  renderWishlistDrawer();
  const drawer = document.getElementById('wishlistDrawer');
  const backdrop = document.getElementById('wishlistBackdrop');
  if (drawer && backdrop) {
    drawer.classList.add('open');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeWishlistDrawer() {
  const drawer = document.getElementById('wishlistDrawer');
  const backdrop = document.getElementById('wishlistBackdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('open');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ==========================================================================
// 13. PRODUCT DETAILS MODAL
// ==========================================================================
function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('productModal');
  const backdrop = document.getElementById('productModalBackdrop');
  const body = document.getElementById('productModalBody');

  if (!modal || !body) return;

  const isWishlisted = AppState.wishlist.includes(product.id);

  let specsRows = '';
  if (product.specs) {
    specsRows = Object.entries(product.specs).map(([key, val]) => `
      <tr>
        <td>${key}</td>
        <td>${val}</td>
      </tr>
    `).join('');
  }

  body.innerHTML = `
    <div class="product-modal-grid">
      <div class="modal-gallery-wrap">
        <img src="${product.image}" alt="${product.title}" class="modal-main-img">
      </div>

      <div class="modal-info-wrap">
        <span class="modal-product-brand">${product.brand}</span>
        <h2 class="modal-product-title">${product.title}</h2>

        <div class="product-rating-row">
          <span class="rating-score"><i class="fa-solid fa-star star-filled"></i> ${product.rating.toFixed(1)}</span>
          <span class="review-count">(${product.reviews} ta xaridor sharhi)</span>
          <span style="color: var(--text-muted); margin: 0 6px;">•</span>
          <span class="text-green" style="font-weight: 600;"><i class="fa-solid fa-check"></i> Omborimizda mavjud (${product.stock} ta)</span>
        </div>

        <div class="modal-pricing-box">
          <div class="modal-price-current">${formatPrice(product.price)}</div>
          ${product.oldPrice ? `<div class="modal-price-old">${formatPrice(product.oldPrice)}</div>` : ''}
          ${product.discount ? `<span class="price-discount-pill">-${product.discount}%</span>` : ''}
        </div>

        <p class="modal-desc">${product.description}</p>

        <div class="product-delivery-badge" style="margin-bottom: 20px;">
          <i class="fa-solid fa-truck-fast"></i> ${product.deliveryInfo} (1-2 kun ichida)
        </div>

        <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 8px;">Asosiy xususiyatlari:</h4>
        <table class="specs-table">
          <tbody>${specsRows}</tbody>
        </table>

        <!-- Controls: Quantity & Buttons -->
        <div class="modal-actions-row">
          <div class="qty-counter" style="height: 44px;">
            <button class="qty-btn" id="modalQtyMinus">-</button>
            <input type="text" class="qty-input" id="modalQtyInput" value="1" readonly>
            <button class="qty-btn" id="modalQtyPlus">+</button>
          </div>

          <button class="btn btn-primary" id="modalAddToCartBtn" style="flex: 1; height: 44px;">
            <i class="fa-solid fa-cart-shopping"></i> Savatga qo‘shish
          </button>

          <button class="btn btn-outline" id="modalBuyNowBtn" style="height: 44px; font-weight: 700;">
            Hozir xarid qilish
          </button>

          <button class="card-wishlist-btn ${isWishlisted ? 'active' : ''}" id="modalWishlistBtn" style="position: static; width: 44px; height: 44px; border: 1px solid var(--border-light);">
            <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  // Quantity Stepper
  let modalQty = 1;
  const qtyInput = document.getElementById('modalQtyInput');
  document.getElementById('modalQtyMinus').addEventListener('click', () => {
    if (modalQty > 1) {
      modalQty--;
      qtyInput.value = modalQty;
    }
  });
  document.getElementById('modalQtyPlus').addEventListener('click', () => {
    modalQty++;
    qtyInput.value = modalQty;
  });

  // Add to cart
  document.getElementById('modalAddToCartBtn').addEventListener('click', () => {
    addToCart(product.id, modalQty);
    closeProductModal();
  });

  // Buy now (Immediate checkout)
  document.getElementById('modalBuyNowBtn').addEventListener('click', () => {
    addToCart(product.id, modalQty);
    closeProductModal();
    openCheckoutModal();
  });

  // Wishlist button
  document.getElementById('modalWishlistBtn').addEventListener('click', () => {
    toggleWishlist(product.id);
    const updatedWish = AppState.wishlist.includes(product.id);
    const wishBtn = document.getElementById('modalWishlistBtn');
    wishBtn.classList.toggle('active', updatedWish);
    wishBtn.querySelector('i').className = updatedWish ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
  });

  modal.classList.add('open');
  backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  const backdrop = document.getElementById('productModalBackdrop');
  if (modal && backdrop) {
    modal.classList.remove('open');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ==========================================================================
// 14. AUTHENTICATION (LOGIN / REGISTER / DEMO)
// ==========================================================================
function updateUserUI() {
  const user = AppState.user;
  const userLabel = document.getElementById('userLabel');
  const userIcon = document.getElementById('userIcon');
  const mobUserLabel = document.getElementById('mobUserLabel');
  const mobUserIcon = document.getElementById('mobUserIcon');

  if (user) {
    const firstName = user.name.split(' ')[0];
    if (userLabel) userLabel.textContent = firstName;
    if (userIcon) userIcon.className = 'fa-solid fa-user-check text-primary';
    if (mobUserLabel) mobUserLabel.textContent = firstName;
    if (mobUserIcon) mobUserIcon.className = 'fa-solid fa-user-check text-primary';
  } else {
    if (userLabel) userLabel.textContent = "Kirish";
    if (userIcon) userIcon.className = 'fa-regular fa-user';
    if (mobUserLabel) mobUserLabel.textContent = "Profil";
    if (mobUserIcon) mobUserIcon.className = 'fa-regular fa-user';
  }
}

function openAuthModal(initialTab = 'login') {
  const modal = document.getElementById('authModal');
  const backdrop = document.getElementById('authModalBackdrop');
  const tabLogin = document.getElementById('tabLoginBtn');
  const tabRegister = document.getElementById('tabRegisterBtn');
  const formLogin = document.getElementById('loginForm');
  const formRegister = document.getElementById('registerForm');

  if (!modal) return;

  if (initialTab === 'login') {
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
    formLogin.style.display = 'block';
    formRegister.style.display = 'none';
  } else {
    tabRegister.classList.add('active');
    tabLogin.classList.remove('active');
    formRegister.style.display = 'block';
    formLogin.style.display = 'none';
  }

  modal.classList.add('open');
  backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
  const modal = document.getElementById('authModal');
  const backdrop = document.getElementById('authModalBackdrop');
  if (modal && backdrop) {
    modal.classList.remove('open');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function initAuthHandlers() {
  const tabLogin = document.getElementById('tabLoginBtn');
  const tabRegister = document.getElementById('tabRegisterBtn');
  const formLogin = document.getElementById('loginForm');
  const formRegister = document.getElementById('registerForm');
  const demoLoginBtn = document.getElementById('demoLoginBtn');

  if (tabLogin && tabRegister) {
    tabLogin.addEventListener('click', () => {
      tabLogin.classList.add('active');
      tabRegister.classList.remove('active');
      formLogin.style.display = 'block';
      formRegister.style.display = 'none';
    });

    tabRegister.addEventListener('click', () => {
      tabRegister.classList.add('active');
      tabLogin.classList.remove('active');
      formRegister.style.display = 'block';
      formLogin.style.display = 'none';
    });
  }

  // Demo Login
  if (demoLoginBtn) {
    demoLoginBtn.addEventListener('click', () => {
      const demoUser = {
        name: "Sardor Aliyev",
        email: "sardor@shopix.uz",
        phone: "+998 90 123 45 67"
      };
      saveUser(demoUser);
      closeAuthModal();
      showToast(`Xush kelibsiz, ${demoUser.name}!`, "success");
    });
  }

  // Login Submit
  if (formLogin) {
    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const user = {
        name: email.includes('@') ? email.split('@')[0] : "Foydalanuvchi",
        email: email,
        phone: "+998 90 000 00 00"
      };
      saveUser(user);
      closeAuthModal();
      showToast(`Xush kelibsiz, ${user.name}!`, "success");
    });
  }

  // Register Submit
  if (formRegister) {
    formRegister.addEventListener('submit', (e) => {
      e.preventDefault();
      const pwd = document.getElementById('regPassword').value;
      const pwdConf = document.getElementById('regPasswordConfirm').value;

      if (pwd !== pwdConf) {
        alert("Kiritilgan parollar bir-biriga mos kelmadi!");
        return;
      }

      const name = document.getElementById('regName').value;
      const email = document.getElementById('regEmail').value;
      const phone = document.getElementById('regPhone').value;

      const newUser = { name, email, phone };
      saveUser(newUser);
      closeAuthModal();
      showToast(`Tabriklaymiz, ${name}! Profilingiz yaratildi.`, "success");
    });
  }

  // Password visibility toggles
  document.querySelectorAll('.pwd-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.previousElementSibling;
      if (input && input.type === 'password') {
        input.type = 'text';
        btn.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
      } else if (input) {
        input.type = 'password';
        btn.innerHTML = '<i class="fa-regular fa-eye"></i>';
      }
    });
  });
}

// ==========================================================================
// 15. CHECKOUT & ORDER COMPLETION
// ==========================================================================
function openCheckoutModal() {
  if (AppState.cart.length === 0) {
    showToast("Buyurtma berish uchun avval savatga mahsulot qo'shing", "info");
    return;
  }

  closeCartDrawer();

  const { count, total } = getCartCalculations();
  const itemsCountEl = document.getElementById('checkoutItemsCount');
  const grandTotalEl = document.getElementById('checkoutGrandTotal');

  if (itemsCountEl) itemsCountEl.textContent = `${count} ta`;
  if (grandTotalEl) grandTotalEl.textContent = formatPrice(total);

  // Autofill user info if logged in
  if (AppState.user) {
    const nameInput = document.getElementById('orderName');
    const phoneInput = document.getElementById('orderPhone');
    if (nameInput && !nameInput.value) nameInput.value = AppState.user.name;
    if (phoneInput && !phoneInput.value) phoneInput.value = AppState.user.phone || '';
  }

  const modal = document.getElementById('checkoutModal');
  const backdrop = document.getElementById('checkoutModalBackdrop');
  if (modal && backdrop) {
    modal.classList.add('open');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  const backdrop = document.getElementById('checkoutModalBackdrop');
  if (modal && backdrop) {
    modal.classList.remove('open');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function initCheckoutHandlers() {
  const form = document.getElementById('checkoutForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Generate random order number
    const randomOrderNumber = '#SPX-' + Math.floor(10000 + Math.random() * 90000);
    const orderNumEl = document.getElementById('successOrderNum');
    if (orderNumEl) orderNumEl.textContent = randomOrderNumber;

    // Clear cart
    AppState.cart = [];
    saveCart();

    // Close checkout and show success modal
    closeCheckoutModal();
    openSuccessModal();
  });
}

function openSuccessModal() {
  const modal = document.getElementById('orderSuccessModal');
  const backdrop = document.getElementById('orderSuccessBackdrop');
  if (modal && backdrop) {
    modal.classList.add('open');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeSuccessModal() {
  const modal = document.getElementById('orderSuccessModal');
  const backdrop = document.getElementById('orderSuccessBackdrop');
  if (modal && backdrop) {
    modal.classList.remove('open');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ==========================================================================
// 16. LOCATION SELECTOR
// ==========================================================================
function initLocationModal() {
  const locationBtn = document.getElementById('locationBtn');
  const modal = document.getElementById('locationModal');
  const backdrop = document.getElementById('locationModalBackdrop');
  const closeBtn = document.getElementById('locationModalCloseBtn');
  const citiesGrid = document.getElementById('citiesGrid');

  if (locationBtn && modal) {
    locationBtn.addEventListener('click', () => {
      modal.classList.add('open');
      backdrop.classList.add('active');
    });
  }

  function closeLocation() {
    if (modal && backdrop) {
      modal.classList.remove('open');
      backdrop.classList.remove('active');
    }
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLocation);
  if (backdrop) backdrop.addEventListener('click', closeLocation);

  if (citiesGrid) {
    citiesGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('.city-btn');
      if (btn) {
        citiesGrid.querySelectorAll('.city-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const chosenCity = btn.dataset.city;
        saveCity(chosenCity);
        closeLocation();
        showToast(`Yetkazib berish shahri: ${chosenCity}`, "info");
      }
    });
  }
}

// ==========================================================================
// 17. FULL CATALOG OVERLAY MODAL
// ==========================================================================
function initCatalogModal() {
  const triggers = document.querySelectorAll('.catalog-open-trigger, #catalogBtn, #mobCatalogBtn');
  const modal = document.getElementById('catalogModal');
  const closeBtn = document.getElementById('catalogModalCloseBtn');

  triggers.forEach(btn => {
    btn.addEventListener('click', () => {
      if (modal) modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeCat() {
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeCat);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeCat();
    });
  }

  // Items click in catalog modal
  document.querySelectorAll('.catalog-modal-item').forEach(item => {
    item.addEventListener('click', () => {
      const cat = item.dataset.category;
      closeCat();
      setCategoryFilter(cat);
    });
  });
}

// ==========================================================================
// 18. GLOBAL DELEGATED CLICK EVENTS (CARDS, WISHLIST, ETC.)
// ==========================================================================
function initGlobalEvents() {
  document.addEventListener('click', (e) => {
    // 1. Add to Cart button on product cards
    const addCartBtn = e.target.closest('.card-add-cart-btn');
    if (addCartBtn) {
      e.stopPropagation();
      const id = parseInt(addCartBtn.dataset.id, 10);
      addToCart(id, 1);
      return;
    }

    // 2. Wishlist Heart button on product cards
    const wishBtn = e.target.closest('.card-wishlist-btn');
    if (wishBtn && !wishBtn.closest('.modal-actions-row')) {
      e.stopPropagation();
      const id = parseInt(wishBtn.dataset.id, 10);
      toggleWishlist(id);
      return;
    }

    // 3. Product Card click -> Open Details Modal
    const card = e.target.closest('.product-card');
    if (card) {
      const id = parseInt(card.dataset.id, 10);
      openProductModal(id);
      return;
    }

    // 4. Category Card Click (Popular categories section)
    const catCard = e.target.closest('.category-card');
    if (catCard) {
      const cat = catCard.dataset.category;
      setCategoryFilter(cat);
      return;
    }

    // 5. Brand Card Click
    const brandBtn = e.target.closest('.brand-item');
    if (brandBtn) {
      const brand = brandBtn.dataset.brand;
      AppState.filters.brands = [brand];
      document.querySelectorAll('.brand-checkbox').forEach(cb => {
        cb.checked = (cb.value === brand);
      });
      document.getElementById('productsCatalog').scrollIntoView({ behavior: 'smooth' });
      renderMainCatalog();
      showToast(`"${brand}" mahsulotlari filtri yoqildi`, "info");
      return;
    }

    // 6. Subnav Category Link Click
    const navLink = e.target.closest('#navCategoryList .nav-link');
    if (navLink && navLink.dataset.category) {
      setCategoryFilter(navLink.dataset.category);
      return;
    }

    // 7. Filter trigger buttons inside hero slides
    const heroFilterBtn = e.target.closest('.filter-btn-trigger');
    if (heroFilterBtn && heroFilterBtn.dataset.filterCat) {
      setCategoryFilter(heroFilterBtn.dataset.filterCat);
      return;
    }
  });

  // Header & Drawer Action triggers
  const cartBtn = document.getElementById('cartBtn');
  const mobCartBtn = document.getElementById('mobCartBtn');
  if (cartBtn) cartBtn.addEventListener('click', openCartDrawer);
  if (mobCartBtn) mobCartBtn.addEventListener('click', openCartDrawer);

  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartBackdrop = document.getElementById('cartBackdrop');
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCartDrawer);

  const wishlistBtn = document.getElementById('wishlistBtn');
  const mobWishlistBtn = document.getElementById('mobWishlistBtn');
  if (wishlistBtn) wishlistBtn.addEventListener('click', openWishlistDrawer);
  if (mobWishlistBtn) mobWishlistBtn.addEventListener('click', openWishlistDrawer);

  const wishlistCloseBtn = document.getElementById('wishlistCloseBtn');
  const wishlistBackdrop = document.getElementById('wishlistBackdrop');
  if (wishlistCloseBtn) wishlistCloseBtn.addEventListener('click', closeWishlistDrawer);
  if (wishlistBackdrop) wishlistBackdrop.addEventListener('click', closeWishlistDrawer);

  const authBtn = document.getElementById('authBtn');
  const mobAuthBtn = document.getElementById('mobAuthBtn');
  if (authBtn) authBtn.addEventListener('click', () => openAuthModal('login'));
  if (mobAuthBtn) mobAuthBtn.addEventListener('click', () => openAuthModal('login'));

  const authModalCloseBtn = document.getElementById('authModalCloseBtn');
  const authModalBackdrop = document.getElementById('authModalBackdrop');
  if (authModalCloseBtn) authModalCloseBtn.addEventListener('click', closeAuthModal);
  if (authModalBackdrop) authModalBackdrop.addEventListener('click', closeAuthModal);

  const productModalCloseBtn = document.getElementById('productModalCloseBtn');
  const productModalBackdrop = document.getElementById('productModalBackdrop');
  if (productModalCloseBtn) productModalCloseBtn.addEventListener('click', closeProductModal);
  if (productModalBackdrop) productModalBackdrop.addEventListener('click', closeProductModal);

  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckoutModal);

  const checkoutModalCloseBtn = document.getElementById('checkoutModalCloseBtn');
  const checkoutModalBackdrop = document.getElementById('checkoutModalBackdrop');
  if (checkoutModalCloseBtn) checkoutModalCloseBtn.addEventListener('click', closeCheckoutModal);
  if (checkoutModalBackdrop) checkoutModalBackdrop.addEventListener('click', closeCheckoutModal);

  const successCloseBtn = document.getElementById('successCloseBtn');
  const orderSuccessBackdrop = document.getElementById('orderSuccessBackdrop');
  if (successCloseBtn) successCloseBtn.addEventListener('click', closeSuccessModal);
  if (orderSuccessBackdrop) orderSuccessBackdrop.addEventListener('click', closeSuccessModal);

  const startShoppingBtn = document.getElementById('startShoppingBtn');
  if (startShoppingBtn) {
    startShoppingBtn.addEventListener('click', () => {
      closeCartDrawer();
      document.getElementById('productsCatalog').scrollIntoView({ behavior: 'smooth' });
    });
  }

  const emptyResetBtn = document.getElementById('emptyResetBtn');
  if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetAllFilters);

  // Mobile Bottom Nav: Home
  const mobHomeBtn = document.getElementById('mobHomeBtn');
  if (mobHomeBtn) {
    mobHomeBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile Filter Drawer Toggle
  const mobileFilterToggleBtn = document.getElementById('mobileFilterToggleBtn');
  const filtersSidebar = document.getElementById('filtersSidebar');
  const filterBackdrop = document.getElementById('filterBackdrop');
  const filtersCloseBtn = document.getElementById('filtersCloseBtn');

  if (mobileFilterToggleBtn && filtersSidebar) {
    mobileFilterToggleBtn.addEventListener('click', () => {
      filtersSidebar.classList.add('open');
      if (filterBackdrop) filterBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  function closeMobileFilters() {
    if (filtersSidebar) filtersSidebar.classList.remove('open');
    if (filterBackdrop) filterBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (filtersCloseBtn) filtersCloseBtn.addEventListener('click', closeMobileFilters);
  if (filterBackdrop) filterBackdrop.addEventListener('click', closeMobileFilters);

  // Sidebar Filter Form Controls
  const applyFiltersBtn = document.getElementById('applyFiltersBtn');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');

  if (applyFiltersBtn) {
    applyFiltersBtn.addEventListener('click', () => {
      // Category
      const selectedCatRadio = document.querySelector('input[name="categoryFilter"]:checked');
      if (selectedCatRadio) AppState.filters.category = selectedCatRadio.value;

      // Price
      const minVal = parseFloat(document.getElementById('minPriceInput').value);
      const maxVal = parseFloat(document.getElementById('maxPriceInput').value);
      AppState.filters.minPrice = !isNaN(minVal) ? minVal : null;
      AppState.filters.maxPrice = !isNaN(maxVal) ? maxVal : null;

      // Rating
      const selectedRatingRadio = document.querySelector('input[name="ratingFilter"]:checked');
      AppState.filters.rating = selectedRatingRadio ? parseFloat(selectedRatingRadio.value) : 0;

      // Brands
      const selectedBrands = [];
      document.querySelectorAll('.brand-checkbox:checked').forEach(cb => {
        selectedBrands.push(cb.value);
      });
      AppState.filters.brands = selectedBrands;

      renderMainCatalog();
      closeMobileFilters();
      showToast("Filtrlar qo‘llanildi", "info");
    });
  }

  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      resetAllFilters();
      closeMobileFilters();
    });
  }

  // Quick Price Chips
  document.querySelectorAll('.price-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const min = chip.dataset.min;
      const max = chip.dataset.max;
      document.getElementById('minPriceInput').value = min;
      document.getElementById('maxPriceInput').value = max;
      AppState.filters.minPrice = parseFloat(min);
      AppState.filters.maxPrice = parseFloat(max);
      renderMainCatalog();
    });
  });

  // Sort Select
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      AppState.filters.sort = e.target.value;
      renderMainCatalog();
    });
  }
}

// ==========================================================================
// 19. PRELOADER DISMISSAL
// ==========================================================================
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('fade-out');
    }, 350);
  });

  // Fallback if load event already fired
  setTimeout(() => {
    if (!preloader.classList.contains('fade-out')) {
      preloader.classList.add('fade-out');
    }
  }, 1000);
}

// ==========================================================================
// 20. APPLICATION INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial State UI updates
  initPreloader();
  initTheme();
  saveCity(AppState.city);
  updateUserUI();
  updateCartBadges();
  updateWishlistBadges();

  // 2. Sections Initialization
  initHeroSlider();
  initFlashCountdown();
  renderFlashSaleProducts();
  renderRecommendedProducts();
  renderMainCatalog();

  // 3. Handlers & Modals
  initSearch();
  initAuthHandlers();
  initCheckoutHandlers();
  initLocationModal();
  initCatalogModal();
  initGlobalEvents();
});
