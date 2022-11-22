<script>
import { store } from "../data/store";

export default {
  name: "MovieList",
  props: {
    movie: Object,
  },
};
</script>

<template>
  <div class="flip-card col-4 m-2">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img
          :src="'http://image.tmdb.org/t/p/w342/' + movie.poster_path"
          :alt="movie.title"
          style="width: 300px; height: 300px"
        />
      </div>
      <div class="flip-card-back">
        <!-- titolo, titolo originale, lingua, voto -->
        <h6>{{ movie.title || movie.name }}</h6>
        <p v-if="movie.original_title != movie.title">
          Titolo Originale : {{ movie.original_title }}
        </p>
        <p>{{ movie.vote_averange }}</p>
        <p>{{ movie.original_language }}</p>
        <p>{{ movie.overview }}</p>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
@use "../styles/partials/vars" as *;
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.flip-card-front {
  background-color: #bbb;
  color: black;
}
.flip-card-back {
  background-color: $primary-color;
  color: $secondary-color;
  transform: rotateY(180deg);
  p {
    font-size: 0.8rem;
  }
}
</style>