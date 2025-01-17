import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/products/ProductSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})