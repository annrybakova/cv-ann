import { createSlice } from '@reduxjs/toolkit';
export const SET_EDUCATION_DATA = 'api/education/fulfilled';
export const SET_SKILLS_DATA = 'api/skills/fulfilled';
export const SET_ERROR = 'api/education/error';
export const SET_ISLOADING = 'api/education/pending';
export const ADD_SKILL= 'api/skills/add';


export const setEducationData = (data) => ({
    type: SET_EDUCATION_DATA,
    payload: data
});

export const setError = () => ({
    type: SET_ERROR
});

export const setIsLoading = () => ({
    type: SET_ISLOADING
});

export const setSkillsData = (data) => ({
    type: SET_SKILLS_DATA,
    payload: data
});

export const addSkill = (type, level) => ({
    type: ADD_SKILL,
    payload: {
      type,
      level
    }
  });

//   const skillsSlice = createSlice({
//     name: 'skills',
//     initialState: [],
//     reducers: {
//       addSkill(state, action) {
//         state.push(action.payload);
//       },
//     },
//   });
  
//   export const { addSkill } = skillsSlice.actions;
//   export default skillsSlice.reducer;