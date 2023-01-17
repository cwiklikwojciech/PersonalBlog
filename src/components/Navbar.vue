<template>
    <header>
        <h1>Personal Blog</h1>
        <nav>
            <router-link :to="{ name: 'home' }">Home</router-link> 
            <router-link :to="{ name: 'createPost' }">Create Post</router-link>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style>
    header{
        display: flex;
        justify-content: space-between;
        max-width: 1200px;
        align-items: center;
        margin: 0 auto;
        padding: 10px;
    }
    header h1{
        color: hsl(0deg 2% 62% / 72%);
        font-size: 48px;
    }
    header a{
       text-decoration: none;
       margin-left: 20px;
    }
    header a.router-link-active{
        color: #42b983;
        font-weight: bold;
    }
</style>