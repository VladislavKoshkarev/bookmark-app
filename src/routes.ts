import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  routes: [{
    path: '/', component: () => import('./pages/AuthView.vue')
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