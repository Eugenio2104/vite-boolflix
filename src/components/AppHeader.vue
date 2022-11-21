<script>
import { store } from "../data/store";

export default {
  name: "AppHeader",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header>
    <div class="container py-2">
      <div class="row">
        <div class="logo col-3">
          <img src="/logo-boolflix.png" alt="" />
        </div>
        <div class="input mb-3 col-3 offset-6 d-flex">
          <input
            @keyup.enter="$emit('searchInput')"
            v-model="store.searchInput"
            type="text"
            class="form-control"
            placeholder="Inserisci un Film"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            @click="$emit('searchInput')"
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
header {
  .container {
    img {
      max-width: 100%;
    }
    h1 {
      text-transform: uppercase;
      font-weight: 700;
    }
    input {
      background-color: $primary-color;
      color: white;
    }
  }
}
</style>