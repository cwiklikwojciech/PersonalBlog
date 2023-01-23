import { ref } from '@vue/reactivity';
import { projectFirestore } from '../firebase/config';


const getPost = (id) => {
    const post = ref([]);
    const error = ref(null);
    const load = async () => {
        try{
            const res = await projectFirestore.collection('posts').doc(id).get();
            console.log(res);
        }catch(err){
            error.value = err.message;
        }
        
    }
    return {post, error, load}
}

export default getPost;