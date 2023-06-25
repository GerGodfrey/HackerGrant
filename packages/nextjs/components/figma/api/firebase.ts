import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// ¿? 
//const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG)

const firebaseConfig = {
    apiKey: "AIzaSyCPz1TvU_wKTWkjKfB5jOhW6K2ltcbj690",
    authDomain: "hackergrant-123a0.firebaseapp.com",
    projectId: "hackergrant-123a0",
    storageBucket: "hackergrant-123a0.appspot.com",
    messagingSenderId: "1035216554651",
    appId: "1:1035216554651:web:9fde6b12eac7c3e210943e",
    measurementId: "G-G9RN8YKWGR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebase = getFirestore(app);