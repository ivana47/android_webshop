// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore, collection, getDocs} from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAB-oSKnzUisw6dV2irq6z7RM-dzEbNa1I",
    authDomain: "authhackaton.firebaseapp.com",
    projectId: "authhackaton",
    storageBucket: "authhackaton.appspot.com",
    messagingSenderId: "292550940413",
    appId: "1:292550940413:web:c24358dee4e93f7d37d094"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);