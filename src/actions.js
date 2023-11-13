export const SET_EDUCATION_DATA = 'api/education/fulfilled';
export const SET_SKILLS_DATA = 'api/skills/fulfilled';
export const SET_ERROR = 'api/education/error';
export const SET_ISLOADING = 'api/education/pending';
export const ADD_SKILL= 'api/skills/add';


export const setEducationData = (data) => ({
    type: SET_EDUCATION_DATA,
    payload: data
});

export const setError = (data) => ({
    type: SET_ERROR,
    payload: data
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