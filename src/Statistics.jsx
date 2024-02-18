export const Statistics = ({
  props,
  totalVotes,
  averageScore,
  positivePercentage,
}) => {
  return (
    <>
      {props.map((category) => (
        <div key={category.name}>{`${category.name} ${category.prop}`}</div>
      ))}
      <div>all {totalVotes}</div>
      <div>average {averageScore}</div>
      <div>positive {positivePercentage} %</div>
    </>
  );
};
