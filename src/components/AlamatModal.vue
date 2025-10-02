<template>
  <div class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <h2 class="text-lg font-bold mb-4">Tambah Alamat</h2>

      <input v-model="form.name" placeholder="Nama Penerima" class="border rounded px-3 py-2 mb-3 w-full" />
      <input v-model="form.phone" placeholder="Nomor HP" class="border rounded px-3 py-2 mb-3 w-full" />
      <input v-model="form.city" placeholder="Kecamatan / Kota" class="border rounded px-3 py-2 mb-3 w-full" />
      <textarea v-model="form.address" placeholder="Alamat Lengkap" class="border rounded px-3 py-2 mb-3 w-full"></textarea>
      <textarea v-model="form.note" placeholder="Catatan (opsional)" class="border rounded px-3 py-2 mb-3 w-full"></textarea>

      <div class="flex justify-end gap-2">
        <button @click="$emit('close')" class="px-4 py-2 rounded bg-gray-200">Batal</button>
        <button @click="save" class="px-4 py-2 rounded bg-green-600 text-white">Simpan</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useAddressStore } from "@/stores/alamatStore";

const emit = defineEmits(["close"]);
const store = useAddressStore();

const form = reactive({
  name: "",
  phone: "",
  city: "",
  address: "",
  note: "",
});

const save = () => {
  store.addAddress({ ...form });
  emit("close");
};
</script>




