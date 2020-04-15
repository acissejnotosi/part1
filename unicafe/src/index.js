import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React, { useState } from "react";
import ReactDOM from "react-dom";

const buttonStyle = {
  borderRadius: "4px",
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

const Statistics = (props) => {
  return (
    <React.Fragment>
      <div>
        {"good"} {props.good}
      </div>
      <div>
        {"neutral"} {props.neutral}
      </div>
      <div>
        {"bad"} {props.bad}
      </div>
      <div>all {props.good + props.bad + props.neutral}</div>
      <div>
        average{" "}
        {(props.good - props.bad) / (props.good + props.bad + props.neutral)}
      </div>
      <div>
        positive {(props.good / (props.good + props.bad + props.neutral)) * 100}
        {"%"}
      </div>
    </React.Fragment>
  );
};

const App = () => {
  const giveFeedbackText = "give feedback";
  const statisticsText = "statistics";
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

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
      <Button handleClick={handleGoodCLick} text="good" />
      <Button handleClick={handleNeutralCLick} text="neutral" />
      <Button handleClick={handleBadCLick} text="bad" />
      <Title title={statisticsText} />
      <Statistics bad={bad} neutral={neutral} good={good} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
