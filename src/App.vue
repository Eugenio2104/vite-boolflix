<script>
import axios from "axios";
import { store } from "./data/store";

import AppHeader from "./components/AppHeader.vue";
import MovieList from "./components/MovieList.vue";
import AppMain from "./components/AppMain.vue";

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
    AppMain,
  },
  methods: {
    getMovie() {
      console.log("getting movies");
      axios
        .get(store.apiUrl, {
          params: { query: store.searchInput, language: "it-IT" },
        })
        .then((result) => {
          // store.movieListData = result.data.results;

          // filtriamo tutti i risultati per media_type per prendere tutti i film
          store.movieListData = result.data.results.filter(
            (item) => item.media_type == "movie"
          );

          // filtriamo tutti i risultati per media_type per prendere tutte le serie tv
          store.serieTvListData = result.data.results.filter(
            (item) => item.media_type == "tv"
          );

          // console.log(store.movieListDat);
          // console.warn(store.serieTvListData);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {},
};
</script>

<template>
  <AppHeader @searchInput="getMovie" />
  <main>
    <AppMain />
  </main>
</template>


<style lang="scss">
@use "./styles/general";
</style>