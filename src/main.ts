import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// ui framework
import PrimeVue from 'primevue/config';

createApp(App)
  .use(router)
  .use(PrimeVue, {ripple: true})
  .mount("#app");
