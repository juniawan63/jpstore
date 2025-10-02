<template>
  <section class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl bg-white shadow-md rounded-lg overflow-hidden">
      <!-- Gambar -->
      <div class="flex items-center justify-center p-8">
        <img src="@/assets/logo/load.png" alt="Login Illustration" class="max-h-96">
      </div>

      <!-- Form Login -->
      <div class="p-8">
        <h2 class="text-2xl font-bold mb-6 text-green-800">Selamat Datang!</h2>
        <p class="text-gray-600 mb-6">Masuk dulu yuk sebelum belanja!</p>

        <form class="space-y-4" @submit.prevent="handleLogin">
          <input v-model="identifier" type="text" placeholder="Email atau Nomor HP" class="w-full border rounded px-4 py-2 focus:ring focus:ring-green-400"/>
          <input v-model="password" type="password" placeholder="Password" class="w-full border rounded px-4 py-2 focus:ring focus:ring-green-400"/>

          <div class="flex justify-between items-center text-sm">
            <a href="#" class="text-green-700 hover:underline">Forgot Password</a>
          </div>

          <button type="submit" class="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800">Masuk</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const auth = useAuthStore();

const identifier = ref("");
const password = ref("");

const handleLogin = () => {
  const success = auth.login(identifier.value, password.value);
  if (success) {
    router.push("/"); // sukses → ke home
  } else {
    alert("Email/No HP atau password salah!");
  }
};
</script>
