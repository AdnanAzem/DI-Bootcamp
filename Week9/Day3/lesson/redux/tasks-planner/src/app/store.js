// import { createStore, combineReducers } from "redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { tasksReducer } from "../redux/reducers";

const appReducer = combineReducers({
  tasksReducer,
  //...counterReducer
  // usersReducer
});

const store = configureStore({
  reducer: appReducer,
});

export default store;
