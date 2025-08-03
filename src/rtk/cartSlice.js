import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: [],

    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            return state.filter(product => product.id !== action.payload.id);
        },
        incrementQuantity: (state, action) => {
            const item = state.find(product => product.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.find(product => product.id === action.payload.id);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    return state.filter(product => product.id !== action.payload.id);
                }
            }
        },
        clearCart: () => {
            return [];
        },
    }
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;