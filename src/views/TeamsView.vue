<script setup>
    import AddTeamForm from "../components/AddTeamForm.vue"
    import TeamCard from "../components/TeamCard.vue"
</script>

<template>
    <div id="divError"></div>
    <add-team-form @add-team="setTeams" @emptyError="displayError"/>
    <div v-for="team in allTeams">
        <team-card :id="team.id" :name="team.name" :description="team.description.length > 20 ? team.description.substring(0,20) + '...' : team.description"/>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                allTeams: []
            }
        },
        methods: {
            setTeams(team){
                const divError = document.getElementById("divError");
                divError.innerHTML = "";

                this.allTeams.push(team);
                console.log(this.allTeams);
            },

            displayError(error){
                const divError = document.getElementById("divError");
                divError.innerHTML = error;
            }
        }
    };
</script>

<style>
    body {
        margin: 0 auto;
        background-color: #f5f5f7;
    }
</style>