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
          store.movieListData = result.data.results;
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