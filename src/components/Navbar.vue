<template>
  <nav class="bg-white text-gray-800 shadow-md fixed top-0 left-0 w-full z-50">
    <div class="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
      <!-- Mobile Search Button (kiri) -->
      <button
        class="md:hidden text-xl text-gray-600"
        @click="showMobileSearch = !showMobileSearch">
        <i :class="showMobileSearch ? 'fas fa-times' : 'fas fa-search'"></i>
      </button>

      <!-- Logo -->
      <div class="flex items-center gap-2 font-bold text-xl">
        <img src="@/assets/logo/jp logo black.png" alt="Logo" class="h-10 w-auto" />
      </div>

      <!-- Desktop Search (sebelah logo) -->
      <div class="hidden md:block mx-6 relative flex-1 max-w-md">
        <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search for products and brand"
          class="w-full border rounded-lg pl-10 pr-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          @keyup.enter="goToSearch"
        />
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-6 text-sm font-semibold">
        <router-link to="/" class="hover:text-green-900">HOME</router-link>
        <router-link to="/products" class="hover:text-green-900">BROWSE ALL</router-link>
        <router-link to="/hot-item" class="hover:text-green-900">HOT ITEM</router-link>

        <!-- Categories dropdown -->
        <div class="relative group">
          <button class="flex items-center gap-1 hover:text-green-900">
            CATEGORIES <i class="fas fa-chevron-down text-xs"></i>
          </button>
          <div class="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-lg w-48">
            <router-link to="/kaus" class="block px-4 py-2 hover:bg-gray-100">Kaos</router-link>
            <router-link to="/jaket" class="block px-4 py-2 hover:bg-gray-100">Jaket</router-link>
            <router-link to="/hoodie" class="block px-4 py-2 hover:bg-gray-100">Hoodie</router-link>
            <router-link to="/celana" class="block px-4 py-2 hover:bg-gray-100">Celana</router-link>
            <router-link to="/pdh" class="block px-4 py-2 hover:bg-gray-100">PDH</router-link>
            <router-link to="/aksesoris" class="block px-4 py-2 hover:bg-gray-100">Aksesoris</router-link>
          </div>
        </div>

        <!-- More dropdown -->
        <div class="relative group">
          <button class="flex items-center gap-1 hover:text-green-900">
            MORE <i class="fas fa-chevron-down text-xs"></i>
          </button>
          <div class="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-lg w-56">
            <router-link to="/about" class="block px-4 py-2 hover:bg-gray-100">About</router-link>
            <router-link to="/contact" class="block px-4 py-2 hover:bg-gray-100">Contact</router-link>
            <router-link to="/faq" class="block px-4 py-2 hover:bg-gray-100">FAQ</router-link>
          </div>
        </div>

        <!-- Icons -->
        <div class="flex items-center gap-4 ml-4">
          <!-- Keranjang -->
          <button @click="requireLogin('/cart')" class="relative">
            <i class="fas fa-shopping-cart text-xl"></i>
            <span
              v-if="cart.totalItems > 0 && auth.isAuthenticated"
              class="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-0.5 rounded-full text-white"
            >
              {{ cart.totalItems }}
            </span>
          </button>

          <!-- Wishlist -->
          <button @click="requireLogin('/wishlist')" class="relative">
            <i class="fas fa-heart text-xl"></i>
            <span
              v-if="wishlist.totalItems > 0 && auth.isAuthenticated"
              class="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-0.5 rounded-full text-white"
            >
              {{ wishlist.totalItems }}
            </span>
          </button>
        </div>

        <!-- Login/Profile -->
        <div class="ml-4">
          <template v-if="auth.isAuthenticated">
            <!-- Profil dropdown -->
            <div class="relative group">
              <button class="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100">
                <i class="fas fa-user-circle text-xl"></i>
                <span>{{ auth.userName }}</span>
                <i class="fas fa-chevron-down text-xs"></i>
              </button>
              <div class="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-lg w-40 right-0">
                <router-link to="/profile" class="block px-4 py-2 hover:bg-gray-100">
                  Profil
                </router-link>
                <router-link to="/orders" class="block px-4 py-2 hover:bg-gray-100">
                  Pesanan Saya
                </router-link>
                <button
                  @click="handleLogout"
                  class="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            </div>
          </template>
          <template v-else>
            <router-link
              to="/login"
              class="border px-4 py-2 rounded-lg hover:bg-green-900 hover:text-white transition">
              Login
            </router-link>
          </template>
        </div>
      </div>

      <!-- Hamburger Mobile -->
      <button class="md:hidden text-2xl text-gray-600" @click="isOpen = !isOpen">
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <!-- Mobile Search Input -->
    <div v-if="showMobileSearch" class="md:hidden bg-white px-6 py-2 border-t relative">
      <i class="fas fa-search absolute left-9 top-1/2 -translate-y-1/2 text-gray-400"></i>
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search for products and brand"
        class="w-full border rounded-lg pl-10 pr-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-900"
      />
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <div v-if="isOpen" class="md:hidden bg-white shadow-md px-6 py-4 space-y-3">
        <router-link to="/" class="block hover:text-green-900">HOME</router-link>
        <router-link to="/products" class="block hover:text-green-900">BROWSE ALL</router-link>
        <router-link to="/hot-item" class="block hover:text-green-900">HOT ITEM</router-link>

        <!-- Categories -->
        <div>
          <p class="font-semibold mb-2">Categories</p>
          <router-link to="/kaus" class="block px-4 py-2 hover:bg-gray-100">Kaos</router-link>
          <router-link to="/jaket" class="block px-4 py-2 hover:bg-gray-100">Jaket</router-link>
          <router-link to="/hoodie" class="block px-4 py-2 hover:bg-gray-100">Hoodie</router-link>
          <router-link to="/celana" class="block px-4 py-2 hover:bg-gray-100">Celana</router-link>
          <router-link to="/pdh" class="block px-4 py-2 hover:bg-gray-100">PDH</router-link>
          <router-link to="/aksesoris" class="block px-4 py-2 hover:bg-gray-100">Aksesoris</router-link>
        </div>

        <!-- More -->
        <div>
          <p class="font-semibold mb-2">More</p>
          <router-link to="/about" class="block px-4 py-2 hover:bg-gray-100">About</router-link>
          <router-link to="/contact" class="block px-4 py-2 hover:bg-gray-100">Contact</router-link>
          <router-link to="/faq" class="block px-4 py-2 hover:bg-gray-100">FAQ</router-link>
        </div>

        <!-- Login/Profile -->
        <div>
          <template v-if="auth.isAuthenticated">
            <p class="font-semibold mb-2">Akun</p>
            <router-link to="/profile" class="block px-4 py-2 hover:bg-gray-100">Profil</router-link>
            <router-link to="/orders" class="block px-4 py-2 hover:bg-gray-100">Pesanan Saya</router-link>
            <button
              @click="handleLogout"
              class="w-full text-left px-4 py-2 hover:bg-gray-100">
              Logout
            </button>
          </template>
          <template v-else>
            <router-link
              to="/login"
              class="block border px-4 py-2 rounded-lg hover:bg-green-900 hover:text-white transition">
              Login
            </router-link>
          </template>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "@/stores/cart";
import { useProductStore } from "@/stores/productStore";
import { useWishlistStore } from "@/stores/wishlist";
import { useAuthStore } from "@/stores/auth";

const wishlist = useWishlistStore();
const cart = useCartStore();
const productStore = useProductStore();
const router = useRouter();
const auth = useAuthStore();

const isOpen = ref(false);
const showMobileSearch = ref(false);
const searchQuery = ref("");

// load user saat pertama kali buka
auth.loadUser();

// Sinkronisasi searchQuery ke store
watch(searchQuery, (val) => {
  productStore.setSearch(val);
});

const goToSearch = () => {
  if (router.currentRoute.value.path !== "/products") {
    router.push("/products");
  }
};

const handleLogout = () => {
  auth.logout();
  router.push("/login");
};

// Fungsi supaya login dulu sebelum akses cart/wishlist
const requireLogin = (path) => {
  if (!auth.isAuthenticated) {
    router.push("/login");
  } else {
    router.push(path);
  }
};
</script>
