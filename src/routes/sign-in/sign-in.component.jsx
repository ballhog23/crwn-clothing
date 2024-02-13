import { signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {

    const logGoogleUser = async () => {
        // pull the user object from auth object
        const { user } = await signInWithGooglePopup();

        // create the user document
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <>
            <h2>Sign In</h2>
            <SignUpForm></SignUpForm>
            <button onClick={logGoogleUser}>
                Sign In with Google Popup
            </button>
        </>
    );
}

export default SignIn;