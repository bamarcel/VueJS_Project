<template>
    <main>
        <h2>{{ title }}</h2>
        <img :src="urlImage" alt="Image de l'article" />
        <p>{{ date }}</p>
        <p>{{ description }}</p>
        <a :href="url">Read more</a>
    </main>
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

<style scoped>
main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 10px;    
    margin: 10px;
}

h2 {
    font-size: 1.5em;
    margin: 0.67em 0;
}

p {
    margin-bottom: 10px;
}

img {
    width: 70%;
    height: auto;
}

a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
}

a::after {
    content: '';
    width: 0;
    height: 3px;
    background: #000;
    margin: auto;
    display: block;
}

a:hover::after {
    width: 100%;
    transition: width 0.4s;
}
</style>