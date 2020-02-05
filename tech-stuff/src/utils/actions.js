import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';

// POST REGISTER
export const POST_REG_START = 'POST_REG_START';
export const POST_REG_SUCC = 'POST_REG_SUCC';
export const POST_REG_FAIL = 'POST_REG_FAIL';

// FETCH USER DATA
export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_SUCC = 'FETCH_USER_SUCC';
export const FETCH_USER_FAIL = 'FETCH_USER_FAIL';

// GET ALL TECH OWNED BY USER
export const FETCH_TECH_ITEMS = 'FETCH_TECH_ITEMS';
export const FETCH_TECH_SUCC = 'FETCH_TECH_ITEM';
export const FETCH_TECH_FAIL = 'FETCH_TECH_FAIL';

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

export const getUser = id => dispatch => {
  dispatch({ type: FETCH_USER });
  axiosWithAuth()
    .get(`/user/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_USER_SUCC, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_USER_FAIL, payload: err.response });
    });
};

export const techArray = id => dispatch => {
  dispatch({ type: FETCH_TECH_ITEMS });
  axiosWithAuth()
    .get(`/tech/all/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_TECH_SUCC, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_TECH_FAIL, payload: err.response });
    });
};
