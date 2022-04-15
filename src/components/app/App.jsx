import mc from "./app.module.scss";
import Todos from "../todos/Todos";
import TODOS from "../../constants/todos";
import { useEffect, useState } from "react";
import { FILTER } from "../../constants/utils";
import trashIcon from "../../img/trash-outline.svg";
import FloatingBtn from "../floating-btn/FloatingBtn";
import AddTodoForm from "../add-todo-form/AddTodoForm";
import FilterButtons from "../filter-buttons/FilterButtons";

const App = () => {
  const [todos, setTodos] = useState(TODOS);
  const [filter, setFilter] = useState(FILTER.ALL);
  const [filteredTodos, setFilteredTodos] = useState(TODOS);

  /*************************** ADD ***************************/

  const handleAddTodo = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  /*************************** COMPLETE ***************************/

  // version simple, détaillée
  const handleCompleteTodo = (id) => {
    const updateOneTodo = (todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      } else {
        return todo;
      }
    };

    const updateAllTodos = (previousList) => {
      const newList = previousList.map(updateOneTodo);
      return newList;
    };

    setTodos(updateAllTodos);
  };

  /*************************** DELETE ***************************/

  const deleteCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.isCompleted));
  };

  /*************************** UPDATE ***************************/

  // version synthétique
  const handleUpdateTodo = (id, name) => {
    setTodos((p) => p.map((t) => (t.id === id ? { ...t, name } : t)));
  };

  /*************************** EFFECTS ***************************/

  useEffect(() => {
    const filtered =
      filter === FILTER.COMPLETED
        ? todos.filter((t) => t.isCompleted)
        : filter === FILTER.UNCOMPLETED
        ? todos.filter((t) => !t.isCompleted)
        : [...todos];

    setFilteredTodos(filtered);
  }, [filter, todos]);

  /*************************** HTML ***************************/

  return (
    <div className={mc.container}>
      <AddTodoForm onAdd={handleAddTodo} />
      <div className={mc.list}>
        <FilterButtons filter={filter} handleClick={(f) => setFilter(f)} />
        <Todos
          allTodos={filteredTodos}
          onCompleteTodo={handleCompleteTodo}
          onUpdateTodo={handleUpdateTodo}
        />
      </div>
      <FloatingBtn src={trashIcon} color="#d40502" click={deleteCompleted} />
    </div>
  );
};

export default App;
