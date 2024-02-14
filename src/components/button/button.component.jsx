import './button.styles.scss';

// set a object to define the different types of button styles we have
const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
    undefined: ''
}

const Button = ({children, buttonType, otherProps}) => {
    // in the button class we target what is passed as the buttonType (or what is not) allowing us to target our
    // BUTTON_TYPE_CLASSES object with a string we pass
    // children is anything that is inside our Button Component
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>{children}</button>
    )
}

export default Button;