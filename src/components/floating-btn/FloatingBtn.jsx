import mc from "./floating-btn.module.scss";

const FloatingBtn = ({ src, color, click }) => {
  const style = {
    backgroundImage: `url('${src}')`,
    backgroundColor: color,
  };

  return (
    <button className={mc.container} style={style} onClick={click}></button>
  );
};

export default FloatingBtn;
