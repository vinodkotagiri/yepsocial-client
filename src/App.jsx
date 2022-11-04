/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/page.home'
import Login from './pages/page.login'
import Profile from './pages/page.profile'
import Activate from './pages/page.activate'
import { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { login } from './features/auth/authSlice'
const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		if (localStorage.getItem('auth')) {
			const auth = JSON.parse(localStorage.getItem('auth'))
			dispatch(login(auth))
		}
	}, [])
	return (
		<Fragment>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/activate/:token' element={<Activate />} />
				<Route path='/profile' element={<Profile />} />
			</Routes>
			<Toaster position='top-right' reverseOrder={false} />
		</Fragment>
	)
}

export default App
