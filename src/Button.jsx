export const Button = ({ categories, setters, voteCounter }) => {
  return (
    <>
      {categories.map((button, index) => {
        return (
          <button key={button} onClick={() => voteCounter(setters[index])}>
            {button}
          </button>
        );
      })}
    </>
  );
};
