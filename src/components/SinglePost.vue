<template>
  <h3 class="title">{{ post.title }}</h3>
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

</style>