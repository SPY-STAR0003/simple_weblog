
import { configureStore } from '@reduxjs/toolkit'
import userForm from "./slices/userForm";

export const store = configureStore({
    reducer: {
        userForm,
    },
})