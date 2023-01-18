import { ref } from '@vue/reactivity';
import { projectFirestore } from '../firebase/config';


const getPosts = () => {
    const posts = ref([]);
    const load = async () => {
        const res = await projectFirestore.collection('posts').get();
        posts.value = res.docs.map(doc => {
            return {...doc.data()}
        })
        
    }
    return {posts, load}
}

export default getPosts;