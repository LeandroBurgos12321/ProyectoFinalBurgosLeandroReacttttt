// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqp3ghY4BnMqilipWCopakcbfS43fxBNU",
  authDomain: "plumshop-59f4a.firebaseapp.com",
  projectId: "plumshop-59f4a",
  storageBucket: "plumshop-59f4a.appspot.com",
  messagingSenderId: "878037494671",
  appId: "1:878037494671:web:fe5caadb5b556b9cbe79fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
