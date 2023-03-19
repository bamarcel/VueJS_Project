<script setup>
    import AddMatchForm from '../components/AddMatchForm.vue'
    import MatchService from '../services/MatchService.js'
</script>

<template>
    <div>
        <add-match-form @add-match="setMatches" @emptyError="displayError"/>
        <div id="divError"></div>
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
                const divError = document.getElementById('divError');
                divError.innerHTML = '';

                try{
                    const response = await MatchService.postMatch(newMatch);
                    console.log(response);
                } catch (error) {
                    this.displayError("Le serveur n'est pas disponible");
                }
            },

            displayError(error) {
                const divError = document.getElementById('divError')
                divError.innerHTML = error
            },
        }
    }
</script>

<style>
    
</style>