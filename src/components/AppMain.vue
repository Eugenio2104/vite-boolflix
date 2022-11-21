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
      <MovieList
        v-for="(movie, id) in store.movieListData"
        :key="id"
        :movie="movie"
      />
    </div>
  </div>
</template>


<style lang="scss" scoped>
main {
  min-height: 100vh;
}
</style>