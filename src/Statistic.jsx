export const Statistic = ({
  categories,
  names,
  totalVotes,
  averageScore,
  positivePercentage,
}) => {
  return (
    <>
      {categories.map((category, index) => (
        <div key={index}>{`${names[index]} ${category}`}</div>
      ))}
      <div>all {totalVotes}</div>
      <div>average {averageScore}</div>
      <div>positive {positivePercentage} %</div>
    </>
  );
};
