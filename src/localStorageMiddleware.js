import { SET_SKILLS_DATA, ADD_SKILL } from './actions';


const saveSkillsDataToLocalStorage = (store) => (next) => (action) => {

  next(action);

  if (action.type === SET_SKILLS_DATA || action.type === ADD_SKILL) {
    localStorage.setItem('skillsData', JSON.stringify(store.getState().skillsData));
  }
};

export default saveSkillsDataToLocalStorage;

  