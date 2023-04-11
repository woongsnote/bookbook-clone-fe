import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../modules/postSlice";
import bookSlice from "../modules/bookSlice";
const store = configureStore({
  reducer: {
    postSlice,
    bookSlice,
  },
});

export default store;
