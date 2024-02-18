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
  const categoryProps = [good, neutral, bad];
  const categorySetters = [setGood, setNeutral, setBad];
  const totalVotes = good + neutral + bad;
  const average = (good * 1 + bad * -1) / totalVotes;
  const positive = good / totalVotes;

  const voteCounter = (setCategory) => {
    setCategory((prevVotes) => prevVotes + 1);
  };

  return (
    <div>
      <Header heading={heading1} />
      <Button
        categories={["good", "neutral", "bad"]}
        setters={categorySetters}
        voteCounter={voteCounter}
      />
      <Header heading={heading2} />
      <Statistic
        categories={categoryProps}
        names={["good", "neutral", "bad", "all"]}
        totalVotes={totalVotes}
        averageScore={average}
        positivePercentage={positive}
      />
    </div>
  );
};

export default App;
