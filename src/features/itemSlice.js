import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMenus = createAsyncThunk('items/fetchItems', async () => {
    const response = await axios.get('http://localhost:8000/menu/');
    return response.data;
});

export const fetchItems = createAsyncThunk('items/fetchItems', async (id) => {
    const response = await axios.get(`http://localhost:8000/item/${id}`);
    return console.log(response.data);
});

const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMenus.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMenus.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchMenus.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // .addCase(fetchItems.fulfilled, (state, action) => {
            //     state.status = 'succeeded';
            //     state.items = action.payload;
            // })
            // .addCase(fetchItems.rejected, (state, action) => {
            //     state.status = 'failed';
            //     state.error = action.error.message;
            // });
    },
});

export default itemsSlice.reducer;
