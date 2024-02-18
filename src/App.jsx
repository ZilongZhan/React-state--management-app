import { useState } from "react";
import { Header } from "./Header";
import { Buttons } from "./Buttons";
import { Statistics } from "./Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const heading1 = "give feedback";
  const heading2 = "statistics";
  
  const voteCounter = (setCategory) => {
    setCategory((prevVotes) => prevVotes + 1);
  };
  
  const totalVotes = () => {
    return propsCollection.reduce(toStates, 0);
  };
  
  const averageScore = () => {
    const totalScore = propsCollection.reduce(toAvgScore, 0);
    
    return totalScore / totalVotes();
  };
  
  const positivePercentage = () => {
    const goodProp = propsCollection.find((props) => props.name === "good");
    
    return goodProp.state / totalVotes();
  };
  
  const toStates = (totalStates, currentProp) => {
    return totalStates + currentProp.state;
  };
  
  const toAvgScore = (score, currentProp) => {
    let currentScore = score;
    
    if (currentProp.name === "good") {
      currentScore = score + currentProp.state * 1;
    }
    
    if (currentProp.name === "bad") {
      currentScore = score + currentProp.state * -1;
    }
    
    return currentScore;
  };
  
  const propsCollection = [
    { name: "good", state: good, setter: setGood },
    { name: "neutral", state: neutral, setter: setNeutral },
    { name: "bad", state: bad, setter: setBad },
  ];
  
  const advancedStats = [
    { label: "all", function: totalVotes },
    { label: "average", function: averageScore },
    { label: "positive", function: positivePercentage },
  ];

  return (
    <div>
      <Header heading={heading1} />
      <Buttons props={propsCollection} voteCounter={voteCounter} />
      <Header heading={heading2} />
      <Statistics props={propsCollection} advancedStats={advancedStats} />
    </div>
  );
};

export default App;
