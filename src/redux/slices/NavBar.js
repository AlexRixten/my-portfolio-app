import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	activeAboutMe: false,
	activeSideBar: false,
}

export const NavBarSlice = createSlice({
	name: 'navbar',
	initialState,
	reducers: {
		toggleAboutMe: state => {
			state.activeAboutMe = !state.activeAboutMe
		},
		toggleSideBar: state => {
			state.activeSideBar = !state.activeSideBar
		},
		reset: state => {
			// state.activeAboutMe = false
			state.activeSideBar = false
		},
	},
})

// Action creators are generated for each case reducer function
export const { toggleAboutMe, toggleSideBar, reset } = NavBarSlice.actions

export default NavBarSlice.reducer
