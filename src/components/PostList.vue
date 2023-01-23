<template>
    <div class="grid-container">
        <div v-for="post in posts" :key="post.id" class="grid-item">
            <SinglePost :post="post" :error="error"/>
        </div>
    </div>
</template>

<script>
import SinglePost from "./SinglePost";
export default {
    props:['posts', 'error'],
    components: {
        SinglePost
    },
    setup(props){
        console.log(props.error);
    }
}
</script>

<style>
    .grid-container {
        display: grid;
        grid-template-columns: 50% 50%;
    }
    .grid-item {
        background-color: rgba(255, 255, 255, 0.8);
        padding-right: 20px;
        margin-bottom: 20px;
    }
</style>