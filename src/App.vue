<script>
import axios from "axios";
import { store } from "./data/store";

import AppHeader from "./components/AppHeader.vue";
import AppCard from "./components/AppCard.vue";
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
    AppCard,
    AppFooter,
  },
  methods: {
    getMovie() {
      axios
        .get(store.apiUrl)
        .then((result) => {
          store.movieList = result.data;
          console.log(store.movieList);
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
    <AppCard />
    <AppFooter />
  </main>
</template>


<style lang="scss">
@use "./styles/general";
</style>