import { LOGS_ACTIONS } from "../constants/utils";

const initialState = {
  logs: [],
};

const reducer = (state = initialState, action = {}) => {
  let newList = null;
  const oldList = state.logs;

  switch (action.type) {
    case LOGS_ACTIONS.CREATE:
      const newLog = action.log;
      // copie profonde (nested) d'objet
      newList = oldList.map((log) => ({ ...log }));
      newList.push({ ...newLog });
      break;
    default:
      break;
  }

  return newList ? { ...state, logs: newList } : state;
};

export default reducer;
