import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
};

const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
};


export const cartSlice = createSlice({
    name: "cart",
    initialState: loadCartFromLocalStorage(),

    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
            saveCartToLocalStorage(state)
        },
        removeFromCart: (state, action) => {
            const newState = state.filter(product => product.id !== action.payload.id);
            saveCartToLocalStorage(newState);
            return newState;
        },
        incrementQuantity: (state, action) => {
            const item = state.find(product => product.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            }
            saveCartToLocalStorage(state)
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
            saveCartToLocalStorage(state)
        },
        clearCart: () => {
            saveCartToLocalStorage([]);
            return [];
        },
    }
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;