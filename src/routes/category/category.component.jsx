import { useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';

import './category.styles.scss';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <section className='products-container'>
            {
                // we added a safe guard to prevent an error mapping over the categoriesMap
                // categories map is fetched from firestore asynchronously
                // when the component first renders products is an empty object
                // thats why we get the undefined error when attempting to map the array which is categoriesMap[category]
                products && products.map((product) => <ProductCard key={product.id} product={product} />)
            }
        </section>
    )

};

export default Category;