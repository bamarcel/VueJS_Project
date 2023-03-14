<template>
    <h2>{{ title }}</h2>
    <p>{{ date }}</p>
    <img :src="urlImage" alt="Image de l'article" />
    <p>{{ description }}</p>
    <a :href="url">Read more</a>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
        date: String,
        url: String,
        urlImage: String
    }
}
</script>