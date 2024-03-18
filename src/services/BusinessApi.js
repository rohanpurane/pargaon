import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const publicBusinessApi = createApi({
  reducerPath: 'publicBusinessApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/' }),
  endpoints: (builder) => ({
    businessMenu: builder.query({
        query: ()=>{
            return{
              url: 'menu/',
              method: 'GET',
            }
        }
    }),
    fetchItems: builder.query({
      query: (id)=>{
        return{
          url: `menu/${id}`,
          method: 'GET',
        }
      }
    }),

  }),
})

export const { 
  useBusinessMenuQuery,
  useFetchItemsQuery } = publicBusinessApi