import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Container from "../components/container/src/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Container,
    children: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/form",
        component: () => import("../views/form/index.vue"),
      },
      {
        path: "/table",
        component: () => import("../views/table/index.vue"),
      },
      {
        path: "/calendar",
        component: () => import("../views/calendar/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
