import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCoxQ-d3BA0oPnXJv13Gvq3ZQIbD5LDnqE",
    authDomain: "crowndb-eeddd.firebaseapp.com",
    databaseURL: "https://crowndb-eeddd.firebaseio.com",
    projectId: "crowndb-eeddd",
    storageBucket: "crowndb-eeddd.appspot.com",
    messagingSenderId: "786709661310",
    appId: "1:786709661310:web:fa43bef53005890bc07a2f",
    measurementId: "G-CDKBTXREMX"
  };

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
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

