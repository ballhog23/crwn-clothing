import './cart-icon.styles.scss';
import { ReactComponent as CartIconSVG } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';


const CartIcon = () => {
    const { isCartDropdownOpen, setIsCartDropdownOpen } = useContext(CartContext);

    const handleCartIconClick = () => setIsCartDropdownOpen(!isCartDropdownOpen)

    return (
        <div className='cart-icon-container' onClick={handleCartIconClick}>
            <CartIconSVG className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
};

export default CartIcon;