<script setup>
    import NewsService from '../services/NewsService.js';
    import NewsCard from '../components/NewsCard.vue';
    import moment from 'moment';
</script>

<template>
    <div>
      <h1>News</h1>
      <ul>
        <li v-for="article in articles">
            <news-card
                :title="article.title"
                :description="article.description"
                :url="article.url"
                :urlImage="article.urlToImage"
                :date="moment(article.publishedAt).format('DD/MM/YYYY HH[h]mm')"/>
        </li>
      </ul>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        articles: []
      }
    },
    async created() {
        const response = await NewsService.getNews();
        console.log(response);
        this.articles = response.articles;
    }
  }
</script>
  