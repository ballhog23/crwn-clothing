import './cart-dropdown.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropDownComponent = () => {
    const { cartItems, cartCount } = useContext(CartContext);
    const navigate = useNavigate();
    const navigateToCheckout = () => navigate('/checkout')

    console.log(cartCount)

    return (
        <div className='cart-dropdown-container' tabIndex='0'>
            <div className='cart-items'>
                {
                    cartCount > 0 ?
                        cartItems.map(item => <CartItem key={item.id} cartItem={item} />) :
                        <span>There are no items in your cart, visit the shop page!</span>
                }
            </div>
            <Button onClick={navigateToCheckout}>Go To Checkout</Button>
        </div>
    )
}

export default CartDropDownComponent;