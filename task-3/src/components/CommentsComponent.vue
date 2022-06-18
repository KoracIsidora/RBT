<template>
  <div>
    <span v-if="comments.length > 0">Comments:</span>
    <ul class="comments">
      <li v-for="comment in comments" :key="comment.id">
        {{ comment.text }}
        <b>Posted: {{ comment.createdAt | formatDate }}</b>
      </li>
    </ul>
    <form @submit.prevent="addComment">
      <span>Add new comment</span>
      <div class="new-comment">
        <textarea v-model="commentText" required placeholder="Type your comment here..." />
        <button type="submit">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["comments"],
  data() {
    return {
      commentText: "",
    };
  },
  methods: {
    addComment() {
      window.Event.$emit("addComment", this.commentText);
      this.commentText = "";
    },
  },
  filters: {
    formatDate(value) {
      return new Date(value).toLocaleDateString("sr-RS");
    },
  },
};
</script>
