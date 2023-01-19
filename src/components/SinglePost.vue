<template>
  <div class="container">
    <div class="post">
      <h3 class="title">{{ post.title }}</h3>
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
  .container{
    max-width: 1200px;
    margin: 0 auto;
  }
  .post{
    text-align: left;
  }
  .title{
    background-color: rgb(244, 139, 2);
  }
</style>