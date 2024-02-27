import './category-card.styles.scss';

const CategoryCard = ({ title, imageUrl, imageAlt, index }) => {
    return (
        <section className={index === 4 || index === 5 ? 'large category-container' : "category-container"}>
            <img className="category-image" src={imageUrl} alt={imageAlt} loading="eager" decoding="sync" />
            <article className="category-body-container">
                <header>
                    <h2>{title}</h2>
                </header>
                <p>Show Now</p>
            </article>
        </section>
    )
}

export default CategoryCard;