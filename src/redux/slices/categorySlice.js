import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const getCategories = createAsyncThunk(
    'categories/get',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("https://api.thecatapi.com/v1/categories")
            return response.data
        }catch (err){
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)

const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        loading: false,
        error: '',
        categories: []
    },
    extraReducers: {
        [getCategories.pending.type]: (state) => {
            state.loading = true
        },
        [getCategories.fulfilled.type]: (state, action) => {
            state.loading = false
            state.error = ''
            state.categories = action.payload
        },
        [getCategories.rejected.type]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

export default categorySlice.reducer