import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface CartItem {
    image: string; name: string; price: number; id: number
}

interface CartState {
    items: CartItem[];
    amount: number
}

const initialState: CartState = {
    items: [],
    amount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.items.push(action.payload);
            console.log(action);

        },
        removeFromCart: (state, action: PayloadAction<CartItem>) => {
            const itemId = action.payload;
            state.items = state.items.filter((item) => item.id !== itemId)
            console.log(action);

        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer

// console.log(cartSlice);
