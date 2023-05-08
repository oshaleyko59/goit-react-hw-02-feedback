import PropTypes from 'prop-types';
import css from './SectionTitle.module.css';

export const SectionTitle = ({ title, children }) => {
  return (
    <>
      <h2 className={css.title}>{title}</h2>
      {children}
    </>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
