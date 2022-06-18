import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeComponent.vue"),
  },
  {
    path: "/category/:categoryId/movie/:id",
    name: "Movie",
    component: () => import("../views/MovieComponent.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
