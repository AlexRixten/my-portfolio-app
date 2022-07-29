import { configureStore } from '@reduxjs/toolkit'
import NavBarSlice from './slices/NavBar'

export const store = configureStore({
  reducer: {
    navbar: NavBarSlice,
  },
})