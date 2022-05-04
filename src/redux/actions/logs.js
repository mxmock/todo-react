import { LOGS_ACTIONS } from "../constants/logs";

export const createLog = (message) => {
  const log = {
    date: new Date().getHours() + "h" + new Date().getMinutes(),
    name: message,
  };
  return { type: LOGS_ACTIONS.CREATE, payload: { log } };
};
