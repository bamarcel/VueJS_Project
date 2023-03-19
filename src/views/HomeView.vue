<script setup>
    import NewsService from '../services/NewsService.js';
    import NewsCard from '../components/NewsCard.vue';
    import moment from 'moment';
</script>

<template>
    <main>
      <div id="allNews">
        <div id="news" v-for="article in articles">
            <news-card
                :title="article.title"
                :description="article.description"
                :url="article.url"
                :urlImage="article.urlToImage"
                :date="moment(article.publishedAt).format('DD/MM/YYYY HH[h]mm')"/>
        </div>
      </div>
    </main>
</template>
  
<script>
  export default {
    data() {
      return {
        articles: []
      }
    },
    async created() {
      try{
        const response = await NewsService.getNews();
        this.articles = response.articles;
      }
      catch (error) {
        document.getElementById('allNews').innerHTML = "Le serveur n'est pas disponible";
      }
        
    }
  }
</script>
  
<style scoped>
main {
  display: flex;
  width: auto;
}

#allNews {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

#news {
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 10px 5px 0 5px;
  border-radius: 15px;
  background-color: white;
}
</style>