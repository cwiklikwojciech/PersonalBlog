<template>
  <div class="container">
    <div class="post">
      <router-link :to="{ name: `details`, params: { id: post.id}}">
        <h3 class="title">{{ post.title }}</h3>
      </router-link>
      <p>{{ post.body }}</p>
      <span v-for="tag in post.tags" :key="tag">
          #{{ tag }}
      </span>
    </div>

  </div>
  
  
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props: ['post'],
    setup(props){
      const snippet = computed(() => {
        return props.post.body;
      })
    }
}
</script>

<style>
  .post{
  }
  .title{
    background-color: rgb(244, 139, 2);
  }
</style>