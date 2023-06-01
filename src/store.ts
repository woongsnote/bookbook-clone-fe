import { configureStore } from "@reduxjs/toolkit";

import bookReducer from "./features/book/bookSlice";
import themeReducer from './features/theme/themeSlice';
import modeReducer from './features/mode/modeSlice';
import reviewReducer from './features/review/reviewSlice';

//TODO solve store error
export const store = configureStore({
    reducer: {
        darkTheme: themeReducer,
        towerMode: modeReducer,
        books: bookReducer,
        reviews: reviewReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;