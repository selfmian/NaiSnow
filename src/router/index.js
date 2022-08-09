import Vue from "vue";
import VueRouter from "vue-router";
import HomeHome from "../views/HomeHome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "homehome",
    component: HomeHome,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
