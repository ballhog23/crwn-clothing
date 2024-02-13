import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
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

// Initialize Google Auth Provider
const provider = new GoogleAuthProvider();

// set custom parameters for Google Auth Provider, to prompt a user to select their account
provider.setCustomParameters(
    { prompt: "select_account", }
)

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore(firebaseApp);
export const createUserDocumentFromAuth = async (userAuth) => {
    // create user document reference
    const userDocRef = doc(db, 'users', userAuth.uid);

    // get user snapshot object using the userDocRef
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
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