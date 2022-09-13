import { createStore } from "redux";
import { combineReducers } from "redux";
import {configureStore} from "@reduxjs/toolkit";
import usersSlice from '../modules/usersSlice';

const store = configureStore({
    reducer: {
      usersSlice
    },
});

export default store;
