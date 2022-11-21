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
      <div class="row">
        <div class="logo col-3">
          <h1>{{ title }}</h1>
        </div>
        <div class="input mb-3 col-3 offset-6 d-flex">
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
    </div>
  </header>
</template>


<style lang="scss" scoped>
@use "../styles/partials/vars" as *;

.container {
  h1 {
    text-transform: uppercase;
    font-weight: 700;
  }
  input {
    background-color: $primary-color;
    color: white;
  }
}
</style>