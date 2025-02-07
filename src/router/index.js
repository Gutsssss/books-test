import { createRouter,createWebHistory } from "vue-router";
import HomeView from "@/pages/HomeView.vue";
import BooksView from "@/pages/BooksView.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        label: "Home",
        component: HomeView,
        icon: 'pi pi-home'
      },
      {
        path: "/books",
        label: "Books",
        component: BooksView,
        icon: 'pi pi-book'
      }]
  });
  
  export default router;