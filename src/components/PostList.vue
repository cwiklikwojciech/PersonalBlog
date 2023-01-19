<template>
    <div class="container">
        <div class="post-list">
            <div v-for="post in posts" :key="post.id">
                <SinglePost :post="post" :error="error"/>
            </div>
        </div>
        <div class="tags">
            Test
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
    .container {
        display: flex;
        justify-content: space-between;
        max-width: 1200px;
        align-items: center;
        margin: 0 auto;
        padding: 10px;
    }
    .post-list {
        width: 100%;
    }
</style>