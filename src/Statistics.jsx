export const Statistics = ({ props, advancedStats }) => {
  return (
    <table>
      <tbody>
        {props.map((category) => (
          <tr key={category.name}>{`${category.name} ${category.state}`}</tr>
        ))}
        {advancedStats.map((stat) => (
          <tr key={stat.label}>{`${stat.label} ${stat.function()}`}</tr>
        ))}
      </tbody>
    </table>
  );
};
