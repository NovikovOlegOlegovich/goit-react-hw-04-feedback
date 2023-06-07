import { useReducer } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import { Wrapper } from './App.styled';
import Notification from '../Notification';

const App = () => {
  const updeteState = (state, action) => {
    return { ...state, [action.payload]: state[action.payload] + 1 };
  };

  const [state, dispath] = useReducer(updeteState, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const CountTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const positivePercentage = total => {
    const { good } = state;
    return Math.round((100 / total) * good);
  };

  const { good, neutral, bad } = state;

  const total = CountTotalFeedback();
  const positivePercent = positivePercentage(total);

  return (
    <Wrapper>
      <Section title={'Pleace leave feedback'}>
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={dispath}
        />
      </Section>

      <Section title={'Statistics'}>
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercent}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Wrapper>
  );
};

export default App;
