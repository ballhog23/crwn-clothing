import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import './shop.styles.scss';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    const categoryName = Object.keys(categoriesMap);

    return (
        <main>
            <div className='default-container'>
                <h1>Shop page</h1>
                <section className='products-category-container'>
                    {
                        categoryName.map(categoryTitle => {
                            return (
                                <div className='category-preview-container' key={categoryTitle}>
                                    <h2>{categoryTitle}</h2>
                                    <div className='category-row'>
                                        {
                                            categoriesMap[categoryTitle].map(item => {
                                                return <ProductCard key={item.id} product={item} />
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </section>
            </div>
        </main>
    )
};

export default Shop;