import {FETCH_DATA_REQUEST} from './ActionType';

export const fetchRobots = (success, failed) => ({
  type: FETCH_DATA_REQUEST,
  success,
  failed,
});
