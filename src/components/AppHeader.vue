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
    <div class="container py-2 d-flex">
      <h1>{{ title }}</h1>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Inserisci un Film"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Cerca
        </button>
      </div>
    </div>
  </header>
</template>


<style lang="scss" scoped>
.container {
  h1 {
    margin-right: 800px;
    text-transform: uppercase;
    font-weight: 700;
  }
}
</style>