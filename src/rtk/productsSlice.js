import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    loading: false,
    error: null,
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await fetch("http://localhost:3001/products");
    const data = await response.json();
    return data;
});


export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default productSlice.reducer;