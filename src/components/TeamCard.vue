<template>
    <div id="team">
        <h1>{{id}} - {{ name }}</h1>
        <p>{{ description }}</p>
    </div>
</template>

<script>
    export default{
        props:{
            id: Number,
            name: String,
            description: String,
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