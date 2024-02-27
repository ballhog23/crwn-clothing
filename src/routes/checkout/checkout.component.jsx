import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.scss';

const Checkout = () => {

    const { cartItems, cartTotalPrice, cartCount } = useContext(CartContext);

    console.log(cartCount)

    return (
        <main>
            <div className='default-container'>
                <h1>Checkout</h1>
                <section className='checkout-container'>
                    <header className='checkout-header'>
                        <span>Product</span>
                        <span>Description</span>
                        <span>Quantity</span>
                        <span>Price</span>
                        <span>Remove</span>
                    </header>
                    <div className='checkout-item-container'>
                    {
                        cartCount > 0 ?
                        cartItems.map(item => <CheckoutItem key={item.id} cartItem={item} />) :
                        <span>There are no items in your cart, visit the shop page!</span>
                    }
                    </div>
                    <footer className='checkout-total-container'>
                        <span>Total: ${cartTotalPrice}</span>
                    </footer>
                </section>
            </div>
        </main>
    )
}

export default Checkout;
