import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  articleList: [],
  projectList: [],
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.GET_HOME_DATA:
      console.log(action.articleList)
      return state.merge({
        articleList: fromJS(action.articleList),
        projectList: fromJS(action.projectList),
      });
    default:
      return state;
  };
};
