import './checkout-item.styles.scss';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
    const { addItemToCart, removeItemFromCart, deleteItemFromCart } = useContext(CartContext);

    const { name, imageUrl, price, quantity } = cartItem;

    const handleIncrement = () => addItemToCart(cartItem);

    const handleDecrement = () => removeItemFromCart(cartItem);

    const handleProductDelete = () => deleteItemFromCart(cartItem);

    return (
        <section className='checkout-item' tabIndex='0'>
            <img src={imageUrl} alt={name} />
            <span>{name}</span>
            <span className='quantity'>
                <button className='decrement' onClick={handleDecrement}>&#11207;</button>
                {quantity}
                <button className='increment' onClick={handleIncrement}>&#11208;</button>
            </span>
            <span>{price}</span>
            <button className='remove' onClick={handleProductDelete}>X</button>
        </section>
    )
}

export default CheckoutItem;