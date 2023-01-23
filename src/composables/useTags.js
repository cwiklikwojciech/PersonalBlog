import { ref } from '@vue/reactivity';

const useTags = (props) => {
    const tags = ref([]);
    const tagsSet = new Set();

    props.forEach(post => {
        post.tags.forEach(tag => tagsSet.add(tag));
    });

    tags.value = [...tagsSet];
    

    return { tags };
}

export default useTags;