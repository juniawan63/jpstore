import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Products from "@/views/Products.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Cart from "@/views/Cart.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import KausPage from "@/pages/KausPage.vue";
import JaketPage from "@/pages/JaketPage.vue";
import Register from "@/views/Register.vue";
import Checkout from "@/views/Checkout.vue";
import AddressPage from "@/views/AlamatPage.vue";


const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/register", name: "register", component: Register },
  { path: "/products", name: "Products", component: Products },
  { path: "/about", name: "About", component: About },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/cart", name: "Cart", component: Cart },
  { path: "/products/:id", name: "product-detail", component: ProductDetail, props: true },
  { path: "/kaus", component: KausPage },
  { path: "/jaket", component: JaketPage },
  { path: "/checkout", component: Checkout },
  { path: "/alamat", component: AddressPage },
  { path: "/faq", component: () => import("@/views/Faq.vue") },
  { path: "/login", component: () => import("@/views/Login.vue") },
  { path: "/wishlist", component: () => import("@/views/Wishlist.vue") },
  { path: "/logindetail", name: "LoginDetail", component: () => import("@/views/LoginDetail.vue") },
  { path: "/hoodie", component: () => import("@/pages/HoodiePage.vue") },
  { path: "/celana", component: () => import("@/pages/CelanaPage.vue") },
  { path: "/pdh", component: () => import("@/pages/PDHPage.vue") },
  { path: "/aksesoris", component: () => import("@/pages/AksesorisPage.vue") },
  { path: "/hot-item", component: () => import("@/views/HotItem.vue") },
  { path: "/order-success", name: "OrderSuccess", component: () => import("@/views/OrderSuccess.vue")},
  { path: "/orders", name: "Orders", component: () => import("@/views/Orders.vue")},
  { path: "/profile", name: "Profile", component: () => import("@/views/Profile.vue")},
  { path: "/transaksi", name: "Daftar Transaksi", component: () => import("@/views/Transaksi.vue")},


];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
