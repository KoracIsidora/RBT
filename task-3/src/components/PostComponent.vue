<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link
          :to="{
            name: 'Movie',
            params: { categoryId: post.categoryId, id: post.id },
          }"
          class="router-link"
        >
          <Filmstrip :size="18" class="icon" />{{ post.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Filmstrip from "vue-material-design-icons/Filmstrip.vue";

export default {
  props: ["posts"],
  components: {
    Filmstrip,
  },
};
</script>

<style scoped>
.router-link {
  text-decoration: none;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 600;
  display: inline-flex;
}

.router-link:hover {
  color: #f5c518;
}

ul li {
  margin-bottom: 1rem;
}

ul li:last-child {
  margin-bottom: 0;
}

.icon {
  margin-right: 0.5rem;
}

@media screen and (max-width: 1024px) {
  .router-link {
    font-size: 1rem;
  }
}
</style>
