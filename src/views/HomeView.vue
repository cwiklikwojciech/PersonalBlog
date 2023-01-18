<template>
  <div class="home">
    <h1>Home</h1>
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
    const {posts, load} = getPosts();
    load();
    console.log(posts);
    return { posts, load};
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
