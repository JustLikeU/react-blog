import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  startTime: 0,
  duringTime: 500,
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_START_TIME:
			return state.set('startTime', action.time);
		default:
			return state;
	};
};
