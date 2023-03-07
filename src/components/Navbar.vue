<template>
    <nav>
        <ul>
            <li v-for="link in links" :key="link">
                <router-link :to="{name: link + 'View'}">
                    {{ link }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    import LinkService from '../services/LinkService.js';

    export default {
        name: 'Navbar',
        data() {
            return {
                links: [],
            };
        },
        
        created() {
            const linkService = new LinkService();
            this.links = linkService.getLinks();
        },

        methods: {
            displayAddTeamForm() {
                this.$router.push({ name: 'AddTeamView' });
            },
        },
    };
</script>

<style scoped>
    nav {
        background-color: #244375;
    }

    ul {
        display: flex;
        justify-content: space-around;
        padding: 0;
        margin: 0;
    }

    li {
        list-style-type: none;
    }

    a {
        display: block;
        color: white;
        text-decoration: none;
        padding: 10px;
    }

    @media screen and (max-width: 768px) {
        ul {
            flex-direction: column;
            align-items: center;
        }
    }
</style>