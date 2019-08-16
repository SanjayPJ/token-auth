import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem('access_token')) {
                    next();
                } else {
                    next({ name: 'login' });
                }
            }
        },
        {
            path: '/login',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './components/login.vue'),
            beforeEnter: (to, from, next) => {
                if (!localStorage.getItem('access_token')) {
                    next();
                } else {
                    next({ name: 'home' });
                }
            }
        },
        {
            path: '/signup',
            name: 'signup',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './components/signup.vue'),
            beforeEnter: (to, from, next) => {
                if (!localStorage.getItem('access_token')) {
                    next();
                } else {
                    next({ name: 'home' });
                }
            }
        },
    ]
})
