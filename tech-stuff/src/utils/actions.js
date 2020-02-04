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

// export const USER_LOADING = 'USER_LOADING';
// export const USER_LOADED = 'USER_LOADED';
// export const LOGIN_SUCC = 'LOGIN_SUCC';
// export const LOGIN_FAIL = 'LOGIN_FAIL';

// export const loadUser = () => dispatch => {
//   dispatch({ type: USER_LOADING });
//   axios.post(`https://use-my-tech.herokuapp.com/api/user/login`)
//   .then(res => {

//   });
// };

// export const FETCH_REG_START = 'FETCH_REG_START';
// export const FETCH_REG_SUCC = 'FETCH_REG_SUCC';
// export const FETCH_REG_FAIL = 'FETCH_REG_FAIL';

// export const getReg = id => dispatch => {
//   dispatch({ type: FETCH_REG_START });
//   axiosWithAuth()
//     .get(`/user/login`)
//     .then(res => {
//       dispatch({ type: FETCH_REG_SUCC, payload: res.data });
//     })
//     .catch(err => {
//       dispatch({ type: FETCH_REG_FAIL, payload: err.response });
//     });
// };
