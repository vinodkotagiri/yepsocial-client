import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	user: null,
	token: null,
	isLoggedIn: false,
}
export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action) => {
			const { user, token } = action.payload
			state.user = user
			state.token = token
			state.isLoggedIn = true
			if (!localStorage.getItem('auth'))
				localStorage.setItem(
					'auth',
					JSON.stringify({ user: state.user, token: state.token, isLoggedIn: state.isLoggedIn })
				)
		},
		logout: (state) => {
			state.user = null
			state.token = null
			state.isLoggedIn = false
			localStorage.removeItem('auth')
		},
	},
})

export const { login } = authSlice.actions
export default authSlice.reducer
