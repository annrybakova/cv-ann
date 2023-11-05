import { SET_EDUCATION_DATA, SET_SKILLS_DATA, SET_ERROR, SET_ISLOADING, ADD_SKILL } from './actions';

const initialState = {
    educationData: [],
    skillsData: [],
    error: false,
    isLoading: true,
  };
 
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_EDUCATION_DATA:
            return {
                ...state,
                educationData: action.payload
            };
        case SET_ERROR:
            return {
                ...state,
                error: !state.error
            };
        case SET_ISLOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case SET_SKILLS_DATA:
            return {
                ...state,
                skillsData: action.payload
            };
        case ADD_SKILL:
            return {
                ...state,
                skillsData: [...state.skillsData, action.payload]
            };
        default:
        return state;
    }
};

export default rootReducer;