import mc from "./input.module.scss";

const Input = (props) => {
  const { id, label, value, type, onChange } = props;

  return (
    <div className={mc.container}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
