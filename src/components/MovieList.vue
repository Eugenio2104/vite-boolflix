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
  <ul>
    <li v-for="movie in movieListData" :key="movie.id">
      {{ movie.title }}
    </li>
  </ul>
</template>



<style lang="scss" scoped>
li {
  color: white;
}
</style>