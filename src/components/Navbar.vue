<template>
    <nav>
        <ul>
            <li v-for="link in links" :key="link">
                <!-- <RouterLink v-if="link === 'Teams'" :to="{name: AddTeamForm}">
                    {{ link }}
                </RouterLink>
                <RouterLink v-else :to="'/'">
                    {{ link }}
                </RouterLink> -->
                <a v-if="link === 'Teams'" @click.prevent="displayAddTeamForm()">
                    {{ link }}
                </a>
                <a v-else href="#">
                    {{ link }}
                </a>
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