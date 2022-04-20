import { useState } from "react";
import mc from "./app.module.scss";
import TODOS from "../../constants/todos";
import TodosList from "../todos-list/TodosList";
import trashIcon from "../../img/trash-outline.svg";
import FloatingBtn from "../floating-btn/FloatingBtn";
import TodoAddForm from "../todo-add-form/TodoAddForm";

const App = () => {
  /*************************** COMPLETE ***************************/

  const handleCompleteTodo = (id) => {
    setTodos((p) =>
      p.map((t) => (t.id === id ? { ...t, isCompleted: !t.isCompleted } : t))
    );
  };

  /*************************** ADD ***************************/

  const handleAddTodo = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  /*************************** DELETE ***************************/

  const deleteCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.isCompleted));
  };

  /*************************** UPDATE ***************************/

  const handleUpdateTodo = (id, name) => {
    setTodos((p) => p.map((t) => (t.id === id ? { ...t, name } : t)));
  };

  /*************************** STATES ***************************/

  const [todos, setTodos] = useState(TODOS);

  /*************************** HTML ***************************/

  return (
    <div className={mc.container}>
      <TodoAddForm onAdd={handleAddTodo} />
      <div className={mc.list}>
        <TodosList
          todos={todos}
          onCompleteTodo={handleCompleteTodo}
          onUpdateTodo={handleUpdateTodo}
        />
      </div>
      <FloatingBtn src={trashIcon} color="#d40502" click={deleteCompleted} />
    </div>
  );
};

export default App;
