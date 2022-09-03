import {configureStore} from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice"
import imageReducer from "./slices/imageSlice"

const store = configureStore({
    reducer: {
        categoryReducer,
        imageReducer,
    }
})

export default store