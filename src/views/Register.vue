<template>
  <section class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl bg-white shadow-md rounded-lg overflow-hidden">
      <!-- Gambar -->
      <div class="flex items-center justify-center p-8">
        <img src="@/assets/logo/load.png" alt="Register Illustration" class="max-h-96">
      </div>

      <!-- Form Register -->
      <div class="p-8">
        <h2 class="text-2xl font-bold mb-6 text-green-800">Selamat Datang!</h2>
        <p class="text-gray-600 mb-6">Daftar dulu yuk sebelum belanja!</p>

        <form class="space-y-4" @submit.prevent="handleRegister">
          <input v-model="email" type="email" placeholder="Masukan email" class="w-full border rounded px-4 py-2 focus:ring focus:ring-green-400"/>
          <input v-model="phone" type="text" placeholder="Masukan nomor hp" class="w-full border rounded px-4 py-2 focus:ring focus:ring-green-400"/>
          <input v-model="name" type="text" placeholder="Masukan nama" class="w-full border rounded px-4 py-2 focus:ring focus:ring-green-400"/>
          <input v-model="password" type="password" placeholder="Masukan password" class="w-full border rounded px-4 py-2 focus:ring focus:ring-green-400"/>
          <input v-model="confirmPassword" type="password" placeholder="Masukan konfirmasi password" class="w-full border rounded px-4 py-2 focus:ring focus:ring-green-400"/>

          <button type="submit" class="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800">Daftar</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const auth = useAuthStore();

const email = ref("");
const phone = ref("");
const name = ref("");
const password = ref("");
const confirmPassword = ref("");

const handleRegister = () => {
  //validasi
  if (!email.value || !phone.value || !name.value || !password.value || !confirmPassword.value) {
    alert("Semua kolom harus diisi!");
    return;
  }
  // cek dulu apakah email/phone sudah ada
  const existingUser = auth.checkUser(email.value) || auth.checkUser(phone.value);
  if (existingUser) {
    // redirect langsung ke login
    router.push("/login");
    return;
  }
  

  if (password.value !== confirmPassword.value) {
    alert("Password tidak sama!");
    return;
  }

  // daftar user baru
  auth.register({
    email: email.value,
    phone: phone.value,
    name: name.value,
    password: password.value,
  });
  
  alert("Registrasi berhasil! Silakan login.");
  router.push("/"); // setelah daftar langsung ke home
};
</script>

