import { useDispatch } from "react-redux";
import mc from "./floating-btn.module.scss";
import { deleteTodos } from "../../actions/todos-actions";

const FloatingBtn = ({ src, color }) => {
  const dispatch = useDispatch();

  const style = {
    backgroundImage: `url('${src}')`,
    backgroundColor: color,
  };

  const deleteTodo = () => {
    dispatch(deleteTodos());
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
