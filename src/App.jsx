/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/page.home'
import Login from './pages/page.login'
import Profile from './pages/page.profile'
import Activate from './pages/page.activate'
import Topbar from './components/component.topbar'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { login } from './features/auth/authSlice'
const App = () => {
	const dispatch = useDispatch()
	const auth = useSelector((state) => state.auth.isLoggedIn)

	useEffect(() => {
		if (localStorage.getItem('auth')) {
			const auth = JSON.parse(localStorage.getItem('auth'))
			dispatch(login(auth))
		}
	}, [])
	return (
		<Fragment>
			{!auth ? (
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/activate/:token' element={<Activate />} />
				</Routes>
			) : (
				<Routes>
					<Route path='/' element={<Topbar />}>
						<Route path='*' element={<Navigate to='/' />} />
						<Route index element={<Home />} />
						<Route path='/profile' element={<Profile />} />
					</Route>
				</Routes>
			)}
			<Toaster position='top-right' reverseOrder={false} />
		</Fragment>
	)
}

export default App
