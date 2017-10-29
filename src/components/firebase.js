import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBDGGnyUdysSZyCNHx9OGuPBUVtY2sLkOg",
    authDomain: "kaleidoscope-10f23.firebaseapp.com",
    databaseURL: "https://kaleidoscope-10f23.firebaseio.com",
    projectId: "kaleidoscope-10f23",
    storageBucket: "kaleidoscope-10f23.appspot.com",
    messagingSenderId: "351059243848"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;