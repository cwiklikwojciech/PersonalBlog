<template>
    <div class="tag">
        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length" class="layout">
            <PostList :posts="postWithTag"/>
            <Tags :posts="posts" />
        </div>
        <div v-else><Spinner/></div>
    </div>
   
</template>

<script>
import getPosts from '../composables/getPosts'
import { useRoute } from 'vue-router';
import { computed } from '@vue/runtime-core';
import PostList from '../components/PostList.vue'
import Tags from '../components/Tags.vue'
import Spinner from '../components/Spinner.vue'

export default {
    name: 'Tag',
    components: { PostList, Tags, Spinner },
    setup(){
        const route = useRoute();
        const {posts, error, load} = getPosts();    

        load();

        const postWithTag = computed (() => {
            return posts.value.filter((p) => p.tags.includes(route.params.tag) )
        })  
         
        return{ posts, error, postWithTag };
    } 
}
</script>

<style>
    .tag{
        max-width: 1200px;
        margin: 0 auto;
        padding: 10px;
    }
</style>