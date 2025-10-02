<template>
  <section class="bg-white text-gray-700">
    <!-- Hero Banner -->
    <div
      class="relative h-72 flex items-center justify-center bg-gradient-to-b from-green-700 to-green-800 text-white text-center"
    >
      <h1 class="text-3xl md:text-4xl font-bold drop-shadow-lg">
          JP Store Company Profile
      </h1>
    </div>

    <!-- Intro -->
    <div class="max-w-6xl mx-auto px-6 py-12 text-center space-y-6">
      <h2 class="text-2xl font-bold">Tentang Kami</h2>
      <p class="max-w-3xl mx-auto">
        <strong>JP Store</strong> adalah toko apparel dan aksesoris yang menyediakan berbagai produk
        fashion original dan premium. Mulai dari kaos, hoodie, jaket, celana, hingga aksesoris,
        semuanya kami hadirkan dengan kualitas terbaik untuk mendukung gaya hidup modern Anda.
      </p>
    </div>

    <!-- Keunggulan -->
    <div class="bg-gray-50 py-12">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-2xl font-bold text-center mb-8">Kenapa Memilih JP Store?</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(feature, i) in features"
            :key="i"
            class="p-6 bg-white shadow rounded-lg hover:shadow-lg transition"
          >
            <div class="text-green-600 text-3xl mb-4">
              <i :class="feature.icon"></i>
            </div>
            <h3 class="font-semibold text-lg mb-2">{{ feature.title }}</h3>
            <p class="text-sm">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Lokasi -->
    <div class="max-w-6xl mx-auto px-6 py-12">
      <h2 class="text-2xl font-bold text-center mb-6">Store Locations</h2>
      <div class="grid md:grid-cols-2 gap-6 text-center">
        <div class="p-6 border rounded-lg shadow-sm">
          <h3 class="font-semibold mb-2">Offline Stores</h3>
          <ul class="space-y-1">
            <li>Bandung</li>
            <li>Jakarta Pusat</li>
            <li>Jakarta Selatan</li>
            <li>Lampung</li>
            <li>Tangerang Selatan</li>
          </ul>
        </div>
        <div class="p-6 border rounded-lg shadow-sm">
          <h3 class="font-semibold mb-2">Online Store</h3>
          <p>
            Belanja kapan saja & di mana saja melalui website resmi dan marketplace favorit Anda.
          </p>
          <ul class="mt-3 space-y-1">
            <li><strong>Website:</strong> www.jpstore.com</li>
            <li><strong>Shopee:</strong> JPSTORE</li>
            <li><strong>Tokopedia:</strong> JPSTORE</li>
            <li><strong>Instagram:</strong> @JPSTORE.ID</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Accordion Company Info -->
    <div class="bg-gray-50 py-12">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-2xl font-bold text-center mb-6">Informasi Lengkap</h2>
        <div class="space-y-4">
          <details
            v-for="(item, i) in accordions"
            :key="i"
            class="p-4 bg-white border rounded-lg shadow-sm"
          >
            <summary class="font-semibold cursor-pointer">{{ item.title }}</summary>
            <p class="mt-2 text-sm">{{ item.content }}</p>
          </details>
        </div>
      </div>
    </div>

    <!-- Hubungi Kami -->
    <div class="max-w-6xl mx-auto px-6 py-12 text-center">
      <h2 class="text-2xl font-bold mb-4">Hubungi Kami</h2>
      <p class="mb-6">Kami selalu siap membantu Anda menemukan produk fashion terbaik.</p>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="space-y-2">
          <h3 class="font-semibold">WhatsApp Layanan Jual/Beli:</h3>
          <p>+62 812 6000 9807</p>
          <p>+62 812 6000 0807</p>
        </div>
        <div class="space-y-2">
          <h3 class="font-semibold">WhatsApp Customer Care:</h3>
          <p>+62 813 8121 1987</p>
        </div>
      </div>
    </div>

    <!-- Floating WhatsApp -->
    <a
      href="https://wa.me/6281260009807"
      target="_blank"
      class="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full flex items-center shadow-lg gap-2"
    >
      <i class="fab fa-whatsapp text-xl"></i>
      <span class="hidden md:inline">Fast Respon 24/7 ⚡</span>
    </a>
  </section>
</template>

<script setup>
const features = [
  {
    icon: "fas fa-check-circle",
    title: "100% Original",
    desc: "Semua produk apparel & aksesoris kami dijamin original dan berkualitas.",
  },
  {
    icon: "fas fa-users",
    title: "Trusted by Customers",
    desc: "Dipercaya ribuan pelanggan dengan review positif & loyalitas tinggi.",
  },
  {
    icon: "fas fa-tags",
    title: "Best Price Guarantee",
    desc: "Harga terbaik untuk produk fashion branded & premium.",
  },
  {
    icon: "fas fa-shipping-fast",
    title: "Free Shipping",
    desc: "Gratis ongkir ke seluruh Indonesia dengan garansi tukar ukuran.",
  },
  {
    icon: "fas fa-tshirt",
    title: "Wide Range",
    desc: "Tersedia kaos, hoodie, jaket, celana, dan berbagai aksesoris.",
  },
  {
    icon: "fas fa-star",
    title: "Exclusive Release",
    desc: "Koleksi limited & special edition tersedia hanya di JP Store.",
  },
];

const accordions = [
  {
    title: "Sejarah Perusahaan",
    content:
      "JP Store berdiri dengan visi menghadirkan fashion original & premium untuk semua kalangan. Dari toko kecil, kini berkembang menjadi salah satu apparel store terbesar di Indonesia.",
  },
  {
    title: "Visi & Misi",
    content:
      "Visi kami adalah menjadi pilihan utama untuk fashion enthusiast. Misi kami adalah menghadirkan produk berkualitas, layanan terbaik, dan pengalaman belanja yang menyenangkan.",
  },
  {
    title: "Nilai Perusahaan",
    content:
      "Keaslian, kepercayaan, dan kepuasan pelanggan adalah prioritas kami. Dengan tagline 'Authentic. Trusted. Best Price', kami selalu berkomitmen memberikan yang terbaik.",
  },
];
</script>
