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
      <div class="container__new-comment">
        <textarea
          v-model="commentText"
          required
          placeholder="Type your comment here..."
        />
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

<style scoped>
span {
  font-size: 1.5rem;
  font-weight: 500;
}

.comments {
  margin: 0;
  padding: 2rem 0 0;
  list-style-type: none;
  text-align: justify;
  margin-bottom: 2rem;
}

.comments li {
  margin-bottom: 1rem;
}

.comments li:last-child {
  margin-bottom: 0;
}

textarea {
  resize: none;
  width: 50%;
  border-radius: 0.5rem;
  height: 5rem;
  padding-top: 0.5rem;
  font-family: "Montserrat";
  margin-bottom: 1rem;
}

textarea:focus-visible {
  outline: none;
}

button {
  font-family: "Montserrat";
  font-size: 1rem;
  font-weight: bold;
  color: #000000;
  background-color: #f5c518;
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

.container__new-comment {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: start;
  align-items: flex-start;
  padding-top: 2rem;
}

@media screen and (max-width: 1024px) {
  textarea {
    width: 100%;
  }
}
</style>
