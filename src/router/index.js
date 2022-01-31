import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Survey from "../views/Survey.vue";
import Result from "../views/Result.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/questions",
    name: "Survey",
    component: Survey,
  },
  {
    path: "/result",
    name: "Result",
    component: Result,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
