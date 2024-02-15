import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in.component';
import './authentication.styles.scss';

const Authentication = () => {
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

export default Authentication;