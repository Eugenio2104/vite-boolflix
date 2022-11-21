<script>
import { store } from "../data/store";

export default {
  name: "MovieList",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container">
    <ul>
      <li v-for="movie in store.movieListData" :key="movie.id">
        {{ movie.original_title }}
      </li>
    </ul>
  </div>
</template>



<style lang="scss" scoped>
</style>