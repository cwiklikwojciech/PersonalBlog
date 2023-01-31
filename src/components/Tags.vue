<template>
    <div class="tag-cloud">
        <h3>Tags</h3>
        <div class="tag" v-for="tag in tags" :key="tag">
            <router-link :to="{ name: `tag`, params: { tag: tag }}">
                #{{ tag }}
            </router-link>
        </div>
    </div>
</template>

<script>
import useTags from '../composables/useTags'
export default {
    props:['posts'],
    setup(props){
        const { tags } = useTags(props.posts);

        return { tags }
    }
}
</script>

<style>
    .tag-cloud h3{
        border-bottom: 1px solid #eee;
        padding: 16px 8px;
        color: #444;
    }
    .tag-cloud div{
        display: inline-block;
        padding: 10px;
    }
    .tag a{
        text-decoration: none;
        color: #ccc;
    }
    .tag-cloud a.router-link-active{
        color: #ff8800;
        font-weight: bold;
    }
</style>