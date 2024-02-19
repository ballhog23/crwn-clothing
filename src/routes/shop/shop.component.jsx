import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card.component';
import './shop.styles.scss';

const Shop = () => {
    const { products } = useContext(ProductsContext);

    return (
        <main>
            <div className='default-container'>
                <h1>Shop page</h1>
                <section className='products-category-container'>
                    <h2>Hats</h2>
                    <div className='cards-container'>
                        {
                            products.map((product) => {
                                return <ProductCard key={product.id} product={product} />
                            })
                        }
                    </div>
                </section>
            </div>
        </main>
    )
};

export default Shop;