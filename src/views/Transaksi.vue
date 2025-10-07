<template>
  <section class="max-w-7xl mx-auto mt-24 mb-16 px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
    <!-- Sidebar -->
    <aside class="bg-white shadow rounded-lg p-6 space-y-4">
      <div class="flex items-center gap-3 border-b pb-4">
        <div
          class="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white text-lg font-bold"
        >
          {{ currentUser?.name?.charAt(0).toUpperCase() }}
        </div>
        <div>
          <h2 class="font-semibold">{{ currentUser?.name }}</h2>
          <p class="text-sm text-gray-500">{{ currentUser?.email }}</p>
        </div>
      </div>

      <nav class="space-y-3">
        <router-link to="/transactions" class="block font-semibold text-green-600">Daftar Transaksi</router-link>
        <router-link to="/profile" class="block hover:text-green-600">Settings</router-link>
        <button @click="logout" class="text-red-600 font-semibold mt-4">Logout</button>
      </nav>
    </aside>

    <!-- Content -->
    <main class="md:col-span-3 bg-white shadow rounded-lg p-6">
      <h1 class="text-2xl font-bold mb-6">Daftar Transaksi</h1>

      <!-- Filter bar -->
      <div class="flex flex-wrap items-center gap-3 mb-4">
        <input
          v-model="search"
          placeholder="Search"
          class="border rounded px-3 py-2 flex-1 min-w-[150px]"
        />
        <select v-model="selectedStore" class="border rounded px-3 py-2">
          <option value="">Semua Store</option>
          <option value="Store 1">Store 1</option>
          <option value="Store 2">Store 2</option>
        </select>
      </div>

      <!-- Status filter -->
      <div class="flex flex-wrap gap-2 mb-6">
        <button
          v-for="s in statuses"
          :key="s"
          @click="activeStatus = s"
          :class="[ 
            'px-4 py-1 rounded-full border',
            activeStatus === s
              ? 'bg-green-100 text-green-600 border-green-600'
              : 'text-gray-600 hover:border-green-400'
          ]"
        >
          {{ s }}
        </button>
        <button @click="resetFilter" class="text-green-600 font-medium ml-auto">Reset Filter</button>
      </div>

      <!-- Empty State -->
      <div v-if="filteredTransactions.length === 0" class="flex flex-col items-center justify-center py-12">
        <i class="fas fa-times-circle text-red-600 text-5xl"> </i>
        <h2 class="text-xl font-semibold">Oops!</h2>
        <p class="text-gray-500 mb-6">Kamu belum melakukan transaksi</p>
        <router-link
          to="/"
          class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
        >
          Belanja Sekarang
        </router-link>
      </div>

      <!-- List Transaksi -->
      <div v-else class="space-y-4">
        <div
          v-for="trx in filteredTransactions"
          :key="trx.id"
          class="border rounded-lg p-4 flex justify-between items-center"
        >
          <div>
            <p class="font-medium">{{ trx.store || 'Online Store' }}</p>
            <p class="text-sm text-gray-500">#{{ trx.id }} - {{ trx.date }}</p>
            <p class="text-sm text-gray-700">Total: Rp{{ trx.total.toLocaleString("id-ID") }}</p>
          </div>

          <div class="flex items-center gap-3">
            <span
              :class="[ 
                'px-3 py-1 rounded-full text-sm',
                trx.status === 'Menunggu Pembayaran' ? 'bg-orange-100 text-orange-600' :
                trx.status === 'Lunas' ? 'bg-green-100 text-green-600' :
                trx.status === 'Diproses' ? 'bg-yellow-100 text-yellow-600' :
                trx.status === 'Packing' ? 'bg-indigo-100 text-indigo-600' :
                trx.status === 'Dikirim' ? 'bg-blue-100 text-blue-600' :
                trx.status === 'Diterima' ? 'bg-gray-100 text-gray-600' :
                'bg-red-100 text-red-600'
              ]"
            >
              {{ trx.status }}
            </span>

            <!-- Tombol update status -->
            <button
              v-if="trx.status !== 'Kadaluarsa' && trx.status !== 'Diterima'"
              @click="orderStore.updateStatus(trx.id)"
              class="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
            >
              Update Status
            </button>
          </div>
        </div>
      </div>

    </main>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useOrderStore } from "@/stores/orderStore"; 

const router = useRouter();
const auth = useAuthStore();
const currentUser = auth.currentUser;
const orderStore = useOrderStore(); 

const search = ref("");
const selectedStore = ref("");
const activeStatus = ref("Semua Status");

const statuses = ["Semua Status", "Lunas", "Diproses", "Packing", "Dikirim", "Diterima", "Kadaluarsa"];

// ✅ Gunakan data dari orderStore
const transactions = computed(() => orderStore.orders);

// Filter
const filteredTransactions = computed(() => {
  return transactions.value.filter((trx) => {
    const matchSearch = search.value
      ? trx.items.some(item => item.title.toLowerCase().includes(search.value.toLowerCase()))
      : true;
    const matchStore = selectedStore.value ? trx.store === selectedStore.value : true;
    const matchStatus = activeStatus.value !== "Semua Status" ? trx.status === activeStatus.value : true;
    return matchSearch && matchStore && matchStatus;
  });
});

const resetFilter = () => {
  search.value = "";
  selectedStore.value = "";
  activeStatus.value = "Semua Status";
};

const logout = () => {
  auth.logout();
  router.push("/login");
};
</script>
