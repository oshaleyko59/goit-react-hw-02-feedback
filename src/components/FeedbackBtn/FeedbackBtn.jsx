import PropTypes from 'prop-types';

// Button отримує функцію changeMessage (ім'я пропа),
// яка викликається під час події onClick
export const FeedbackBtn = ({ onClick, label, id }) => (
  <button type="button" onClick={onClick} dataId={id}>
    {label}
  </button>
);

FeedbackBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.oneOf('good', 'neutral', 'bad').isRequired,
  label: PropTypes.string.isRequired,
};
