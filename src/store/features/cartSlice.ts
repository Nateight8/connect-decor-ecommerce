import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface CartItem {
    image: string; name: string; price: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: []
    // amount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.items.push(action.payload);
        }
    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer

// console.log(cartSlice);
