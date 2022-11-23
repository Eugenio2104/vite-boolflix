<script>
import { store } from "../data/store";
import MovieList from "./MovieList.vue";

export default {
  name: "AppMain",
  components: {
    MovieList,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="row" v-if="store.movieListData.length">
      <!-- Qui ciclare stampa dei film -->
      <h1>film</h1>
      <MovieList
        v-for="(movie, id) in store.movieListData"
        :key="id"
        :movie="movie"
      />

      <h1>serie tv</h1>
      <!-- Qui ciclare stampa delle serie tv -->
      <MovieList
        v-for="(serie, id) in store.serieTvListData"
        :key="id"
        :movie="serie"
      />
    </div>
  </div>
</template>


<style lang="scss" scoped>
main {
  min-height: 100vh;
  h1 {
    margin: 20px;
    text-transform: uppercase;
  }
}
</style>