import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        // pull the user object from auth object
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>
                Sign In with Google Popup
            </button>
        </>
    );
}

export default SignIn;