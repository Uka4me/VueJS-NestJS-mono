import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useAuthStore } from "@/stores/auth";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/Login.vue'),
    meta: {
      layout: 'Empty',
    },
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/HelloWorld.vue'),
    meta: {
      layout: 'Default',
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/components/Profile.vue'),
    meta: {
      layout: 'Default',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);

  if (authRequired) {
    const auth = useAuthStore();
    await auth.fetchUser();

    if (!auth.user) {
        auth.returnUrl = to.fullPath;
        return '/login';
    }
  }
});

export default router
