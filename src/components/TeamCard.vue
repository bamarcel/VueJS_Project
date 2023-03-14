<template>
    <div id="team">
        <h1>{{id}} - {{ name }}</h1>
        <p>{{ description }}</p>
        <div id="boutons">
            <button id="name" @click="modifyTeamName()">Changer le nom</button>
            <button id="Desc" @click="modifyTeamDescription()">Changer la description</button>
        </div>
    </div>
</template>

<script>
    export default{
        props:{
            id: Number,
            name: String,
            description: String,
        },
        methods:{
            modifyTeamName(){
                this.$emit("modify-team-name", this.id);
            },
            modifyTeamDescription(){
                this.$emit("modify-team-description", this.id);
            }
        }
    }
</script>

<style>
    #boutons {
        display: flex;
        width: 60%;
        flex-direction: row;
        justify-content: space-evenly;
    }

    #name {
        border-radius: 15px;
    }

    #Desc {
        border-radius: 15px;
    }

    #team {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 500px;
        height: auto;
        background-color: white;
        border-radius: 15px;
        margin-top: 10px;
        padding-bottom: 10px;
    }
</style>