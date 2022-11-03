import React, { Fragment, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Profile from './pages/profile'
import { Toaster } from 'react-hot-toast'
import Activate from './pages/activate'
import { useDispatch } from 'react-redux'
import { login } from './features/auth'
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
