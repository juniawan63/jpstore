// src/stores/addressStore.js
import { defineStore } from "pinia";

export const useAddressStore = defineStore("address", {
  state: () => ({
    list: [],       // daftar alamat
    selected: null, // alamat aktif yang dipakai checkout
  }),
  actions: {
    addAddress(address) {
      address.id = Date.now(); // ID unik
      this.list.push(address);
      this.selected = address;
    },
    selectAddress(id) {
      this.selected = this.list.find((a) => a.id === id) || null;
    },
  },
  persist: true, // kalau pakai pinia-plugin-persist, alamat tetap tersimpan
});
