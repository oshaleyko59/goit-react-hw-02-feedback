import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.container}>{
      options.map(({ id, label }) => {
        return (<li key={id}>
          <button
            onClick={onLeaveFeedback}
            type="button"
            className={css.feedbackBtn}
            id={id}
          >
            {label}
          </button>
        </li>
        );
      })
    }
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })),
  onLeaveFeedback: PropTypes.func.isRequired,
};

