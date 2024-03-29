import ProductCard from '../product-card/product-card.component';
import './category-preview.styles.scss';

const CategoryPreview = ({title, products}) => {
    return (
        <div className='category-preview-container'>
            <h2>{title}</h2>
            <div className='category-row'>
                {products.filter((_, index) => index < 4).map(product => <ProductCard key={product.id} product={product} />)}
            </div>
        </div>
    )
};

export default CategoryPreview;