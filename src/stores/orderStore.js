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
        status: "Menunggu Pembayaran", // ✅ default status
        store: "Online Store",         // ✅ default store
        ...order,
      });
    },
    updateStatus(id) {
      const trx = this.orders.find((o) => o.id === id);
      if (trx) {
        const statusFlow = [
          "Menunggu Pembayaran",
          "Lunas",
          "Diproses",
          "Packing",
          "Dikirim",
          "Diterima",
        ];
        const currentIndex = statusFlow.indexOf(trx.status);
        if (currentIndex !== -1 && currentIndex < statusFlow.length - 1) {
          trx.status = statusFlow[currentIndex + 1];
        }
      }
    },
  },
});
