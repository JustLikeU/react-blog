import axios from 'axios';
import * as constants from './constants';

export const getHomeData = () => {
  return (dispatch) => {
    axios.get('//admin.xiongwengang.xyz/api/blog/getIndex').then(res => {
      const result = res.data;
      if (result) {
        dispatch({
          type: constants.GET_HOME_DATA,
          articleList: result.articleData,
          projectList: result.projectData,
        });
      } else {
        console.log('无数据');
      }
    }).catch(err => {
      console.log(err);
    });
  };
};
