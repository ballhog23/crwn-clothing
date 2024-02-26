import { Route, Routes, useLocation } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import './shop.styles.scss';

const Shop = () => {
const location = useLocation();
const pathname = location.pathname;
const pageTitle = pathname === '/shop' ? 'Shop' : `Shop ${pathname.split('/')[2]}`;

    return (
        <main>
            <div className='default-container'>
                <h1>{pageTitle}</h1>
                <Routes>
                    <Route index element={<CategoriesPreview />} />
                    <Route path=":category" element={<Category />} />
                </Routes>
            </div>
        </main>
    )
};

export default Shop;