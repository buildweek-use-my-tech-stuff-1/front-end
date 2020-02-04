import {
  POST_REG_START,
  POST_REG_SUCC,
  POST_REG_FAIL
  // USER_LOADING,
  // USER_LOADED,
  // LOGIN_SUCC,
  // LOGIN_FAIL
} from './actions';

const initialState = {
  // regInfo: {
  //   username: '',
  //   password: '',
  //   location: ''
  // },
  token: localStorage.getItem('token'),
  fetching: false,
  isAuthenticated: null,
  error: '',
  user: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REG_START:
      return {
        ...state,
        user: action.payload,
        fetching: true
      };
    case POST_REG_SUCC:
      return {
        ...state,
        user: action.payload,
        fetching: false,
        error: ''
      };
    case POST_REG_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    // case USER_LOADING:
    //   return {
    //     ...state,
    //     fetching: true
    //   };
    // case USER_LOADED:
    //   return {
    //     ...state,
    //     isAuthenticated: true,
    //     fetching: false,
    //     user: action.payload
    //   };
    // case LOGIN_SUCC:
    //   return {
    //     ...state,
    //     ...action.payload,
    //     isAuthenticated: true,
    //     fetching: false
    //   };
    // case LOGIN_FAIL:
    //   return {
    //     ...state,
    //     token: null,
    //     user: null,
    //     isAuthenticated: false,
    //     fetching: false
    //   };
    default:
      return state;
  }
};
