import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyAl5ZSrkUU1pIQX_UvMTyrQ8fjw1iYCCQM",
    authDomain: "goldenshoe-9c251.firebaseapp.com",
    databaseURL: "https://goldenshoe-9c251.firebaseio.com",
    projectId: "goldenshoe-9c251",
    storageBucket: "goldenshoe-9c251.appspot.com",
    messagingSenderId: "497556891301",
    appId: "1:497556891301:web:8c9f24f265846a33178f4c",
    measurementId: "G-PFWTSXRKHF"
}

const app = firebase.initializeApp(firebaseConfig)



// utils
const db = app.firestore()
const auth = app.auth()
const storage = app.storage();



// const storage = require('@google-cloud/storage')


// collection references
// const photoCollection = db.collection('photos')
// const postsCollection = db.collection('posts')
// const commentsCollection = db.collection('comments')
// const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  storage
//   photoCollection,
//   postsCollection,
//   commentsCollection,
//   likesCollection
}