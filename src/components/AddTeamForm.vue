<template>
    <form @submit.prevent="addTeam()">
        <label>
            Team Name:
            <input type="text" :class="{'error' : hasNameError}" v-model="name"/>
        </label>

        <label>
            Team Description:
            <input type="text" :class="{'error' : hasDescriptionError}" v-model="description"/>
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
                hasNameError: false,
                description: '',
                hasDescriptionError: false
            };
        },
        methods: {
            addTeam() {
                // Vérification du nom de l'équipe
                if(!this.name){
                    this.hasNameError = true;

                    this.$emit("emptyError", "Le nom de l'équipe ne peut pas être vide");
                    console.log("Empty Name : " + this.hasNameError);

                    return;
                }
                else if(this.name.length < 5){
                    this.hasNameError = true;

                    this.$emit("emptyError", "Le nom de l'équipe doit contenir au moins 5 caractères");
                    console.log("Name too short : " + this.hasNameError);

                    return;
                }
                else{
                    this.hasNameError = false;
                }

                // Vérification de la description de l'équipe
                if(!this.description){
                    this.hasDescriptionError = true;

                    this.$emit("emptyError", "La description de l'équipe ne peut pas être vide");
                    console.log("Empty Description : " + this.hasDescriptionError);

                    return;
                }
                else if(this.description.length < 20){
                    this.hasDescriptionError = true;

                    this.$emit("emptyError", "La description de l'équipe doit contenir au moins 20 caractères");
                    console.log("Description too short : " + this.hasDescriptionError);

                    return;
                }
                else{
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

    .error {
        border: solid 2px red;
    }
</style>