<template>
  <section class="max-w-6xl mx-auto px-4 mt-24 mb-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
    <!-- Bagian Kiri -->
    <div class="lg:col-span-2 space-y-6">
      <!-- Modal Alamat -->
      <AddressModal v-if="showModal" @close="showModal = false" />

      <!-- Alamat Pengiriman -->
      <div class="bg-white shadow rounded-lg p-6">
        <h2 class="text-lg font-semibold mb-4">Alamat Pengiriman</h2>
        <p v-if="!address" class="text-sm text-gray-600 mb-2">
          Anda belum memilih alamat pengiriman.
          Silakan pilih alamat pengiriman untuk melanjutkan
        </p>
        <p v-else class="text-sm text-gray-700 font-medium mb-2">
          {{ address }}
        </p>
        <button
          class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          @click="chooseAddress"
        >
          Pilih Alamat Lain
        </button>
      </div>

      <!-- Produk dari Cart -->
      <div class="bg-white shadow rounded-lg p-6">
        <h2 class="text-lg font-semibold mb-4">Produk</h2>
        <div
          v-for="item in selectedItems"
          :key="item.id"
          class="flex items-center gap-4 border-b pb-4 mb-4 last:border-0 last:pb-0 last:mb-0"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="w-20 h-20 object-cover rounded"
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
          <div>
            <select class="border rounded px-2 py-1">
              <option>Pilih Pengiriman</option>
              <option>JNE</option>
              <option>SiCepat</option>
              <option>POS Indonesia</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- Bagian Kanan -->
    <div class="space-y-6">
      <!-- Ringkasan Pembayaran -->
      <div class="bg-white shadow rounded-lg p-6">
        <h2 class="text-lg font-semibold mb-4">Payment Summary</h2>
        <div class="space-y-2 text-sm">
          <div class="flex justify-between">
            <span>Product Price</span>
            <span class="font-medium text-green-600">
              Rp{{ totalPrice.toLocaleString("id-ID") }}
            </span>
          </div>
          <div class="flex justify-between">
            <span>Shipping Price</span>
            <span>Rp0</span>
          </div>
          <div class="flex justify-between">
            <span>Total Weight</span>
            <span>{{ totalWeight }} gr</span>
          </div>
          <div class="flex justify-between">
            <span>Total Qty</span>
            <span>{{ totalQty }} pcs</span>
          </div>
        </div>

        <!-- Total -->
        <div class="flex justify-between border-t pt-4 mt-4 text-lg font-bold">
          <span>Total</span>
          <span class="text-green-600">
            Rp{{ totalPrice.toLocaleString("id-ID") }}
          </span>
        </div>
      </div>

      <!-- Metode Pembayaran -->
      <div class="bg-white shadow rounded-lg p-6">
        <h2 class="text-lg font-semibold mb-4">Pilih Metode Pembayaran</h2>
        <div class="space-y-3">
          <label class="flex items-center gap-2">
            <input type="radio" name="payment" value="credit" v-model="paymentMethod" />
            <span>Kartu Kredit / Virtual Account</span>
          </label>
          <label class="flex items-center gap-2">
            <input type="radio" name="payment" value="cod" v-model="paymentMethod" />
            <span>COD (Bayar di Tempat)</span>
          </label>
          <label class="flex items-center gap-2">
            <input type="radio" name="payment" value="ewallet" v-model="paymentMethod" />
            <span>E-Wallet (OVO, GoPay, Dana, dll)</span>
          </label>
        </div>
      </div>

      <!-- Tombol Bayar -->
      <button
        class="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        @click="submitCheckout"
      >
        Checkout
      </button>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCartStore } from "@/stores/cart";
import { useAddressStore } from "@/stores/alamatStore";
import { useOrderStore } from "@/stores/orderStore"; 
import AddressModal from "@/components/AlamatModal.vue";

const cart = useCartStore();
const addressStore = useAddressStore();
const orderStore = useOrderStore();
const route = useRoute();
const router = useRouter();

const paymentMethod = ref("");
const showModal = ref(false);

const address = computed(() =>
  addressStore.selected
    ? `${addressStore.selected.name}, ${addressStore.selected.address}, ${addressStore.selected.city}`
    : ""
);

let selectedIds = [];
try {
  selectedIds = JSON.parse(route.query.selected || "[]");
} catch (e) {
  selectedIds = [];
}

const selectedItems = computed(() =>
  cart.items.filter((item) => selectedIds.includes(item.id))
);

const totalPrice = computed(() =>
  selectedItems.value.reduce((acc, item) => acc + item.price * item.qty, 0)
);
const totalWeight = computed(() =>
  selectedItems.value.reduce((acc, item) => acc + (item.weight || 200) * item.qty, 0)
);
const totalQty = computed(() =>
  selectedItems.value.reduce((acc, item) => acc + item.qty, 0)
);

const chooseAddress = () => {
  showModal.value = true;
};

const submitCheckout = () => {
  if (!address.value) {
    alert("Silakan pilih alamat pengiriman terlebih dahulu");
    return;
  }
  if (!paymentMethod.value) {
    alert("Silakan pilih metode pembayaran");
    return;
  }
  if (!selectedItems.value.length) {
    alert("Tidak ada produk yang dipilih untuk checkout");
    return;
  }

  const orderData = {
    items: selectedItems.value,
    total: totalPrice.value,
    payment: paymentMethod.value,
    address: address.value,
  };

  // ✅ Simpan order ke store
  orderStore.addOrder(orderData);

  // Hapus item dari cart
  selectedItems.value.forEach((item) => {
    cart.removeItem(item.id);
  });

  // ✅ Redirect tanpa query (cukup ambil dari store di order-success)
  router.push("/order-success");
};
</script>
