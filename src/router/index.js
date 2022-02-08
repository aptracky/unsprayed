import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/articles/:username",
    component: () => import("../views/Article.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
