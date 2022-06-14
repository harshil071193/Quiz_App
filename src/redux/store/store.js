import { configureStore } from '@reduxjs/toolkit';
import  usersReducer from '../reducers/users/users';
import quizsReducer from "../reducers/quizs/quizs";

export default configureStore({
  reducer: {
      users:usersReducer,
      quizs:quizsReducer
  },
})