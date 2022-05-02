import { useDispatch } from "react-redux";
import mc from "./floating-btn.module.scss";
import { TODOS_ACTIONS } from "../../constants/utils";

const FloatingBtn = ({ src, color }) => {
  const dispatch = useDispatch();

  const style = {
    backgroundImage: `url('${src}')`,
    backgroundColor: color,
  };

  const deleteTodo = () => {
    dispatch({ type: TODOS_ACTIONS.DELETE });
  };

  return (
    <button
      className={mc.container}
      style={style}
      onClick={deleteTodo}
    ></button>
  );
};

export default FloatingBtn;
