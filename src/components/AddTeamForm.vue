<template>
    <main>
        <form @submit.prevent="addTeam()">
            <p>Add Franchise</p>
            <label>
                <input type="text" :class="{ 'error': hasNameError }" v-model="name" placeholder="Name"/>
            </label>

            <label>
                <input type="text" :class="{ 'error': hasDescriptionError }" v-model="description" placeholder="Description"/>
            </label>

            <button type="submit">Add</button>
        </form>
    </main>
</template>

<script>
import TeamData from "../data/teams.json";
export default {
    name: 'AddTeamForm',
    data() {
        return {
            id: TeamData.length + 1,
            name: '',
            hasNameError: false,
            description: '',
            hasDescriptionError: false
        };
    },
    methods: {
        addTeam() {
            // Vérification du nom de l'équipe
            if (!this.name) {
                this.hasNameError = true;

                this.$emit("emptyError", "Le nom de l'équipe ne peut pas être vide");
                console.log("Empty Name : " + this.hasNameError);

                return;
            }
            else if (this.name.length < 5) {
                this.hasNameError = true;

                this.$emit("emptyError", "Le nom de l'équipe doit contenir au moins 5 caractères");
                console.log("Name too short : " + this.hasNameError);

                return;
            }
            else {
                this.hasNameError = false;
            }

            // Vérification de la description de l'équipe
            if (!this.description) {
                this.hasDescriptionError = true;

                this.$emit("emptyError", "La description de l'équipe ne peut pas être vide");
                console.log("Empty Description : " + this.hasDescriptionError);

                return;
            }
            else if (this.description.length < 20) {
                this.hasDescriptionError = true;

                this.$emit("emptyError", "La description de l'équipe doit contenir au moins 20 caractères");
                console.log("Description too short : " + this.hasDescriptionError);

                return;
            }
            else {
                this.hasDescriptionError = false;
            }

            const newTeam = {
                id: this.id,
                name: this.name,
                description: this.description
            };

            this.id++;

            this.$emit("add-team", newTeam);
            console.log(newTeam);

            this.teamName = "";
            this.description = "";
        },
    }
};
</script>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 70px);
    /* background-color: red; */
    background-image:  url("../assets/img/ouinon.jpg");
}

form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    color: white;
    border-radius: 10px;
}

p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    width: 100%;    
    font-size: 35px;
    font-weight: 700;
    color: white;
}

label {
    color: white;
}

input {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-right: auto;
    margin-left: auto;
    width: 300px;
    height: 50px;   
    font-size: 17px;
    border-radius: 15px;
    border: none;
    margin-bottom: 15px;
    background-color: hsla(0, 0%, 100%, 0.4); 
    font-style: italic;
    font-size: 20;
}

input::placeholder {
    color: black;
}

button {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 125px;
    height: 35px;   
    font-size: 17px;
    font-weight: 700;
    background-color: hsla(0, 0%, 100%, 0.5); 
    border-radius: 15px;
    border: none;
    margin-bottom: 15px;
}

button:hover {
    background-color: #c284df;
}

.error {
    border: solid 2px red;
}
</style>