import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBBYyuVfgGN4kx2-GIhHZa-G_CIrGR5n9g",
  authDomain: "linkedin-clone-40d92.firebaseapp.com",
  projectId: "linkedin-clone-40d92",
  storageBucket: "linkedin-clone-40d92.appspot.com",
  messagingSenderId: "508857904293",
  appId: "1:508857904293:web:96c3a2796a9c61f8c3714c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()



export { db, auth };
