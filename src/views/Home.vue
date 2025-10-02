<template>
  <div class="pt-20">
    <!-- Hero Banner -->
    <Slider />

    <!-- Judul -->
    <section class="max-w-7xl mx-auto px-6 py-12">
      <h2 class="text-center text-2xl font-bold text-gray-800">
        Konveksi Pilihan Sumedang
      </h2>
    </section>

    <!-- Navigasi Kategori -->
    <section class="max-w-7xl mx-auto px-6 mb-12">
      <div class="flex flex-wrap justify-center gap-4">
        <RouterLink
          v-for="menu in navMenus"
          :key="menu.name"
          :to="menu.path"
          class="bg-gray-100 hover:bg-blue-100 text-gray-700 px-4 py-2 rounded-lg font-medium transition"
        >
          {{ menu.name }}
        </RouterLink>
      </div>
    </section>

    <!-- Produk Unggulan -->
    <section class="max-w-7xl mx-auto px-6 py-12">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Produk Unggulan</h2>
        <!-- Tombol View All -->
        <RouterLink
          to="/products"
          class="text-blue-600 font-medium hover:underline"
        >
          View All →
        </RouterLink>
      </div>

      <!-- Scroll Horizontal -->
      <div class="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        <ProductCard
          v-for="item in store.featuredProducts"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :category="item.category"
          :price="item.price"
          :image="item.image"
          class="min-w-[250px] flex-shrink-0"
        />
      </div>
    </section>
    <!--aksesoris unggulan-->
    <section class="max-w-7xl mx-auto px-6 py-12">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Aksesoris Unggulan</h2>
        <!-- Tombol View All -->
        <RouterLink
          to="/products"
          class="text-blue-600 font-medium hover:underline"
        >
          View All →
        </RouterLink>
      </div>

      <!-- Scroll Horizontal -->
      <div class="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        <ProductCard
          v-for="item in store.featuredProducts.filter(p => p.category === 'Aksesoris')"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :category="item.category"
          :price="item.price"
          :image="item.image"
          class="min-w-[250px] flex-shrink-0"
        />
      </div>
    </section>

    <!-- Produk unggulan-->
    <section class="max-w-7xl mx-auto px-6 py-12">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Aksesoris Unggulan</h2>
        <!-- Tombol View All -->
        <RouterLink
          to="/products"
          class="text-blue-600 font-medium hover:underline"
        >
          View All →
        </RouterLink>
      </div>

      <!-- Scroll Horizontal -->
      <div class="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        <ProductCard
          v-for="item in store.featuredProducts.filter(p => p.category === 'Aksesoris')"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :category="item.category"
          :price="item.price"
          :image="item.image"
          
          class="min-w-[250px] flex-shrink-0"
        />
        
      </div>
      
    </section>
    

    <!-- Testimoni -->
    <section class="max-w-7xl mx-auto px-6 py-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Testimoni Pelanggan</h2>

      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="t in testimonials"
          :key="t.id"
          class="bg-white shadow rounded-xl p-6"
        >
          <p class="text-gray-600 italic mb-4">"{{ t.text }}"</p>
          <h4 class="font-semibold text-gray-800">- {{ t.name }}</h4>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useProductStore } from "@/stores/productStore";
import ProductCard from "@/components/ProductCard.vue";
import Slider from "@/components/Slider.vue";

const store = useProductStore();

/* --------------------
 * Navigasi Kategori
 * -------------------- */
const navMenus = [
  { name: "Kaus", path: "/kaus" },
  { name: "Jaket", path: "/jaket" },
  { name: "Hoodie", path: "/hoodie" },
  { name: "Celana", path: "/celana" },
  { name: "PDH", path: "/pdh" },
  { name: "Aksesoris", path: "/aksesoris" },
];

/* --------------------
 * Testimoni
 * -------------------- */
const testimonials = [
  { id: 1, name: "Budi", text: "Kualitas bahan sangat bagus, nyaman dipakai!" },
  { id: 2, name: "Sinta", text: "Designnya keren, cocok buat nongkrong." },
  { id: 3, name: "Andi", text: "Harga terjangkau, barang sampai cepat." },
];
</script>
