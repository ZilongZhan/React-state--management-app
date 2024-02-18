export const Statistic = ({ categories, names }) => {
  return (
    <>
      {categories.map((category, index) => {
        return <div key={names[index]}>{`${names[index]} ${category}`}</div>;
      })}
    </>
  );
};
