import { createRouter, createWebHistory } from 'vue-router';
import TestComponent from './components/TestComponent.vue';
import TestComponent2 from './components/TestComponent2.vue';
import AuthView from './pages/AuthView.vue';
import MainView from './pages/MainView.vue';

export const router = createRouter({
  routes: [{
    path: '/', component: AuthView
  },
  {
    path: '/main', component: MainView,
    children: [{
    path: '', component: TestComponent, name: 'main',
  },
  {
    path: 'new', component: TestComponent2
  }] 
  }],
  history: createWebHistory(),
})