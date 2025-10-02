<template>
  <div class="max-w-7xl mx-auto px-4 mt-24 mb-20">
    <!-- Judul -->
    <h1 class="text-2xl font-bold mb-2">Daftar Keinginan Anda</h1>
    <p class="text-gray-600 mb-8">Bisa checkout kapan aja</p>

    <!-- Grid Produk -->
    <div v-if="wishlist.items.length > 0" class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div
        v-for="item in wishlist.items"
        :key="item.id"
        class="relative border rounded-lg shadow hover:shadow-lg transition bg-white"
      >
        <!-- Gambar Produk -->
        <router-link :to="`/products/${item.id}`">
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-56 object-cover rounded-t-lg"
          />
        </router-link>

        <!-- Ikon Hati di pojok kanan atas -->
        <button
          class="absolute top-2 right-2 text-red-500"
          @click="wishlist.removeItem(item.id)"
        >
          <i class="fas fa-heart text-lg"></i>
        </button>

        <!-- Info Produk -->
        <div class="p-4">
          <h3 class="text-sm font-semibold truncate">{{ item.title }}</h3>
          <p class="text-green-700 font-medium">
            Rp{{ item.price.toLocaleString("id-ID") }}
          </p>
        </div>
      </div>
    </div>

    <!-- Jika kosong -->
    <div v-else class="text-gray-500 text-center py-16">
      Belum ada produk di wishlist Anda.
    </div>
  </div>
</template>

<script setup>
import { useWishlistStore } from "@/stores/wishlist";

const wishlist = useWishlistStore();
</script>
