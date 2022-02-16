export const TextButton = ({ text }) => {
  return (
    <button key={text} onClick={() => console.log(text)}>
      {text}
    </button>
  );
};
