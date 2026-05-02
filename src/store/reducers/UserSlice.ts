

import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface UserState {
    userData: object;
}

const initialState: UserState = {
    userData: {}
}

const UserSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<object>) => {
            state.userData = action.payload
        }
    }
})


export const {setUserData} = UserSlice.actions;
export default UserSlice.reducer;
