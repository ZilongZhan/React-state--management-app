export const Buttons = ({ props, voteCounter }) => {
  return (
    <>
      {props.map((button) => {
        return (
          <button key={button.name} onClick={() => voteCounter(button.setter)}>
            {button.name}
          </button>
        );
      })}
    </>
  );
};
