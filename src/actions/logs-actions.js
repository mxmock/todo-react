import { LOGS_ACTIONS } from "../constants/utils";

export const createLog = (p) => ({ type: LOGS_ACTIONS.CREATE, log: p });
