<template>
  <section class="max-w-7xl mx-auto px-4 mt-24 mb-10">
    <h1 class="text-2xl font-bold mb-6">All Products</h1>

    <!-- Search box -->
    <div class="mb-6 flex gap-3">
      <input
        v-model="store.searchQuery"
        type="text"
        placeholder="Search products..."
        class="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
      />
    </div>

    <!-- Grid produk -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div
        v-for="product in store.filteredProducts"
        :key="product.id"
        class="border rounded-lg shadow hover:shadow-lg transition relative bg-white"
      >
        <router-link :to="`/products/${product.id}`">
          <img
            :src="product.image"
            :alt="product.title"
            class="w-full h-48 object-cover rounded-t-lg"
          />
        </router-link>

        <div class="p-4">
          <h2 class="text-sm font-semibold truncate">{{ product.title }}</h2>
          <p class="text-gray-600 font-medium">
            Rp{{ product.price.toLocaleString("id-ID") }}
          </p>
        </div>

        <!-- Tombol suka -->
        <button
          class="absolute top-2 right-2 p-2  hover:bg-green-100 transition"
          @click="toggleWishlist(product)"
        >
          <i
            v-if="isLiked(product.id)"
            class="fas fa-heart text-green-500 text-lg"
          ></i>
          <i
            v-else
            class="far fa-heart text-gray-500 text-lg"
          ></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { useProductStore } from "@/stores/productStore";
import { useWishlistStore } from "@/stores/wishlist";

const wishlist = useWishlistStore();
const store = useProductStore();

// ✅ Fungsi cek apakah produk ada di wishlist
const isLiked = (id) => {
  return wishlist.items.some((item) => item.id === id);
};

// ✅ Fungsi toggle wishlist per produk
const toggleWishlist = (product) => {
  if (isLiked(product.id)) {
    wishlist.removeItem(product.id);
  } else {
    wishlist.addItem(product);
  }
};

onMounted(() => {
  store.setCategory(null);
});
</script>
