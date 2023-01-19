<template>
  <div class="home">
    <h1>Home</h1>
  </div>
  <div v-if="!error">
    <PostList :error="error"/>
  </div>
  <PostList :posts="posts" />
</template>

<script>

import PostList from "../components/PostList.vue"
import getPosts from '../composables/getPosts';
export default {
  name: 'Home',
  components: {
    PostList
  },
  setup(){
    const {posts, error, load} = getPosts();
    load();
    console.log(error);
    console.log(posts);
    return { posts, error, load};
  }
}
</script>

<style>
  .home{
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    display: flex;
  }
</style>
