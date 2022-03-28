import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../pages/PageHome.vue'),
        meta: {
            menuTitle: 'Menu'
        }
    },
    {
        path: '/create',
        name: 'Create',
        component: () => import(/* webpackChunkName: "create" */ '../pages/PageCreate.vue'),
        meta: {
            menuTitle: 'Create'
        }
    },
    {
        path: '/travels',
        name: 'Travels',
        component: () => import(/* webpackChunkName: "create" */ '../pages/PageTravels.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
