import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const getImages = createAsyncThunk(
    'images/get',
    async ({category, page}, thunkAPI) => {
        try {
            const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${category}`)
            return response.data
        }catch (err){
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)

export const reset = createAction('reset')

const imageSlice = createSlice({
    name: 'images',
    initialState: {
        loading: false,
        error: '',
        images: []
    },
    extraReducers: {
        [getImages.pending.type]: (state) => {
            state.loading = true
        },
        [getImages.fulfilled.type]: (state, action) => {
            state.loading = false
            state.error = ''
            state.images = [...state.images, ...action.payload]
        },
        [getImages.rejected.type]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        [reset]: (state) => {
            state.images = []
        }
    }
})

export default imageSlice.reducer