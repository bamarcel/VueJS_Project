import {createRouter, createWebHistory} from 'vue-router';
import TeamsView from '../views/TeamsView.vue';
import HomeView from '../views/HomeView.vue';
import ResultsView from '../views/ResultView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/teams',
            name: 'TeamsView',
            component: TeamsView
        },
        {
            path: '/home',
            name: 'HomeView',
            component: HomeView
        },
        {
            path: '/results',
            name: 'ResultsView',
            component: ResultsView
        },
    ]
})

export default router