import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyAPufljn2w57bCRxf7ln9ga5-PoX0yYW_8",
    authDomain: "utube-sparkz.firebaseapp.com",
    projectId: "utube-sparkz",
    storageBucket: "utube-sparkz.appspot.com",
    messagingSenderId: "486932816570",
    appId: "1:486932816570:web:c54bcce60843744f7d5883"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider()

  const storage = firebase.storage()

  const timestamp = firebase.firestore.FieldValue.serverTimestamp();

  export {db,auth,provider,storage,timestamp}