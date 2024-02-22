import './product-card.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';

const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartContext);
    const { name, imageUrl, price } = product;

    const addProductToCart = () => addItemToCart(product)

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={name} />
            <footer className='footer'>
                <h3>{name}</h3>
                <p>{price}</p>
            </footer>
            <Button buttonType='inverted' onClick={addProductToCart}>Add To Cart</Button>
        </div>
    )
}

export default ProductCard;