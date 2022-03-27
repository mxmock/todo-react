import mc from "./button.module.scss";

const Button = (props) => {
  const { text, type, onClick } = props;

  const handleClick = () => {
    if (type === "submit") return;
  };

  return (
    <div className={mc.container}>
      <button type={type} onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
