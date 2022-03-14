import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../pages/PageHome.vue')
    }
    // {
    //   path: '/create',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "create" */ '../pages/create/index.vue')
    // }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
