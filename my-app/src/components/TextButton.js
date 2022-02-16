export const TextButton = ({ text, onClick }) => {
  return (
    <button key={text} onClick={() => onClick()}>
      {text}
    </button>
  );
};
