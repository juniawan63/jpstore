<template>
  <div class="pt-24 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
    <!-- Bagian Kiri: Daftar Produk -->
    <div class="max-h-[500px] overflow-y-auto pr-2 lg:col-span-2 space-y-6">
      <h1 class="text-2xl font-bold mb-4">Keranjang Belanja</h1>

      <div v-if="items.length === 0" class="text-gray-600">
        Keranjang kosong.
      </div>

      <div
        v-else
        v-for="item in items"
        :key="item.id"
        class="flex items-center bg-white shadow rounded-lg p-4 gap-4"
      >
        <!-- Gambar -->
        <img
          :src="item.image"
          :alt="item.title"
          class="w-24 h-24 object-cover rounded-lg"
        />

        <!-- Detail Produk -->
        <div class="flex-1">
          <h2 class="font-semibold text-lg">{{ item.title }}</h2>
          <p class="text-sm text-gray-500">
            Warna: {{ item.color }} | Ukuran: {{ item.size }}
          </p>
          <p class="font-bold text-green-600">Rp {{ item.price.toLocaleString() }}</p>
        </div>

        <!-- Qty + Hapus -->
        <div class="flex items-center gap-3">
          <button
            class="px-3 py-1 bg-gray-200 rounded"
            @click="cart.decreaseQty(item.id)"
          >
            -
          </button>
          <span class="w-6 text-center">{{ item.qty }}</span>
          <button
            class="px-3 py-1 bg-gray-200 rounded"
            @click="cart.increaseQty(item.id)"
          >
            +
          </button>
          <button
            class="text-red-500 ml-3"
            @click="cart.removeItem(item.id)"
          >
            🗑
          </button>
        </div>
      </div>
    </div>

    <!-- Bagian Kanan: Ringkasan -->
    <div class="bg-white shadow rounded-lg p-6 h-fit">
      <h2 class="text-lg font-bold mb-4">Payment Summary</h2>
      <div class="space-y-2 text-sm">
        <div class="flex justify-between">
          <span>Product Price</span>
          <span>Rp {{ total.toLocaleString() }}</span>
        </div>
        <div class="flex justify-between">
          <span>Product Weight</span>
          <span>{{ totalWeight }} Gr</span>
        </div>
        <div class="flex justify-between">
          <span>Total Qty</span>
          <span>{{ totalQty }} Pcs</span>
        </div>
      </div>
      <div class="flex justify-between font-bold text-lg mt-4 border-t pt-4">
        <span>Total</span>
        <span>Rp {{ total.toLocaleString() }}</span>
      </div>
      
      <div v-for="item in cart.items" :key="item.id" class="flex items-center gap-3">
        <input type="checkbox" v-model="item.selected" />
        <span>{{ item.title }}</span>
        <span>Rp{{ item.price }}</span>
      </div>

      <router-link
        :to="{ path: '/checkout', query: { selected: JSON.stringify(selectedIds) } }"
      >
        <button
          class="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
        >
          Checkout
        </button>
      </router-link>
    </div>
    
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cart";
import { computed } from "vue";

const selectedIds = computed(() =>
  cart.items.filter(i => i.selected).map(i => i.id)
);
const cart = useCartStore();
const items = computed(() => cart.items);
const total = computed(() => cart.totalPrice);
const totalQty = computed(() => cart.totalQty);
const totalWeight = computed(() => cart.totalWeight);
</script>
