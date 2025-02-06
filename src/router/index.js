import { createRouter,createWebHistory } from "vue-router";
import HomeView from "@/pages/HomeView.vue";
import BooksView from "@/pages/BooksView.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "Home",
        component: HomeView,
      },
      {
        path: "/books",
        name: "Books",
        component: BooksView,
      }]
  });
  
  export default router;