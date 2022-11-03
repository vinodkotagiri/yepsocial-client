import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	user: null,
	token: null,
}
export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action) => {
			const { user, token } = action.payload
			state.user = user
			state.token = token
		},
		logout: (state) => {
			state.user = null
			state.token = null
		},
	},
})

export const { login } = authSlice.actions
export default authSlice.reducer
