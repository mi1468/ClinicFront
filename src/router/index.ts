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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
