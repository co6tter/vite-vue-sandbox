import { createMemoryHistory, createRouter } from "vue-router";

import DynamicForm from "@/views/DynamicForm.vue";
import HeadlessUI from "@/views/HeadlessUI.vue";
import LibApp from "@/views/LibApp.vue";
import TheHome from "@/views/TheHome.vue";

const routes = [
  { path: "/", component: TheHome },
  { path: "/headless-ui", component: HeadlessUI },
  { path: "/dynamic-form", component: DynamicForm },
  { path: "/lib-app", component: LibApp },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
