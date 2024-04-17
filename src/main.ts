import "./assets/main.css";

import { createApp } from "vue";

import App from "./App.vue";

createApp(App);
import { createPinia } from "pinia";
const pinia = createPinia();
App.use(pinia).mount("#app");
