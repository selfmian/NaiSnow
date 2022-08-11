import Vue from "vue";
import VueRouter from "vue-router";
import HomeHome from "../views/HomeHome.vue";
import MenuOrder from "../views/MenuOrder.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "home"
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/HomeHome.vue"),
  },
  {
    path: "/menu",
    name: "Menu",
    component: MenuOrder,
  },
  {
    path: "/orderHistory",
    name: "OrderHistory",
    component: () => import("../views/OrderHistory.vue"),
  },
  {
    path: "/orderDetails",
    name: "OrderDetails",
    component: () => import("../views/OrderDetails.vue"),
  },
  {
    path: "/details",
    name: "Details",
    component: () => import("../views/DetailsView.vue")
  },
  {
    path: "/me",
    name: "Me",
    component: () => import("../views/HomeView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
