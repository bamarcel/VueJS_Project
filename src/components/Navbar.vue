<template>
    <nav>
        <img id="logo" src="../assets/img/imgNBA.png"/>
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
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        height: 70px;
        background-color: white;
    }

    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 30%;
        height: 100%;
        margin: 0;
    }

    li {
        list-style-type: none;
        align-self: center;
    }

    a {
        display: block;
        color: black;
        text-decoration: none;
        padding: 10px;
        font-size: 25px;
    }

</style>