import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCUPadhCXooE1yZjV-ZpKvow2Yx6ssruAY",
  authDomain: "basecamp-b57f1.firebaseapp.com",
  projectId: "basecamp-b57f1",
  storageBucket: "basecamp-b57f1.appspot.com",
  messagingSenderId: "213545142197",
  appId: "1:213545142197:web:95d8143a4e4be42915fbfc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const storage = firebase.storage();

  export default firebase;