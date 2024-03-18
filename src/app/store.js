import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userAuthApi } from '../services/userAuthApi'
import { publicBusinessApi } from '../services/BusinessApi'
import authSlice from '../features/authSlice'
import userSlice from '../features/userSlice'
import itemsReducer from '../features/itemSlice'


export const store = configureStore({
  reducer: {
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    auth: authSlice,
    user: userSlice,
    items: itemsReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userAuthApi.middleware, publicBusinessApi.middleware]),
})

setupListeners(store.dispatch)

export default store