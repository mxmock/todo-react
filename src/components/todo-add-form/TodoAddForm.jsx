import { useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import mc from "./todo-add-form.module.scss";
import { LOGS_ACTIONS, TODOS_ACTIONS } from "../../constants/utils";

const TodoAddForm = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => setInputValue(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return;
    const now = Date.now();
    const todo = {
      id: now,
      name: inputValue,
      isCompleted: false,
    };
    const log = {
      date: new Date().getHours() + "h" + new Date().getMinutes(),
      name: `Tâche ajoutée => ${inputValue}`,
    };
    dispatch({ type: TODOS_ACTIONS.CREATE, todo });
    setInputValue("");
  };

  return (
    <form className={mc.container} onSubmit={handleSubmit}>
      <Input
        id={"add-todo"}
        label={"Nom de la tâche"}
        value={inputValue}
        type={"text"}
        onChange={handleInputChange}
      />

      <Button type={"submit"} text={"Ajouter"} />
    </form>
  );
};

export default TodoAddForm;
