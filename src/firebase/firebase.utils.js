import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyCMJ8SKZwZmJYsPcI2fBvagPYZA_zyTC9M",
  authDomain: "crwn-db-7ebaa.firebaseapp.com",
  projectId: "crwn-db-7ebaa",
  storageBucket: "crwn-db-7ebaa.appspot.com",
  messagingSenderId: "731729324251",
  appId: "1:731729324251:web:fc25707aebe095295644fe",
  measurementId: "G-1TKDHPQWWG",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
