import { LOGS_ACTIONS } from "../constants/logs";

const initialState = {
  logs: [],
};

const reducer = (state = initialState, action = {}) => {
  let newList = null;
  const oldList = state.logs;
  const { type, payload } = action;

  switch (type) {
    case LOGS_ACTIONS.CREATE: {
      const newLog = payload.log;
      // copie profonde (nested) d'objet
      newList = oldList.map((log) => ({ ...log }));
      newList.push({ ...newLog });
      break;
    }
    default: {
      break;
    }
  }

  return newList ? { ...state, logs: newList } : state;
};

export default reducer;
