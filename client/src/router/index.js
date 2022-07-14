import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EventsView from "../views/EventsView.vue";
import LeadershipView from "../views/LeadershipView.vue";
import MemberAccessView from "../views/MemberAccessView.vue";
import ContactView from "../views/ContactView.vue";
import SignInView from "../views/SignInView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/events",
      name: "events",
      component: EventsView,
    },
    {
      path: "/leadership",
      name: "leadership",
      component: LeadershipView,
    },
    {
      path: "/memberaccess",
      name: "memberaccess",
      component: MemberAccessView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/signin",
      name: "signin",
      component: SignInView,
    },
  ],
});

export default router;
