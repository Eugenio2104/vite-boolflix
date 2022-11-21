<script>
import axios from "axios";
import { store } from "./data/store";

import AppHeader from "./components/AppHeader.vue";
import MovieList from "./components/MovieList.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  data() {
    return {
      store,
    };
  },
  components: {
    AppHeader,
    MovieList,
    AppFooter,
  },
  methods: {
    getMovie() {
      axios
        .get(store.apiUrl)
        .then((result) => {
          store.movieListData = result.data;
          console.log(store.movieListData);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getMovie();
  },
};
</script>

<template>
  <AppHeader title="boolflix" />
  <main>
    <MovieList />
    <AppFooter />
  </main>
</template>


<style lang="scss">
@use "./styles/general";
</style>