<script setup>
    import AddTeamForm from "../components/AddTeamForm.vue"
    import TeamCard from "../components/TeamCard.vue"
</script>

<template>
    <add-team-form @add-team="setTeams"/>
    <div v-for="team in allTeams">
        <team-card :id="team.id" :name="team.name" :description="team.description"/>
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
                this.allTeams.push(team);
                console.log(this.allTeams);
            }
        }
    };
</script>