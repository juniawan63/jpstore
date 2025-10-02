// src/stores/wishlist.js
import { defineStore } from "pinia";

export const useWishlistStore = defineStore("wishlist", {
  state: () => ({
    items: [], // daftar produk wishlist
  }),

  getters: {
    totalItems: (state) => state.items.length,
  },

  actions: {
    addItem(product) {
      // cek apakah produk sudah ada di wishlist
      const exists = this.items.find((item) => item.id === product.id);
      if (!exists) {
        this.items.push(product);
      }
    },

    removeItem(productId) {
      this.items = this.items.filter((item) => item.id !== productId);
    },

    clearWishlist() {
      this.items = [];
    },
  },
});
