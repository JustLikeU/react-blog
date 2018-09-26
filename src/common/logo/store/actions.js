import * as constants from './constants';

export const changeStartTime = (time) => ({
  type: constants.CHANGE_START_TIME,
  time,
});
