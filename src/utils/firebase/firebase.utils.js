import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, EmailAuthProvider, EmailAuthCredential } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUz7ZB0zncLC5jrSKwXX3zTvEVaAVVzHM",
    authDomain: "crwn-clothing-db-6c697.firebaseapp.com",
    projectId: "crwn-clothing-db-6c697",
    storageBucket: "crwn-clothing-db-6c697.appspot.com",
    messagingSenderId: "320044214650",
    appId: "1:320044214650:web:141698f3400db0a1d34ec3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Google Auth Provider Instance, allowing for access to the GoogleAuthProvider object
const googleProvider = new GoogleAuthProvider();

// Set custom parameters for Google Auth Provider, to prompt a user to select their account
googleProvider.setCustomParameters(
    { prompt: "select_account", }
)

// Initialize Firebase EmailAuthProvider
// const emailAuthProvider = new EmailAuthProvider();

// Generate a singleton of Firebase authentication instance
export const auth = getAuth();

// Configure Google signInWithPopup by passing the auth, and the provider (Google)
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

// Configure EmailAuthProvider
// const signInWithEmailAndPassword = () => EmailAuthCredential(auth, )

// Configure Email Auth Provider 

// reference our database
export const db = getFirestore(firebaseApp);

// function to create user document within the users collection
export const createUserDocumentFromAuth = async (userAuth) => {

    // create user document reference
    const userDocRef = doc(db, 'users', userAuth.uid);

    // get user snapshot object using the userDocRef
    const userSnapshot = await getDoc(userDocRef);

    // if the user snapshot does not exist
    if (!userSnapshot.exists()) {

        // pull the displayName and email off of the userAuth object
        const { displayName, email } = userAuth;

        // initialize a createdAt variable that is equal to the date, that will be used when a user is stored in our database
        const createdAt = new Date();

        try {
            // set the document by passing the user doc reference, and passing the user data
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }

    // if the user already exists, return the user reference
    return userDocRef;
}