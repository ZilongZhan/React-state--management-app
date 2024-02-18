export const Statistics = ({
  props,
  totalVotes,
  averageScore,
  positivePercentage,
}) => {
  return (
    <table>
      <tbody>
        {props.map((category) => (
          <tr key={category.name}>{`${category.name} ${category.state}`}</tr>
        ))}
        <tr>all {totalVotes()}</tr>
        <tr>average {averageScore()}</tr>
        <tr>positive {positivePercentage()} %</tr>
      </tbody>
    </table>
  );
};
