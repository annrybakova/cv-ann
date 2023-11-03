export const SET_EDUCATION_DATA = 'SET_EDUCATION_DATA';
export const SET_SKILLS_DATA = 'SET_SKILLS_DATA';

export const setEducationData = (data) => ({
    type: SET_EDUCATION_DATA,
    payload: data
});

export const setSkillsData = (data) => ({
    type: SET_SKILLS_DATA,
    payload: data
});