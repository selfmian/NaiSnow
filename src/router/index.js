import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect:"OrderDetail"
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/OrderDetail",
    name: "OrderDetail",
    component: () => import("../views/OrderDetails.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
