import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Survey from "../views/Survey.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/questions/:id",
    name: "Survey",
    component: Survey,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
