import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CartItem = {
  id?: string
  title?: string
  price: number
  quantity: number
  [key: string]: any
}

export type CartState = {
  art: CartItem[]
  quantity: number
  total: number
}

const initialState: CartState = {
  art: [],
  quantity: 0,
  total: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addArt: (state, action: PayloadAction<CartItem>) => {
      state.art.push(action.payload)
      state.quantity += 1
      state.total += (action.payload.price || 0) * (action.payload.quantity || 0)
    },
    reset: (state) => {
      state.art = []
      state.quantity = 0
      state.total = 0
    }
  }
})

export const { addArt, reset } = cartSlice.actions

export default cartSlice.reducer
