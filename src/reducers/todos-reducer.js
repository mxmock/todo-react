import TODOS from "../constants/todos";

const ACTION_TYPES = {
  ADD: 1,
};

const initialState = {
  todos: TODOS,
};

const reducer = (state = initialState, action = {}) => {
  let newList = null;

  switch (action.type) {
    case ACTION_TYPES.ADD:
      const newTodo = action.todo;
      newList = [...state.todos, newTodo];
      break;
    default:
      break;
  }

  return newList ? { ...state, todos: newList } : state;
};

export default reducer;
