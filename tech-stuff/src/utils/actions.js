import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';

export const POST_REG_START = 'POST_REG_START';
export const POST_REG_SUCC = 'POST_REG_SUCC';
export const POST_REG_FAIL = 'POST_REG_FAIL';

export const postRegInfo = data => dispatch => {
  dispatch({ type: POST_REG_START, payload: data });
  console.log(data);
  axios
    .post(`https://use-my-tech.herokuapp.com/api/user/register`, data)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userID', res.data.saved.id);
      dispatch({ type: POST_REG_SUCC, payload: data });
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: POST_REG_FAIL, payload: err.response });
    });
};
