import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await fetch("http://localhost:3001/posts");
    const data = await response.json();
    return data;
});

export const productSlice = createSlice({
    name: "products",
    initialState: [],

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                return action.payload;
            })
    }
});

export const { } = productSlice.actions;
export default productSlice.reducer;