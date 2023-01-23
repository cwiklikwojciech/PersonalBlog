<template>
  {{id}}
</template>

<script>
export default {
  name: 'Details',
  props:['id'],
  setup(props){
    console.log(props.id);
  }
}
</script>

<style>

</style>