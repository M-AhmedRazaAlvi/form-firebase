import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
function StartFirebase(){
    const firebaseConfig = {
        apiKey: "AIzaSyBGW3xeCvuXsnipNYVyyNAKDeGlEU97jTQ",
        authDomain: "fruits-f92d1.firebaseapp.com",
        projectId: "fruits-f92d1",
        storageBucket: "fruits-f92d1.appspot.com",
        messagingSenderId: "631410259072",
        appId: "1:631410259072:web:a54cbcf65555a99e35a265"
      };
      
      // Initialize Firebase
      const app =initializeApp(firebaseConfig);
      return getDatabase(app)
     
}
export default StartFirebase;
