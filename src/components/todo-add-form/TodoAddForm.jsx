import { useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import mc from "./todo-add-form.module.scss";

const TodoAddForm = ({ onAdd }) => {
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
    onAdd(todo);
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
