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

        displayError(error) {
            const divError = document.getElementById("divError");
            divError.innerHTML = error;
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