// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP0U34GKbvkp3WtfsRS98-ai_NO0QA3iw",
  authDomain: "ecommerce-3f83f.firebaseapp.com",
  projectId: "ecommerce-3f83f",
  storageBucket: "ecommerce-3f83f.appspot.com",
  messagingSenderId: "736319921538",
  appId: "1:736319921538:web:c9ee19e64854c324b7039b",
  measurementId: "G-RLZJ1E25FT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  let db =getDatabase(app);
   
  export default db;