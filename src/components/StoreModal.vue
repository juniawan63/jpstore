<template>
  <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div class="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative animate-fadeIn">
      <!-- Tombol Close -->
      <button
        class="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        @click="$emit('close')"
      >
        ✕
      </button>

      <!-- Step 1: Pilih Toko -->
      <div v-if="step === 1">
        <h2 class="text-xl font-bold mb-4">Pilih Toko Terdekat</h2>
        <p class="bg-yellow-50 border border-yellow-200 text-yellow-700 text-sm p-2 rounded mb-4">
          Pilih toko terdekat agar pesanan lebih cepat sampai.
        </p>

        <div class="space-y-3">
          <button
            v-for="store in stores"
            :key="store"
            class="w-full p-3 border rounded-lg text-left hover:bg-green-50 transition"
            @click="selectStore(store)"
          >
            {{ store }}
          </button>
        </div>
      </div>

      <!-- Step 2: Konfirmasi + Jumlah Barang -->
      <div v-else-if="step === 2">
        <h2 class="text-xl font-bold mb-4">Konfirmasi Pesanan</h2>
        <p class="bg-yellow-50 border border-yellow-200 text-yellow-700 text-sm p-2 rounded mb-4">
          Pastikan toko dan jumlah barang sudah sesuai.
        </p>

        <div class="mb-4">
          <p class="text-sm text-gray-600">Dikirim Dari</p>
          <p class="font-semibold">{{ selectedStore }}</p>
        </div>

        <!-- Counter jumlah barang -->
        <div class="mb-6">
          <p class="font-semibold mb-2">Jumlah Barang</p>
          <div class="flex items-center gap-3">
            <button
              class="px-3 py-1 border rounded"
              @click="decrement"
              :disabled="quantity <= 1"
            >
              −
            </button>
            <span class="w-8 text-center">{{ quantity }}</span>
            <button
              class="px-3 py-1 border rounded"
              @click="increment"
            >
              +
            </button>
          </div>
        </div>

        <!-- Tombol Aksi -->
        <div class="flex justify-between gap-3">
          <button
            class="flex-1 py-3 rounded-lg border hover:bg-gray-100"
            @click="step = 1"
          >
            Kembali
          </button>
          <button
            class="flex-1 py-3 rounded-lg bg-green-900 text-white hover:bg-green-800"
            @click="confirmOrder"
          >
            Lanjutkan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "@/stores/cart";

const props = defineProps({
  product: { 
    type: Object, 
    required: true, // 🚀 wajib dikirim dari parent
  },
});

const router = useRouter();
const cart = useCartStore();

const step = ref(1);
const selectedStore = ref("");
const quantity = ref(1);

const stores = [
  "Store Bandung",
  "Store Jakarta Senayan",
  "Store Lampung",
  "Store Jakarta Kemang",
  "Store Tangerang",
  "Store Bekasi",
];

const selectStore = (store) => {
  selectedStore.value = store;
  step.value = 2;
};

const increment = () => quantity.value++;
const decrement = () => {
  if (quantity.value > 1) quantity.value--;
};

const confirmOrder = () => {
  if (!selectedStore.value) {
    alert("Silakan pilih toko terlebih dahulu.");
    step.value = 1;
    return;
  }

  cart.addToCart({
    id: props.product.id,
    title: `${props.product.title} - ${selectedStore.value}`,
    price: props.product.price,
    image: props.product.image,
    qty: quantity.value,
  });

  alert(
    `Pesanan: ${quantity.value}x ${props.product.title} dari ${selectedStore.value} berhasil diproses!`
  );

  router.push("/cart");
};
</script>
