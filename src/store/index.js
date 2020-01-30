import { createStore } from 'redux';

const INITIAL_STATE = {
  show: false,
  setExperiense: 'future',
  resume: {
    "experiense": {
        "GRAPHICS DESIGNER": {
          "responsibillity": []
        }
      },
      "generalInfo": {
        "EDUCATION": {},
        "TECHNICAL_SKILLS": {},
        "LANGUAGES": [],
        "ADDITIONAL_EDUCATION": {}
      }
  }
}

const experienseSwither = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_EXPERIENSE': 
      return { ...state, setExperiense: action.title };
    case 'SHOW_ALL':
      return { ...state, show: action.title };
    case 'SET_RESUME':
      return { ...state, resume: action.title };
    default: 
      return state; 
  }
}

const store = createStore(experienseSwither);

export default store; 