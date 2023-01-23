<template>
    <div class="tag-cloud">
        <h3>Tags</h3>
        <span class="tag" v-for="tag in tags" :key="tag">
            #{{ tag }}
        </span>
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
</style>