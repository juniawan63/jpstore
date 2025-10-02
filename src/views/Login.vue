

<template>
  <section class="min-h-screen flex items-center justify-center bg-white pt-24">
    <div class="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
      <!-- Kiri: Gambar -->
      <div class="flex justify-center order-1 md:order-none">
        <img src="@/assets/logo/load.png" alt="Login Illustration" class="w-3/4 md:w-full max-w-sm md:max-w-md" />
      </div>

      <!-- Kanan: Form -->
      <div class="text-center md:text-left">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Selamat Datang!
        </h2>
        <p class="text-gray-600 mb-6 text-sm md:text-base">
          Masuk dulu yuk sebelum belanja!<br />
          Tambahin produk ke keranjang, bisa checkout kapan aja!
        </p>

        <!-- Input -->
        <div class="mb-4">
          <input
            v-model="inputValue"
            type="text"
            placeholder="Masukkan email / nomor whatsapp"
            class="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm md:text-base focus:ring-2 focus:ring-green-900 focus:outline-none"
          />
        </div>

        <!-- Tombol -->
        <button
          @click="onLogin"
          class="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg transition text-sm md:text-base"
        >
          Lanjutkan
        </button>

        <!-- Info tambahan -->
        <p class="mt-10 text-xs md:text-sm text-gray-500 text-center md:text-left">
          <span class="block font-semibold text-gray-700">
            What are you waiting for?
          </span>
          Immerse yourself in the latest trend in fashion
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";

const inputValue = ref("");
const auth = useAuthStore();
const router = useRouter();

const onLogin = () => {
  if (!inputValue.value) {
    alert("Masukkan email atau nomor WhatsApp terlebih dahulu!");
    return;
  }

  // cek apakah user sudah ada
  const existingUser = auth.checkUser(inputValue.value);

  if (existingUser) {
    // simpan dulu ke state agar Logindetail bisa pakai
    auth.pendingIdentifier = inputValue.value;
    router.push("/logindetail"); // redirect ke halaman detail login
  } else {
    router.push("/register"); // redirect ke register kalau belum ada
  }
};
</script>
