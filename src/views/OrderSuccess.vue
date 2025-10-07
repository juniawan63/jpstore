<template>
  <section class="max-w-2xl mx-auto mt-24 px-6 text-center">
    <div class="bg-white shadow rounded-2xl p-10">
      <i class="fas fa-check-circle text-6xl text-green-600"></i>
      <h1 class="text-2xl font-bold text-green-600 mb-4">
        Pesanan Berhasil!
      </h1>
      <p class="text-gray-600 mb-8">
        Terima kasih sudah berbelanja. Pesananmu sedang diproses dan akan segera
        dikirim ke alamat yang kamu pilih.
      </p>

      <!-- ✅ Ringkasan Pesanan -->
      <div v-if="order && order.items && order.items.length" class="text-left mb-8">
        <h2 class="text-lg font-semibold mb-2">Detail Pesanan:</h2>
        <ul class="list-disc pl-5 space-y-1">
          <li v-for="(item, idx) in order.items" :key="idx">
            {{ item.title }} - {{ item.qty }} pcs
          </li>
        </ul>
        <p class="mt-3"><strong>Total:</strong> Rp{{ order.total.toLocaleString("id-ID") }}</p>
        <p><strong>Metode Pembayaran:</strong> {{ order.payment }}</p>
        <p><strong>Alamat:</strong> {{ order.address }}</p>
      </div>

      <div class="flex gap-4 justify-center">
        <router-link
          to="/"
          class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Belanja Lagi
        </router-link>
        <router-link
          to="/transaksi"
          class="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold"
        >
          Lihat Pesanan
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useOrderStore } from "@/stores/orderStore";

const route = useRoute();
const orderStore = useOrderStore();

// ✅ Ambil order terakhir, reactive
const order = computed(() => {
  if (orderStore.orders.length > 0) {
    return orderStore.orders[orderStore.orders.length - 1];
  }
  try {
    if (route.query.order) {
      return JSON.parse(decodeURIComponent(route.query.order));
    }
  } catch (e) {
    console.error("Gagal parse order:", e);
  }
  return {};
});
</script>
