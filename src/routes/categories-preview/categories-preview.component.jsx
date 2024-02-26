import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import './categories-preview.styles.scss';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    const categoryName = Object.keys(categoriesMap);

    return (
        <section className='products-category-container'>
            {
                categoryName.map(categoryTitle => {
                    const products = categoriesMap[categoryTitle]
                    return <CategoryPreview key={categoryTitle} title={categoryTitle} products={products} />
                })
            }
        </section>
    )
};

export default CategoriesPreview;