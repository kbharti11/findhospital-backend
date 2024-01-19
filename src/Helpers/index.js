// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCysDOSJykJUW49qr9VP4TUmY8daKVebBY",
  authDomain: "carboooking.firebaseapp.com",
  projectId: "carboooking",
  storageBucket: "carboooking.appspot.com",
  messagingSenderId: "351301252381",
  appId: "1:351301252381:web:831313a769ce864f3d5df4",
  measurementId: "G-9MYXZK7XLX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {analytics}