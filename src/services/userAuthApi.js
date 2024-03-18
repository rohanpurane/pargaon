import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userAuthApi = createApi({
  reducerPath: 'userAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/' }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
        query: (user)=>{
            return{
                url: 'user/register/',
                method: 'POST',
                body: user,
                headers: {'Content-type': 'application/json'},
            }
        }
    }),
    loginUser: builder.mutation({
        query: (user)=>{
            return{
                url: 'user/login/',
                method: 'POST',
                body: user,
                headers: {'Content-type': 'application/json'},
            }
        }
    }),
    getLoggedUser: builder.query({
        query: (access_token)=>{
            return{
                url: 'user/profile/',
                method: 'GET',
                headers: {'authorization': `Bearer ${access_token}`,}
            }
        }
    }),
    changeUserPassword: builder.mutation({
        query: ({ actualData, access_token })=>{
            return{
                url: 'user/change_password/',
                method: 'POST',
                body: actualData,
                headers: {'authorization': `Bearer ${access_token}`,},
            }
        }
    }),
    sendResetPasswordEmail: builder.mutation({
        query: (user)=>{
            return{
                url: 'user/reset_password_link/',
                method: 'POST',
                body: user,
                headers: {'Content-type': 'application/json'},
            }
        }
    }),
    resetPassword: builder.mutation({
        query: ({actualData, id, token})=>{
            return{
                url: `user/reset_password/${id}/${token}/`,
                method: 'POST',
                body: actualData,
                headers: {'Content-type': 'application/json'},
            }
        }
    }),
  }),
})


export const { 
    useRegisterUserMutation, 
    useLoginUserMutation, 
    useGetLoggedUserQuery, 
    useChangeUserPasswordMutation,
    useSendResetPasswordEmailMutation,
    useResetPasswordMutation } = userAuthApi
