import { createSlice } from '@reduxjs/toolkit';

const initialState = []

export const Users = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsers : (state , { payload } ) => {
            return state = payload.data
        },
        addUser : ( state , { payload } ) => {
            return [
                ...state,
                payload
            ]
        }
    },
})

export const { getUsers , addUser } = Users.actions

export default Users.reducer