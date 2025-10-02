<template>
  <section class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-4">Daftar Alamat</h1>

    <div class="space-y-4">
      <div
        v-for="addr in store.list"
        :key="addr.id"
        class="border rounded p-4 flex justify-between items-center"
      >
        <div>
          <p class="font-semibold">{{ addr.name }} - {{ addr.phone }}</p>
          <p class="text-sm text-gray-600">{{ addr.address }}, {{ addr.city }}</p>
          <p v-if="addr.note" class="text-xs text-gray-500">Catatan: {{ addr.note }}</p>
        </div>
        <div class="flex gap-2">
          <button
            @click="store.selectAddress(addr.id)"
            class="bg-blue-600 text-white px-3 py-1 rounded"
          >
            Pilih
          </button>
          <button
            @click="store.deleteAddress(addr.id)"
            class="bg-red-600 text-white px-3 py-1 rounded"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useAddressStore } from "@/stores/alamatStore";
const store = useAddressStore();
</script>
