import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Events from "../views/Events.vue";
import Members from "../views/Members.vue";
import Leadership from "../views/Leadership.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
  },
  {
    path: "/members",
    name: "Members",
    component: Members,
  },
  {
    path: "/leadership",
    name: "Leadership",
    component: Leadership,
  },
  {
    path: "/*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
