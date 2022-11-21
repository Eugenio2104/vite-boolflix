<script>
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
};
</script>

<template>
  <AppHeader />
  <main>
    <AppCard />
    <AppFooter />
  </main>
</template>


<style lang="scss">
@use "./styles/general";
</style>