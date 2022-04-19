import { useState } from "react";
import mc from "./app.module.scss";
import TODOS from "../../constants/todos";
import TodosList from "../todos-list/TodosList";
import TodoAddForm from "../todo-add-form/TodoAddForm";

const App = () => {
  const handleCompleteTodo = (id) => {
    setTodos((p) =>
      p.map((t) => (t.id === id ? { ...t, isCompleted: !t.isCompleted } : t))
    );
  };

  const [todos, setTodos] = useState(TODOS);

  return (
    <div className={mc.container}>
      <TodoAddForm />
      <div className={mc.list}>
        <TodosList todos={todos} onCompleteTodo={handleCompleteTodo} />
      </div>
    </div>
  );
};

export default App;
