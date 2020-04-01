import Vue from "vue";
import VueRouter from "vue-router";

import AppHome from "@/components/Home.vue";
import AppLogin from "@/components/authentication/Login.vue";
import AppRegister from "@/components/authentication/Register.vue";
import AppEventCreate from "@/components/EventCreate.vue";
import AppEventList from "@/components/EventList.vue";
import AppEventDetails from "@/components/EventDetails.vue";
import AppEventEdit from "@/components/EventEdit.vue";
import AppProfile from "@/components/user/Profile.vue";

const routes = [
  { path: "/", component: AppHome },
  { path: "/home", redirect: "/" },
  {
    path: "/login",
    beforeEnter: (to, from, next) => {
      if (isLoggedIn) {
        next(false);
      }
    },
    component: AppLogin
  },
  { path: "/register", component: AppRegister },
  { path: "/events/all", name: "eventsAll", component: AppEventList },
  {
    path: "/create",
    beforeEnter: (to, from, next) => {
      if (!isLoggedIn) {
        next("/login");
      }
      else{
        next()
      }
    },
    component: AppEventCreate
  },
  { path: "/details/:id", component: AppEventDetails },
  { path: "/edit/:id", component: AppEventEdit },
  { path: "/user/profile/:id", name: "profile", component: AppProfile },
  {
    path: "*",
    component: () => {
      import("@/components/PageNotFound.vue");
    }
  }
];

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes
});
