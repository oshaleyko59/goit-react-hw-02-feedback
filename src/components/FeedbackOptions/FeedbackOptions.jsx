import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

//<FeedbackOptions options={} onLeaveFeedback={}>
//TODO: array of buttons obj as props
export const FeedbackOptions = ({
  handleClick
}) => {
  return (
    <div className={css.container}>
      <button
        onClick={handleClick}
        type="button"
        className={css.feedbackBtn}
        id="good"
      >
        Good
      </button>
      <button
        onClick={handleClick}
        type="button"
        className={css.feedbackBtn}
        id="neutral"
      >
        Neutral
      </button>
      <button
        onClick={handleClick}
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
  handleClick: PropTypes.func.isRequired,
};
