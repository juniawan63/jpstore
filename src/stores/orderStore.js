import { defineStore } from "pinia";

export const useOrderStore = defineStore("orders", {
  state: () => ({
    orders: [], // semua pesanan tersimpan di sini
  }),
  actions: {
    addOrder(order) {
      this.orders.push({
        id: Date.now(),
        date: new Date().toLocaleString("id-ID"),
        ...order,
      });
    },
  },
});
