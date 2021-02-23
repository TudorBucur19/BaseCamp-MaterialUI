import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDkxy0smPDhZmHz2sAx6oDBkocnw-VuZPU",
    authDomain: "basecamp-72e7b.firebaseapp.com",
    projectId: "basecamp-72e7b",
    storageBucket: "basecamp-72e7b.appspot.com",
    messagingSenderId: "264791313802",
    appId: "1:264791313802:web:ef2156be05a34688340c73"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;