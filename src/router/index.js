import {createRouter, createWebHistory} from 'vue-router';
import AddTeamView from '../views/TeamsView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/add-team',
            name: 'AddTeamView',
            component: AddTeamView
        },
        {
            path: '/',
            name: 'Home',
        }
    ]
})

export default router