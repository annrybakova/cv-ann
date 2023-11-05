export const localStorageMiddleware = (store) => (next) => (action) => {
    const result = next(action);
  
    if (action.type === 'ADD_SKILL') {
      const skillsData = store.getState().skillsData;
    //   skillsData.push(action.payload);
      localStorage.setItem('skillsData', JSON.stringify(skillsData));
    }
  
    return result;
  };
  