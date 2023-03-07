<template>
    <div>
        <h1>{{id}} -- {{ name }}</h1>
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