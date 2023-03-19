<script setup>
    import TeamData from '../data/teams.json';
</script>

<template>
    <div>
        <h1>Add a match</h1>
        <form @submit.prevent="addMatch()">
            <label for="team1">Team 1</label>
            <select name="team1" id="team1" v-model="team1">
                <option v-for="team in teams" :value="team.id">{{team.name}}</option>
            </select>
            <label for="score1">Score 1</label>
            <input type="number" name="score1" id="score1" v-model="score1">
            <label for="team2">Team 2</label>
            <select name="team2" id="team2" v-model="team2">
                <option v-for="team in teams" :value="team.id">{{team.name}}</option>
            </select>
            <label for="score2">Score 2</label>
            <input type="number" name="score2" id="score2" v-model="score2">
            <button type="submit">Add</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                teams: [],
                team1: 1,
                score1: 0,
                team2: 2,
                score2: 0
            }
        },
        methods: {
            addMatch() {
                if (this.team1 === this.team2) {
                    this.$emit('emptyError', 'Les équipes doivent être différentes');
                } else if (this.team1 === null || this.team2 === null) {
                    this.$emit('emptyError', 'Les équipes ne peuvent pas être null');
                } else if (this.score1 < 0 || this.score2 < 0) {
                    this.$emit('emptyError', 'Les scores doivent être supérieur ou égal à 0');
                } else {
                    this.$emit('add-match', {team1: this.team1, score1: this.score1, team2: this.team2, score2: this.score2});
                    this.team1 = 1;
                    this.score1 = 0;
                    this.team2 = 2;
                    this.score2 = 0;
                }
            }
        },
        created(){
            this.teams = TeamData;
        }
    }
</script>

<style>
</style>