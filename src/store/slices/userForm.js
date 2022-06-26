import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    logInUsername : "",
}

export const UserFormSlice = createSlice({
    name: 'userForm',
    initialState,
    reducers: {
        setUserForm : (state , {payload} ) => {
            return {...state,[payload.key] : payload.value}
        }
    },
})

// Action creators are generated for each case reducer function
export const { setUserForm } = UserFormSlice.actions

export default UserFormSlice.reducer