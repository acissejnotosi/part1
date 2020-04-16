import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React, { useState } from "react";
import ReactDOM from "react-dom";

const buttonStyle = {
  borderRadius: "4px",
};

const tableRowStyle = {
  width: "50px",
};

const Title = (props) => {
  return <h1> {props.title} </h1>;
};

const Button = ({ handleClick, text }) => {
  return (
    <button style={buttonStyle} onClick={handleClick}>
      {text}
    </button>
  );
};

const Statistic = ({ text, value, sign }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td  style = {tableRowStyle}>{text}</td>
          <td  >
            {value} {sign}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const Statistics = (props) => {
  const all = props.good + props.bad + props.neutral;
  const average =
    (props.good - props.bad) / (props.good + props.bad + props.neutral);
  const positive =
    (props.good / (props.good + props.bad + props.neutral)) * 100;

  if (props.good > 0 || props.bad > 0 || props.neutral > 0) {
    return (
      <>
        <Statistic text="good" value={props.good} />
        <Statistic text="neutral" value={props.neutral} />
        <Statistic text="bad" value={props.bad} />
        <Statistic text="all" value={all} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positive} sign="%" />
      </>
    );
  }
  return <> No feedback given</>;
};

const App = () => {
  const giveFeedbackText = "give feedback";
  const statisticsText = "statistics";
  const goodText = "good";
  const neutralText = "neutral";
  const badText = "bad";
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodCLick = () => {
    setGood(good + 1);
  };

  const handleBadCLick = () => {
    setBad(bad + 1);
  };

  const handleNeutralCLick = () => {
    setNeutral(neutral + 1);
  };

  return (
    <div>
      <Title title={giveFeedbackText} />
      <Button handleClick={handleGoodCLick} text={goodText} />
      <Button handleClick={handleNeutralCLick} text={neutralText} />
      <Button handleClick={handleBadCLick} text={badText} />
      <Title title={statisticsText} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
