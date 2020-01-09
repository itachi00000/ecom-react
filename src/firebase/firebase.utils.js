import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBUH3OAu6hl6fJxTmgQ9KX4D7y_9yq3VDk',
  authDomain: 'ecom-db-cc1b9.firebaseapp.com',
  databaseURL: 'https://ecom-db-cc1b9.firebaseio.com',
  projectId: 'ecom-db-cc1b9',
  storageBucket: 'ecom-db-cc1b9.appspot.com',
  messagingSenderId: '458251944390',
  appId: '1:458251944390:web:7fb3a56ccbc65aed32f2c7',
  measurementId: 'G-3DM0LP8GJ0'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log('Auth', userAuth);
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  console.log('UserRef', userRef);
  const snapShot = await userRef.get();
  console.log('UserRef.get()', snapShot);

  // if user (uid) doesn't exist,  then create new
  // by getting data from google's userAuth (object)
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.log('ERRRORRR during CREATING USER', error.message);
    }
  }

  // return userRef;
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
