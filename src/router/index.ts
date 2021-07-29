import { RouteRecordRaw, createWebHashHistory, createRouter } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/sub-dome",
    name: "Home",
    component: import("@/views/Home.vue"),
  },
];

export default routes;
