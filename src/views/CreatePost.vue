<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input v-model="title" type="text" required/>

      <label>Context:</label>
      <textarea v-model="context" required />

      <label>Tags:</label>
      <input v-model="tag" type="text" @keydown.enter.prevent="handleKeydown"/> 
      <div class="pill" v-for="tag in tagsArr" :key="tag">
        #{{ tag }}
      </div>
      <button class="submit">Add Post</button>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { projectFirestore } from '../firebase/config';

export default {
  name: 'CreatePost',
  setup(){
    const title = ref(''),
          tag = ref(''),
          context = ref(''),
          tagsArr = ref([]);

    const handleKeydown = () => {
      if(!tagsArr.value.includes(tag.value) && tag.value){
        tag.value = tag.value.replace(/\s/, '') // remove all white space
        tagsArr.value.push(tag.value);
      }

      tag.value = '';
    }

    const handleSubmit = async() => {
      const post = {
        title: title.value,
        body: context.value,
        tags: tagsArr.value,
        test: title.value
      }

      await projectFirestore.collection('posts').add(post);

    }


    return { title, tag, context, tagsArr, handleKeydown, handleSubmit }
  }
}
</script>

<style>
  .create{
    max-width: 480px;
    margin: 0 auto;
    padding: 10px;
    text-align: left;
  }
  label{
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
  label:before{
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
  }
  input, textarea{
    width: 100%;
    border: 1px solid #eee;
    margin: 10px 0;
    padding: 10px;
    box-sizing: border-box; 
  }
  textarea{
    height: 200px;
  }
  .pill{
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
  button{
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px
  }
</style>
