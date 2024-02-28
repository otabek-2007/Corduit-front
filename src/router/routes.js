import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Pages/homeView.vue";
Vue.use(VueRouter);
export default [
  {
    path: "/",
    component: Home,
    name: "homeView",
  },
];
