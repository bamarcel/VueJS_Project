<template>
    <form @submit.prevent="addTeam()">
        <label>
            Team Name:
            <input type="text" v-model="name"/>
        </label>

        <label>
            Team Description:
            <input type="text" v-model="description"/>
        </label>

        <button type="submit">Ajouter l'équipe</button>
    </form>
</template>

<script>
    export default {
        name: 'AddTeamForm',
        data() {
            return {
                id : 1,
                name: '',
                description: '',
            };
        },
        methods: {
            addTeam() {
                if(!this.name || !this.description){
                    return;
                }

                const newTeam = {
                    id: this.id,
                    name: this.name,
                    description: this.description
                };

                this.id++;

                this.$emit("add-team",newTeam);
                console.log(newTeam);

                this.teamName = "";
                this.description = "";
            },
        }
    };
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 1.4rem;
        padding: 1.4rem;
        background-color: cornflowerblue;
        border: solid 3px;
        border-color: black;
    }

    label {
        font-weight: 500;
    }
</style>