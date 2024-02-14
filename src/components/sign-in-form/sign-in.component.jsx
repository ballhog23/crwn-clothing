import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

const SignInForm = () => {
    return (
        <section className='sign-in-container'>
            <h2>Sign In</h2>
            <FormInput
                type="email"
                value="email"
                name='email'
                // onChange={handleFormFieldChange}
                id="email-sign-in-input"
                label="Email"
                autoComplete="email"
                required
            />
            <FormInput
                type="password"
                value="password"
                name='passwordSignInInput'
                id="password-sign-in-input"
                label="Password"
                // onChange={handleFormFieldChange}
                autoComplete="new-password"
                minLength="6"
                required
            />
            <Button type='submit'>Sign Up</Button>
        </section>
    )
}

export default SignInForm;