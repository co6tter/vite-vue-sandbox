import { createMemoryHistory, createRouter } from "vue-router";

import HeadlessUI from "@/views/HeadlessUI.vue";
import LibApp from "@/views/LibApp.vue";
import TheHome from "@/views/TheHome.vue";

const routes = [
  { path: "/", component: TheHome },
  { path: "/headless-ui", component: HeadlessUI },
  { path: "/lib-app", component: LibApp },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
