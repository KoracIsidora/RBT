<template>
  <div v-if="movie" class="movie">
    <h1>{{ movie.name }}</h1>
    <div class="container__movie">
      <img :src="movie.imageUrl" />
      <p>{{ movie.description }}</p>
    </div>
    <iframe :src="youtubeVideoUrl" allowfullscreen></iframe>
    <CommentsComponent :comments="movieComments" />
  </div>
</template>

<script>
import CommentsComponent from "../components/CommentsComponent.vue";

export default {
  data() {
    return {
      movieComments: [],
      movie: null,
      apiKey: "k_gke1dt01",
      youtubeVideoUrl: "",
    };
  },
  computed: {
    movieId() {
      return this.$route.params.id;
    },
    categoryId() {
      return this.$route.params.categoryId;
    },
    imdbId() {
      return this.movie.imdbId;
    },
  },
  components: {
    CommentsComponent,
  },
  methods: {
    getMovie() {
      this.$axios
        .get(`${this.$api_url}/categories/${this.categoryId}/movies`)
        .then((response) => {
          response.data.forEach((movie) => {
            if (this.movieId === movie.id) {
              this.movie = movie;
              this.getMovieTrailer();
            }
          });
        });
    },
    getMovieComments() {
      this.$axios
        .get(
          `${this.$api_url}/categories/${this.categoryId}/movies/${this.movieId}/comments`
        )
        .then((response) => {
          this.movieComments = response.data;
        });
    },
    getMovieTrailer() {
      this.$axios
        .get(
          `https://imdb-api.com/en/API/YouTubeTrailer/${this.apiKey}/${this.imdbId}`
        )
        .then((response) => {
          this.youtubeVideoUrl = response.data.videoUrl;
          if (this.youtubeVideoUrl) {
            this.youtubeVideoUrl = this.youtubeVideoUrl.replace(
              "watch?v=",
              "embed/"
            );
          }
        });
    },
  },
  mounted() {
    this.getMovie();
    this.getMovieComments();

    window.Event.$on("addComment", (comment) => {
      this.movieComments.push({
        text: comment,
        createdAt: new Date(),
        movieId: this.movieId,
      });
    });
  },
};
</script>
