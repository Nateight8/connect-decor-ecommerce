import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface CartItem {
    image: string; name: string; price: number; id: number
}

interface CartState {
    items: CartItem[];
    amount: number;
    total: number;
}

const initialState: CartState = {
    items: [],
    amount: 0,
    total: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.items.push(action.payload);
            // state.total += action.payload.price
            console.log(action);

        },
        removeFromCart: (state, action: PayloadAction<CartItem>) => {
            const itemId = action.payload;
            state.items = state.items.filter((item) => item.id !== itemId)
            // state.total -= action.payload.price
            console.log(action);

        },
        sumTotal: (state, action: PayloadAction<CartItem>) => {

            state.total = state.items.reduce((acc, item) => acc + item.price, 0)



        }
    }
})

export const { addToCart, removeFromCart, sumTotal } = cartSlice.actions;
export default cartSlice.reducer

// console.log(cartSlice);
