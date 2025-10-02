import { defineStore } from "pinia";

export const useProductStore = defineStore("products", {
  state: () => ({
    products: [
      {
        id: 1,
        title: "Kaos Polos Hitam",
        price: 120000,
        image: new URL("@/assets/produk/baju (1).jpeg", import.meta.url).href,
        category: "Kaus",
        brand: "Generic",
        colors: ["Black"],
        sizes: ["M", "L", "XL"],
        featured: false,
        deskripsi: "Kaos Polos Hitam ini terbuat dari bahan katun premium yang lembut, adem, dan nyaman dipakai sepanjang hari. Desainnya simpel namun tetap terlihat stylish, cocok untuk dipadukan dengan berbagai outfit. Warna hitam elegan menjadikan kaos ini pilihan serbaguna yang bisa digunakan untuk kuliah, nongkrong, bekerja, atau sekadar bersantai di rumah. Dengan jahitan rapi dan potongan regular fit, kaos ini juga awet meski sering dicuci."
      },
      {
        id: 2,
        title: "Kaos Polos Putih",
        price: 110000,
        image: new URL("@/assets/produk/baju (2).jpeg", import.meta.url).href,
        category: "Kaus",
        brand: "Generic",
        colors: ["White"],
        sizes: ["M", "L", "XL"],
        featured: true,
        deskripsi: "Kaos Polos Putih ini wajib dimiliki untuk Anda yang suka tampil simpel dan bersih. Dibuat dari bahan katun berkualitas yang adem dan menyerap keringat, kaos ini nyaman dipakai sehari-hari. Warna putih netral memudahkan Anda untuk mix and match dengan berbagai celana atau jaket favorit. Cocok digunakan untuk acara santai, outfit ke kampus, atau dipadukan dengan outer untuk tampilan lebih formal."
      },
      {
        id: 3,
        title: "Kaos Red",
        price: 250000,
        image: new URL("@/assets/produk/baju (3).jpeg", import.meta.url).href,
        category: "Kaus",
        brand: "Generic",
        colors: ["Red", "White"],
        sizes: ["L", "XL"],
        featured: true,
        deskripsi: "Kaos Red dengan warna merah menyala memberikan kesan berani dan penuh energi. Dibuat dari bahan katun berkualitas dengan kombinasi warna merah dan putih, kaos ini memberikan tampilan segar sekaligus stylish. Sangat cocok untuk Anda yang ingin tampil beda dan lebih percaya diri. Kaos ini bisa dipakai untuk kegiatan sehari-hari, hangout bersama teman, ataupun acara semi-casual."
      },
      {
        id: 4,
        title: "Kaos Army",
        price: 300000,
        image: new URL("@/assets/produk/baju (4).jpeg", import.meta.url).href,
        category: "Kaus",
        brand: "Generic",
        colors: ["Green"],
        sizes: ["M", "L"],
        featured: true,
        deskripsi: "Kaos Army hadir dengan warna hijau khas militer yang memberi kesan maskulin dan tangguh. Terbuat dari bahan katun yang lembut dan breathable, kaos ini nyaman dipakai meski seharian beraktivitas. Cocok dipakai untuk Anda yang suka gaya casual outdoor maupun dipadukan dengan jaket jeans untuk tampilan streetwear. Cutting yang pas membuat tubuh terlihat lebih proporsional."
      },
      {
        id: 5,
        title: "Kaos Basic Black",
        price: 280000,
        image: new URL("@/assets/produk/baju (5).jpeg", import.meta.url).href,
        category: "Kaus",
        brand: "Generic",
        colors: ["Black"],
        sizes: ["M", "L", "XL"],
        featured: true,
        isHot: true,
        deskripsi: "Kaos Basic Black ini adalah pilihan tepat untuk Anda yang menyukai gaya minimalis. Bahan katun stretch berkualitas tinggi membuat kaos ini terasa ringan, nyaman, dan tidak mudah melar meski sering digunakan. Warna hitamnya memberikan kesan elegan sekaligus fleksibel dipadukan dengan berbagai gaya busana. Ideal untuk dipakai ke kantor dengan blazer, maupun santai dengan celana jeans."
      },
      {
        id: 6,
        title: "Kaos Basic Grey",
        price: 290000,
        image: new URL("@/assets/produk/baju (6).jpeg", import.meta.url).href,
        category: "Kaus",
        brand: "Generic",
        colors: ["Grey"],
        sizes: ["L", "XL"],
        featured: true,
        isHot: true,
        deskripsi: "Kaos Basic Grey hadir dengan warna abu-abu netral yang cocok untuk segala situasi. Terbuat dari bahan cotton combed premium yang lembut dan tidak mudah kusut, kaos ini sangat nyaman digunakan sehari-hari. Warna abu yang modern membuatnya mudah dipadukan dengan outfit casual maupun semi-formal. Cocok dipakai saat kerja remote, jalan-jalan santai, atau hangout dengan teman."
      },
      {
        id: 7,
        title: "Kaos Keren Biru",
        price: 320000,
        image: new URL("@/assets/produk/baju (7).jpeg", import.meta.url).href,
        category: "Kaus",
        brand: "Generic",
        colors: ["Blue"],
        sizes: ["30", "32", "34"],
        featured: true,
        isHot: true,
        deskripsi: "Kaos Keren Biru dengan warna biru cerah memberikan kesan energik dan trendy. Dibuat dengan bahan berkualitas yang lembut di kulit, kaos ini tidak hanya nyaman tetapi juga tahan lama. Desain simple namun modern menjadikannya pilihan tepat untuk gaya casual sehari-hari. Cocok dipadukan dengan celana jeans atau chinos untuk tampilan yang lebih fashionable."
      },
      {
        id: 8,
        title: "Kaos Striped Navy",
        price: 150000,
        image: new URL("@/assets/produk/baju (8).jpeg", import.meta.url).href,
        category: "Kaus",
        brand: "Generic",
        colors: ["Navy"],
        sizes: ["M", "L", "XL"],
        featured: true,
        deskripsi: "Kaos Striped Navy hadir dengan motif garis-garis klasik yang selalu terlihat stylish. Terbuat dari bahan katun yang ringan dan lembut, kaos ini nyaman digunakan meski dalam waktu lama. Desain striped navy memberikan kesan kasual namun tetap rapi, sehingga cocok digunakan untuk jalan santai maupun acara semi-formal. Mudah dipadukan dengan celana chino atau jeans untuk gaya kekinian."
      },
      {
        id: 9,
        title: "Kaos Oversize Cream",
        price: 270000,
        image: new URL("@/assets/produk/baju (9).jpeg", import.meta.url).href,
        category: "Kaus",
        brand: "Generic",
        colors: ["Cream"],
        sizes: ["L", "XL"],
        featured: true,
        deskripsi: "Kaos Oversize Cream ini dirancang dengan potongan longgar yang sedang tren saat ini. Terbuat dari bahan katun berkualitas tinggi yang lembut dan breathable, membuatnya nyaman dipakai meski seharian beraktivitas. Warna cream memberikan nuansa kalem dan elegan, cocok dipadukan dengan celana jeans, short, ataupun legging. Ideal untuk dipakai hangout santai, jalan-jalan, atau sekadar bersantai di rumah."
      },
      {
  id: 10,
  title: "Gelang Kulit Hitam",
  price: 80000,
  image: new URL("@/assets/produk/aksesoris/gelang1 (4).jpg", import.meta.url).href,
  category: "Aksesoris",
  brand: "Generic",
  colors: ["Black"],
  sizes: ["All Size"],
  featured: true,
  deskripsi: "Gelang Kulit Hitam dengan desain simpel dan elegan. Terbuat dari kulit sintetis berkualitas tinggi yang awet dan nyaman di pergelangan tangan. Cocok untuk dipakai sehari-hari atau dipadukan dengan gaya casual maupun formal."
},
{
  id: 11,
  title: "Gelang Manik Kayu Natural",
  price: 60000,
  image: new URL("@/assets/produk/aksesoris/gelang1 (2).jpg", import.meta.url).href,
  category: "Aksesoris",
  brand: "Generic",
  colors: ["Brown"],
  sizes: ["All Size"],
  featured: true,
  deskripsi: "Gelang Manik Kayu Natural dengan nuansa etnik dan kasual. Terbuat dari manik kayu alami yang ringan dan nyaman digunakan. Cocok dipakai untuk gaya santai, traveling, atau sebagai aksesoris pendukung gaya bohemian."
},
{
  id: 12,
  title: "Gelang Couple Hitam-Putih",
  price: 100000,
  image: new URL("@/assets/produk/aksesoris/gelang1 (3).jpg", import.meta.url).href,
  category: "Aksesoris",
  brand: "Generic",
  colors: ["Black", "White"],
  sizes: ["All Size"],
  featured: true,
  deskripsi: "Gelang Couple Hitam-Putih terbuat dari bahan tali premium yang kuat dan tahan lama. Didesain khusus untuk pasangan, memberikan kesan manis dan kompak. Cocok dijadikan hadiah anniversary atau kado spesial."
},
{
  id: 13,
  title: "Gelang Manik Batu Alam",
  price: 120000,
  image: new URL("@/assets/produk/aksesoris/gelang1 (1).jpg", import.meta.url).href,
  category: "Aksesoris",
  brand: "Generic",
  colors: ["Multi"],
  sizes: ["All Size"],
  featured: true,
  deskripsi: "Gelang Manik Batu Alam dengan berbagai variasi warna batu semi-precious. Memberikan kesan elegan sekaligus natural. Cocok untuk gaya casual maupun formal."
},
{
  id: 14,
  title: "Gelang Kulit Anyam Cokelat",
  price: 85000,
  image: new URL("@/assets/produk/aksesoris/gelang (1).jpg", import.meta.url).href,
  category: "Aksesoris",
  brand: "Generic",
  colors: ["Brown"],
  sizes: ["All Size"],
  featured: true,
  deskripsi: "Gelang Kulit Anyam Cokelat dengan desain unik dan handmade. Bahan kulit sintetis berkualitas yang tahan lama, membuat aksesoris ini cocok untuk melengkapi gaya maskulin maupun casual."
},
{
  id: 15,
  title: "Gelang Stainless Steel Silver",
  price: 140000,
  image: new URL("@/assets/produk/aksesoris/gelang (2).jpg", import.meta.url).href,
  category: "Aksesoris",
  brand: "Generic",
  colors: ["Silver"],
  sizes: ["All Size"],
  featured: true,
  deskripsi: "Gelang Stainless Steel Silver dengan desain minimalis namun elegan. Terbuat dari baja tahan karat yang awet dan tidak mudah pudar. Cocok digunakan untuk acara formal maupun casual."
},
{
  id: 16,
  title: "Gelang Rajut Handmade",
  price: 70000,
  image: new URL("@/assets/produk/aksesoris/gelang (3).jpg", import.meta.url).href,
  category: "Aksesoris",
  brand: "Generic",
  colors: ["Multi"],
  sizes: ["All Size"],
  featured: true,
  deskripsi: "Gelang Rajut Handmade dengan motif unik hasil buatan tangan. Ringan, fleksibel, dan nyaman dipakai. Cocok untuk remaja maupun dewasa dengan gaya kasual."
},
{
  id: 17,
  title: "Gelang Magnet Terapi",
  price: 160000,
  image: new URL("@/assets/produk/aksesoris/gelang (4).jpg", import.meta.url).href,
  category: "Aksesoris",
  brand: "Generic",
  colors: ["Black", "Silver"],
  sizes: ["All Size"],
  featured: true,
  deskripsi: "Gelang Magnet Terapi dengan material khusus yang dipercaya membantu melancarkan peredaran darah. Desain modern sehingga tetap terlihat stylish meskipun fungsional."
},
{
  id: 18,
  title: "Gelang Kulit Charm",
  price: 95000,
  image: new URL("@/assets/produk/aksesoris/gelang (5).jpg", import.meta.url).href,
  category: "Aksesoris",
  brand: "Generic",
  colors: ["Black", "Brown"],
  sizes: ["All Size"],
  featured: true,
  deskripsi: "Gelang Kulit Charm dengan tambahan gantungan kecil dekoratif yang menambah kesan trendy. Cocok dipakai sehari-hari atau sebagai hadiah untuk sahabat."
},
{
  id: 19,
  title: "Gelang Manik Hitam Elegan",
  price: 110000,
  image: new URL("@/assets/produk/aksesoris/gelang (6).jpg", import.meta.url).href,
  category: "Aksesoris",
  brand: "Generic",
  colors: ["Black"],
  sizes: ["All Size"],
  featured: true,
  deskripsi: "Gelang Manik Hitam dengan manik batu matte yang memberi kesan elegan. Mudah dipadukan dengan outfit casual maupun formal."
},
{
  id: 20,
  title: "Gelang Tali Adjustable",
  price: 75000,
  image: new URL("@/assets/produk/aksesoris/gelang (7).jpg", import.meta.url).href,
  category: "Aksesoris",
  brand: "Generic",
  colors: ["Red", "Black"],
  sizes: ["All Size"],
  featured: true,
  deskripsi: "Gelang Tali Adjustable dengan sistem geser yang fleksibel, bisa disesuaikan dengan ukuran pergelangan tangan. Desain simple dan unisex cocok untuk semua kalangan."
},

        {
  id: 21,
  title: "Gantungan Kunci Kulit Hitam",
  price: 50000,
  image: new URL("@/assets/produk/aksesoris/gelang (8).jpg", import.meta.url).href,
  category: "Aksesoris",
  brand: "Generic",
  colors: ["Black"],
  sizes: ["One Size"],
  featured: true,
  deskripsi: "Gantungan Kunci Kulit Hitam dengan bahan kulit sintetis premium yang awet. Desain simpel elegan cocok untuk kunci rumah maupun kendaraan."
},
{
  id: 22,
  title: "Gantungan Kunci Akrilik Custom",
  price: 45000,
  image: new URL("@/assets/produk/aksesoris/gelang (9).jpg", import.meta.url).href,
  category: "Aksesoris",
  brand: "Generic",
  colors: ["Multi"],
  sizes: ["One Size"],
  featured: true,
  deskripsi: "Gantungan Kunci Akrilik Custom dengan desain transparan modern. Bisa dicetak sesuai karakter atau gambar favorit. Ringan, kuat, dan stylish."
},
{
  id: 23,
  title: "Gantungan Kunci Metal Silver",
  price: 60000,
  image: new URL("@/assets/produk/aksesoris/gelang (10).jpg", import.meta.url).href,
  category: "Aksesoris",
  brand: "Generic",
  colors: ["Silver"],
  sizes: ["One Size"],
  featured: true,
  deskripsi: "Gantungan Kunci Metal Silver berbahan stainless steel yang kuat dan tidak berkarat. Desain minimalis cocok untuk pria maupun wanita."
},
{
  id: 24,
  title: "Gantungan Kunci Karakter Lucu",
  price: 55000,
  image: new URL("@/assets/produk/aksesoris/ganci (1).jpg", import.meta.url).href,
  category: "Aksesoris",
  brand: "Generic",
  colors: ["Multi"],
  sizes: ["One Size"],
  featured: true,
  deskripsi: "Gantungan Kunci Karakter Lucu berbahan karet lentur dengan berbagai pilihan karakter. Cocok untuk hadiah atau koleksi pribadi."
},
{
  id: 25,
  title: "Gantungan Kunci Kayu Ukir",
  price: 70000,
  image: new URL("@/assets/produk/aksesoris/ganci (2).jpg", import.meta.url).href,
  category: "Aksesoris",
  brand: "Generic",
  colors: ["Brown"],
  sizes: ["One Size"],
  featured: true,
  deskripsi: "Gantungan Kunci Kayu Ukir handmade dengan sentuhan artistik. Terbuat dari kayu alami yang ringan dan ramah lingkungan."
},
{
  id: 26,
  title: "Gantungan Kunci LED Mini",
  price: 65000,
  image: new URL("@/assets/produk/aksesoris/ganci (3).jpg", import.meta.url).href,
  category: "Aksesoris",
  brand: "Generic",
  colors: ["Black", "Blue"],
  sizes: ["One Size"],
  featured: true,
  deskripsi: "Gantungan Kunci LED Mini multifungsi dengan lampu kecil untuk membantu mencari kunci di tempat gelap. Desain modern dan praktis."
},
{
  id: 27,
  title: "Gantungan Kunci Boneka Mini",
  price: 60000,
  image: new URL("@/assets/produk/aksesoris/ganci (4).jpg", import.meta.url).href,
  category: "Aksesoris",
  brand: "Generic",
  colors: ["Multi"],
  sizes: ["One Size"],
  featured: true,
  deskripsi: "Gantungan Kunci Boneka Mini dengan bentuk imut yang cocok untuk remaja dan anak-anak. Bisa dijadikan hiasan tas maupun gantungan kunci."
},
{
  id: 28,
  title: "Gantungan Kunci Logam Premium",
  price: 75000,
  image: new URL("@/assets/produk/aksesoris/ganci (5).jpg", import.meta.url).href,
  category: "Aksesoris",
  brand: "Generic",
  colors: ["Gold", "Silver"],
  sizes: ["One Size"],
  featured: true,
  deskripsi: "Gantungan Kunci Logam Premium dengan finishing mengkilap yang elegan. Terbuat dari bahan metal kuat dan tahan lama."
},
{
  id: 29,
  title: "Gantungan Kunci Resin Glitter",
  price: 70000,
  image: new URL("@/assets/produk/aksesoris/ganci (6).jpg", import.meta.url).href,
  category: "Aksesoris",
  brand: "Generic",
  colors: ["Pink", "Blue"],
  sizes: ["One Size"],
  featured: true,
  deskripsi: "Gantungan Kunci Resin Glitter dengan desain unik berkilau. Cocok untuk remaja yang suka aksesoris colorful dan fun."
},
{
  id: 30,
  title: "Gantungan Kunci Multifungsi",
  price: 90000,
  image: new URL("@/assets/produk/aksesoris/ganci (7).jpg", import.meta.url).href,
  category: "Aksesoris",
  brand: "Generic",
  colors: ["Black"],
  sizes: ["One Size"],
  featured: true,
  deskripsi: "Gantungan Kunci Multifungsi dilengkapi pembuka botol dan mini tool. Cocok untuk kamu yang suka barang praktis dan fungsional."
},
{
  id: 31,
  title: "Gantungan Kunci Acrylic Glow",
  price: 80000,
  image: new URL("@/assets/produk/aksesoris/ganci (8).jpg", import.meta.url).href,
  category: "Aksesoris",
  brand: "Generic",
  colors: ["Green", "Blue"],
  sizes: ["One Size"],
  featured: true,
  deskripsi: "Gantungan Kunci Acrylic Glow yang bisa menyala dalam gelap. Cocok untuk anak muda yang suka hal unik dan berbeda."
},
{
  id: 32,
  title: "Gantungan Kunci Couple",
  price: 95000,
  image: new URL("@/assets/produk/aksesoris/ganci (9).jpg", import.meta.url).href,
  category: "Aksesoris",
  brand: "Generic",
  colors: ["Silver", "Gold"],
  sizes: ["One Size"],
  featured: true,
  deskripsi: "Gantungan Kunci Couple dengan desain pasangan yang manis. Terbuat dari bahan logam berkualitas. Cocok dijadikan hadiah romantis untuk pasangan."
},
{
  id: 33,
  title: "Kemeja PDH Putih",
  price: 350000,
  image: new URL("@/assets/produk/pdh/pdh (1).jpg", import.meta.url).href,
  category: "PDH",
  brand: "Generic",
  colors: ["White"],
  sizes: ["M", "L", "XL"],
  featured: true,
  deskripsi: "Kemeja PDH Putih dengan potongan rapi dan formal, terbuat dari bahan polyester berkualitas yang tidak mudah kusut. Desain simpel dengan saku depan membuatnya cocok dipakai untuk acara resmi, kerja, maupun kegiatan organisasi. Warna putih bersih memberi kesan profesional dan elegan."
},
{
  id: 34,
  title: "Kemeja PDH Hitam",
  price: 360000,
  image: new URL("@/assets/produk/pdh/pdh (2).jpg", import.meta.url).href,
  category: "PDH",
  brand: "Generic",
  colors: ["Black"],
  sizes: ["M", "L", "XL"],
  featured: true,
  deskripsi: "Kemeja PDH Hitam hadir dengan nuansa maskulin dan elegan. Terbuat dari bahan polyester kombinasi cotton yang nyaman digunakan seharian. Jahitan rapi dan detail kancing berkualitas menambah kesan premium. Cocok untuk dipakai ke acara formal maupun pertemuan penting."
},
{
  id: 35,
  title: "Kemeja PDH Navy",
  price: 365000,
  image: new URL("@/assets/produk/pdh/pdh (3).jpg", import.meta.url).href,
  category: "PDH",
  brand: "Generic",
  colors: ["Navy"],
  sizes: ["M", "L", "XL"],
  featured: true,
  deskripsi: "Kemeja PDH Navy dengan warna biru gelap yang kalem dan profesional. Dibuat dari bahan berkualitas yang ringan namun tetap formal, membuatnya cocok digunakan dalam acara organisasi maupun kerja kantor. Desain simple dan cutting fit menambah kesan percaya diri."
},
{
  id: 36,
  title: "Kemeja PDH Cream",
  price: 355000,
  image: new URL("@/assets/produk/pdh/pdh (4).jpg", import.meta.url).href,
  category: "PDH",
  brand: "Generic",
  colors: ["Cream"],
  sizes: ["M", "L", "XL"],
  featured: true,
  deskripsi: "Kemeja PDH Cream dengan warna netral elegan, cocok untuk berbagai kegiatan resmi. Bahan adem dan mudah dirapikan menjadikannya pilihan favorit untuk kerja maupun acara formal. Detail saku depan membuatnya semakin fungsional."
},
{
  id: 37,
  title: "Kemeja PDH Abu-Abu",
  price: 370000,
  image: new URL("@/assets/produk/pdh/pdh (5).jpg", import.meta.url).href,
  category: "PDH",
  brand: "Generic",
  colors: ["Grey"],
  sizes: ["M", "L", "XL"],
  featured: true,
  deskripsi: "Kemeja PDH Abu-Abu dengan tone modern yang memberi kesan profesional dan percaya diri. Terbuat dari bahan berkualitas yang ringan dan tidak panas, membuat nyaman dipakai seharian. Cocok untuk seragam organisasi, kerja, maupun acara resmi lainnya."
},
{
  id: 38,
  title: "Jaket Bomber Hitam",
  price: 420000,
  image: new URL("@/assets/produk/jaket/jaket (1).jpg", import.meta.url).href,
  category: "Jaket",
  brand: "Generic",
  colors: ["Black"],
  sizes: ["M", "L", "XL"],
  featured: true,
  deskripsi: "Jaket Bomber Hitam dengan desain klasik dan timeless. Terbuat dari bahan parasut premium dengan lapisan dalam lembut yang membuat hangat namun tetap ringan. Cocok dipakai untuk hangout, jalan malam, atau aktivitas outdoor ringan."
},
{
  id: 39,
  title: "Jaket Jeans Biru",
  price: 500000,
  image: new URL("@/assets/produk/jaket/jaket (2).jpg", import.meta.url).href,
  category: "Jaket",
  brand: "Generic",
  colors: ["Blue"],
  sizes: ["M", "L", "XL"],
  featured: true,
  deskripsi: "Jaket Jeans Biru berbahan denim tebal berkualitas tinggi, memberi kesan stylish dan casual. Warna biru klasik mudah dipadukan dengan kaos polos maupun hoodie. Cocok dipakai sehari-hari maupun saat traveling."
},
{
  id: 40,
  title: "Jaket Varsity Hitam-Putih",
  price: 450000,
  image: new URL("@/assets/produk/jaket/jaket (3).jpg", import.meta.url).href,
  category: "Jaket",
  brand: "Generic",
  colors: ["Black", "White"],
  sizes: ["M", "L", "XL"],
  featured: true,
  deskripsi: "Jaket Varsity dengan kombinasi warna hitam-putih yang trendi. Terbuat dari bahan fleece tebal yang hangat dan nyaman. Cocok untuk gaya streetwear, kuliah, maupun hangout bersama teman."
},
{
  id: 41,
  title: "Jaket Kulit Sintetis",
  price: 650000,
  image: new URL("@/assets/produk/jaket/jaket (4).jpg", import.meta.url).href,
  category: "Jaket",
  brand: "Generic",
  colors: ["Black"],
  sizes: ["M", "L", "XL"],
  featured: true,
  deskripsi: "Jaket Kulit Sintetis dengan desain modern dan maskulin. Memberikan kesan berani dan percaya diri. Material kulit sintetis berkualitas tinggi membuat jaket ini awet serta mudah dibersihkan. Cocok dipakai motoran atau untuk gaya casual harian."
},
{
  id: 42,
  title: "Jaket Hoodie Zipper Grey",
  price: 390000,
  image: new URL("@/assets/produk/jaket/jaket (5).jpg", import.meta.url).href,
  category: "Jaket",
  brand: "Generic",
  colors: ["Grey"],
  sizes: ["M", "L", "XL"],
  featured: true,
  deskripsi: "Jaket Hoodie Zipper Grey berbahan fleece lembut yang hangat dan nyaman. Dilengkapi resleting penuh sehingga mudah dipakai. Cocok untuk santai maupun aktivitas outdoor ringan."
},
{
  id: 43,
  title: "Jaket Parka Army",
  price: 600000,
  image: new URL("@/assets/produk/jaket/jaket (6).jpg", import.meta.url).href,
  category: "Jaket",
  brand: "Generic",
  colors: ["Green"],
  sizes: ["M", "L", "XL"],
  featured: true,
  deskripsi: "Jaket Parka Army dengan desain stylish dan multifungsi. Bahan tebal dan hangat cocok dipakai untuk aktivitas luar ruangan. Dilengkapi kantong depan yang luas serta hoodie pelindung kepala."
},
{
  id: 44,
  title: "Jaket Windbreaker Navy",
  price: 410000,
  image: new URL("@/assets/produk/jaket/jaket (7).jpg", import.meta.url).href,
  category: "Jaket",
  brand: "Generic",
  colors: ["Navy"],
  sizes: ["M", "L", "XL"],
  featured: true,
  deskripsi: "Jaket Windbreaker Navy ringan dan tahan angin, cocok untuk aktivitas outdoor seperti jogging, hiking, atau traveling. Bahan parasut premium membuatnya nyaman dipakai dan mudah dilipat saat bepergian."
},
 {
  id: 45,
  title: "Hoodie Polos Hitam",
  price: 350000,
  image: new URL("@/assets/produk/hoodie/hoodie (1).jpg", import.meta.url).href,
  category: "Hoodie",
  brand: "Generic",
  colors: ["Black"],
  sizes: ["M", "L", "XL"],
  featured: true,
  deskripsi: "Hoodie Polos Hitam berbahan fleece premium yang hangat dan lembut di kulit. Desain simple cocok untuk gaya casual sehari-hari. Dilengkapi kantong depan dan hoodie dengan tali serut."
},
{
  id: 46,
  title: "Hoodie Oversize Cream",
  price: 360000,
  image: new URL("@/assets/produk/hoodie/hoodie (2).jpg", import.meta.url).href,
  category: "Hoodie",
  brand: "Generic",
  colors: ["Cream"],
  sizes: ["M", "L", "XL"],
  featured: true,
  deskripsi: "Hoodie Oversize Cream dengan cutting longgar yang sedang tren. Memberikan kenyamanan maksimal dan gaya kekinian. Cocok dipakai untuk santai maupun hangout."
},
{
  id: 47,
  title: "Hoodie Zipper Navy",
  price: 370000,
  image: new URL("@/assets/produk/hoodie/hoodie (3).jpg", import.meta.url).href,
  category: "Hoodie",
  brand: "Generic",
  colors: ["Navy"],
  sizes: ["M", "L", "XL"],
  featured: true,
  deskripsi: "Hoodie Zipper Navy berbahan fleece lembut dengan resleting depan penuh. Praktis dipakai dan cocok untuk aktivitas indoor maupun outdoor."
},
{
  id: 48,
  title: "Hoodie Graphic Hitam",
  price: 380000,
  image: new URL("@/assets/produk/hoodie/hoodie (4).jpg", import.meta.url).href,
  category: "Hoodie",
  brand: "Generic",
  colors: ["Black"],
  sizes: ["M", "L", "XL"],
  featured: true,
  deskripsi: "Hoodie Graphic Hitam dengan sablon desain modern yang membuat tampilan lebih trendy. Cocok untuk streetwear dan dipadukan dengan jeans atau jogger."
},
{
  id: 49,
  title: "Hoodie Merah Maroon",
  price: 365000,
  image: new URL("@/assets/produk/hoodie/hoodie (5).jpg", import.meta.url).href,
  category: "Hoodie",
  brand: "Generic",
  colors: ["Maroon"],
  sizes: ["M", "L", "XL"],
  featured: true,
  deskripsi: "Hoodie Merah Maroon dengan warna bold yang memberikan kesan berani dan stylish. Bahan fleece tebal membuat tubuh tetap hangat di cuaca dingin."
},
{
  id: 50,
  title: "Hoodie Striped Grey",
  price: 375000,
  image: new URL("@/assets/produk/hoodie/hoodie (6).jpg", import.meta.url).href,
  category: "Hoodie",
  brand: "Generic",
  colors: ["Grey"],
  sizes: ["M", "L", "XL"],
  featured: true,
  deskripsi: "Hoodie Striped Grey dengan motif garis simpel yang membuat tampilan lebih modern. Cocok untuk dipakai sehari-hari dengan gaya casual maupun sporty."
},
{
  id: 51,
  title: "Celana Jeans Biru",
  price: 320000,
  image: new URL("@/assets/produk/celana/celana (1).jpg", import.meta.url).href,
  category: "Celana",
  brand: "Generic",
  colors: ["Blue"],
  sizes: ["30", "32", "34"],
  featured: true,
  deskripsi: "Celana Jeans Biru dengan bahan denim stretch berkualitas tinggi. Nyaman digunakan dan tidak kaku. Warna biru klasik cocok dipadukan dengan kaos polos maupun kemeja casual."
},
{
  id: 52,
  title: "Celana Chino Cream",
  price: 300000,
  image: new URL("@/assets/produk/celana/celana (2).jpg", import.meta.url).href,
  category: "Celana",
  brand: "Generic",
  colors: ["Cream"],
  sizes: ["30", "32", "34"],
  featured: true,
  deskripsi: "Celana Chino Cream dengan bahan katun stretch yang ringan dan adem. Cocok untuk gaya semi-formal maupun casual. Warna cream elegan membuatnya mudah dipadukan dengan kemeja atau kaos."
},
{
  id: 53,
  title: "Celana Jogger Hitam",
  price: 280000,
  image: new URL("@/assets/produk/celana/celana (3).jpg", import.meta.url).href,
  category: "Celana",
  brand: "Generic",
  colors: ["Black"],
  sizes: ["M", "L", "XL"],
  featured: true,
  deskripsi: "Celana Jogger Hitam dengan karet di pergelangan kaki yang membuat nyaman dipakai untuk aktivitas sehari-hari. Bahan fleece lembut cocok untuk olahraga maupun santai."
},
{
  id: 54,
  title: "Celana Cargo Army",
  price: 350000,
  image: new URL("@/assets/produk/celana/celana (4).jpg", import.meta.url).href,
  category: "Celana",
  brand: "Generic",
  colors: ["Green"],
  sizes: ["30", "32", "34"],
  featured: true,
  deskripsi: "Celana Cargo Army dengan banyak kantong fungsional, cocok untuk kegiatan outdoor. Bahan tebal dan kuat membuatnya tahan lama. Warna army memberi kesan maskulin."
},
{
  id: 55,
  title: "Celana Pendek Denim",
  price: 260000,
  image: new URL("@/assets/produk/celana/celana (5).jpg", import.meta.url).href,
  category: "Celana",
  brand: "Generic",
  colors: ["Blue"],
  sizes: ["M", "L", "XL"],
  featured: true,
  deskripsi: "Celana Pendek Denim yang nyaman digunakan di cuaca panas. Terbuat dari bahan denim berkualitas yang awet dan tidak mudah pudar. Cocok dipakai santai maupun jalan-jalan."
},
{
  id: 56,
  title: "Celana Training Sporty",
  price: 270000,
  image: new URL("@/assets/produk/celana/celana (6).jpg", import.meta.url).href,
  category: "Celana",
  brand: "Generic",
  colors: ["Black", "Grey"],
  sizes: ["M", "L", "XL"],
  featured: true,
  deskripsi: "Celana Training Sporty dengan bahan polyester elastis yang ringan dan fleksibel. Cocok untuk olahraga seperti jogging, gym, maupun kegiatan casual sehari-hari."
}




    ],
    likedProducts: [],
    searchQuery: "",
    selectedCategory: null,
  }),

  getters: {
    filteredProducts(state) {
      let result = state.products;

      if (state.selectedCategory) {
        result = result.filter(
          (p) =>
            p.category.toLowerCase() === state.selectedCategory.toLowerCase()
        );
      }

      if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase();
        result = result.filter(
          (p) =>
            p.title.toLowerCase().includes(q) ||
            p.brand.toLowerCase().includes(q)
        );
      }

      return result;
    },
    featuredProducts: (state) => state.products.filter((p) => p.featured), // ✅ Produk spesial
  },
  

  actions: {
    toggleLike(productId) {
      const index = this.likedProducts.indexOf(productId);
      if (index === -1) {
        this.likedProducts.push(productId);
      } else {
        this.likedProducts.splice(index, 1);
      }
      
    },

    getProductById(id) {
      return this.products.find((p) => p.id === Number(id));
    },

    setCategory(category) {
      this.selectedCategory = category;
    },

    setSearch(query) {
      this.searchQuery = query;
    },
  },
});
