import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
          {
              path:"/",
              name:"home",
              component:()=>import("@/components/home.vue")
          }
        ]
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;