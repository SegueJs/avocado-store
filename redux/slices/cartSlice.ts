import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "app/store";
import cartHandler from "utils/cartHandler";

interface CartState {
    cart: TCartItem[]
}

const initialState: CartState = {
    cart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addToCart: (state, action: PayloadAction<TCartItem>) => {
            state.cart = cartHandler(state.cart, action.payload)
        }

    }
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer