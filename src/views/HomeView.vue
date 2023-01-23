<template>
  <div class="home">
    <h1>Home</h1>
      <div v-if="error">{{ error }}</div>
      <div v-if="posts.length" class="layout">
        <PostList :posts="posts" />
        <Tags :posts="posts" />
      </div>
  </div>
</template>

<script>

import PostList from "../components/PostList.vue"
import getPosts from '../composables/getPosts';
import Tags from '../components/Tags.vue'
export default {
  name: 'Home',
  components: {
    PostList, Tags
  },
  setup(){
    const {posts, error, load} = getPosts();
    load();
    return { posts, error, load};
  }
}
</script>

<style>
  .home{
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .home h1{
    text-align: left;
  }
  .layout{
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap:30px;
    text-align: left;
  }
</style>
