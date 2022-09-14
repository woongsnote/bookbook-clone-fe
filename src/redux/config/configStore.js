import { createStore } from "redux";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../modules/usersSlice";
import users from "../modules/users";
import postSlice from "../modules/postSlice";
import books from "../modules/books";
const store = configureStore({
  reducer: {
    users,
    postSlice,
    usersSlice,
    books,
  },
});

export default store;
