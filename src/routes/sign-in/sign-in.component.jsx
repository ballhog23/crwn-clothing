import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
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
            <section className='sign-in-section'>
                <h2>Sign In</h2>
                <button onClick={logGoogleUser}>
                    Sign In with Google Popup
                </button>
            </section>
            <section className='sign-up-section'>
                <SignUpForm></SignUpForm>
            </section>
        </>
    );
}

export default SignIn;