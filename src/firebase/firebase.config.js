// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu8oBLwhUMmz_eO72VgnWAvj05BJeG4vg",
  authDomain: "filterflex-35340.firebaseapp.com",
  projectId: "filterflex-35340",
  storageBucket: "filterflex-35340.appspot.com",
  messagingSenderId: "1010617433711",
  appId: "1:1010617433711:web:975029f7a248830392579a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth