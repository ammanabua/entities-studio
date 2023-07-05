import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        art: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addArt: (state, action) => {
            state.art.push(action.payload);
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity;
        },
        reset: (state) => {
            state.art = [];
            state.quantity = 0;
            state.total = 0;
        },
    },
});

export const { addArt, reset } = cartSlice.actions;

export default cartSlice.reducer;