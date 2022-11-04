import { createWebHistory, createRouter } from "vue-router";
import All from "../pages/all.vue";

const routes = [
  {
    path: "/",
    redirect: '/all'
  },
  {
    path: "/all",
    name: "All",
    component: All,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;