import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import RestaurantsView from "../views/RestaurantsView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: RestaurantsView,
  },
  {
    path: "/rest/:id",
    name: "menu",
    component: () => import("../views/DishesView.vue"),
    props: true,
    meta: {
      layout: "sidebarLayout",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
