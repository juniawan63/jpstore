// /stores/cart.js
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [], // semua produk yang ditambahkan ke keranjang
  }),

  getters: {
    totalItems: (state) => state.items.length,
    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.price * item.qty, 0),
    totalQty: (state) =>
      state.items.reduce((sum, item) => sum + item.qty, 0),
    totalWeight: (state) =>
      state.items.reduce((sum, item) => sum + (item.weight || 0) * item.qty, 0),
  },

  actions: {
    addToCart(product) {
      const exist = this.items.find((item) => item.id === product.id);
      if (exist) {
        exist.qty += 1;
      } else {
        this.items.push({ ...product, qty: 1 });
      }
    },

    removeItem(productId) {
      this.items = this.items.filter((item) => item.id !== productId);
    },

    clearCart() {
      this.items = [];
    },

    increaseQty(productId) {
      const item = this.items.find((i) => i.id === productId);
      if (item) item.qty += 1;
    },

    decreaseQty(productId) {
      const item = this.items.find((i) => i.id === productId);
      if (item && item.qty > 1) item.qty -= 1;
    },
  },
});
