import { useState } from "react";
import Input from "../input/Input";
import mc from "./todo-item.module.scss";
import { useDispatch } from "react-redux";
import { completeTodo, updateTodo } from "../../redux/actions/todos";

const TODO_MODE = { READ: 1, EDIT: 2 };

const TodoItem = (props) => {
  const dispatch = useDispatch();
  const { id, name, isCompleted } = props;

  const handleTodoClick = () => dispatch(completeTodo(id));
  const handleEditClick = () => setMode(TODO_MODE.EDIT);
  const handleInputChange = (e) => setUpdatedValue(e.target.value);

  const cancel = () => {
    setMode(TODO_MODE.READ);
    setUpdatedValue(name);
  };

  const handleKeydown = (event) => {
    if (event.key === "Enter" && updatedValue.length > 0) {
      dispatch(updateTodo(id, updatedValue));
      setMode(TODO_MODE.READ);
    }
    if (event.key === "Escape") {
      cancel();
    }
  };

  const [mode, setMode] = useState(TODO_MODE.READ);
  const [updatedValue, setUpdatedValue] = useState(name);

  return (
    <li
      className={
        isCompleted ? `${mc.container} ${mc.completed}` : `${mc.container}`
      }
    >
      {mode === TODO_MODE.READ ? (
        <>
          <span className={mc.name} onClick={handleTodoClick}>
            {name}
          </span>
          <span
            className={`${mc.icon} ${mc.edit}`}
            onClick={handleEditClick}
          ></span>
        </>
      ) : (
        <>
          <Input
            id={"edit-todo"}
            label={"modifier la tâche"}
            value={updatedValue}
            type={"text"}
            onChange={handleInputChange}
            onKey={handleKeydown}
          />
          <span className={`${mc.icon} ${mc.cancel}`} onClick={cancel}></span>
        </>
      )}
    </li>
  );
};

export default TodoItem;
