// main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import AOS from "aos";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/main.css";



const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");

AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
});
AOS.refresh();
