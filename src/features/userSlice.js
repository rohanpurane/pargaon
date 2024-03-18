import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email:"rohan@gmail.com",
    username:"",
}

export const userSlice = createSlice({
  name: 'auth_info',
  initialState,
  reducers: {
   setUserInfo:(state, action)=>{
    state.email = action.payload.email
    state.username = action.payload.username
   },
   unSetUserInfo:(state, action)=>{
    state.email = action.payload.email
    state.username = action.payload.username
   }
  },
})

export const { setUserInfo, unSetUserInfo } = userSlice.actions

export default userSlice.reducer