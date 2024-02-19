import './product-card.styles.scss';

import Button from '../button/button.component';

const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product;

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={name} />
            <footer className='footer'>
                <h3>{name}</h3>
                <p>{price}</p>
            </footer>
            <Button buttonType='inverted'>Add To Cart</Button>
        </div>
    )
}

export default ProductCard;