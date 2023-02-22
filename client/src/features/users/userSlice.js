import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POST_URL = "http://localhost:3500/user"

const initialState = {
    user: [],
    status: 'idle',
    error: null
}

export const addNewUser = createAsyncThunk('', async (newUser) => {
    const response = await axios.post(POST_URL, newUser)
    console.log(response.data)
})

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
        // createUser:{
        //     reducer(state, action){
        //         state.user.push(action.payload)
        //     }
        // }
    },
    extraReducers(builder){
        builder
            .addCase(addNewUser.fulfilled, (state, action) => {
                state.status = 'succeeded'
            })
    }
})

export const selectUserStatus = (state) => state.users.status

export default userSlice.reducer