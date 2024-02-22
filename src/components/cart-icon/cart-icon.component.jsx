import './cart-icon.styles.scss';
import { ReactComponent as CartIconSVG } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';


const CartIcon = () => {
    const { isCartDropdownOpen, setIsCartDropdownOpen, cartCount } = useContext(CartContext);

    const handleCartIconClick = () => setIsCartDropdownOpen(!isCartDropdownOpen)
 
    return (
        <button className='cart-icon-container' onClick={handleCartIconClick}>
            <CartIconSVG className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </button>
    )
};

export default CartIcon;