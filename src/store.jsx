// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import rootReducer from './reducers';
// import thunk from 'redux-thunk';

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: [...getDefaultMiddleware(), thunk]
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { localStorageMiddleware } from './localStorageMiddleware';

const preloadedState = {
  skillsData: JSON.parse(localStorage.getItem('skillsData')) || [],
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
