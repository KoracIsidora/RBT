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
          <li><Filmstrip :size="18" class="icon" />{{ post.name }}</li>
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
