import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export class App extends Component {
  static defaultProps = {
    options: [
      { id: 'good', label: 'Good' },
      { id: 'bad', label: 'Bad' },
    ],
  };

  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ),
  };

  state = this.props.options.reduce((acc, opt) => {
    acc[opt.id] = 0;
    return acc;
  }, {});

  countPercentage = (key, base) => {
    return Math.round((this.state[key] * 100) / base);
  };

  handleClick = ({ target: { id } }) => {
    this.setState(prevState => ({ [id]: prevState[id] + 1 }));
  };

  countTotal = () => {
    return Object.values(this.state).reduce((acc, i) => acc + i, 0);
  };

  getCount = id => {
    return this.state[id];
  };

  idTotal = nanoid();
  idPositivePercent = nanoid();

  getCategories = () => {
    const {
      getCount,
      idTotal,
      countTotal,
      idPositivePercent,
      countPercentage,
      props: { options },
    } = this;
    const total = countTotal();
    let categories = options.map(option => ({
      ...option,
      value: getCount(option.id),
    }));
    categories.push({ id: idTotal, label: 'Total', value: total });
    categories.push({
      id: idPositivePercent,
      label: 'Positive feedback(%)',
      value: countPercentage('good', total),
    });
    return categories;
  };

  render() {
    const {
      countTotal,
      getCategories,
      handleClick,
      props: { options },
    } = this;

    return (
      <div>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
        </SectionTitle>
        <SectionTitle title="Statistics">
          {countTotal() !== 0 ? (
            <Statistics categories={getCategories()} />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </SectionTitle>
      </div>
    );
  }
}
