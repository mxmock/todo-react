import { TODOS_ACTIONS } from "../constants/utils";

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action = {}) => {
  let newList = null;
  const id = action.id;
  const oldList = state.todos;

  switch (action.type) {
    case TODOS_ACTIONS.CREATE:
      const newTodo = action.todo;
      // copie profonde (nested) d'objet
      newList = oldList.map((todo) => ({ ...todo }));
      newList.push({ ...newTodo });
      break;
    case TODOS_ACTIONS.READ:
      newList = action.todos.map((t) => ({ ...t }));
      break;
    case TODOS_ACTIONS.UPDATE:
      const name = action.name;
      newList = oldList.map((t) => (t.id === id ? { ...t, name } : { ...t }));
      break;
    case TODOS_ACTIONS.DELETE:
      newList = oldList.filter((todo) => !todo.isCompleted);
      break;
    case TODOS_ACTIONS.COMPLETE:
      newList = oldList.map((t) =>
        t.id === id ? { ...t, isCompleted: !t.isCompleted } : { ...t }
      );
      break;
    default:
      break;
  }

  return newList ? { ...state, todos: newList } : state;
};

export default reducer;
