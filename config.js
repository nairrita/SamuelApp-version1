import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBWulj26yK0NG20NnNYhqEVl_710dh2yNE",
    authDomain: "oldyoungmeetapp.firebaseapp.com",
    projectId: "oldyoungmeetapp",
    storageBucket: "oldyoungmeetapp.appspot.com",
    messagingSenderId: "316177608141",
    appId: "1:316177608141:web:7e779e26d5bf5e1618a884"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()