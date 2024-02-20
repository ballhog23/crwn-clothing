import './cart-dropdown.styles.scss';
import Button from '../button/button.component';

const CartDropDownComponent = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>

            </div>
            <Button>Go To Checkout</Button>
        </div>
    )
}

export default CartDropDownComponent;