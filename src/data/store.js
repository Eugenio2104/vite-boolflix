import { reactive } from "vue";
export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/multi?api_key=411c6313ecc18c9c3138c4ddbdf7531a',
  api_key: '411c6313ecc18c9c3138c4ddbdf7531a',
  movieListData: [],
  searchInput: '',
  language: 'it-IT',
})