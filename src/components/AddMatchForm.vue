<script setup>
import TeamData from '../data/teams.json';
</script>

<template>
    <div id="match">
        <h1 id="titreRes">Results</h1>
        <form id="form" @submit.prevent="addMatch()">
            <div id="formulaire">
                <h2 id="titreForm">Add a match</h2>
                <div id="one">
                    <label for="team1">Team 1</label>
                    <select name="team1" id="team1" v-model="team1">
                        <option v-for="team in teams" :value="team.id">{{ team.name }}</option>
                    </select>
                </div>
                <div id="two">
                    <label for="score1">Score 1</label>
                    <input type="number" name="score1" id="score1" v-model="score1">
                </div>
                <div id="three">
                    <label for="team2">Team 2</label>
                    <select name="team2" id="team2" v-model="team2">
                        <option v-for="team in teams" :value="team.id">{{ team.name }}</option>
                    </select>
                </div>
                <div id="four">
                    <label for="score2">Score 2</label>
                    <input type="number" name="score2" id="score2" v-model="score2">
                </div>
                <button id="addButton" type="submit">Add</button>
            </div>
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
                this.$emit('add-match', { team1: this.team1, score1: this.score1, team2: this.team2, score2: this.score2 });
                this.team1 = 1;
                this.score1 = 0;
                this.team2 = 2;
                this.score2 = 0;
            }
        }
    },
    created() {
        this.teams = TeamData;
    }
}
</script>

<style>
#match {
    display: flex;
    flex-direction: column;
    width: auto;
    /* background-color: purple; */
}

#titreRes {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0;
    margin-top: 15px;
}

#form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100px;
    align-items: center;
    /* background-color: green; */
}

#formulaire {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 90%;
    height: 60%;
    align-items: center;
    /* background-color: yellow; */
    background-color: white;
    border-radius: 10px;
}

label {
    font-size: 1.2em;
    margin: 0;
    margin-right: 10px;
}

select {
    width: 100px;
    height: 25px;
    border: none;
    font-size: 1.2em;
    background-color: #c284df;
    color: white;
    cursor: pointer;
}

option {
    background-color: #c284df;
}

option:hover {
    background-color: #a05db5;
}

#addButton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 30px;
    border-radius: 10px;
    background-color: #c284df;
    color: white;
    font-weight: 700;
    font-size: 15px;
    border: none;
    cursor: pointer;
}

#addButton:hover {
    background-color: #a05db5;
}

.error {
    border: solid 2px red;
}
</style>