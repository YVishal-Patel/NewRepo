import { configureStore } from "@reduxjs/toolkit";
import SliceUserData from '../SliceReducer';
import appReducer from '../../../components/Pages/Checkout'
export  const store = configureStore({
    reducer:{
    user:SliceUserData,
    getApiData:appReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch =  typeof store.dispatch
export default store;