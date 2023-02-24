import firebase from '@firebase/app-compat';
const firebaseConfig = {
  apiKey: "AIzaSyBr8nKpPPrWDEjSciPlvMna2AbnIiZVYho",
  authDomain: "todo-app-41899.firebaseapp.com",
  databaseURL: "https://todo-app-41899-default-rtdb.firebaseio.com",
  projectId: "todo-app-41899",
  storageBucket: "todo-app-41899.appspot.com",
  messagingSenderId: "856448568837",
  appId: "1:856448568837:web:98bd449fa3a8692906166c"
};


// Initialize Firebase
const db =firebase.initializeApp(firebaseConfig);
export default db;