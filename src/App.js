

const App = () => {

  const categoriesArray = [
    {
      id: 1,
      title: 'Hats',
    },
    {
      id: 2,
      title: 'Jackets',
    },
    {
      id: 3,
      title: 'Sneakers',
    },
    {
      id: 4,
      title: 'Womens',

    },
    {
      id: 5,
      title: 'Mens',
    },
  ]

  return (
    <div className="categories-container">
      {
        categoriesArray.map(({title, id}) => {
          return (
            <section className="category-container" key={id}>
              {/* <img className="category-image" src="" alt="" loading="lazy" decoding="async" /> */}
              <article className="category-body-container">
                <header className="category-header">
                  <h2>{title}</h2>
                </header>
                <p>Show Now</p>
              </article>
            </section>
          );
        })
      }
    </div>
  );
}

export default App;
