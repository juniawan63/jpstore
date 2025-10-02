<template>
  <div class="relative w-full max-w-7xl mx-auto overflow-hidden rounded-lg">
    <!-- Slides -->
    <div
      class="flex transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="min-w-full flex-shrink-0 relative"
      >
        <!-- Background Image -->
        <img
          :src="slide.image"
          :alt="'Slide ' + (index + 1)"
          class="w-full h-72 md:h-[450px] object-cover"
        />

        <!-- Overlay konten -->
        <div
          class="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 md:px-16 text-white"
        >
          <h2 class="text-3xl md:text-5xl font-bold mb-4">
            {{ slide.title }}
          </h2>
          <p class="mb-6 text-lg md:text-xl">
            {{ slide.subtitle }}
          </p>
          <router-link to="/products"  class="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold w-fit">
            SHOP NOW
          </router-link>
        </div>
      </div>
    </div>

    <!-- Tombol Kiri -->
    <button
      @click="prevSlide"
      class="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70"
    >
      ‹
    </button>

    <!-- Tombol Kanan -->
    <button
      @click="nextSlide"
      class="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70"
    >
      ›
    </button>

    <!-- Indicator Bullets -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        class="w-3 h-3 rounded-full"
        :class="currentIndex === index ? 'bg-white' : 'bg-gray-400'"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// import gambar dari assets
import slide1 from "@/assets/slider/slide (1).jpg";
import slide2 from "@/assets/slider/slide (2).jpg";
import slide3 from "@/assets/slider/slide (3).jpg";
import slide4 from "@/assets/slider/slide (4).jpg";

const slides = ref([
  {
    image: slide1,
    title: "GARANSI TUKAR UKURAN",
    subtitle: "Hingga 7 hari setelah pesananmu diterima",
  },
  {
    image: slide2,
    title: "SNEAKERS ORIGINAL",
    subtitle: "Koleksi terbaru Nike, Adidas, Puma & banyak lagi",
  },
  {
    image: slide3,
    title: "DISKON SPESIAL",
    subtitle: "Hanya minggu ini! Jangan sampai kehabisan",
  },
  {
    image: slide4,
    title: "PROMO PELAJAR",
    subtitle: "Harga 20% lebih murah",
  },
]);

const currentIndex = ref(0);
let intervalId = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + slides.value.length) % slides.value.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

onMounted(() => {
  intervalId = setInterval(nextSlide, 4000); // auto slide 4 detik
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
