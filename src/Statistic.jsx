export const Statistic = ({ categories, names }) => {
  return (
    <>
      {categories.map((category, index) => {
        return <div>{`${names[index]} ${category}`}</div>;
      })}
    </>
  );
};
