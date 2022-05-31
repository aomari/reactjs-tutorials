// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBKKG4V2Cl7DF0rNKjBom1tqdwQyA-JmPw",
    authDomain: "melodic-agent-130618.firebaseapp.com",
    projectId: "melodic-agent-130618",
    storageBucket: "melodic-agent-130618.appspot.com",
    messagingSenderId: "495814621125",
    appId: "1:495814621125:web:af9f017a6610254de23dac",
    measurementId: "G-XTGPKJ3PG6"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        const name = result.user.displayName
        const email = result.user.email
        const profilePic = result.user.photoURL

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("profilePic", profilePic)
    }).catch((error) => {
        console.log(error)
    })
}