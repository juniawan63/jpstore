<template>
  <section class="max-w-7xl mx-auto px-4 mt-24 mb-10">
    <h1 class="text-2xl font-bold mb-6">HOT ITEM 🔥🔥🔥 </h1>

    <!-- Search box -->
    <div class="mb-6 flex gap-3">
      <input
        v-model="store.searchQuery"
        type="text"
        placeholder="Search products..."
        class="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
      />
    </div>

    <!-- Grid produk khusus HOT ITEM -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div
        v-for="product in hotProducts"
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
          @click="store.toggleLike(product.id)"
          class="absolute bottom-6 right-6 text-xl">
          <i
            :class="store.likedProducts.includes(product.id) ? 'fas fa-heart text-red-500' : 'far fa-heart text-gray-400'"
          ></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useProductStore } from "@/stores/productStore";

const store = useProductStore();

// hanya produk dengan isHot === true
const hotProducts = computed(() =>
  store.filteredProducts.filter((p) => p.isHot === true)
);

onMounted(() => {
  store.setCategory(null);
});
</script>
