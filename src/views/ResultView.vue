<script setup>
import AddMatchForm from '../components/AddMatchForm.vue'
import MatchService from '../services/MatchService.js'
</script>

<template>
    <div id="tout">
        <add-match-form @add-match="setMatches" @emptyError="displayError" />
        <div id="divErrorResult"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        async setMatches(newMatch) {
            const divError = document.getElementById('divErrorResult');
            divError.innerHTML = '';

            try {
                const response = await MatchService.postMatch(newMatch);
                console.log(response);
            } catch (error) {
                this.displayError("Le serveur n'est pas disponible !");
            }
        },

        displayError(error) {
            const divError = document.getElementById('divErrorResult')
            divError.innerHTML = error
        },
    }
}
</script>

<style>
#tout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
}

#divErrorResult {
    position: absolute;
    color: red;
    font-size: 20px;
    top: 22%;
    left: 43%;
}
</style>