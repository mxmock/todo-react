import "./app.scss";
import { useState } from "react";
import Todos from "../todos/Todos";
import TODOS from "../../constants/todos";
import AddTodoForm from "../add-todo-form/AddTodoForm";

const App = () => {
  const [todos, setTodos] = useState(TODOS);

  const updateList = (list) => {
    setTodos([...list]);
  };

  return (
    <div className="container">
      <AddTodoForm allTodos={todos} onAdd={updateList} />
      <Todos
        allTodos={todos}
        markAsCompleted={updateList}
        updateTodo={updateList}
      />
    </div>
  );
};

export default App;
