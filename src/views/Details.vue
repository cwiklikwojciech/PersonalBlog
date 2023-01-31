<template>
  <div class="delete">
    <h1>{{post.title}}</h1>
    <p>{{ post.body }}</p>
    <button class="deleteButton" @click="handleDelete">Delete</button>
  </div>
</template>

<script>
import router from '@/router';
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

      router.push({ name: "home"});
    }

    return { post, error, handleDelete }
  }
}
</script>

<style>
  .delete{
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
    text-align: left;
  }
  
</style>