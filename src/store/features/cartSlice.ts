import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  image: string;
  title: string;
  price: number;
  id: number;
}

interface CartState {
  items: CartItem[];
  // amount: number;
  total: number;
  totalCost: number;
  coupon: string;
  deliveryCharge: number;
}

const initialState: CartState = {
  items: [],
  // amount: 0,
  total: 0,
  totalCost: 0,
  coupon: "",
  deliveryCharge: 5,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemId = action.payload.id;
      const itemExist = state.items.findIndex((itemEx) => itemEx.id === itemId);

      if (itemExist === -1) {
        state.items.push(action.payload);
      }
    },

    removeFromCart: (state, action: PayloadAction<CartItem | number>) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
      // state.total -= action.payload.price
      console.log(action.payload);
    },

    // increase: (state) => {
    //   state.amount = state.amount + 1;
    // },
    // decrease: (state) => {
    //   state.amount = state.amount === 0 ? 0 : state.amount - 1;
    // },
    sumTotal: (state) => {
      let total = 0;

      state.items.forEach((item) => {
        total += item.price;
      });
      state.total = total;
      // state.total = state.items.reduce((acc, item) => acc + item.price, 0)
    },

    couponCode: (state, action) => {
      state.coupon = action.payload;
    },

    applyCoupon: (state) => {
      if (state.coupon === "COUPON50") {
        state.totalCost = state.total - state.total * 0.5;
      } else if (state.coupon === "COUPON25") {
        state.totalCost = state.total - state.total * 0.25;
      } else if (state.coupon === "COUPON10") {
        state.totalCost = state.total - state.total * 0.1;
      } else {
        state.totalCost;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  sumTotal,
  applyCoupon,
  couponCode,
  // increase,
  // decrease,
} = cartSlice.actions;
export default cartSlice.reducer;

// console.log(cartSlice);
