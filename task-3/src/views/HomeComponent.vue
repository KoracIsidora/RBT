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
    <div :class="posts.length > 0 ? 'container__posts' : 'flex'">
      <PostComponent v-if="posts.length > 0" :posts="posts" />
      <MovieOpenPlay v-else fillColor="#f5c518" :size="130" />
    </div>
  </div>
</template>

<script>
import PostComponent from "../components/PostComponent.vue";

import MovieOpenPlay from "vue-material-design-icons/MovieOpenPlay.vue";

export default {
  name: "HomeComponent",
  data() {
    return {
      heading: "Movie Blog Posts",
      choseCategoryText: "Chose a category:",
      categories: [],
      selectedCategory: "",
      posts: [],
    };
  },
  computed: {
    getCategory() {
      return this.$store.getters.getCategory;
    },
  },
  components: {
    PostComponent,
    MovieOpenPlay,
  },
  methods: {
    getCategories() {
      this.$axios.get(`${this.$api_url}/categories`).then((response) => {
        this.categories = response.data;
      });
    },
    showCategoryPosts() {
      if (this.selectedCategory !== "") {
        this.$axios
          .get(`${this.$api_url}/categories/${this.selectedCategory.id}/movies`)
          .then((response) => {
            this.posts = response.data;
          });
      }

      this.$store.commit("setCategory", this.selectedCategory);
    },
    checkSelectedCategory() {
      if (this.getCategory) {
        this.selectedCategory = this.getCategory;
      } else {
        this.selectedCategory = "";
      }
    },
  },
  mounted() {
    this.getCategories();
    this.checkSelectedCategory();
    this.showCategoryPosts();
  },
};
</script>

<style>
p {
  max-width: 30rem;
}

.container__category {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 55rem;
  margin: 0 auto 3rem;
}

.container__posts {
  max-width: 55rem;
  margin: 0 auto;
}

.container__posts ul {
  padding: 0;
}

.container__posts ul li {
  list-style-type: none;
  max-width: max-content;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-select {
  max-width: 35.5rem;
  width: 100%;
  background: #ffffff;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #271d19;
}

.vs__dropdown-toggle {
  padding: 0.2rem 0.1rem;
}

.vs__selected {
  font-size: inherit;
}

@media screen and (max-width: 1024px) {
  .container__category,
  .container__posts {
    max-width: 40rem;
  }
}

@media screen and (max-width: 768) {
  .container__posts {
    max-width: 35.5rem;
  }
}
</style>
