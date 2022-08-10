import Vue from "vue";
import VueRouter from "vue-router";
import HomeHome from "../views/HomeHome.vue";
import MenuOrder from "../views/MenuOrder.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "homehome",
    component: HomeHome,
  },
  {
    path:"/OrderDetails",
    name: "OrderDetails",
    component: () => import("../views/OrderDetails.vue")
  },
  {
    path: "/menu",
    name: "Menu",
    component: MenuOrder,
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
