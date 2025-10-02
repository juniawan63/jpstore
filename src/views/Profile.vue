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
        <router-link to="/transaksi" class="block hover:text-green-600">Daftar Transaksi</router-link>
        <router-link to="/profile" class="block font-semibold text-green-600">Settings</router-link>
        <button @click="logout" class="text-red-600 font-semibold mt-4">Logout</button>
      </nav>
    </aside>

    <!-- Content -->
    <main class="md:col-span-3 bg-white shadow rounded-lg p-6">
      <h1 class="text-2xl font-bold mb-6">Settings</h1>

      <!-- Tab Navigation -->
      <div class="flex gap-6 border-b mb-6">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="activeTab = tab"
          :class="[
            'pb-2 font-medium',
            activeTab === tab
              ? 'text-green-600 border-b-2 border-green-600'
              : 'text-gray-500 hover:text-green-600'
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <!-- Personal Profile -->
      <div v-if="activeTab === 'Personal Profile'" class="space-y-4">
        <div>
          <label class="block text-sm font-medium">Name</label>
          <input v-model="form.name" class="border rounded w-full px-3 py-2" />
        </div>
        <div>
          <label class="block text-sm font-medium">Gender</label>
          <select v-model="form.gender" class="border rounded w-full px-3 py-2">
            <option value="">Pilih Gender</option>
            <option value="male">Laki-laki</option>
            <option value="female">Perempuan</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium">Birthday</label>
          <input type="date" v-model="form.birthday" class="border rounded w-full px-3 py-2" />
        </div>
        <div>
          <label class="block text-sm font-medium">Pekerjaan</label>
          <input v-model="form.job" class="border rounded w-full px-3 py-2" />
        </div>

        <button
          @click="updateProfile"
          class="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
        >
          Update Profile
        </button>
      </div>

      <!-- Account Info -->
      <div v-if="activeTab === 'Account Info'" class="space-y-4">
        <div>
          <label class="block text-sm font-medium">Email</label>
          <input v-model="form.email" disabled class="border rounded w-full px-3 py-2 bg-gray-100" />
        </div>
        <div>
          <label class="block text-sm font-medium">Phone Number</label>
          <input v-model="form.phone" class="border rounded w-full px-3 py-2" />
        </div>
        <div>
          <label class="block text-sm font-medium">Password</label>
          <input type="password" v-model="form.password" class="border rounded w-full px-3 py-2" />
        </div>

        <button
          @click="updateProfile"
          class="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
        >
          Simpan Perubahan
        </button>
      </div>

      <!-- Address Book -->
      <div v-if="activeTab === 'Address Book'" class="space-y-4">
        <AddressModal v-if="showModal" @close="showModal = false" />

        <div v-if="addressStore.list.length > 0" class="space-y-4">
          <div 
            v-for="address in addressStore.list" 
            :key="address.id" 
            class="border p-4 rounded shadow-sm"
          >
            <p class="font-medium">{{ address.name }} - {{ address.phone }}</p>
            <p class="text-sm text-gray-600">{{ address.city }}</p>
            <p class="text-sm">{{ address.address }}</p>
            <p class="text-xs text-gray-400 italic" v-if="address.note">{{ address.note }}</p>

            <div class="flex gap-4 mt-2">
              <button 
                @click="addressStore.selectAddress(address.id)" 
                class="text-green-600 hover:underline"
              >
                Pilih
              </button>
            </div>
          </div>
        </div>

        <div v-else>
          <p class="text-gray-500">Belum ada alamat tersimpan.</p>
        </div>

        <button
          class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
          @click="showModal = true"
        >
          Tambah Alamat
        </button>
      </div>



    </main>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useAddressStore } from "@/stores/alamatStore";
import AddressModal from "@/components/AlamatModal.vue";

const showModal = ref(false);

// 📦 Gunakan store
const addressStore = useAddressStore();

// Tambah alamat baru → cukup lewat store
const addAddress = (newAddress) => {
  if (!newAddress?.name || !newAddress?.address) {
    alert("Data alamat tidak lengkap");
    return;
  }
  addressStore.addAddress(newAddress);
  showModal.value = false; // tutup modal
};

// Edit alamat
const editAddress = (id) => {
  alert(`Fitur edit alamat id:${id} belum tersedia`);
};

// Hapus alamat
const deleteAddress = (id) => {
  if (confirm("Yakin ingin menghapus alamat ini?")) {
    addressStore.list = addressStore.list.filter((a) => a.id !== id);
  }
};

const router = useRouter();
const auth = useAuthStore();

// 🔑 Pastikan currentUser selalu punya default object
const currentUser = auth.currentUser || {
  name: "",
  gender: "",
  birthday: "",
  job: "",
  email: "",
  phone: "",
  password: ""
};

const activeTab = ref("Personal Profile");
const tabs = ["Personal Profile", "Account Info", "Address Book"];

// 🔑 Form reactive aman walaupun user null
const form = reactive({
  name: currentUser.name,
  gender: currentUser.gender,
  birthday: currentUser.birthday,
  job: currentUser.job,
  email: currentUser.email,
  phone: currentUser.phone,
  password: currentUser.password,
});

const updateProfile = () => {
  auth.currentUser = { ...auth.currentUser, ...form };
  localStorage.setItem("user", JSON.stringify(auth.currentUser));
  alert("Profil berhasil diperbarui");
};

const logout = () => {
  auth.logout();
  router.push("/login");
};
</script>


