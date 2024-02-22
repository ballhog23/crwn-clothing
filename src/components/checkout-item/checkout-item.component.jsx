import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
    const {name, imageUrl, price, quantity} = cartItem;

    return (
        <section className='checkout-item' tabIndex='0'>
            <img src={imageUrl} alt={name} />
            <span>{name}</span>
            <span className='quantity'><button>&#11207;</button>{quantity}<button>&#11208;</button></span>
            <span>{price}</span>
            <button className='remove'>X</button>
        </section>
    )
}

export default CheckoutItem;