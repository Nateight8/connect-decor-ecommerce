import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"


export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
export const useAppDispatch:()=>typeof store.dispatch = useDispatch;