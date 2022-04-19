import { useState } from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import mc from "./todo-add-form.module.scss";

const TodoAddForm = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
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
