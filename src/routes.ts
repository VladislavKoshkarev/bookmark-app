import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  routes: [{
    path: '/', component: () => import('./pages/AuthView.vue')
  },
  {
    path: '/main', component: () => import('./pages/MainView.vue'),
    children: [{
    path: '', component: () => import('./components/TestComponent.vue'), name: 'main',
  },
  {
    path: 'new', component: () => import('./components/TestComponent2.vue')
  }] 
  }],
  history: createWebHistory(),
})