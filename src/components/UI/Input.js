const Input = () => {
  return (
    <div>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input id={props.input.id} />
    </div>
  );
};

export default Input;
