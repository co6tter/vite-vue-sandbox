import { createPinia } from "pinia";
import { createApp } from "vue";

import "@co6tter/vite-lib-app/style.css";
import "./style.css";
import App from "./App.vue";
import router from "./router";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount("#app");
