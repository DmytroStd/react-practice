import PropTypes from 'prop-types';
import Header from '../header/Header';

const Categories = ({ id, categoriesList }) => {
  return (
    <>
      <Header title="сategories" />
      <ul>
        {categoriesList.map(el => {
          return (
            <li key={el.id}>
              <button>{el.category}</button>
              <button>...</button>
            </li>
          );
        })}
      </ul>
      <form>
        <input type="text" placeholder="new category" />
        <button type="submit">+</button>
      </form>
    </>
  );
};

Categories.propTypes = {
  categoriesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Categories;
