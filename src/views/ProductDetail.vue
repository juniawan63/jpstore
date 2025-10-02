<template>
  <section class="max-w-7xl mx-auto px-4 mt-24 mb-5 grid md:grid-cols-2 gap-10">
    <!-- Gambar Produk -->
    <div>
      <img
        :src="product.image"
        :alt="product.title"
        class="rounded-lg shadow-md w-full object-cover"
      />
    </div>

    <!-- Info Produk -->
    <div>
      <!-- Judul -->
      <h1 class="text-2xl md:text-3xl font-bold mb-2">{{ product.title }}</h1>
      <p class="text-xl text-gray-700 mb-6">
        Rp{{ product.price.toLocaleString("id-ID") }}
      </p>
      
      <!-- Pilih Warna -->
      <div v-if="product.colors?.length" class="mb-6">
        <h3 class="font-medium mb-2">Select Color</h3>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="color in product.colors"
            :key="color"
            @click="selectedColor = color"
            class="px-3 py-1 border rounded-lg capitalize transition"
            :class="selectedColor === color ? 'bg-green-900 text-white font-semibold' : 'hover:bg-gray-100'"
          >
            {{ color }}
          </button>
        </div>
      </div>

      <!-- Pilih Ukuran -->
      <div v-if="product.sizes?.length" class="mb-6">
        <h3 class="font-medium mb-2">Select Size</h3>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="size in product.sizes"
            :key="size"
            @click="selectedSize = size"
            class="px-4 py-2 border rounded-lg transition"
            :class="selectedSize === size ? 'bg-green-900 text-white font-semibold' : 'hover:bg-gray-100'"
          >
            {{ size }}
          </button>
        </div>
      </div>

      <!-- Tombol Beli + Like -->
      <div class="flex gap-4 mb-6">
        <button
          class="flex-1 py-3 rounded-lg font-semibold transition bg-green-900 text-white hover:bg-green-800"
          @click="handleBuyNow">
          Beli Sekarang
        </button>


        <!-- Modal Store (child) -->
        <StoreModal 
          v-if="openStoreModal" 
          :product="product"
          @close="openStoreModal = false"
          @confirm="handleConfirm"
        />
        
        <!-- Tombol Like -->
        <button
          class="px-4 py-3 border rounded-lg hover:bg-green-900 transition"
          @click="toggleWishlist"
        >
          <i v-if="isLiked" class="fas fa-heart text-green-500 text-xl"></i>
          <i v-else class="far fa-heart text-gray-500 text-xl"></i>
        </button>
      </div>

      <!-- Deskripsi -->
      <div class="divide-y divide-gray-200 rounded-lg mb-6">
        <details class="p-4 cursor-pointer">
          <summary class="font-semibold hover:text-green-800">Exchange Size Warranty</summary>
          <p class="mt-2 text-gray-600 text-sm">
            Produk ini dapat ditukar ukurannya sesuai syarat & ketentuan berlaku.
          </p>
        </details>

        <details class="p-4 cursor-pointer">
          <summary class="font-semibold hover:text-green-800">Authentic. Trusted. Best Price.</summary>
          <p class="mt-2 text-gray-600 text-sm">
            Semua produk dijamin original dengan harga terbaik.
          </p>
        </details>

        <details class="p-4 cursor-pointer">
          <summary class="font-semibold hover:text-green-800">Categories</summary>
          <p class="text-gray-600">
            Category:
            <span class="font-medium">{{ product.category }}</span>
          </p>
          <p class="text-gray-600">
            Brand:
            <span class="font-medium">{{ product.brand }}</span>
          </p>
        </details>
      </div>

      <!-- Bagikan Sosmed -->
      <div class="flex items-center gap-4">
        <span class="text-gray-700 font-medium">Bagikan</span>
        <a href="#" class="text-green-800 hover:text-green-900 text-xl">
          <i class="fab fa-whatsapp"></i>
        </a>
        <a href="#" class="text-green-800 hover:text-green-900 text-xl">
          <i class="fab fa-telegram"></i>
        </a>
        <a href="#" class="text-green-800 hover:text-green-900 text-xl">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="text-green-800 hover:text-green-900 text-xl">
          <i class="fab fa-facebook"></i>
        </a>
      </div>
    </div>
  </section>

  <!--Deskripsi-->
  <section class="max-w-7xl mx-auto px-4 mb-20">
    <h2 class="text-xl font-bold mb-4"> Deskripsi</h2>
    <span class="font-light">{{ product.deskripsi }}</span>
  </section>
  
  <!-- Related Products -->
  <section class="max-w-7xl mx-auto px-4 mb-20">
    <h2 class="text-xl font-bold mb-6">Related Products</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div
        v-for="related in relatedProducts"
        :key="related.id"
        class="border rounded-lg shadow hover:shadow-lg transition bg-white"
      >
        <router-link :to="`/products/${related.id}`">
          <img
            :src="related.image"
            :alt="related.title"
            class="w-full h-48 object-cover rounded-t-lg"
          />
        </router-link>
        <div class="p-4">
          <h3 class="text-sm font-semibold truncate">{{ related.title }}</h3>
          <p class="text-gray-600 font-medium">
            Rp{{ related.price.toLocaleString("id-ID") }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProductStore } from "@/stores/productStore";
import { useCartStore } from "@/stores/cart";
import { useWishlistStore } from "@/stores/wishlist";
import { useAuthStore } from "@/stores/auth"; 
import StoreModal from "@/components/StoreModal.vue";

const store = useProductStore();
const cart = useCartStore();
const wishlist = useWishlistStore();
const auth = useAuthStore(); 
const route = useRoute();
const router = useRouter();

const openStoreModal = ref(false);

// Ambil produk dari store berdasarkan ID
const product = store.getProductById(route.params.id);

// State warna & ukuran default
const selectedColor = ref(product?.colors?.[0] || null);
const selectedSize = ref(product?.sizes?.[0] || null);

// ✅ Cek apakah produk sudah ada di wishlist
const isLiked = computed(() =>
  wishlist.items.some((item) => item.id === product.id)
);

// ✅ Toggle wishlist
const toggleWishlist = () => {
  if (isLiked.value) {
    wishlist.removeItem(product.id);
  } else {
    wishlist.addItem(product);
  }
};

// Related products
const relatedProducts = computed(() =>
  store.products.filter(
    (p) => p.category === product.category && p.id !== product.id
  )
);

// ⬇️ Method untuk Beli Sekarang
const handleBuyNow = () => {
   if (!auth.isAuthenticated) {
    alert("Silakan login terlebih dahulu untuk melanjutkan pembelian.");
    router.push("/login");
    return;
  }

  openStoreModal.value = true;
};

// ⬇️ Method untuk konfirmasi dari StoreModal
const handleConfirm = (orderData) => {
  cart.addToCart({
    ...orderData,
    id: Date.now(),
    title: product.title,
    price: product.price,
    image: product.image,
    color: selectedColor.value,
    size: selectedSize.value,
  });

  openStoreModal.value = false;
  router.push("/cart");
};
</script>
