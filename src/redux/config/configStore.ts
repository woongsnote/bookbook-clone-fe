import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import postSlice from "../modules/postSlice";
import bookSlice from "../modules/bookSlice";

export const store = configureStore({
  reducer: {
    postSlice,
    bookSlice,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;