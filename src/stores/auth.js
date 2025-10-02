
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    users: [
      {
        email: "user1@gmail.com",
        phone: "08123456789",
        name: "Budi",
        password: "123456",
      },
    ],
    currentUser: null,
    pendingIdentifier: null,
  }),

  actions: {
    checkUser(identifier) {
      return this.users.find(
        (u) => u.email === identifier || u.phone === identifier
      );
    },

    register(userData) {
      this.users.push(userData);
      this.currentUser = userData;
      localStorage.setItem("user", JSON.stringify(userData));
    },

    login(identifier, password) {
      const user = this.checkUser(identifier);
      if (user && user.password === password) {
        this.currentUser = user;
        localStorage.setItem("user", JSON.stringify(user));
        return true;
      }
      return false;
    },

    logout() {
      this.currentUser = null;
      localStorage.removeItem("user");
    },

    loadUser() {
      const saved = localStorage.getItem("user");
      if (saved) {
        this.currentUser = JSON.parse(saved);
      }
    },
  },

  getters: {
    isAuthenticated: (state) => !!state.currentUser,
    userName: (state) => state.currentUser?.name || "Guest",
  },
});
