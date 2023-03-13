<script setup>
import AddTeamForm from "../components/AddTeamForm.vue"
import TeamCard from "../components/TeamCard.vue"
</script>

<template>
    <main>
        <div id="divForm">
            <add-team-form @add-team="setTeams" @emptyError="displayError" />
            <div id="divError"></div>
        </div>
        <div id="divTeam">
            <div v-for="team in allTeams">
                <team-card :id="team.id" :name="team.name"
                    :description="team.description.length > 20 ? team.description.substring(0, 20) + '...' : team.description" />
                <div>
                    <button @click="modifyTeamName(team.id)">Changer le nom</button>
                    <button @click="modifyTeamDescription(team.id)">Changer la description</button>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            allTeams: []
        }
    },
    methods: {
        setTeams(team) {
            const divError = document.getElementById("divError");
            divError.innerHTML = "";

            this.allTeams.push(team);
            console.log(this.allTeams);
        },

        displayError(error){
            const divError = document.getElementById("divError");
            divError.innerHTML = error;            
        },
        
        modifyTeamName(id){
                const team = this.allTeams.find(team => team.id === id);
                const newName = prompt("Nouveau nom de l'équipe", team.name);
                
                if(newName === null){
                    this.displayError("Le nom de l'équipe ne peut pas être vide");
                }
                else if(newName.length < 5){
                    this.displayError("Le nom de l'équipe doit faire au moins 5 caractères");
                }
                else{
                    this.displayError("");
                    team.name = newName;
                }
            },

            modifyTeamDescription(id){
                const team = this.allTeams.find(team => team.id === id);
                const newDescription = prompt("Nouvelle description de l'équipe", team.description);
                
                if(newDescription === null){
                    this.displayError("La description de l'équipe ne peut pas être vide");
                }
                else if(newDescription.length < 20){
                    this.displayError("La description de l'équipe doit faire au moins 20 caractères");
                }
                else{
                    this.displayError("");
                    team.description = newDescription;
                }
            }
    }
};
</script>

<style>
main {
    display: flex;
    flex-direction: row;
    width: auto;
    flex-wrap: wrap;
    height: calc(100vh - 70px);
}

#divForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
}

#divTeam {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    flex-wrap: wrap;
}
</style>