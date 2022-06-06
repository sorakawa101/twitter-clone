// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUvYtzu3j8hICixSge42mYbvK5NISuvNI",
    authDomain: "twitter-clone-18708.firebaseapp.com",
    projectId: "twitter-clone-18708",
    storageBucket: "twitter-clone-18708.appspot.com",
    messagingSenderId: "44912708990",
    appId: "1:44912708990:web:f972e79ed3bc499b62772f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;