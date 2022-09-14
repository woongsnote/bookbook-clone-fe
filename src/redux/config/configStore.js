import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../modules/usersSlice";
import postSlice from "../modules/postSlice";
import bookSlice from "../modules/bookSlice";
const store = configureStore({
  reducer: {
    postSlice,
    usersSlice,
    bookSlice,
  },
});

export default store;
