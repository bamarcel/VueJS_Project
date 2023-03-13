<template>
    <div id="team">
        <h1>{{id}} - {{ name }}</h1>
        <p>{{ description }}</p>

        <div>
            <button @click="modifyTeamName()">Changer le nom</button>
            <button @click="modifyTeamDescription()">Changer la description</button>
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
    #team {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 500px;
        height: auto;
        background-color: white;
        border-radius: 15px;
        margin-top: 10px;
    }
</style>