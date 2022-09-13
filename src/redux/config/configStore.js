import { createStore } from "redux";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../modules/usersSlice";
import users from "../modules/users";
const store = configureStore({
  reducer: {
    users,

    usersSlice,
  },
});

export default store;
