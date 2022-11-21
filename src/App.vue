<script>
import axios from "axios";

import AppHeader from "./components/AppHeader.vue";
import AppCard from "./components/AppCard.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppCard,
    AppFooter,
  },
  mounted() {
    //https://api.themoviedb.org/3/search/movie?api_key=411c6313ecc18c9c3138c4ddbdf7531a&query=matrix
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=411c6313ecc18c9c3138c4ddbdf7531a&query=matrix"
      )
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
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