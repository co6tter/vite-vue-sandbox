import { createMemoryHistory, createRouter } from "vue-router";

import HeadlessUI from "@/views/HeadlessUI.vue";
import TheHome from "@/views/TheHome.vue";

const routes = [
  { path: "/", component: TheHome },
  { path: "/headless-ui", component: HeadlessUI },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
