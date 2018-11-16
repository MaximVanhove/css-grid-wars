import Vue from 'vue';
import Router from 'vue-router';
import Playground from './views/Playground.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Playground,
        },
    ],
});
