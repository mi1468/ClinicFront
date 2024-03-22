/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
// import { createRouter, createWebHistory } from 'vue-router/auto'

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
// })

// export default router

// router.ts
import { createRouter, createWebHistory } from "vue-router";
import IntroPage from "../pages/Intro.vue";
import LoginPage from "../pages/LoginPage.vue";
import SignupPage from "../pages/SignupPage.vue";
import DashboardPage from "../pages/dashboard/home.vue";
import ReceptionFormPage from "../pages/dashboard/reception/receptionForm.vue";
import helloWorld from "../components/HelloWorld.vue";

const routes = [
  {
    path: "/",
    name: "helloWorld",
    component: helloWorld,
  },
  {
    path: "/intro",
    name: "Intro",
    component: IntroPage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/signup",
    name: "Signup",
    component: SignupPage,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardPage,
  },
  {
    path: "/dashboard/reception",
    name: "receptionForm",
    component: ReceptionFormPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
