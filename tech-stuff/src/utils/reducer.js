import {
  // POST REGISTER
  POST_REG_START,
  POST_REG_SUCC,
  POST_REG_FAIL,

  // FETCH USER DATA
  FETCH_USER,
  FETCH_USER_SUCC,
  FETCH_USER_FAIL,

  // FETCH TECH SOLD FROM OWNER
  FETCH_TECH_ITEMS,
  FETCH_TECH_SUCC,
  FETCH_TECH_FAIL,

  //FETCH TECH ITEM
  FETCH_TECH_ITEM,
  FETCH_TECH_ITEM_SUCC,
  FETCH_TECH_ITEM_FAIL
} from './actions';

const userID = localStorage.getItem('userID');

const initialState = {
  token: localStorage.getItem('token'),
  fetching: false,
  isAuthenticated: null,
  error: '',
  // user: null,

  userInfo: {
    username: '',
    image: '',
    password: '',
    location: ''
  },

  allTech: [
    {
      owner_id: userID,
      user_image: '',
      username: '',
      name: '',
      description: '',
      rented: false
    }
  ],

  everyItem: [
    {
      owner_id: userID,
      user_image: '',
      username: '',
      name: '',
      description: '',
      rented: false
    }
  ],

  tech: [
    {
      owner_id: userID,
      image: '',
      username: '',
      name: '',
      description: '',
      rented: false
    }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REG_START:
      return {
        ...state,
        userInfo: action.payload,
        fetching: true
      };
    case POST_REG_SUCC:
      return {
        ...state,
        userInfo: action.payload,
        fetching: false,
        error: ''
      };
    case POST_REG_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case FETCH_USER:
      return {
        ...state,
        fetching: true,
        error: ''
      };
    case FETCH_USER_SUCC:
      return {
        ...state,
        fetching: false,
        error: '',
        userInfo: action.payload
      };
    case FETCH_USER_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case FETCH_TECH_ITEMS:
      return {
        ...state,
        fetching: true,
        error: ''
      };
    case FETCH_TECH_SUCC:
      return {
        ...state,
        fetching: false,
        allTech: action.payload,
        error: ''
      };
    case FETCH_TECH_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case FETCH_TECH_ITEM:
      return {
        ...state,
        fetching: true,
        error: ''
      };
    case FETCH_TECH_ITEM_SUCC:
      return {
        ...state,
        fetching: false,
        tech: action.payload,
        error: ''
      };
    case FETCH_TECH_ITEM_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
