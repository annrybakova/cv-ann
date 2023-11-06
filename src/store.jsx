import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import saveSkillsDataToLocalStorage from './localStorageMiddleware';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveSkillsDataToLocalStorage),
});

export default store;