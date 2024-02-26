import CategoriesPreview from '../categories-preview/categories-preview.component';
import './shop.styles.scss';

const Shop = () => {
    return (
        <main>
            <div className='default-container'>
                <h1>Shop page</h1>
                <CategoriesPreview />
            </div>
        </main>
    )
};

export default Shop;