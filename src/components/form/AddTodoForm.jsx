import { useState } from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import mc from "./add-todo-form.module.scss";

const AddTodoForm = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
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
        onChange={handleChange}
      />

      <Button type={"submit"} text={"Ajouter"} />
    </form>
  );
};

export default AddTodoForm;
