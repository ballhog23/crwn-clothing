import CategoryCard from "../category-card/category-card.component";
import './category-list.styles.scss';

const CategoryList = () => {

    // initialize an array of objects to represent store categories
    const categoriesArray = [
        {
            id: 1,
            title: 'Hats',
            imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
            imageAlt: 'hats',
        },
        {
            id: 2,
            title: 'Jackets',
            imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
            imageAlt: 'jackets',
        },
        {
            id: 3,
            title: 'Sneakers',
            imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
            imageAlt: 'sneakers',
        },
        {
            id: 4,
            title: 'Womens',
            imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
            imageAlt: 'womens',
        },
        {
            id: 5,
            title: 'Mens',
            imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
            imageAlt: 'mens',
        },
    ];

    return (
        <main>
            <div className='content-container'>
                <div className="categories-list-container">
                    {
                        categoriesArray.map(({ title, id, imageUrl, imageAlt }) => {
                            return (
                                <CategoryCard title={title} key={id} imageUrl={imageUrl} alt={imageAlt} index={id} />
                            );
                        })
                    }
                </div>
            </div>
        </main>
    );
}

export default CategoryList;