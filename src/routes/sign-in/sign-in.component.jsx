import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in.component';
import './sign-in.styles.scss';

const SignIn = () => {

    const logGoogleUser = async () => {
        // pull the user object from auth object
        const { user } = await signInWithGooglePopup();

        // create the user document
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <main>
            <div className='default-container'>
                <div className='forms-container'>
                    <SignInForm></SignInForm>
                    <SignUpForm></SignUpForm>
                </div>
            </div>
        </main>
    );
}

export default SignIn;