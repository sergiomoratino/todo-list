import { createWebHistory, createRouter } from "vue-router";
import ToDoList from "../views/ToDoList.vue";
import Home from "../views/Home.vue"

const routes = [
  {
    path: "/",
    redirect: '/all'
  },
  {
    path: "/all",
    name: "All",
    component: ToDoList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;