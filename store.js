import { configureStore } from '@reduxjs/toolkit';
import colorsReducer from './screens/colorsSlice'

export default configureStore({
    reducer: {
        colors: colorsReducer
    }
})