import { useState } from "react";
import Input from "../input/Input";
import mc from "./todo.module.scss";

const TODO_MODE = { READ: 1, EDIT: 2 };

const Todo = (props) => {
  const { name, id, isCompleted, completeTodo, onUpdate } = props;

  const [mode, setMode] = useState(TODO_MODE.READ);
  const [updatedValue, setUpdatedValue] = useState(name);

  const handleClick = () => completeTodo(id);
  const handleEditClick = () => setMode(TODO_MODE.EDIT);
  const handleInputChange = (e) => setUpdatedValue(e.target.value);

  const cancel = () => {
    setMode(TODO_MODE.READ);
    setUpdatedValue(name);
  };

  const handleKeydown = (event) => {
    if (event.key === "Enter" && updatedValue.length > 0) {
      onUpdate(id, updatedValue);
      setMode(TODO_MODE.READ);
    }
    if (event.key === "Escape") {
      cancel();
    }
  };

  return (
    <li className={isCompleted ? `${mc.todo} ${mc.completed}` : `${mc.todo}`}>
      {mode === TODO_MODE.READ ? (
        <>
          <span onClick={handleClick}>{name}</span>
          <span className={mc.edit} onClick={handleEditClick}></span>
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
          <span className={mc.cancel} onClick={cancel}></span>
        </>
      )}
    </li>
  );
};

export default Todo;
