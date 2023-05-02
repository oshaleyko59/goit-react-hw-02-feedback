import React, { Component } from 'react';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = evt => {
    this.setState(prevState => {
      switch (evt.target.id) {
        case 'good':
          return { good: prevState.good + 1 };
        case 'neutral':
          return { neutral: prevState.neutral + 1 };
        case 'bad':
          return { bad: prevState.bad + 1 };
        default:
          return {};
      }
    });
  };

  render() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return (
      <div>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions handleClick={this.handleClick} />
        </SectionTitle>
        <SectionTitle title="Statistics">
          {(total !==0 ?
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={Math.round((this.state.good * 100) / total)}
          /> : <Notification message="There is no feedback"/>)}
        </SectionTitle>
      </div>
    );
  }
}

