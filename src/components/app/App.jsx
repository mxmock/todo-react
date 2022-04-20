import mc from "./app.module.scss";
import TODOS from "../../constants/todos";
import { useEffect, useState } from "react";
import { FILTER } from "../../constants/utils";
import TodosList from "../todos-list/TodosList";
import trashIcon from "../../img/trash-outline.svg";
import FloatingBtn from "../floating-btn/FloatingBtn";
import TodosFilter from "../todos-filter/TodosFilter";
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
  const [filter, setFilter] = useState(FILTER.ALL);
  const [filteredTodos, setFilteredTodos] = useState(TODOS);

  /*************************** EFFECTS ***************************/

  // version détaillée
  // const updateFilteredTodos = () => {
  //   let filtered = [];

  //   if (filter === FILTER.COMPLETED) {
  //     todos.forEach((todo) => {
  //       if (todo.isCompleted) {
  //         filtered.push(todo);
  //       }
  //     });
  //   }

  //   if (filter === FILTER.UNCOMPLETED) {
  //     todos.forEach((todo) => {
  //       if (!todo.isCompleted) {
  //         filtered.push(todo);
  //       }
  //     });
  //   }

  //   if (filter === FILTER.ALL) {
  //     todos.forEach((todo) => {
  //       filtered.push(todo);
  //     });
  //   }

  //   setFilteredTodos(filtered);
  // };

  // useEffect(updateFilteredTodos, [filter, todos]);

  // version synthétique
  useEffect(() => {
    setFilteredTodos(() => {
      return filter === FILTER.COMPLETED
        ? todos.filter((t) => t.isCompleted)
        : filter === FILTER.UNCOMPLETED
        ? todos.filter((t) => !t.isCompleted)
        : [...todos];
    });
  }, [filter, todos]);

  /*************************** HTML ***************************/

  return (
    <div className={mc.container}>
      <TodoAddForm onAdd={handleAddTodo} />
      <div className={mc.list}>
        <TodosFilter filter={filter} click={(f) => setFilter(f)} />
        <TodosList
          todos={filteredTodos}
          onCompleteTodo={handleCompleteTodo}
          onUpdateTodo={handleUpdateTodo}
        />
      </div>
      <FloatingBtn src={trashIcon} color="#d40502" click={deleteCompleted} />
    </div>
  );
};

export default App;
