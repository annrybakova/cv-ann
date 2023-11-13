import rootReducer from '../reducers';
import { SET_EDUCATION_DATA, SET_SKILLS_DATA, SET_ERROR, SET_ISLOADING, ADD_SKILL } from '../actions';

describe('rootReducer', () => {
  it('should handle SET_EDUCATION_DATA', () => {
    const action = { type: SET_EDUCATION_DATA, payload: [ {
        "date": 2001,
        "title": "Title 1",
        "text": "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit."
    },] };
    const state = rootReducer(undefined, action);

    expect(state.educationData).toEqual(action.payload);
  });

  it('should handle SET_SKILLS_DATA', () => {
    const action = { type: SET_SKILLS_DATA, payload: [    {
        "type": "JavaScript",
        "level": "20"
    },] };
    const state = rootReducer(undefined, action);

    expect(state.skillsData).toEqual(action.payload);
  });

  it('should handle SET_ERROR', () => {
    const action = { type: SET_ERROR, payload: 'Some error message' };
    const state = rootReducer(undefined, action);

    expect(state.error).toEqual(action.payload);
  });

  it('should handle SET_ISLOADING', () => {
    const action = { type: SET_ISLOADING, payload: false };
    const state = rootReducer(undefined, action);

    expect(state.isLoading).toEqual(action.payload);
  });

  it('should handle ADD_SKILL', () => {
    const initialState = { skillsData: ['Js'] };
    const action = { type: ADD_SKILL, payload: {
        type: "React",
        level: "25"} };
    const state = rootReducer(initialState, action);

    expect(state.skillsData).toEqual([...initialState.skillsData, action.payload]);
  });

  it('should return the initial state for unknown action types', () => {
    const action = { type: 'UNKNOWN_ACTION', payload: 'Some payload' };
    const state = rootReducer(undefined, action);

    expect(state).toEqual({ educationData: [], skillsData: [], error: [], isLoading: true });
  });
});
