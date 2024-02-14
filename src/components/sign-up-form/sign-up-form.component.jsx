import { useState } from 'react';
import { createUserDocumentFromAuth, createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss';
import Button from  '../button/button.component';

// set a default state for the form fields being managed
// this allows us to keep track of multiple fields states
// this is possible because of the name and value attributes matching that of our objects keys
const defaultFormFields = {
    displayName: "",
    email: "",
    passwordInput: "",
    passwordConfirmInput: ""
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);

    // pull the form fields 'name' off the form fields object
    const { displayName, email, passwordInput, passwordConfirmInput } = formFields;

    const resetFormFields = () => {
        // set form fields to default state after successful sign up
        setFormFields(defaultFormFields)
    }

    const handleFormFieldChange = (e) => {
        // pull the name and value off the targeted field
        const { name, value } = e.target;
        // we only want to change the targeted input based on the 'name' field
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // the passwords must match to continue authentication
        if (passwordInput !== passwordConfirmInput) {
            window.alert('passwords must match');
            return;
        }

        try {
            // password matched, we will continue with authentication
            const { user } = await createAuthUserWithEmailAndPassword(email, passwordConfirmInput);
            // create the user document
            await createUserDocumentFromAuth(user, { displayName });
            // reset form fields on success
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                window.alert('Cannot create user, email is already in use');
            }
        }
    };

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <p>Sign up with your email now!</p>
            <form onSubmit={handleSubmit} aria-label="Sign Up Form">
                <FormInput
                    type="text"
                    value={displayName}
                    name='displayName'
                    onChange={handleFormFieldChange}
                    id="display-name-input"
                    label='Display Name'
                    autoComplete="username"
                    required
                />
                <FormInput
                    type="email"
                    value={email}
                    name='email'
                    onChange={handleFormFieldChange}
                    id="email-input"
                    label="Email"
                    autoComplete="email"
                    required
                />
                <FormInput
                    type="password"
                    value={passwordInput}
                    name='passwordInput'
                    id="password-input"
                    label="Password"
                    onChange={handleFormFieldChange}
                    autoComplete="new-password"
                    minLength="6"
                    required
                />
                <FormInput
                    type="password"
                    value={passwordConfirmInput}
                    name='passwordConfirmInput'
                    id="password-confirm-input"
                    label="Confirm Password"
                    onChange={handleFormFieldChange}
                    autoComplete="new-password"
                    minLength="6"
                    required
                />
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
};

export default SignUpForm;