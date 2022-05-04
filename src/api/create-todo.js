import request from "./request";
import { createTodo, setLoading } from "../redux/actions/todos";

const getMappedTodo = (data) => ({
  id: Date.now(),
  name: data.title,
  isCompleted: data.completed,
});

const create = async (name) => {
  const config = {
    method: `post`,
    url: `/todos`,
    data: {
      title: name,
      completed: false,
      userId: 1,
    },
  };

  return await request(config);
};

const createTodoThunk = (name) => async (dispatch, state) => {
  dispatch(setLoading(true));
  const { data, status } = await create(name);
  dispatch(setLoading(false));
  if (!data)
    // handle errors here
    return console.error(`Can't create todo, request status: ${status}`);
  const todo = getMappedTodo(data);
  dispatch(createTodo(todo));
};

export default createTodoThunk;
