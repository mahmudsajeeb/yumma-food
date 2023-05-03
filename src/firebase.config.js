// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFmYpZ2wwlHnfZflCBJ6nB7uV6H9nQcZg",
  authDomain: "yumma-1624b.firebaseapp.com",
  projectId: "yumma-1624b",
  storageBucket: "yumma-1624b.appspot.com",
  messagingSenderId: "244621682241",
  appId: "1:244621682241:web:85e0a5d464cfb259d748c0",
  measurementId: "G-6YNBQ7V11G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app