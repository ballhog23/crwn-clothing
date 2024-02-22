import './cart-item.styles.scss';


const CartItem = ({ cartItem }) => {
    const { name, quantity, price, imageUrl } = cartItem;

    return (
        <section className='cart-item-container' tabIndex='0'>
            <img src={imageUrl} alt={name} />
            <div className='item-details'>
                <h2 className='name'>{name}</h2>
                <span>{quantity} x ${price}</span>
            </div>
        </section>
    )
};

export default CartItem;