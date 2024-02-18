import { useState } from "react";
import { Header } from "./Header";
import { Buttons } from "./Buttons";
import { Statistics } from "./Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const propsCollection = [
    { name: "good", state: good, setter: setGood },
    { name: "neutral", state: neutral, setter: setNeutral },
    { name: "bad", state: bad, setter: setBad },
  ];
  
  const heading1 = "give feedback";
  const heading2 = "statistics";

  const totalVotes = good + neutral + bad;
  const average = (good * 1 + bad * -1) / totalVotes;
  const positive = good / totalVotes;

  const voteCounter = (setCategory) => {
    setCategory((prevVotes) => prevVotes + 1);
  };

  return (
    <div>
      <Header heading={heading1} />
      <Buttons
        props={propsCollection}
        voteCounter={voteCounter}
      />
      <Header heading={heading2} />
      <Statistics
        props={propsCollection}
        totalVotes={totalVotes}
        averageScore={average}
        positivePercentage={positive}
      />
    </div>
  );
};

export default App;
