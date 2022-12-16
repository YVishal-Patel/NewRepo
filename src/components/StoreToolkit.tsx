import appReducer from './Pages/Checkout'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer:appReducer
})

export type RootState = ReturnType<typeof store.getState>
export type appDispatch =  typeof store.dispatch
export default store;