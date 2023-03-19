<template>
    <div id="team">
        <h1>{{id}} - {{ name }}</h1>
        <p>{{ description }}</p>
        <div id="boutons">
            <button id="edit" @click="modifyTeam()">Editer</button>
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
            modifyTeam(){
                this.$emit("modify-team", this.id);
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

    #edit {
        width: 100px;
        height: 25px;
        border-radius: 10px;
        background-color: #c284df;
        color: white;
        font-size: 1.2em;
        border: none;
    }

    #edit:hover {
        background-color: #a05cb5;
    }
</style>