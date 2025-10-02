<template>
  <section class="bg-white text-gray-700">
    <!-- Header -->
    <div
      class="relative h-72 flex items-center justify-center bg-gradient-to-b from-green-700 to-green-800 text-white text-center"
    >
      <h1 class="text-3xl md:text-4xl font-bold drop-shadow-lg">
        Frequently Asked Questions
      </h1>
    </div>

    <!-- FAQ Accordion -->
    <div class="max-w-4xl mx-auto px-6 py-12">
      <div
        v-for="(faq, i) in faqs"
        :key="i"
        class="border-b last:border-none"
      >
        <!-- Pertanyaan -->
        <button
          @click="toggle(i)"
          class="w-full flex justify-between items-center py-4 text-left focus:outline-none"
        >
          <span
            class="font-medium text-gray-800 hover:text-green-700 transition"
          >
            {{ faq.question }}
          </span>
          <span
            class="ml-2 text-green-600 transition-transform duration-300"
            :class="{ 'rotate-180': activeIndex === i }"
          >
            ▼
          </span>
        </button>

        <!-- Jawaban -->
        <transition name="faq-slide">
          <div
            v-if="activeIndex === i"
            class="pb-4 text-sm text-gray-600 leading-relaxed"
          >
            {{ faq.answer }}
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const activeIndex = ref(null);

const toggle = (i) => {
  activeIndex.value = activeIndex.value === i ? null : i;
};

const faqs = [
  {
    question: "Apa itu JP Store?",
    answer:
      "JP Store adalah toko apparel dan aksesoris fashion yang menyediakan berbagai produk original mulai dari kaos, hoodie, jaket, celana, sepatu, hingga aksesoris premium. Semua produk kami terjamin kualitas dan keasliannya.",
  },
  {
    question: "Bagaimana cara memesan produk di JP Store?",
    answer:
      "Anda dapat memesan produk langsung di website resmi JP Store. Pilih produk yang Anda inginkan, masukkan ke keranjang belanja, lalu lanjutkan ke pembayaran. Kami juga hadir di marketplace populer seperti Shopee dan Tokopedia.",
  },
  {
    question: "Dimana lokasi toko fisik JP Store?",
    answer:
      "JP Store memiliki beberapa toko offline di kota besar seperti Jakarta, Bandung, dan Tangerang Selatan. Kami juga menerima pesanan online 24/7 melalui website.",
  },
  {
    question: "Jam operasional toko JP Store?",
    answer:
      "Toko offline kami buka setiap hari dari pukul 10.00 pagi hingga 10.00 malam. Untuk pembelian online, Anda bisa berbelanja kapan saja 24 jam penuh.",
  },
  {
    question: "Metode pembayaran apa saja yang tersedia?",
    answer:
      "Kami mendukung transfer bank, kartu kredit, e-wallet (GoPay, OVO, Dana, ShopeePay), dan pembayaran melalui marketplace resmi kami.",
  },
  {
    question: "Berapa lama estimasi pengiriman?",
    answer:
      "Pesanan akan diproses dalam 1x24 jam. Estimasi pengiriman: 1-3 hari kerja untuk wilayah Jabodetabek, dan 3-7 hari kerja untuk luar kota. Kami juga menyediakan opsi pengiriman ekspres.",
  },
  {
    question: "Apakah produk bisa ditukar ukuran?",
    answer:
      "Ya, JP Store menyediakan garansi tukar ukuran untuk produk apparel dan sepatu, sesuai syarat & ketentuan serta ketersediaan stok.",
  },
  {
    question: "Bagaimana cara melacak pesanan saya?",
    answer:
      "Setelah pesanan dikirim, Anda akan menerima nomor resi yang bisa dilacak melalui website ekspedisi atau halaman akun JP Store.",
  },
  {
    question: "Apakah ada promo dan diskon di JP Store?",
    answer:
      "Tentu! Promo dan diskon rutin tersedia di website kami, serta melalui Instagram resmi @JPSTORE.ID. Jangan lupa untuk subscribe newsletter kami agar tidak ketinggalan info terbaru.",
  },
  {
    question: "Bagaimana cara menghubungi Customer Service?",
    answer:
      "Anda dapat menghubungi Customer Service JP Store melalui WhatsApp di +62 812 6000 9807 atau email ke jpstorecare@gmail.com. Tim kami siap membantu Anda 24/7.",
  },
];
</script>

<style scoped>
/* Animasi accordion */
.faq-slide-enter-active,
.faq-slide-leave-active {
  transition: all 0.3s ease;
}
.faq-slide-enter-from,
.faq-slide-leave-to {
  max-height: 0;
  opacity: 0;
}
.faq-slide-enter-to,
.faq-slide-leave-from {
  max-height: 200px;
  opacity: 1;
}
</style>
