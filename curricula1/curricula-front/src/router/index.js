import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import DisplayAllCurricula from "@/views/DisplayAllCurricula.vue";
import DisplayCurriculum from "@/views/DisplayCurriculum.vue";
import CreateNewCurriculum from "@/views/CreateNewCurriculum.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/DisplayAllCurricula",
    name: "DisplayAllCurricula",
    component: DisplayAllCurricula
  },
  {
    path: "/DisplayCurriculum/:id",
    name: "DisplayCurriculum",
    component: DisplayCurriculum
  },
  {
    path: "/CreateNewCurriculum",
    name: "CreateNewCurriculum",
    component: CreateNewCurriculum
  }
];

const router = new VueRouter({
  routes
});

export default router;
