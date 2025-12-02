import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = ReturnType<AppStore['dispatch']>
export type RootState = ReturnType<ReturnType<typeof makeStore>['getState']>

export default makeStore()
