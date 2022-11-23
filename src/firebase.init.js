import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {

    apiKey: "AIzaSyAKZ_Khfw1CqSsi_NKAkmBskf9CgiQuq4c",
    authDomain: "test-project-d19b5.firebaseapp.com",
    projectId: "test-project-d19b5",
    storageBucket: "test-project-d19b5.appspot.com",
    messagingSenderId: "590582323765",
    appId: "1:590582323765:web:c13f78394427f9adebaf7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth