import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from './stores/auth.store';

export const router = createRouter({
  routes: [
  {path: '/:pathMatch(.*)*', name: 'NotFound' ,component: () => import('./pages/NotFoundView.vue')},  
  {
    path: '/', component: () => import('./pages/AuthView.vue'), name: 'auth'
  },
  {
    path: '/main', component: () => import('./pages/MainView.vue'),
    children: [{
    path: '', component: () => import('./pages/IndexView.vue'), name: 'main',
  },
  {
    path: ':alias', component: () => import('./pages/CategoryView.vue')
  }] 
  }],
  history: createWebHistory(),
})

router.beforeEach(async (to) => {
  const authStore = useAuthStore()
  const token = await authStore.getSessionToken()
  if (!token && to.name != 'auth') {
    return { name: 'auth' }
  }
})