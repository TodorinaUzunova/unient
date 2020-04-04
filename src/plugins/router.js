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

const authGuard = function (to, from, next) {
  if (localStorage.getItem("token") === null) {
    next({ path: "/login" });
  } else {
    next();
  }
};

const notLogged = function (to, from, next) {
  if (localStorage.getItem("token") !== null) {
    next({ name: "eventsAll" });
  } else {
    next();
  }
};

const routes = [
  { path: "/", component: AppHome },
  { path: "/home", component: AppHome },
  {
    path: "/login",
    beforeEnter: notLogged,
    component: AppLogin,
  },
  { path: "/register", beforeEnter: notLogged, component: AppRegister },
  {
    path: "/events/all",
    name: "eventsAll",
    beforeEnter: authGuard,
    component: AppEventList,
  },
    {
    path: "/create",
    beforeEnter:authGuard,
    component: AppEventCreate
  },
  { path: "/details/:id", beforeEnter: authGuard, component: AppEventDetails },
  { path: "/edit/:id", beforeEnter: authGuard, component: AppEventEdit },
  { path: "/user/profile", name: "profile", component: AppProfile },
  {
    path: "*",
    component: () => {
      import("@/components/shared/PageNotFound.vue");
    },
  },
];

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes,
});


