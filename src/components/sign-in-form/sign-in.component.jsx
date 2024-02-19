import { useState } from 'react';
import { signInWithGooglePopup, signInUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
// import { useNavigate } from "react-router-dom";
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

// set a default state for the form fields being managed
// this allows us to keep track of multiple fields states
// this is possible because of the name and value attributes matching that of our objects keys
const defaultFormFields = {
    email: "",
    password: "",
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);

    const { email, password } = formFields;

    // const navigate = useNavigate();

    const resetFormFields = () => {
        // set form fields to default state after successful sign up
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => await signInWithGooglePopup();

    const handleFormFieldChange = (e) => {
        const { name, value } = e.target;

        setFormFields({ ...formFields, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInUserWithEmailAndPassword(email, password);

            resetFormFields();
            // navigate('/')

        } catch (error) {
            // console.log(error.message, error.code);
            switch (error.code) {
                case 'auth/invalid-credential':
                case 'auth/invalid-email':
                case 'auth/invalid-password':
                case 'auth/user-not-found':
                    window.alert('Error signing in, invalid credentials');
                    break;
                case 'auth/popup-closed-by-user':
                    break;
                default:
                    window.alert('Error signing in, please try again. If you suspect an issue with the website please contact the administrator. Thank you.');
            }
        }
    }

    return (
        <section className='sign-in-container'>
            <h2>Sign In</h2>
            <p>Already have an account?</p>
            <form aria-label="Sign In Form" onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    value={email}
                    name='email'
                    onChange={handleFormFieldChange}
                    id="email-sign-in-input"
                    label="Email"
                    autoComplete="email"
                    required
                />
                <FormInput
                    type="password"
                    value={password}
                    name='password'
                    id="password-sign-in-input"
                    label="Password"
                    onChange={handleFormFieldChange}
                    autoComplete="new-password"
                    minLength="6"
                    required
                />
                <div className='button-wrapper'>
                    <Button type='submit'>Sign In</Button>
                    <Button onClick={signInWithGoogle} buttonType='google' type="button">Sign In Google</Button>
                </div>
            </form>
        </section>
    )
}

export default SignInForm;