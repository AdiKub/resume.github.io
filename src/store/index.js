import { createStore } from 'redux';

const INITIAL_STATE = {
  show: 'hide',
  setExperiense: 'future'
}

const experienseSwither = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_EXPERIENSE': 
      return { ...state, setExperiense: action.title };
    case 'SHOW_ALL':
        return { ...state, myList: action.title }
    default: 
      return state; 
  }
}

const store = createStore(experienseSwither);

export default store; 