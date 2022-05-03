import { useState } from "react";
import mc from "./app.module.scss";
import TODOS from "../../constants/todos";
import TodosList from "../todos-list/TodosList";
import TodoAddForm from "../todo-add-form/TodoAddForm";

const App = () => {
  /*************************** COMPLETE ***************************/

  const handleCompleteTodo = (id) => {
    setTodos((p) =>
      p.map((t) => (t.id === id ? { ...t, isCompleted: !t.isCompleted } : t))
    );
  };

  /*************************** ADD ***************************/

  // version simple
  const handleAddTodo = (todo) => {
    const newList = [...todos, todo];
    setTodos(newList);
  };

  // version synthétique
  // const handleAddTodo = (todo) => {
  // setTodos((prev) => [...prev, todo]);
  // };

  /*************************** STATES ***************************/

  const [todos, setTodos] = useState(TODOS);

  /*************************** HTML ***************************/

  return (
    <div className={mc.container}>
      <div className={mc["left-side"]}>
        <TodoAddForm onAdd={handleAddTodo} />
      </div>
      <div className={mc.list}>
        <TodosList todos={todos} onCompleteTodo={handleCompleteTodo} />
      </div>
    </div>
  );
};

export default App;
