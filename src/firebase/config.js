import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCsH8MMm2I1GezPKuFHyOVC6XTv7BpTQi8",
    authDomain: "vue-firebase-site-de9cb.firebaseapp.com",
    projectId: "vue-firebase-site-de9cb",
    storageBucket: "vue-firebase-site-de9cb.appspot.com",
    messagingSenderId: "760496318687",
    appId: "1:760496318687:web:64dd19ffcca1d594bd616a"
  };

//init firebase
firebase.initializeApp(firebaseConfig);

//init firestore service
const projectFirestore = firebase.firestore();

export { projectFirestore }