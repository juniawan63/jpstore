<template>
  <section class="max-w-5xl mx-auto mt-24 mb-16 px-6">
    <h1 class="text-2xl font-bold mb-6">Riwayat Pesanan</h1>

    <div v-if="orders.length === 0" class="text-gray-500">
      Belum ada pesanan. Yuk mulai belanja! 🛒
    </div>

    <div v-else class="space-y-6">
      <div
        v-for="order in orders"
        :key="order.id"
        class="bg-white shadow rounded-lg p-6"
      >
        <div class="flex justify-between mb-4">
          <h2 class="font-semibold">Pesanan #{{ order.id }}</h2>
          <span class="text-sm text-gray-500">{{ order.date }}</span>
        </div>

        <div class="divide-y">
          <div
            v-for="item in order.items"
            :key="item.id"
            class="flex items-center gap-4 py-4"
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="w-16 h-16 object-cover rounded"
            />
            <div class="flex-1">
              <h3 class="font-medium">{{ item.title }}</h3>
              <p class="text-sm text-gray-600">
                {{ item.qty }} pcs ({{ item.weight * item.qty }} gr)
              </p>
              <p class="text-green-600 font-semibold">
                Rp{{ (item.price * item.qty).toLocaleString("id-ID") }}
              </p>
            </div>
          </div>
        </div>

        <div class="flex justify-between border-t pt-4 mt-4 font-bold">
          <span>Total</span>
          <span class="text-green-600">
            Rp{{ order.total.toLocaleString("id-ID") }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useOrderStore } from "@/stores/orderStore";

const orderStore = useOrderStore();
const orders = orderStore.orders;
</script>
