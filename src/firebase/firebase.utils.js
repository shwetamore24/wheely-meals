import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDB7JIUaefz1fMlTEGLWdyeK_0BLifFS_M',
  authDomain: 'wheely-meals-db.firebaseapp.com',
  projectId: 'wheely-meals-db',
  storageBucket: 'wheely-meals-db.appspot.com',
  messagingSenderId: '109861181368',
  appId: '1:109861181368:web:85ad0a6436b1dacd20614d',
  measurementId: 'G-VJVKW0445M',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
