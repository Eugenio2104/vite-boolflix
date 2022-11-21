<script>
export default {
  name: "AppHeader",
  props: {
    title: String,
  },
};
</script>

<template>
  <header>
    <div class="container py-2">
      <h1>{{ title }}</h1>
    </div>
  </header>
</template>


<style lang="scss" scoped>
.container {
  h1 {
    text-transform: uppercase;
    font-weight: 700;
  }
}
</style>