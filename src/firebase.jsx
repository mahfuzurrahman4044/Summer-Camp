// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAbip4U1UfN-I9BVFynZv7FHRBVv1S8thA",
    authDomain: "summer-camp-4dcb2.firebaseapp.com",
    projectId: "summer-camp-4dcb2",
    storageBucket: "summer-camp-4dcb2.appspot.com",
    messagingSenderId: "477228905687",
    appId: "1:477228905687:web:ebbc840f0dd33000fa2c92",
    measurementId: "G-H3W8N8FXLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;