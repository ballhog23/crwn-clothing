import './cart-dropdown.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropDownComponent = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const navigateToCheckout = () => navigate('/checkout')

    return (
        <div className='cart-dropdown-container' tabIndex='0'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            </div>
            <Button onClick={navigateToCheckout}>Go To Checkout</Button>
        </div>
    )
}

export default CartDropDownComponent;