<template>
  <router-link :to="`/products/${id}`" class="block">
    <div
      class="border rounded-lg shadow hover:shadow-lg transition bg-white"
    >
      <img
        :src="image"
        :alt="title"
        class="w-full h-48 object-cover rounded-t-lg"
      />
      <div class="p-4">
        <h3 class="text-sm font-semibold truncate">{{ title }}</h3>
        <p class="text-gray-600 font-medium">
          Rp{{ price.toLocaleString("id-ID") }}
        </p>
      </div>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  id: Number,
  title: String,
  category: String,
  price: Number,
  image: String,
});
</script>
