import firebase from 'firebase';
import 'firebase/firestore'


var firebaseConfig = {
  apiKey: "AIzaSyDXRp5EnT1PRA0nlFVO54s-AOCXfcDkgws",
  authDomain: "eindproject-947e2.firebaseapp.com",
  databaseURL: "https://eindproject-947e2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "eindproject-947e2",
  storageBucket: "eindproject-947e2.appspot.com",
  messagingSenderId: "682503111829",
  appId: "1:682503111829:web:8de7b7bc9166eb29c6079c",
  measurementId: "G-RLY7WQ0LMW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase