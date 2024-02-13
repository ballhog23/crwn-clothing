const SignUpForm = () => {
    return (
        <form>
            <label htmlFor="username-input">Username</label>
            <br />
            <input type="text" id="username-input" placeholder="Username" required></input>
            <br />
            <label htmlFor="password-input">Password</label>
            <br />
            <input type="text" id="password-input" placeholder="Password" required></input>
            <br />
            <button>Sign In</button>
        </form>
    )
};

export default SignUpForm;