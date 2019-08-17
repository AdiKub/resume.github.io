import { createStore } from 'redux';

const INITIAL_STATE = {
  show: false,
  setExperiense: 'future'
}

const experienseSwither = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_EXPERIENSE': 
      return { ...state, setExperiense: action.title };
    case 'SHOW_ALL':
        return { ...state, show: action.title }
    default: 
      return state; 
  }
}

const store = createStore(experienseSwither);

export default store; 