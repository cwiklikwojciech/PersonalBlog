<template>
  <h1>{{post.title}}</h1>
  <p>{{ post.body }}</p>
  <button @click="handleDelete">Delete</button>
</template>

<script>
import getPost from '../composables/getPost';
import { projectFirestore } from '../firebase/config';
export default {
  name: 'Details',
  props:['id'],
  setup(props){
    const {post, error, load} = getPost(props.id);
    load();
    
    const handleDelete = async () => {
      await projectFirestore.collection('posts')
            .doc(props.id)
            .delete();
    }

    return { post, error, handleDelete }
  }
}
</script>

<style>

</style>