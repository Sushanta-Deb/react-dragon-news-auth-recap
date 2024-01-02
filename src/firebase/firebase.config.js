// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFKZbeYfx-Vh-nMN3Xcm_yoc6jPIO2Sr8",
  authDomain: "react-auth-dragon-news-dd92f.firebaseapp.com",
  projectId: "react-auth-dragon-news-dd92f",
  storageBucket: "react-auth-dragon-news-dd92f.appspot.com",
  messagingSenderId: "252035956248",
  appId: "1:252035956248:web:5bace5ebb64e8592e34d6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;