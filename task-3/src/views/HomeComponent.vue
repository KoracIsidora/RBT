<template>
  <div class="home">
    <h1>{{ heading }}</h1>
    <div class="container__category">
      <p>{{ choseCategoryText }}</p>
      <v-select
        @input="showCategoryPosts"
        label="name"
        :options="categories"
        v-model="selectedCategory"
        :clearable="false"
      ></v-select>
    </div>
    <div class="container__posts">
      <PostComponent :posts="posts" />
    </div>
  </div>
</template>

<script>
import PostComponent from "../components/PostComponent.vue";

export default {
  name: "HomeComponent",
  data() {
    return {
      heading: "Movie Blog Posts",
      choseCategoryText: "Chose a category:",
      categories: [],
      selectedCategory: "",
      posts: []
    };
  },
  components: {
    PostComponent,
  },
  methods: {
    showCategoryPosts() {
      this.$axios
        .get(`${this.$api_url}/categories/${this.selectedCategory.id}/movies`)
        .then((response) => {
          this.posts = response.data;
        });
    },
  },
  mounted() {
    this.$axios.get(`${this.$api_url}/categories`).then((response) => {
      this.categories = response.data;
    });
  },
};
</script>
