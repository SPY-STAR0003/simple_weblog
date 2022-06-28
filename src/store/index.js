
import { configureStore } from '@reduxjs/toolkit';
import users from "./slices/users";
import articles from "./slices/articles";

export const store = configureStore({
    reducer: {
        users,
        articles,
    },
})