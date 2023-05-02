import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

//<FeedbackOptions options={} onLeaveFeedback={}>

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={css.container}>
      <button
        onClick={onLeaveFeedback}
        type="button"
        className={css.feedbackBtn}
        id="good"
      >
        Good
      </button>
      <button
        onClick={onLeaveFeedback}
        type="button"
        className={css.feedbackBtn}
        id="neutral"
      >
        Neutral
      </button>
      <button
        onClick={onLeaveFeedback}
        type="button"
        className={css.feedbackBtn}
        id="bad"
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
