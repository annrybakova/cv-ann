import { SET_CONTACT_DATA } from './actions';

const initialState = {
    contactData: []
  };
 
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CONTACT_DATA:
            return {
                ...state,
                contactData: action.payload
            };
        default:
        return state;
    }
};

export default rootReducer;