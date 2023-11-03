import { SET_EDUCATION_DATA, SET_SKILLS_DATA } from './actions';

const initialState = {
    educationData: [],
    skillsData: []
  };
 
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_EDUCATION_DATA:
            return {
                ...state,
                educationData: action.payload
            };
        case SET_SKILLS_DATA:
            return {
                ...state,
                skillsData: action.payload
            };
        default:
        return state;
    }
};

export default rootReducer;