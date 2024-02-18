import { useState } from "react";
import { Header } from "./Header";
import { Button } from "./Button";
import { Statistic } from "./Statistic";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const heading1 = "give feedback";
  const heading2 = "statistics";
  const categoryNames = ["good", "neutral", "bad"];
  const categoryProps = [good, neutral, bad];
  const categorySetters = [setGood, setNeutral, setBad];

  const voteCounter = (setCategory) => {
    setCategory((prevVotes) => prevVotes + 1);
  };

  return (
    <div>
      <Header heading={heading1} />
      <Button
        categories={categoryNames}
        setters={categorySetters}
        voteCounter={voteCounter}
      />
      <Header heading={heading2} />
      <Statistic categories={categoryProps} names={categoryNames} />
    </div>
  );
};

export default App;
