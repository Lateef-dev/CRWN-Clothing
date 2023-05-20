import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyD55Qi4FS7IjsRWfYksMdRgaOx2uM9Cwog",
    authDomain: "crwn-clothing-app-f31db.firebaseapp.com",
    projectId: "crwn-clothing-app-f31db",
    storageBucket: "crwn-clothing-app-f31db.appspot.com",
    messagingSenderId: "649780386153",
    appId: "1:649780386153:web:dcb2fe8809a1e559c8c5f8",
    measurementId: "G-R64LFN4BFF"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

      if(!snapShot.exists) {  
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
        } catch (error)  {
            console.log('error creating user', error.message);
        }
      }

      return userRef;
   }

  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;