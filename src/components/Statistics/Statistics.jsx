import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ categories }) => {
  return (
    <ul className={css.container}>
      {categories.map(({ id, label, value }) => (
        <li key={id}>
          {label}: {value}
        </li>
      ))}
    </ul>
  );
};

Statistics.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  }))
};

