import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDwMJVJo90Eypk-gw3GFfch-OagJkQskkQ",
  authDomain: "mymoney-39aea.firebaseapp.com",
  projectId: "mymoney-39aea",
  storageBucket: "mymoney-39aea.appspot.com",
  messagingSenderId: "495196062481",
  appId: "1:495196062481:web:096720c11baeaebc9a82b0"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }