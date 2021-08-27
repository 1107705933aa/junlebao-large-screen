import Vue from "vue";
import Router from "vue-router";
import Gateway from '@/views/Gateway'
import Release from '@/views/Release'
import NewsDetail from '@/views/NewsDetail'
import Mechanism from '@/views/Mechanism'

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Gateway',
    component: Gateway
  },
  {
    path: '/NewsDetail',
    name: 'NewsDetail',
    component: NewsDetail
  },
  {
    path: '/Release',
    name: 'Release',
    component: Release
  },
  {
    path: '/Mechanism',
    name: 'Mechanism',
    component: Mechanism
  },
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
