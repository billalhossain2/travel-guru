// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAqYbl3YeVQupH9yP6i0V2YAVp-wn5hKU",
  authDomain: "travel-guru-f809f.firebaseapp.com",
  projectId: "travel-guru-f809f",
  storageBucket: "travel-guru-f809f.appspot.com",
  messagingSenderId: "107299244361",
  appId: "1:107299244361:web:58880344bfbcd4ec547298"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;