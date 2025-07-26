// Firebase v9 modular
import { initializeApp }   from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, 
         GoogleAuthProvider, 
         OAuthProvider, 
         signInWithEmailAndPassword, 
         createUserWithEmailAndPassword, 
         signInWithPopup, 
         signOut }         from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore }    from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD248lQpjTmXPOr3cfq3OyXadrQmJHfp2I",
  authDomain: "cutit-sbs-d1c08.firebaseapp.com",
  projectId: "cutit-sbs-d1c08",
  storageBucket: "cutit-sbs-d1c08.appspot.com",
  messagingSenderId: "332624006266",
  appId: "1:332624006266:web:296a9548a9d3e8b0e2bfc3",
  measurementId: "G-3BPSG1PB14"
};

const app   = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();
export const appleProvider  = new OAuthProvider('apple.com');

// Usage examples:
// signInWithEmailAndPassword(auth, email, pass)
// createUserWithEmailAndPassword(auth, email, pass)
// signInWithPopup(auth, googleProvider)
// signInWithPopup(auth, appleProvider)
// signOut(auth)
